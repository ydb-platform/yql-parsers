import unittest
from antlr4 import InputStream, CommonTokenStream
from antlr4.error.DiagnosticErrorListener import DiagnosticErrorListener
from antlr4.tree.Tree import ParseTreeWalker

from python import YQLLexer
from python import YQLParser
from python import YQLListener


class TreeShapeListener(YQLListener):
    def __init__(self):
        self.data = []

    def enterEveryRule(self, ctx):
        self.data.append(ctx.getText())


class TestParserYQL(unittest.TestCase):
    def test_parser_yql(self):
        input_stream = InputStream("SELECT 1")
        lexer = YQLLexer(input_stream)
        token_stream = CommonTokenStream(lexer)
        parser = YQLParser(token_stream)

        parser.addErrorListener(DiagnosticErrorListener())

        stmt = parser.select_stmt()
        listener = TreeShapeListener()

        walker = ParseTreeWalker()
        walker.walk(listener, stmt)
        expected_data = [
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
            "",
        ]

        self.assertEqual(listener.data, expected_data)


if __name__ == "__main__":
    unittest.main()
