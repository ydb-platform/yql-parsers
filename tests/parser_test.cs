using System.Collections.Generic;
using System.IO;
using Antlr4.Runtime;
using NUnit.Framework;
using YQLAntlr4Parser;

namespace Parser.Tests;

public sealed class ParserYqlTests
{
    [TestCase("SELECT 1;")]
    [TestCase("$q = (SELECT 1 AS id); SELECT * FROM $q;")]
    public void ParsesCompleteValidYql(string input)
    {
        Assert.That(Parse(input), Is.Empty);
    }

    [TestCase("SELECT")]
    [TestCase("SELECT FROM;")]
    [TestCase("SELECT 1 \0")]
    public void ReportsSyntaxErrors(string input)
    {
        Assert.That(Parse(input), Is.Not.Empty);
    }

    [Test]
    public void RejectsTrailingInputAfterACompleteStatement()
    {
        Assert.That(Parse("SELECT 1; garbage"), Is.Not.Empty);
    }

    private static List<string> Parse(string input)
    {
        var errors = new List<string>();
        var lexerListener = new CollectingLexerErrorListener(errors);
        var lexer = new YQLLexer(new AntlrInputStream(input));
        lexer.RemoveErrorListeners();
        lexer.AddErrorListener(lexerListener);
        var tokens = new CommonTokenStream(lexer);
        var parser = new YQLParser(tokens);
        parser.RemoveErrorListeners();
        parser.AddErrorListener(new CollectingParserErrorListener(errors));
        parser.sql_query();
        if (tokens.LA(1) != TokenConstants.EOF)
        {
            errors.Add("parser did not consume the complete input");
        }
        return errors;
    }

    private sealed class CollectingLexerErrorListener : IAntlrErrorListener<int>
    {
        private readonly List<string> errors;

        public CollectingLexerErrorListener(List<string> errors)
        {
            this.errors = errors;
        }

        public void SyntaxError(
            TextWriter output,
            IRecognizer recognizer,
            int offendingSymbol,
            int line,
            int charPositionInLine,
            string message,
            RecognitionException exception)
        {
            errors.Add($"{line}:{charPositionInLine}: {message}");
        }
    }

    private sealed class CollectingParserErrorListener : BaseErrorListener
    {
        private readonly List<string> errors;

        public CollectingParserErrorListener(List<string> errors)
        {
            this.errors = errors;
        }

        public override void SyntaxError(
            TextWriter output,
            IRecognizer recognizer,
            IToken offendingSymbol,
            int line,
            int charPositionInLine,
            string message,
            RecognitionException exception)
        {
            errors.Add($"{line}:{charPositionInLine}: {message}");
        }
    }
}
