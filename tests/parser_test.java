package yql.antlr4.parser;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import yql.antlr4.parser.YQLLexer;
import yql.antlr4.parser.YQLParser;
import yql.antlr4.parser.YQLListener;

import java.util.ArrayList;
import java.util.List;

class TreeShapeListener extends YQLListener {
    private List<String> data = new ArrayList<>();

    public List<String> getData() {
        return data;
    }

    @Override
    public void enterEveryRule(ParserRuleContext ctx) {
        data.add(ctx.getText());
    }
}

public class TestParserYQL {

    @Test
    public void testParserYQL() throws Exception {
        String input = "SELECT 1";
        CharStream inputStream = CharStreams.fromString(input);
        YQLLexer lexer = new YQLLexer(inputStream);
        CommonTokenStream tokenStream = new CommonTokenStream(lexer);
        YQLParser parser = new YQLParser(tokenStream);

        parser.removeErrorListeners();
        parser.addErrorListener(new DiagnosticErrorListener());

        YQLParser.Select_stmtContext stmt = parser.select_stmt();
        TreeShapeListener listener = new TreeShapeListener();

        ParseTreeWalker walker = new ParseTreeWalker();
        walker.walk(listener, stmt);

        List<String> expectedData = List.of(
            "SELECT1",
            "SELECT1",
            "SELECT1",
            "SELECT1",
            "SELECT1",
            "",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            ""
        );

        assertEquals(expectedData, listener.getData());
    }
}
