package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"regexp"
)

var (
	ruleRe = regexp.MustCompile(`Visit([A-Za-z0-9_]+)\(ctx \*([A-Za-z0-9_]+Context)\)`)
	marker = "// ---- generated interface checks ----"
)

func main() {
	args := os.Args[1:]

	for i, a := range args {
		if a == "--" {
			args = args[i+1:]
			break
		}
	}

	if len(args) < 2 {
		log.Fatalf("usage: gen_checks <visitor.go> <testfile.go>\n")
	}
	visitorPath := args[0]
	testPath := args[1]

	f, err := os.Open(visitorPath)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	var ctxs []string
	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		line := scanner.Text()
		m := ruleRe.FindStringSubmatch(line)
		if len(m) == 3 {
			ctxs = append(ctxs, m[2])
		}
	}

	content, err := os.ReadFile(testPath)
	if err != nil {
		panic(err)
	}
	if regexp.MustCompile(regexp.QuoteMeta(marker)).Match(content) {
		log.Fatalf("marker already exists in %s, skipping\n", testPath)
	}

	tf, err := os.OpenFile(testPath, os.O_APPEND|os.O_WRONLY, 0644)
	if err != nil {
		panic(err)
	}
	defer tf.Close()

	fmt.Fprintln(tf, "\n"+marker)
	for _, ctx := range ctxs {
		fmt.Fprintf(tf, "var _ antlr.RuleNode = (*parser.%s)(nil)\n", ctx)
	}
}
