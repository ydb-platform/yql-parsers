using System.Collections.Generic;
using Antlr4.Runtime;
using Antlr4.Runtime.Tree;
using NUnit.Framework;
using NUnit.Framework.Legacy;
using YQLAntlr4Parser;

namespace Parser.Tests
{
    public class TreeShapeListener : YQLBaseListener
    {
        public List<string> Data { get; } = new List<string>();

        public override void EnterEveryRule(ParserRuleContext context)
        {
            Data.Add(context.GetText());
        }
    }

    public class ParserYQLTests
    {
        [Test]
        public void TestParserYQL()
        {
            var input = "SELECT 1";
            var inputStream = new AntlrInputStream(input);
            var lexer = new YQLLexer(inputStream);
            var tokenStream = new CommonTokenStream(lexer);
            var parser = new YQLParser(tokenStream);
            parser.AddErrorListener(new DiagnosticErrorListener());

            var stmt = parser.select_stmt();

            var listener = new TreeShapeListener();
            ParseTreeWalker.Default.Walk(listener, stmt);

            var expected = new List<string>
            {
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
                "1",
                "1",
                ""
            };

    
            ClassicAssert.AreEqual(expected, listener.Data);
        }
    }
}
