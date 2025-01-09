// Generated from YQL.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class YQLLexer extends Lexer {
	public static readonly EQUALS = 1;
	public static readonly EQUALS2 = 2;
	public static readonly NOT_EQUALS = 3;
	public static readonly NOT_EQUALS2 = 4;
	public static readonly LESS = 5;
	public static readonly LESS_OR_EQ = 6;
	public static readonly GREATER = 7;
	public static readonly GREATER_OR_EQ = 8;
	public static readonly SHIFT_LEFT = 9;
	public static readonly ROT_LEFT = 10;
	public static readonly AMPERSAND = 11;
	public static readonly PIPE = 12;
	public static readonly DOUBLE_PIPE = 13;
	public static readonly STRUCT_OPEN = 14;
	public static readonly STRUCT_CLOSE = 15;
	public static readonly PLUS = 16;
	public static readonly MINUS = 17;
	public static readonly TILDA = 18;
	public static readonly ASTERISK = 19;
	public static readonly SLASH = 20;
	public static readonly PERCENT = 21;
	public static readonly SEMICOLON = 22;
	public static readonly DOT = 23;
	public static readonly COMMA = 24;
	public static readonly LPAREN = 25;
	public static readonly RPAREN = 26;
	public static readonly QUESTION = 27;
	public static readonly COLON = 28;
	public static readonly COMMAT = 29;
	public static readonly DOLLAR = 30;
	public static readonly LBRACE_CURLY = 31;
	public static readonly RBRACE_CURLY = 32;
	public static readonly CARET = 33;
	public static readonly NAMESPACE = 34;
	public static readonly ARROW = 35;
	public static readonly RBRACE_SQUARE = 36;
	public static readonly LBRACE_SQUARE = 37;
	public static readonly ABORT = 38;
	public static readonly ACTION = 39;
	public static readonly ADD = 40;
	public static readonly AFTER = 41;
	public static readonly ALL = 42;
	public static readonly ALTER = 43;
	public static readonly ANALYZE = 44;
	public static readonly AND = 45;
	public static readonly ANSI = 46;
	public static readonly ANY = 47;
	public static readonly ARRAY = 48;
	public static readonly AS = 49;
	public static readonly ASC = 50;
	public static readonly ASSUME = 51;
	public static readonly ASYMMETRIC = 52;
	public static readonly ASYNC = 53;
	public static readonly AT = 54;
	public static readonly ATTACH = 55;
	public static readonly ATTRIBUTES = 56;
	public static readonly AUTOINCREMENT = 57;
	public static readonly AUTOMAP = 58;
	public static readonly BACKUP = 59;
	public static readonly BATCH = 60;
	public static readonly COLLECTION = 61;
	public static readonly BEFORE = 62;
	public static readonly BEGIN = 63;
	public static readonly BERNOULLI = 64;
	public static readonly BETWEEN = 65;
	public static readonly BITCAST = 66;
	public static readonly BY = 67;
	public static readonly CALLABLE = 68;
	public static readonly CASCADE = 69;
	public static readonly CASE = 70;
	public static readonly CAST = 71;
	public static readonly CHANGEFEED = 72;
	public static readonly CHECK = 73;
	public static readonly CLASSIFIER = 74;
	public static readonly COLLATE = 75;
	public static readonly COLUMN = 76;
	public static readonly COLUMNS = 77;
	public static readonly COMMIT = 78;
	public static readonly COMPACT = 79;
	public static readonly CONDITIONAL = 80;
	public static readonly CONFLICT = 81;
	public static readonly CONNECT = 82;
	public static readonly CONSTRAINT = 83;
	public static readonly CONSUMER = 84;
	public static readonly COVER = 85;
	public static readonly CREATE = 86;
	public static readonly CROSS = 87;
	public static readonly CUBE = 88;
	public static readonly CURRENT = 89;
	public static readonly CURRENT_DATE = 90;
	public static readonly CURRENT_TIME = 91;
	public static readonly CURRENT_TIMESTAMP = 92;
	public static readonly DATA = 93;
	public static readonly DATABASE = 94;
	public static readonly DECIMAL = 95;
	public static readonly DECLARE = 96;
	public static readonly DEFAULT = 97;
	public static readonly DEFERRABLE = 98;
	public static readonly DEFERRED = 99;
	public static readonly DEFINE = 100;
	public static readonly DELETE = 101;
	public static readonly DESC = 102;
	public static readonly DESCRIBE = 103;
	public static readonly DETACH = 104;
	public static readonly DICT = 105;
	public static readonly DIRECTORY = 106;
	public static readonly DISABLE = 107;
	public static readonly DISCARD = 108;
	public static readonly DISTINCT = 109;
	public static readonly DO = 110;
	public static readonly DROP = 111;
	public static readonly EACH = 112;
	public static readonly ELSE = 113;
	public static readonly EMPTY = 114;
	public static readonly EMPTY_ACTION = 115;
	public static readonly ENCRYPTED = 116;
	public static readonly END = 117;
	public static readonly ENUM = 118;
	public static readonly ERASE = 119;
	public static readonly ERROR = 120;
	public static readonly ESCAPE = 121;
	public static readonly EVALUATE = 122;
	public static readonly EXCEPT = 123;
	public static readonly EXCLUDE = 124;
	public static readonly EXCLUSION = 125;
	public static readonly EXCLUSIVE = 126;
	public static readonly EXISTS = 127;
	public static readonly EXPLAIN = 128;
	public static readonly EXPORT = 129;
	public static readonly EXTERNAL = 130;
	public static readonly FAIL = 131;
	public static readonly FALSE = 132;
	public static readonly FAMILY = 133;
	public static readonly FILTER = 134;
	public static readonly FIRST = 135;
	public static readonly FLATTEN = 136;
	public static readonly FLOW = 137;
	public static readonly FOLLOWING = 138;
	public static readonly FOR = 139;
	public static readonly FOREIGN = 140;
	public static readonly FROM = 141;
	public static readonly FULL = 142;
	public static readonly FUNCTION = 143;
	public static readonly GLOB = 144;
	public static readonly GLOBAL = 145;
	public static readonly GRANT = 146;
	public static readonly GROUP = 147;
	public static readonly GROUPING = 148;
	public static readonly GROUPS = 149;
	public static readonly HASH = 150;
	public static readonly HAVING = 151;
	public static readonly HOP = 152;
	public static readonly IF = 153;
	public static readonly IGNORE = 154;
	public static readonly ILIKE = 155;
	public static readonly IMMEDIATE = 156;
	public static readonly IMPORT = 157;
	public static readonly IN = 158;
	public static readonly INCREMENT = 159;
	public static readonly INCREMENTAL = 160;
	public static readonly INDEX = 161;
	public static readonly INDEXED = 162;
	public static readonly INHERITS = 163;
	public static readonly INITIAL = 164;
	public static readonly INITIALLY = 165;
	public static readonly INNER = 166;
	public static readonly INSERT = 167;
	public static readonly INSTEAD = 168;
	public static readonly INTERSECT = 169;
	public static readonly INTO = 170;
	public static readonly IS = 171;
	public static readonly ISNULL = 172;
	public static readonly JOIN = 173;
	public static readonly JSON_EXISTS = 174;
	public static readonly JSON_QUERY = 175;
	public static readonly JSON_VALUE = 176;
	public static readonly KEY = 177;
	public static readonly LAST = 178;
	public static readonly LEFT = 179;
	public static readonly LEGACY = 180;
	public static readonly LIKE = 181;
	public static readonly LIMIT = 182;
	public static readonly LIST = 183;
	public static readonly LOCAL = 184;
	public static readonly LOGIN = 185;
	public static readonly MANAGE = 186;
	public static readonly MATCH = 187;
	public static readonly MATCHES = 188;
	public static readonly MATCH_RECOGNIZE = 189;
	public static readonly MEASURES = 190;
	public static readonly MICROSECONDS = 191;
	public static readonly MILLISECONDS = 192;
	public static readonly MODIFY = 193;
	public static readonly NANOSECONDS = 194;
	public static readonly NATURAL = 195;
	public static readonly NEXT = 196;
	public static readonly NO = 197;
	public static readonly NOLOGIN = 198;
	public static readonly NOT = 199;
	public static readonly NOTNULL = 200;
	public static readonly NULL = 201;
	public static readonly NULLS = 202;
	public static readonly OBJECT = 203;
	public static readonly OF = 204;
	public static readonly OFFSET = 205;
	public static readonly OMIT = 206;
	public static readonly ON = 207;
	public static readonly ONE = 208;
	public static readonly ONLY = 209;
	public static readonly OPTION = 210;
	public static readonly OPTIONAL = 211;
	public static readonly OR = 212;
	public static readonly ORDER = 213;
	public static readonly OTHERS = 214;
	public static readonly OUTER = 215;
	public static readonly OVER = 216;
	public static readonly PARALLEL = 217;
	public static readonly PARTITION = 218;
	public static readonly PASSING = 219;
	public static readonly PASSWORD = 220;
	public static readonly PAST = 221;
	public static readonly PATTERN = 222;
	public static readonly PER = 223;
	public static readonly PERMUTE = 224;
	public static readonly PLAN = 225;
	public static readonly POOL = 226;
	public static readonly PRAGMA = 227;
	public static readonly PRECEDING = 228;
	public static readonly PRESORT = 229;
	public static readonly PRIMARY = 230;
	public static readonly PRIVILEGES = 231;
	public static readonly PROCESS = 232;
	public static readonly QUERY = 233;
	public static readonly QUEUE = 234;
	public static readonly RAISE = 235;
	public static readonly RANGE = 236;
	public static readonly REDUCE = 237;
	public static readonly REFERENCES = 238;
	public static readonly REGEXP = 239;
	public static readonly REINDEX = 240;
	public static readonly RELEASE = 241;
	public static readonly REMOVE = 242;
	public static readonly RENAME = 243;
	public static readonly REPEATABLE = 244;
	public static readonly REPLACE = 245;
	public static readonly REPLICATION = 246;
	public static readonly RESET = 247;
	public static readonly RESOURCE = 248;
	public static readonly RESPECT = 249;
	public static readonly RESTART = 250;
	public static readonly RESTORE = 251;
	public static readonly RESTRICT = 252;
	public static readonly RESULT = 253;
	public static readonly RETURN = 254;
	public static readonly RETURNING = 255;
	public static readonly REVERT = 256;
	public static readonly REVOKE = 257;
	public static readonly RIGHT = 258;
	public static readonly RLIKE = 259;
	public static readonly ROLLBACK = 260;
	public static readonly ROLLUP = 261;
	public static readonly ROW = 262;
	public static readonly ROWS = 263;
	public static readonly SAMPLE = 264;
	public static readonly SAVEPOINT = 265;
	public static readonly SCHEMA = 266;
	public static readonly SECONDS = 267;
	public static readonly SEEK = 268;
	public static readonly SELECT = 269;
	public static readonly SEMI = 270;
	public static readonly SET = 271;
	public static readonly SETS = 272;
	public static readonly SHOW = 273;
	public static readonly TSKIP = 274;
	public static readonly SEQUENCE = 275;
	public static readonly SOURCE = 276;
	public static readonly START = 277;
	public static readonly STREAM = 278;
	public static readonly STRUCT = 279;
	public static readonly SUBQUERY = 280;
	public static readonly SUBSET = 281;
	public static readonly SYMBOLS = 282;
	public static readonly SYMMETRIC = 283;
	public static readonly SYNC = 284;
	public static readonly SYSTEM = 285;
	public static readonly TABLE = 286;
	public static readonly TABLES = 287;
	public static readonly TABLESAMPLE = 288;
	public static readonly TABLESTORE = 289;
	public static readonly TAGGED = 290;
	public static readonly TEMP = 291;
	public static readonly TEMPORARY = 292;
	public static readonly THEN = 293;
	public static readonly TIES = 294;
	public static readonly TO = 295;
	public static readonly TOPIC = 296;
	public static readonly TRANSACTION = 297;
	public static readonly TRIGGER = 298;
	public static readonly TRUE = 299;
	public static readonly TUPLE = 300;
	public static readonly TYPE = 301;
	public static readonly UNBOUNDED = 302;
	public static readonly UNCONDITIONAL = 303;
	public static readonly UNION = 304;
	public static readonly UNIQUE = 305;
	public static readonly UNKNOWN = 306;
	public static readonly UNMATCHED = 307;
	public static readonly UPDATE = 308;
	public static readonly UPSERT = 309;
	public static readonly USE = 310;
	public static readonly USER = 311;
	public static readonly USING = 312;
	public static readonly VACUUM = 313;
	public static readonly VALUES = 314;
	public static readonly VARIANT = 315;
	public static readonly VIEW = 316;
	public static readonly VIRTUAL = 317;
	public static readonly WHEN = 318;
	public static readonly WHERE = 319;
	public static readonly WINDOW = 320;
	public static readonly WITH = 321;
	public static readonly WITHOUT = 322;
	public static readonly WRAPPER = 323;
	public static readonly XOR = 324;
	public static readonly STRING_VALUE = 325;
	public static readonly ID_PLAIN = 326;
	public static readonly ID_QUOTED = 327;
	public static readonly DIGITS = 328;
	public static readonly INTEGER_VALUE = 329;
	public static readonly REAL = 330;
	public static readonly BLOB = 331;
	public static readonly WS = 332;
	public static readonly COMMENT = 333;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'='", 
                                                            "'=='", "'!='", 
                                                            "'<>'", "'<'", 
                                                            "'<='", "'>'", 
                                                            "'>='", "'<<'", 
                                                            "'|<<'", "'&'", 
                                                            "'|'", "'||'", 
                                                            "'<|'", "'|>'", 
                                                            "'+'", "'-'", 
                                                            "'~'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "';'", "'.'", 
                                                            "','", "'('", 
                                                            "')'", "'?'", 
                                                            "':'", "'@'", 
                                                            "'$'", "'{'", 
                                                            "'}'", "'^'", 
                                                            "'::'", "'->'", 
                                                            "']'", "'['" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "EQUALS", 
                                                             "EQUALS2", 
                                                             "NOT_EQUALS", 
                                                             "NOT_EQUALS2", 
                                                             "LESS", "LESS_OR_EQ", 
                                                             "GREATER", 
                                                             "GREATER_OR_EQ", 
                                                             "SHIFT_LEFT", 
                                                             "ROT_LEFT", 
                                                             "AMPERSAND", 
                                                             "PIPE", "DOUBLE_PIPE", 
                                                             "STRUCT_OPEN", 
                                                             "STRUCT_CLOSE", 
                                                             "PLUS", "MINUS", 
                                                             "TILDA", "ASTERISK", 
                                                             "SLASH", "PERCENT", 
                                                             "SEMICOLON", 
                                                             "DOT", "COMMA", 
                                                             "LPAREN", "RPAREN", 
                                                             "QUESTION", 
                                                             "COLON", "COMMAT", 
                                                             "DOLLAR", "LBRACE_CURLY", 
                                                             "RBRACE_CURLY", 
                                                             "CARET", "NAMESPACE", 
                                                             "ARROW", "RBRACE_SQUARE", 
                                                             "LBRACE_SQUARE", 
                                                             "ABORT", "ACTION", 
                                                             "ADD", "AFTER", 
                                                             "ALL", "ALTER", 
                                                             "ANALYZE", 
                                                             "AND", "ANSI", 
                                                             "ANY", "ARRAY", 
                                                             "AS", "ASC", 
                                                             "ASSUME", "ASYMMETRIC", 
                                                             "ASYNC", "AT", 
                                                             "ATTACH", "ATTRIBUTES", 
                                                             "AUTOINCREMENT", 
                                                             "AUTOMAP", 
                                                             "BACKUP", "BATCH", 
                                                             "COLLECTION", 
                                                             "BEFORE", "BEGIN", 
                                                             "BERNOULLI", 
                                                             "BETWEEN", 
                                                             "BITCAST", 
                                                             "BY", "CALLABLE", 
                                                             "CASCADE", 
                                                             "CASE", "CAST", 
                                                             "CHANGEFEED", 
                                                             "CHECK", "CLASSIFIER", 
                                                             "COLLATE", 
                                                             "COLUMN", "COLUMNS", 
                                                             "COMMIT", "COMPACT", 
                                                             "CONDITIONAL", 
                                                             "CONFLICT", 
                                                             "CONNECT", 
                                                             "CONSTRAINT", 
                                                             "CONSUMER", 
                                                             "COVER", "CREATE", 
                                                             "CROSS", "CUBE", 
                                                             "CURRENT", 
                                                             "CURRENT_DATE", 
                                                             "CURRENT_TIME", 
                                                             "CURRENT_TIMESTAMP", 
                                                             "DATA", "DATABASE", 
                                                             "DECIMAL", 
                                                             "DECLARE", 
                                                             "DEFAULT", 
                                                             "DEFERRABLE", 
                                                             "DEFERRED", 
                                                             "DEFINE", "DELETE", 
                                                             "DESC", "DESCRIBE", 
                                                             "DETACH", "DICT", 
                                                             "DIRECTORY", 
                                                             "DISABLE", 
                                                             "DISCARD", 
                                                             "DISTINCT", 
                                                             "DO", "DROP", 
                                                             "EACH", "ELSE", 
                                                             "EMPTY", "EMPTY_ACTION", 
                                                             "ENCRYPTED", 
                                                             "END", "ENUM", 
                                                             "ERASE", "ERROR", 
                                                             "ESCAPE", "EVALUATE", 
                                                             "EXCEPT", "EXCLUDE", 
                                                             "EXCLUSION", 
                                                             "EXCLUSIVE", 
                                                             "EXISTS", "EXPLAIN", 
                                                             "EXPORT", "EXTERNAL", 
                                                             "FAIL", "FALSE", 
                                                             "FAMILY", "FILTER", 
                                                             "FIRST", "FLATTEN", 
                                                             "FLOW", "FOLLOWING", 
                                                             "FOR", "FOREIGN", 
                                                             "FROM", "FULL", 
                                                             "FUNCTION", 
                                                             "GLOB", "GLOBAL", 
                                                             "GRANT", "GROUP", 
                                                             "GROUPING", 
                                                             "GROUPS", "HASH", 
                                                             "HAVING", "HOP", 
                                                             "IF", "IGNORE", 
                                                             "ILIKE", "IMMEDIATE", 
                                                             "IMPORT", "IN", 
                                                             "INCREMENT", 
                                                             "INCREMENTAL", 
                                                             "INDEX", "INDEXED", 
                                                             "INHERITS", 
                                                             "INITIAL", 
                                                             "INITIALLY", 
                                                             "INNER", "INSERT", 
                                                             "INSTEAD", 
                                                             "INTERSECT", 
                                                             "INTO", "IS", 
                                                             "ISNULL", "JOIN", 
                                                             "JSON_EXISTS", 
                                                             "JSON_QUERY", 
                                                             "JSON_VALUE", 
                                                             "KEY", "LAST", 
                                                             "LEFT", "LEGACY", 
                                                             "LIKE", "LIMIT", 
                                                             "LIST", "LOCAL", 
                                                             "LOGIN", "MANAGE", 
                                                             "MATCH", "MATCHES", 
                                                             "MATCH_RECOGNIZE", 
                                                             "MEASURES", 
                                                             "MICROSECONDS", 
                                                             "MILLISECONDS", 
                                                             "MODIFY", "NANOSECONDS", 
                                                             "NATURAL", 
                                                             "NEXT", "NO", 
                                                             "NOLOGIN", 
                                                             "NOT", "NOTNULL", 
                                                             "NULL", "NULLS", 
                                                             "OBJECT", "OF", 
                                                             "OFFSET", "OMIT", 
                                                             "ON", "ONE", 
                                                             "ONLY", "OPTION", 
                                                             "OPTIONAL", 
                                                             "OR", "ORDER", 
                                                             "OTHERS", "OUTER", 
                                                             "OVER", "PARALLEL", 
                                                             "PARTITION", 
                                                             "PASSING", 
                                                             "PASSWORD", 
                                                             "PAST", "PATTERN", 
                                                             "PER", "PERMUTE", 
                                                             "PLAN", "POOL", 
                                                             "PRAGMA", "PRECEDING", 
                                                             "PRESORT", 
                                                             "PRIMARY", 
                                                             "PRIVILEGES", 
                                                             "PROCESS", 
                                                             "QUERY", "QUEUE", 
                                                             "RAISE", "RANGE", 
                                                             "REDUCE", "REFERENCES", 
                                                             "REGEXP", "REINDEX", 
                                                             "RELEASE", 
                                                             "REMOVE", "RENAME", 
                                                             "REPEATABLE", 
                                                             "REPLACE", 
                                                             "REPLICATION", 
                                                             "RESET", "RESOURCE", 
                                                             "RESPECT", 
                                                             "RESTART", 
                                                             "RESTORE", 
                                                             "RESTRICT", 
                                                             "RESULT", "RETURN", 
                                                             "RETURNING", 
                                                             "REVERT", "REVOKE", 
                                                             "RIGHT", "RLIKE", 
                                                             "ROLLBACK", 
                                                             "ROLLUP", "ROW", 
                                                             "ROWS", "SAMPLE", 
                                                             "SAVEPOINT", 
                                                             "SCHEMA", "SECONDS", 
                                                             "SEEK", "SELECT", 
                                                             "SEMI", "SET", 
                                                             "SETS", "SHOW", 
                                                             "TSKIP", "SEQUENCE", 
                                                             "SOURCE", "START", 
                                                             "STREAM", "STRUCT", 
                                                             "SUBQUERY", 
                                                             "SUBSET", "SYMBOLS", 
                                                             "SYMMETRIC", 
                                                             "SYNC", "SYSTEM", 
                                                             "TABLE", "TABLES", 
                                                             "TABLESAMPLE", 
                                                             "TABLESTORE", 
                                                             "TAGGED", "TEMP", 
                                                             "TEMPORARY", 
                                                             "THEN", "TIES", 
                                                             "TO", "TOPIC", 
                                                             "TRANSACTION", 
                                                             "TRIGGER", 
                                                             "TRUE", "TUPLE", 
                                                             "TYPE", "UNBOUNDED", 
                                                             "UNCONDITIONAL", 
                                                             "UNION", "UNIQUE", 
                                                             "UNKNOWN", 
                                                             "UNMATCHED", 
                                                             "UPDATE", "UPSERT", 
                                                             "USE", "USER", 
                                                             "USING", "VACUUM", 
                                                             "VALUES", "VARIANT", 
                                                             "VIEW", "VIRTUAL", 
                                                             "WHEN", "WHERE", 
                                                             "WINDOW", "WITH", 
                                                             "WITHOUT", 
                                                             "WRAPPER", 
                                                             "XOR", "STRING_VALUE", 
                                                             "ID_PLAIN", 
                                                             "ID_QUOTED", 
                                                             "DIGITS", "INTEGER_VALUE", 
                                                             "REAL", "BLOB", 
                                                             "WS", "COMMENT" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"EQUALS", "EQUALS2", "NOT_EQUALS", "NOT_EQUALS2", "LESS", "LESS_OR_EQ", 
		"GREATER", "GREATER_OR_EQ", "SHIFT_LEFT", "ROT_LEFT", "AMPERSAND", "PIPE", 
		"DOUBLE_PIPE", "STRUCT_OPEN", "STRUCT_CLOSE", "PLUS", "MINUS", "TILDA", 
		"ASTERISK", "SLASH", "PERCENT", "SEMICOLON", "DOT", "COMMA", "LPAREN", 
		"RPAREN", "QUESTION", "COLON", "COMMAT", "DOLLAR", "LBRACE_CURLY", "RBRACE_CURLY", 
		"CARET", "NAMESPACE", "ARROW", "RBRACE_SQUARE", "LBRACE_SQUARE", "BACKSLASH", 
		"QUOTE_DOUBLE", "QUOTE_SINGLE", "BACKTICK", "DOUBLE_COMMAT", "A", "B", 
		"C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
		"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "ABORT", "ACTION", "ADD", 
		"AFTER", "ALL", "ALTER", "ANALYZE", "AND", "ANSI", "ANY", "ARRAY", "AS", 
		"ASC", "ASSUME", "ASYMMETRIC", "ASYNC", "AT", "ATTACH", "ATTRIBUTES", 
		"AUTOINCREMENT", "AUTOMAP", "BACKUP", "BATCH", "COLLECTION", "BEFORE", 
		"BEGIN", "BERNOULLI", "BETWEEN", "BITCAST", "BY", "CALLABLE", "CASCADE", 
		"CASE", "CAST", "CHANGEFEED", "CHECK", "CLASSIFIER", "COLLATE", "COLUMN", 
		"COLUMNS", "COMMIT", "COMPACT", "CONDITIONAL", "CONFLICT", "CONNECT", 
		"CONSTRAINT", "CONSUMER", "COVER", "CREATE", "CROSS", "CUBE", "CURRENT", 
		"CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", "DATA", "DATABASE", 
		"DECIMAL", "DECLARE", "DEFAULT", "DEFERRABLE", "DEFERRED", "DEFINE", "DELETE", 
		"DESC", "DESCRIBE", "DETACH", "DICT", "DIRECTORY", "DISABLE", "DISCARD", 
		"DISTINCT", "DO", "DROP", "EACH", "ELSE", "EMPTY", "EMPTY_ACTION", "ENCRYPTED", 
		"END", "ENUM", "ERASE", "ERROR", "ESCAPE", "EVALUATE", "EXCEPT", "EXCLUDE", 
		"EXCLUSION", "EXCLUSIVE", "EXISTS", "EXPLAIN", "EXPORT", "EXTERNAL", "FAIL", 
		"FALSE", "FAMILY", "FILTER", "FIRST", "FLATTEN", "FLOW", "FOLLOWING", 
		"FOR", "FOREIGN", "FROM", "FULL", "FUNCTION", "GLOB", "GLOBAL", "GRANT", 
		"GROUP", "GROUPING", "GROUPS", "HASH", "HAVING", "HOP", "IF", "IGNORE", 
		"ILIKE", "IMMEDIATE", "IMPORT", "IN", "INCREMENT", "INCREMENTAL", "INDEX", 
		"INDEXED", "INHERITS", "INITIAL", "INITIALLY", "INNER", "INSERT", "INSTEAD", 
		"INTERSECT", "INTO", "IS", "ISNULL", "JOIN", "JSON_EXISTS", "JSON_QUERY", 
		"JSON_VALUE", "KEY", "LAST", "LEFT", "LEGACY", "LIKE", "LIMIT", "LIST", 
		"LOCAL", "LOGIN", "MANAGE", "MATCH", "MATCHES", "MATCH_RECOGNIZE", "MEASURES", 
		"MICROSECONDS", "MILLISECONDS", "MODIFY", "NANOSECONDS", "NATURAL", "NEXT", 
		"NO", "NOLOGIN", "NOT", "NOTNULL", "NULL", "NULLS", "OBJECT", "OF", "OFFSET", 
		"OMIT", "ON", "ONE", "ONLY", "OPTION", "OPTIONAL", "OR", "ORDER", "OTHERS", 
		"OUTER", "OVER", "PARALLEL", "PARTITION", "PASSING", "PASSWORD", "PAST", 
		"PATTERN", "PER", "PERMUTE", "PLAN", "POOL", "PRAGMA", "PRECEDING", "PRESORT", 
		"PRIMARY", "PRIVILEGES", "PROCESS", "QUERY", "QUEUE", "RAISE", "RANGE", 
		"REDUCE", "REFERENCES", "REGEXP", "REINDEX", "RELEASE", "REMOVE", "RENAME", 
		"REPEATABLE", "REPLACE", "REPLICATION", "RESET", "RESOURCE", "RESPECT", 
		"RESTART", "RESTORE", "RESTRICT", "RESULT", "RETURN", "RETURNING", "REVERT", 
		"REVOKE", "RIGHT", "RLIKE", "ROLLBACK", "ROLLUP", "ROW", "ROWS", "SAMPLE", 
		"SAVEPOINT", "SCHEMA", "SECONDS", "SEEK", "SELECT", "SEMI", "SET", "SETS", 
		"SHOW", "TSKIP", "SEQUENCE", "SOURCE", "START", "STREAM", "STRUCT", "SUBQUERY", 
		"SUBSET", "SYMBOLS", "SYMMETRIC", "SYNC", "SYSTEM", "TABLE", "TABLES", 
		"TABLESAMPLE", "TABLESTORE", "TAGGED", "TEMP", "TEMPORARY", "THEN", "TIES", 
		"TO", "TOPIC", "TRANSACTION", "TRIGGER", "TRUE", "TUPLE", "TYPE", "UNBOUNDED", 
		"UNCONDITIONAL", "UNION", "UNIQUE", "UNKNOWN", "UNMATCHED", "UPDATE", 
		"UPSERT", "USE", "USER", "USING", "VACUUM", "VALUES", "VARIANT", "VIEW", 
		"VIRTUAL", "WHEN", "WHERE", "WINDOW", "WITH", "WITHOUT", "WRAPPER", "XOR", 
		"STRING_CORE_SINGLE", "STRING_CORE_DOUBLE", "STRING_SINGLE", "STRING_DOUBLE", 
		"STRING_MULTILINE", "STRING_VALUE", "ID_PLAIN", "ID_QUOTED_CORE", "ID_QUOTED", 
		"DIGIT", "HEXDIGIT", "HEXDIGITS", "OCTDIGITS", "BINDIGITS", "DECDIGITS", 
		"DIGITS", "INTEGER_VALUE", "FLOAT_EXP", "REAL", "BLOB", "MULTILINE_COMMENT", 
		"LINE_COMMENT", "WS", "COMMENT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, YQLLexer._ATN, YQLLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "YQL.g4"; }

	public get literalNames(): (string | null)[] { return YQLLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return YQLLexer.symbolicNames; }
	public get ruleNames(): string[] { return YQLLexer.ruleNames; }

	public get serializedATN(): number[] { return YQLLexer._serializedATN; }

	public get channelNames(): string[] { return YQLLexer.channelNames; }

	public get modeNames(): string[] { return YQLLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,333,3194,6,-1,2,
	0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,
	9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,
	23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,
	2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
	38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
	7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
	52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,
	2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,
	67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,
	7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,
	81,2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,
	2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,
	96,7,96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,
	2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
	2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
	2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,
	2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,
	2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,
	2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,
	2,139,7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,
	2,145,7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,
	2,151,7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,
	2,157,7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,
	2,163,7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,
	2,169,7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
	2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
	2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,
	2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,
	2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,7,197,2,198,7,198,
	2,199,7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,203,7,203,2,204,7,204,
	2,205,7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,209,7,209,2,210,7,210,
	2,211,7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,215,7,215,2,216,7,216,
	2,217,7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,
	2,223,7,223,2,224,7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,
	2,229,7,229,2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,
	2,235,7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
	2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,7,246,
	2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,2,252,7,252,
	2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,7,257,2,258,7,258,
	2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,2,263,7,263,2,264,7,264,
	2,265,7,265,2,266,7,266,2,267,7,267,2,268,7,268,2,269,7,269,2,270,7,270,
	2,271,7,271,2,272,7,272,2,273,7,273,2,274,7,274,2,275,7,275,2,276,7,276,
	2,277,7,277,2,278,7,278,2,279,7,279,2,280,7,280,2,281,7,281,2,282,7,282,
	2,283,7,283,2,284,7,284,2,285,7,285,2,286,7,286,2,287,7,287,2,288,7,288,
	2,289,7,289,2,290,7,290,2,291,7,291,2,292,7,292,2,293,7,293,2,294,7,294,
	2,295,7,295,2,296,7,296,2,297,7,297,2,298,7,298,2,299,7,299,2,300,7,300,
	2,301,7,301,2,302,7,302,2,303,7,303,2,304,7,304,2,305,7,305,2,306,7,306,
	2,307,7,307,2,308,7,308,2,309,7,309,2,310,7,310,2,311,7,311,2,312,7,312,
	2,313,7,313,2,314,7,314,2,315,7,315,2,316,7,316,2,317,7,317,2,318,7,318,
	2,319,7,319,2,320,7,320,2,321,7,321,2,322,7,322,2,323,7,323,2,324,7,324,
	2,325,7,325,2,326,7,326,2,327,7,327,2,328,7,328,2,329,7,329,2,330,7,330,
	2,331,7,331,2,332,7,332,2,333,7,333,2,334,7,334,2,335,7,335,2,336,7,336,
	2,337,7,337,2,338,7,338,2,339,7,339,2,340,7,340,2,341,7,341,2,342,7,342,
	2,343,7,343,2,344,7,344,2,345,7,345,2,346,7,346,2,347,7,347,2,348,7,348,
	2,349,7,349,2,350,7,350,2,351,7,351,2,352,7,352,2,353,7,353,2,354,7,354,
	2,355,7,355,2,356,7,356,2,357,7,357,2,358,7,358,2,359,7,359,2,360,7,360,
	2,361,7,361,2,362,7,362,2,363,7,363,2,364,7,364,2,365,7,365,2,366,7,366,
	2,367,7,367,2,368,7,368,2,369,7,369,2,370,7,370,2,371,7,371,2,372,7,372,
	2,373,7,373,2,374,7,374,2,375,7,375,2,376,7,376,2,377,7,377,2,378,7,378,
	1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,6,1,6,
	1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,
	12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,
	1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,
	26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,33,
	1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,
	39,1,40,1,40,1,41,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,
	1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,
	53,1,54,1,54,1,55,1,55,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,60,1,60,
	1,61,1,61,1,62,1,62,1,63,1,63,1,64,1,64,1,65,1,65,1,66,1,66,1,67,1,67,1,
	68,1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,
	1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,73,1,73,1,
	73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,
	1,75,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,
	78,1,78,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,
	1,81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,
	83,1,83,1,83,1,83,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,86,
	1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,
	87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,
	1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,
	90,1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,
	1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,94,1,
	94,1,94,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,
	1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,98,1,98,1,98,1,
	98,1,98,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,100,
	1,100,1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,102,1,102,1,102,
	1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,103,1,103,1,103,1,103,
	1,103,1,103,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,
	1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,
	1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,
	1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,
	1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,
	1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,111,
	1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,
	1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,114,1,114,1,114,1,114,1,114,
	1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,115,1,116,1,116,
	1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,1,118,
	1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,
	1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,
	1,120,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,
	1,121,1,121,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
	1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,123,
	1,123,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,125,1,125,
	1,125,1,125,1,125,1,125,1,125,1,125,1,126,1,126,1,126,1,126,1,126,1,126,
	1,126,1,126,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,128,1,128,
	1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,
	1,129,1,129,1,129,1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,1,130,
	1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,132,1,132,1,132,1,132,
	1,132,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,134,1,134,
	1,134,1,134,1,134,1,134,1,134,1,135,1,135,1,135,1,135,1,135,1,136,1,136,
	1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,137,1,137,1,137,1,137,
	1,137,1,137,1,137,1,137,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,
	1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,140,1,140,1,140,
	1,141,1,141,1,141,1,141,1,141,1,142,1,142,1,142,1,142,1,142,1,143,1,143,
	1,143,1,143,1,143,1,144,1,144,1,144,1,144,1,144,1,144,1,145,1,145,1,145,
	1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,146,1,146,
	1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,147,
	1,148,1,148,1,148,1,148,1,148,1,149,1,149,1,149,1,149,1,149,1,149,1,150,
	1,150,1,150,1,150,1,150,1,150,1,151,1,151,1,151,1,151,1,151,1,151,1,151,
	1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,153,1,153,1,153,
	1,153,1,153,1,153,1,153,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,
	1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,156,1,156,
	1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,157,1,157,1,157,1,157,
	1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,159,
	1,159,1,159,1,159,1,159,1,159,1,159,1,160,1,160,1,160,1,160,1,160,1,160,
	1,160,1,160,1,160,1,161,1,161,1,161,1,161,1,161,1,162,1,162,1,162,1,162,
	1,162,1,162,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,164,1,164,1,164,
	1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,165,1,166,1,166,
	1,166,1,166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,168,
	1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,169,1,169,1,169,
	1,169,1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,171,1,171,1,171,
	1,171,1,171,1,172,1,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,1,173,
	1,173,1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,174,1,175,1,175,1,175,
	1,175,1,175,1,175,1,175,1,176,1,176,1,176,1,176,1,176,1,176,1,177,1,177,
	1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
	1,178,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,180,1,180,1,180,1,180,
	1,180,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,182,1,182,1,182,1,182,
	1,183,1,183,1,183,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,185,1,185,
	1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
	1,186,1,186,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,188,1,188,1,188,
	1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,190,1,190,
	1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,191,1,191,
	1,191,1,191,1,191,1,191,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,
	1,193,1,193,1,193,1,193,1,193,1,193,1,193,1,193,1,193,1,194,1,194,1,194,
	1,194,1,194,1,194,1,194,1,194,1,195,1,195,1,195,1,195,1,195,1,195,1,195,
	1,195,1,195,1,195,1,196,1,196,1,196,1,196,1,196,1,196,1,197,1,197,1,197,
	1,197,1,197,1,197,1,197,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,
	1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,200,1,200,
	1,200,1,200,1,200,1,201,1,201,1,201,1,202,1,202,1,202,1,202,1,202,1,202,
	1,202,1,203,1,203,1,203,1,203,1,203,1,204,1,204,1,204,1,204,1,204,1,204,
	1,204,1,204,1,204,1,204,1,204,1,204,1,205,1,205,1,205,1,205,1,205,1,205,
	1,205,1,205,1,205,1,205,1,205,1,206,1,206,1,206,1,206,1,206,1,206,1,206,
	1,206,1,206,1,206,1,206,1,207,1,207,1,207,1,207,1,208,1,208,1,208,1,208,
	1,208,1,209,1,209,1,209,1,209,1,209,1,210,1,210,1,210,1,210,1,210,1,210,
	1,210,1,211,1,211,1,211,1,211,1,211,1,212,1,212,1,212,1,212,1,212,1,212,
	1,213,1,213,1,213,1,213,1,213,1,214,1,214,1,214,1,214,1,214,1,214,1,215,
	1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,1,216,1,216,1,216,
	1,217,1,217,1,217,1,217,1,217,1,217,1,218,1,218,1,218,1,218,1,218,1,218,
	1,218,1,218,1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,219,
	1,219,1,219,1,219,1,219,1,219,1,219,1,220,1,220,1,220,1,220,1,220,1,220,
	1,220,1,220,1,220,1,221,1,221,1,221,1,221,1,221,1,221,1,221,1,221,1,221,
	1,221,1,221,1,221,1,221,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,222,
	1,222,1,222,1,222,1,222,1,222,1,223,1,223,1,223,1,223,1,223,1,223,1,223,
	1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,
	1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,226,1,226,1,226,1,226,
	1,226,1,227,1,227,1,227,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,228,
	1,229,1,229,1,229,1,229,1,230,1,230,1,230,1,230,1,230,1,230,1,230,1,230,
	1,231,1,231,1,231,1,231,1,231,1,232,1,232,1,232,1,232,1,232,1,232,1,233,
	1,233,1,233,1,233,1,233,1,233,1,233,1,234,1,234,1,234,1,235,1,235,1,235,
	1,235,1,235,1,235,1,235,1,236,1,236,1,236,1,236,1,236,1,237,1,237,1,237,
	1,238,1,238,1,238,1,238,1,239,1,239,1,239,1,239,1,239,1,240,1,240,1,240,
	1,240,1,240,1,240,1,240,1,241,1,241,1,241,1,241,1,241,1,241,1,241,1,241,
	1,241,1,242,1,242,1,242,1,243,1,243,1,243,1,243,1,243,1,243,1,244,1,244,
	1,244,1,244,1,244,1,244,1,244,1,245,1,245,1,245,1,245,1,245,1,245,1,246,
	1,246,1,246,1,246,1,246,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,247,
	1,247,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,249,
	1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,250,1,250,1,250,1,250,1,250,
	1,250,1,250,1,250,1,250,1,251,1,251,1,251,1,251,1,251,1,252,1,252,1,252,
	1,252,1,252,1,252,1,252,1,252,1,253,1,253,1,253,1,253,1,254,1,254,1,254,
	1,254,1,254,1,254,1,254,1,254,1,255,1,255,1,255,1,255,1,255,1,256,1,256,
	1,256,1,256,1,256,1,257,1,257,1,257,1,257,1,257,1,257,1,257,1,258,1,258,
	1,258,1,258,1,258,1,258,1,258,1,258,1,258,1,258,1,259,1,259,1,259,1,259,
	1,259,1,259,1,259,1,259,1,260,1,260,1,260,1,260,1,260,1,260,1,260,1,260,
	1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,262,
	1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,263,1,263,1,263,1,263,1,263,
	1,263,1,264,1,264,1,264,1,264,1,264,1,264,1,265,1,265,1,265,1,265,1,265,
	1,265,1,266,1,266,1,266,1,266,1,266,1,266,1,267,1,267,1,267,1,267,1,267,
	1,267,1,267,1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,
	1,268,1,269,1,269,1,269,1,269,1,269,1,269,1,269,1,270,1,270,1,270,1,270,
	1,270,1,270,1,270,1,270,1,271,1,271,1,271,1,271,1,271,1,271,1,271,1,271,
	1,272,1,272,1,272,1,272,1,272,1,272,1,272,1,273,1,273,1,273,1,273,1,273,
	1,273,1,273,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,
	1,274,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,276,1,276,1,276,
	1,276,1,276,1,276,1,276,1,276,1,276,1,276,1,276,1,276,1,277,1,277,1,277,
	1,277,1,277,1,277,1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,
	1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,280,1,280,1,280,1,280,
	1,280,1,280,1,280,1,280,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,
	1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,283,1,283,1,283,
	1,283,1,283,1,283,1,283,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,285,
	1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,286,1,286,1,286,
	1,286,1,286,1,286,1,286,1,287,1,287,1,287,1,287,1,287,1,287,1,287,1,288,
	1,288,1,288,1,288,1,288,1,288,1,289,1,289,1,289,1,289,1,289,1,289,1,290,
	1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,291,1,291,1,291,1,291,
	1,291,1,291,1,291,1,292,1,292,1,292,1,292,1,293,1,293,1,293,1,293,1,293,
	1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,295,1,295,1,295,1,295,1,295,
	1,295,1,295,1,295,1,295,1,295,1,296,1,296,1,296,1,296,1,296,1,296,1,296,
	1,297,1,297,1,297,1,297,1,297,1,297,1,297,1,297,1,298,1,298,1,298,1,298,
	1,298,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,300,1,300,1,300,1,300,
	1,300,1,301,1,301,1,301,1,301,1,302,1,302,1,302,1,302,1,302,1,303,1,303,
	1,303,1,303,1,303,1,304,1,304,1,304,1,304,1,304,1,305,1,305,1,305,1,305,
	1,305,1,305,1,305,1,305,1,305,1,306,1,306,1,306,1,306,1,306,1,306,1,306,
	1,307,1,307,1,307,1,307,1,307,1,307,1,308,1,308,1,308,1,308,1,308,1,308,
	1,308,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,310,1,310,1,310,1,310,
	1,310,1,310,1,310,1,310,1,310,1,311,1,311,1,311,1,311,1,311,1,311,1,311,
	1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,313,1,313,1,313,1,313,
	1,313,1,313,1,313,1,313,1,313,1,313,1,314,1,314,1,314,1,314,1,314,1,315,
	1,315,1,315,1,315,1,315,1,315,1,315,1,316,1,316,1,316,1,316,1,316,1,316,
	1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,318,1,318,1,318,1,318,1,318,
	1,318,1,318,1,318,1,318,1,318,1,318,1,318,1,319,1,319,1,319,1,319,1,319,
	1,319,1,319,1,319,1,319,1,319,1,319,1,320,1,320,1,320,1,320,1,320,1,320,
	1,320,1,321,1,321,1,321,1,321,1,321,1,322,1,322,1,322,1,322,1,322,1,322,
	1,322,1,322,1,322,1,322,1,323,1,323,1,323,1,323,1,323,1,324,1,324,1,324,
	1,324,1,324,1,325,1,325,1,325,1,326,1,326,1,326,1,326,1,326,1,326,1,327,
	1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,328,
	1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,329,1,329,1,329,1,329,1,329,
	1,330,1,330,1,330,1,330,1,330,1,330,1,331,1,331,1,331,1,331,1,331,1,332,
	1,332,1,332,1,332,1,332,1,332,1,332,1,332,1,332,1,332,1,333,1,333,1,333,
	1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,334,
	1,334,1,334,1,334,1,334,1,334,1,335,1,335,1,335,1,335,1,335,1,335,1,335,
	1,336,1,336,1,336,1,336,1,336,1,336,1,336,1,336,1,337,1,337,1,337,1,337,
	1,337,1,337,1,337,1,337,1,337,1,337,1,338,1,338,1,338,1,338,1,338,1,338,
	1,338,1,339,1,339,1,339,1,339,1,339,1,339,1,339,1,340,1,340,1,340,1,340,
	1,341,1,341,1,341,1,341,1,341,1,342,1,342,1,342,1,342,1,342,1,342,1,343,
	1,343,1,343,1,343,1,343,1,343,1,343,1,344,1,344,1,344,1,344,1,344,1,344,
	1,344,1,345,1,345,1,345,1,345,1,345,1,345,1,345,1,345,1,346,1,346,1,346,
	1,346,1,346,1,347,1,347,1,347,1,347,1,347,1,347,1,347,1,347,1,348,1,348,
	1,348,1,348,1,348,1,349,1,349,1,349,1,349,1,349,1,349,1,350,1,350,1,350,
	1,350,1,350,1,350,1,350,1,351,1,351,1,351,1,351,1,351,1,352,1,352,1,352,
	1,352,1,352,1,352,1,352,1,352,1,353,1,353,1,353,1,353,1,353,1,353,1,353,
	1,353,1,354,1,354,1,354,1,354,1,355,1,355,1,355,3,355,2984,8,355,1,356,
	1,356,1,356,3,356,2989,8,356,1,357,1,357,5,357,2993,8,357,10,357,12,357,
	2996,9,357,1,357,1,357,1,358,1,358,5,358,3002,8,358,10,358,12,358,3005,
	9,358,1,358,1,358,1,359,1,359,5,359,3011,8,359,10,359,12,359,3014,9,359,
	1,359,1,359,4,359,3018,8,359,11,359,12,359,3019,1,359,3,359,3023,8,359,
	1,360,1,360,1,360,3,360,3028,8,360,1,360,1,360,1,360,1,360,1,360,1,360,
	1,360,1,360,3,360,3038,8,360,3,360,3040,8,360,1,361,1,361,1,361,5,361,3045,
	8,361,10,361,12,361,3048,9,361,1,362,1,362,1,362,1,362,1,362,3,362,3055,
	8,362,1,363,1,363,5,363,3059,8,363,10,363,12,363,3062,9,363,1,363,1,363,
	1,364,1,364,1,365,1,365,1,366,1,366,1,366,4,366,3073,8,366,11,366,12,366,
	3074,1,367,1,367,1,367,4,367,3080,8,367,11,367,12,367,3081,1,368,1,368,
	1,368,4,368,3087,8,368,11,368,12,368,3088,1,369,4,369,3092,8,369,11,369,
	12,369,3093,1,370,1,370,1,370,1,370,3,370,3100,8,370,1,371,1,371,1,371,
	3,371,3105,8,371,1,371,1,371,1,371,1,371,1,371,1,371,3,371,3113,8,371,1,
	372,1,372,1,372,3,372,3118,8,372,1,372,1,372,1,373,1,373,1,373,5,373,3125,
	8,373,10,373,12,373,3128,9,373,1,373,3,373,3131,8,373,1,373,1,373,1,373,
	3,373,3136,8,373,1,373,1,373,1,373,1,373,1,373,1,373,3,373,3144,8,373,3,
	373,3146,8,373,1,374,1,374,1,374,4,374,3151,8,374,11,374,12,374,3152,1,
	374,1,374,1,375,1,375,1,375,1,375,5,375,3161,8,375,10,375,12,375,3164,9,
	375,1,375,1,375,1,375,1,376,1,376,1,376,1,376,5,376,3173,8,376,10,376,12,
	376,3176,9,376,1,376,1,376,3,376,3180,8,376,1,376,3,376,3183,8,376,1,377,
	1,377,1,377,1,377,1,378,1,378,3,378,3191,8,378,1,378,1,378,2,3012,3162,
	0,379,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,
	14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,
	26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,
	0,77,0,79,0,81,0,83,0,85,0,87,0,89,0,91,0,93,0,95,0,97,0,99,0,101,0,103,
	0,105,0,107,0,109,0,111,0,113,0,115,0,117,0,119,0,121,0,123,0,125,0,127,
	0,129,0,131,0,133,0,135,0,137,38,139,39,141,40,143,41,145,42,147,43,149,
	44,151,45,153,46,155,47,157,48,159,49,161,50,163,51,165,52,167,53,169,54,
	171,55,173,56,175,57,177,58,179,59,181,60,183,61,185,62,187,63,189,64,191,
	65,193,66,195,67,197,68,199,69,201,70,203,71,205,72,207,73,209,74,211,75,
	213,76,215,77,217,78,219,79,221,80,223,81,225,82,227,83,229,84,231,85,233,
	86,235,87,237,88,239,89,241,90,243,91,245,92,247,93,249,94,251,95,253,96,
	255,97,257,98,259,99,261,100,263,101,265,102,267,103,269,104,271,105,273,
	106,275,107,277,108,279,109,281,110,283,111,285,112,287,113,289,114,291,
	115,293,116,295,117,297,118,299,119,301,120,303,121,305,122,307,123,309,
	124,311,125,313,126,315,127,317,128,319,129,321,130,323,131,325,132,327,
	133,329,134,331,135,333,136,335,137,337,138,339,139,341,140,343,141,345,
	142,347,143,349,144,351,145,353,146,355,147,357,148,359,149,361,150,363,
	151,365,152,367,153,369,154,371,155,373,156,375,157,377,158,379,159,381,
	160,383,161,385,162,387,163,389,164,391,165,393,166,395,167,397,168,399,
	169,401,170,403,171,405,172,407,173,409,174,411,175,413,176,415,177,417,
	178,419,179,421,180,423,181,425,182,427,183,429,184,431,185,433,186,435,
	187,437,188,439,189,441,190,443,191,445,192,447,193,449,194,451,195,453,
	196,455,197,457,198,459,199,461,200,463,201,465,202,467,203,469,204,471,
	205,473,206,475,207,477,208,479,209,481,210,483,211,485,212,487,213,489,
	214,491,215,493,216,495,217,497,218,499,219,501,220,503,221,505,222,507,
	223,509,224,511,225,513,226,515,227,517,228,519,229,521,230,523,231,525,
	232,527,233,529,234,531,235,533,236,535,237,537,238,539,239,541,240,543,
	241,545,242,547,243,549,244,551,245,553,246,555,247,557,248,559,249,561,
	250,563,251,565,252,567,253,569,254,571,255,573,256,575,257,577,258,579,
	259,581,260,583,261,585,262,587,263,589,264,591,265,593,266,595,267,597,
	268,599,269,601,270,603,271,605,272,607,273,609,274,611,275,613,276,615,
	277,617,278,619,279,621,280,623,281,625,282,627,283,629,284,631,285,633,
	286,635,287,637,288,639,289,641,290,643,291,645,292,647,293,649,294,651,
	295,653,296,655,297,657,298,659,299,661,300,663,301,665,302,667,303,669,
	304,671,305,673,306,675,307,677,308,679,309,681,310,683,311,685,312,687,
	313,689,314,691,315,693,316,695,317,697,318,699,319,701,320,703,321,705,
	322,707,323,709,324,711,0,713,0,715,0,717,0,719,0,721,325,723,326,725,0,
	727,327,729,0,731,0,733,0,735,0,737,0,739,0,741,328,743,329,745,0,747,330,
	749,331,751,0,753,0,755,332,757,333,1,0,35,2,0,65,65,97,97,2,0,66,66,98,
	98,2,0,67,67,99,99,2,0,68,68,100,100,2,0,69,69,101,101,2,0,70,70,102,102,
	2,0,71,71,103,103,2,0,72,72,104,104,2,0,73,73,105,105,2,0,74,74,106,106,
	2,0,75,75,107,107,2,0,76,76,108,108,2,0,77,77,109,109,2,0,78,78,110,110,
	2,0,79,79,111,111,2,0,80,80,112,112,2,0,81,81,113,113,2,0,82,82,114,114,
	2,0,83,83,115,115,2,0,84,84,116,116,2,0,85,85,117,117,2,0,86,86,118,118,
	2,0,87,87,119,119,2,0,88,88,120,120,2,0,89,89,121,121,2,0,90,90,122,122,
	2,0,39,39,92,92,2,0,34,34,92,92,3,0,65,90,95,95,97,122,2,0,92,92,96,96,
	3,0,48,57,65,70,97,102,2,0,52,52,56,56,2,0,10,10,13,13,1,1,10,10,3,0,9,
	10,12,13,32,32,3199,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,
	1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,
	0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,
	1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,
	0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,
	1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,
	0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,137,
	1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,
	0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,
	0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,
	0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,
	0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,
	189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,
	1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,
	0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,
	0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,
	0,0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,
	0,241,1,0,0,0,0,243,1,0,0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,
	251,1,0,0,0,0,253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,
	1,0,0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,
	0,0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,0,
	0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,291,1,0,0,
	0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,
	0,303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,
	313,1,0,0,0,0,315,1,0,0,0,0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,
	1,0,0,0,0,325,1,0,0,0,0,327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,
	0,0,0,0,335,1,0,0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,
	0,0,0,345,1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,
	0,0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,
	0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,0,0,0,0,
	375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,1,0,0,0,0,383,1,0,0,0,0,385,
	1,0,0,0,0,387,1,0,0,0,0,389,1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,0,395,1,
	0,0,0,0,397,1,0,0,0,0,399,1,0,0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,0,
	0,0,0,407,1,0,0,0,0,409,1,0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,
	0,0,417,1,0,0,0,0,419,1,0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,
	0,427,1,0,0,0,0,429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,
	437,1,0,0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,0,447,
	1,0,0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,0,457,1,
	0,0,0,0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,467,1,0,
	0,0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,477,1,0,0,
	0,0,479,1,0,0,0,0,481,1,0,0,0,0,483,1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,
	0,489,1,0,0,0,0,491,1,0,0,0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,
	499,1,0,0,0,0,501,1,0,0,0,0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,
	1,0,0,0,0,511,1,0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,
	0,0,0,0,521,1,0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,1,0,
	0,0,0,531,1,0,0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,1,0,0,
	0,0,541,1,0,0,0,0,543,1,0,0,0,0,545,1,0,0,0,0,547,1,0,0,0,0,549,1,0,0,0,
	0,551,1,0,0,0,0,553,1,0,0,0,0,555,1,0,0,0,0,557,1,0,0,0,0,559,1,0,0,0,0,
	561,1,0,0,0,0,563,1,0,0,0,0,565,1,0,0,0,0,567,1,0,0,0,0,569,1,0,0,0,0,571,
	1,0,0,0,0,573,1,0,0,0,0,575,1,0,0,0,0,577,1,0,0,0,0,579,1,0,0,0,0,581,1,
	0,0,0,0,583,1,0,0,0,0,585,1,0,0,0,0,587,1,0,0,0,0,589,1,0,0,0,0,591,1,0,
	0,0,0,593,1,0,0,0,0,595,1,0,0,0,0,597,1,0,0,0,0,599,1,0,0,0,0,601,1,0,0,
	0,0,603,1,0,0,0,0,605,1,0,0,0,0,607,1,0,0,0,0,609,1,0,0,0,0,611,1,0,0,0,
	0,613,1,0,0,0,0,615,1,0,0,0,0,617,1,0,0,0,0,619,1,0,0,0,0,621,1,0,0,0,0,
	623,1,0,0,0,0,625,1,0,0,0,0,627,1,0,0,0,0,629,1,0,0,0,0,631,1,0,0,0,0,633,
	1,0,0,0,0,635,1,0,0,0,0,637,1,0,0,0,0,639,1,0,0,0,0,641,1,0,0,0,0,643,1,
	0,0,0,0,645,1,0,0,0,0,647,1,0,0,0,0,649,1,0,0,0,0,651,1,0,0,0,0,653,1,0,
	0,0,0,655,1,0,0,0,0,657,1,0,0,0,0,659,1,0,0,0,0,661,1,0,0,0,0,663,1,0,0,
	0,0,665,1,0,0,0,0,667,1,0,0,0,0,669,1,0,0,0,0,671,1,0,0,0,0,673,1,0,0,0,
	0,675,1,0,0,0,0,677,1,0,0,0,0,679,1,0,0,0,0,681,1,0,0,0,0,683,1,0,0,0,0,
	685,1,0,0,0,0,687,1,0,0,0,0,689,1,0,0,0,0,691,1,0,0,0,0,693,1,0,0,0,0,695,
	1,0,0,0,0,697,1,0,0,0,0,699,1,0,0,0,0,701,1,0,0,0,0,703,1,0,0,0,0,705,1,
	0,0,0,0,707,1,0,0,0,0,709,1,0,0,0,0,721,1,0,0,0,0,723,1,0,0,0,0,727,1,0,
	0,0,0,741,1,0,0,0,0,743,1,0,0,0,0,747,1,0,0,0,0,749,1,0,0,0,0,755,1,0,0,
	0,0,757,1,0,0,0,1,759,1,0,0,0,3,761,1,0,0,0,5,764,1,0,0,0,7,767,1,0,0,0,
	9,770,1,0,0,0,11,772,1,0,0,0,13,775,1,0,0,0,15,777,1,0,0,0,17,780,1,0,0,
	0,19,783,1,0,0,0,21,787,1,0,0,0,23,789,1,0,0,0,25,791,1,0,0,0,27,794,1,
	0,0,0,29,797,1,0,0,0,31,800,1,0,0,0,33,802,1,0,0,0,35,804,1,0,0,0,37,806,
	1,0,0,0,39,808,1,0,0,0,41,810,1,0,0,0,43,812,1,0,0,0,45,814,1,0,0,0,47,
	816,1,0,0,0,49,818,1,0,0,0,51,820,1,0,0,0,53,822,1,0,0,0,55,824,1,0,0,0,
	57,826,1,0,0,0,59,828,1,0,0,0,61,830,1,0,0,0,63,832,1,0,0,0,65,834,1,0,
	0,0,67,836,1,0,0,0,69,839,1,0,0,0,71,842,1,0,0,0,73,844,1,0,0,0,75,846,
	1,0,0,0,77,848,1,0,0,0,79,850,1,0,0,0,81,852,1,0,0,0,83,854,1,0,0,0,85,
	857,1,0,0,0,87,859,1,0,0,0,89,861,1,0,0,0,91,863,1,0,0,0,93,865,1,0,0,0,
	95,867,1,0,0,0,97,869,1,0,0,0,99,871,1,0,0,0,101,873,1,0,0,0,103,875,1,
	0,0,0,105,877,1,0,0,0,107,879,1,0,0,0,109,881,1,0,0,0,111,883,1,0,0,0,113,
	885,1,0,0,0,115,887,1,0,0,0,117,889,1,0,0,0,119,891,1,0,0,0,121,893,1,0,
	0,0,123,895,1,0,0,0,125,897,1,0,0,0,127,899,1,0,0,0,129,901,1,0,0,0,131,
	903,1,0,0,0,133,905,1,0,0,0,135,907,1,0,0,0,137,909,1,0,0,0,139,915,1,0,
	0,0,141,922,1,0,0,0,143,926,1,0,0,0,145,932,1,0,0,0,147,936,1,0,0,0,149,
	942,1,0,0,0,151,950,1,0,0,0,153,954,1,0,0,0,155,959,1,0,0,0,157,963,1,0,
	0,0,159,969,1,0,0,0,161,972,1,0,0,0,163,976,1,0,0,0,165,983,1,0,0,0,167,
	994,1,0,0,0,169,1000,1,0,0,0,171,1003,1,0,0,0,173,1010,1,0,0,0,175,1021,
	1,0,0,0,177,1035,1,0,0,0,179,1043,1,0,0,0,181,1050,1,0,0,0,183,1056,1,0,
	0,0,185,1067,1,0,0,0,187,1074,1,0,0,0,189,1080,1,0,0,0,191,1090,1,0,0,0,
	193,1098,1,0,0,0,195,1106,1,0,0,0,197,1109,1,0,0,0,199,1118,1,0,0,0,201,
	1126,1,0,0,0,203,1131,1,0,0,0,205,1136,1,0,0,0,207,1147,1,0,0,0,209,1153,
	1,0,0,0,211,1164,1,0,0,0,213,1172,1,0,0,0,215,1179,1,0,0,0,217,1187,1,0,
	0,0,219,1194,1,0,0,0,221,1202,1,0,0,0,223,1214,1,0,0,0,225,1223,1,0,0,0,
	227,1231,1,0,0,0,229,1242,1,0,0,0,231,1251,1,0,0,0,233,1257,1,0,0,0,235,
	1264,1,0,0,0,237,1270,1,0,0,0,239,1275,1,0,0,0,241,1283,1,0,0,0,243,1296,
	1,0,0,0,245,1309,1,0,0,0,247,1327,1,0,0,0,249,1332,1,0,0,0,251,1341,1,0,
	0,0,253,1349,1,0,0,0,255,1357,1,0,0,0,257,1365,1,0,0,0,259,1376,1,0,0,0,
	261,1385,1,0,0,0,263,1392,1,0,0,0,265,1399,1,0,0,0,267,1404,1,0,0,0,269,
	1413,1,0,0,0,271,1420,1,0,0,0,273,1425,1,0,0,0,275,1435,1,0,0,0,277,1443,
	1,0,0,0,279,1451,1,0,0,0,281,1460,1,0,0,0,283,1463,1,0,0,0,285,1468,1,0,
	0,0,287,1473,1,0,0,0,289,1478,1,0,0,0,291,1484,1,0,0,0,293,1497,1,0,0,0,
	295,1507,1,0,0,0,297,1511,1,0,0,0,299,1516,1,0,0,0,301,1522,1,0,0,0,303,
	1528,1,0,0,0,305,1535,1,0,0,0,307,1544,1,0,0,0,309,1551,1,0,0,0,311,1559,
	1,0,0,0,313,1569,1,0,0,0,315,1579,1,0,0,0,317,1586,1,0,0,0,319,1594,1,0,
	0,0,321,1601,1,0,0,0,323,1610,1,0,0,0,325,1615,1,0,0,0,327,1621,1,0,0,0,
	329,1628,1,0,0,0,331,1635,1,0,0,0,333,1641,1,0,0,0,335,1649,1,0,0,0,337,
	1654,1,0,0,0,339,1664,1,0,0,0,341,1668,1,0,0,0,343,1676,1,0,0,0,345,1681,
	1,0,0,0,347,1686,1,0,0,0,349,1695,1,0,0,0,351,1700,1,0,0,0,353,1707,1,0,
	0,0,355,1713,1,0,0,0,357,1719,1,0,0,0,359,1728,1,0,0,0,361,1735,1,0,0,0,
	363,1740,1,0,0,0,365,1747,1,0,0,0,367,1751,1,0,0,0,369,1754,1,0,0,0,371,
	1761,1,0,0,0,373,1767,1,0,0,0,375,1777,1,0,0,0,377,1784,1,0,0,0,379,1787,
	1,0,0,0,381,1797,1,0,0,0,383,1809,1,0,0,0,385,1815,1,0,0,0,387,1823,1,0,
	0,0,389,1832,1,0,0,0,391,1840,1,0,0,0,393,1850,1,0,0,0,395,1856,1,0,0,0,
	397,1863,1,0,0,0,399,1871,1,0,0,0,401,1881,1,0,0,0,403,1886,1,0,0,0,405,
	1889,1,0,0,0,407,1896,1,0,0,0,409,1901,1,0,0,0,411,1913,1,0,0,0,413,1924,
	1,0,0,0,415,1935,1,0,0,0,417,1939,1,0,0,0,419,1944,1,0,0,0,421,1949,1,0,
	0,0,423,1956,1,0,0,0,425,1961,1,0,0,0,427,1967,1,0,0,0,429,1972,1,0,0,0,
	431,1978,1,0,0,0,433,1984,1,0,0,0,435,1991,1,0,0,0,437,1997,1,0,0,0,439,
	2005,1,0,0,0,441,2021,1,0,0,0,443,2030,1,0,0,0,445,2043,1,0,0,0,447,2056,
	1,0,0,0,449,2063,1,0,0,0,451,2075,1,0,0,0,453,2083,1,0,0,0,455,2088,1,0,
	0,0,457,2091,1,0,0,0,459,2099,1,0,0,0,461,2103,1,0,0,0,463,2111,1,0,0,0,
	465,2116,1,0,0,0,467,2122,1,0,0,0,469,2129,1,0,0,0,471,2132,1,0,0,0,473,
	2139,1,0,0,0,475,2144,1,0,0,0,477,2147,1,0,0,0,479,2151,1,0,0,0,481,2156,
	1,0,0,0,483,2163,1,0,0,0,485,2172,1,0,0,0,487,2175,1,0,0,0,489,2181,1,0,
	0,0,491,2188,1,0,0,0,493,2194,1,0,0,0,495,2199,1,0,0,0,497,2208,1,0,0,0,
	499,2218,1,0,0,0,501,2226,1,0,0,0,503,2235,1,0,0,0,505,2240,1,0,0,0,507,
	2248,1,0,0,0,509,2252,1,0,0,0,511,2260,1,0,0,0,513,2265,1,0,0,0,515,2270,
	1,0,0,0,517,2277,1,0,0,0,519,2287,1,0,0,0,521,2295,1,0,0,0,523,2303,1,0,
	0,0,525,2314,1,0,0,0,527,2322,1,0,0,0,529,2328,1,0,0,0,531,2334,1,0,0,0,
	533,2340,1,0,0,0,535,2346,1,0,0,0,537,2353,1,0,0,0,539,2364,1,0,0,0,541,
	2371,1,0,0,0,543,2379,1,0,0,0,545,2387,1,0,0,0,547,2394,1,0,0,0,549,2401,
	1,0,0,0,551,2412,1,0,0,0,553,2420,1,0,0,0,555,2432,1,0,0,0,557,2438,1,0,
	0,0,559,2447,1,0,0,0,561,2455,1,0,0,0,563,2463,1,0,0,0,565,2471,1,0,0,0,
	567,2480,1,0,0,0,569,2487,1,0,0,0,571,2494,1,0,0,0,573,2504,1,0,0,0,575,
	2511,1,0,0,0,577,2518,1,0,0,0,579,2524,1,0,0,0,581,2530,1,0,0,0,583,2539,
	1,0,0,0,585,2546,1,0,0,0,587,2550,1,0,0,0,589,2555,1,0,0,0,591,2562,1,0,
	0,0,593,2572,1,0,0,0,595,2579,1,0,0,0,597,2587,1,0,0,0,599,2592,1,0,0,0,
	601,2599,1,0,0,0,603,2604,1,0,0,0,605,2608,1,0,0,0,607,2613,1,0,0,0,609,
	2618,1,0,0,0,611,2623,1,0,0,0,613,2632,1,0,0,0,615,2639,1,0,0,0,617,2645,
	1,0,0,0,619,2652,1,0,0,0,621,2659,1,0,0,0,623,2668,1,0,0,0,625,2675,1,0,
	0,0,627,2683,1,0,0,0,629,2693,1,0,0,0,631,2698,1,0,0,0,633,2705,1,0,0,0,
	635,2711,1,0,0,0,637,2718,1,0,0,0,639,2730,1,0,0,0,641,2741,1,0,0,0,643,
	2748,1,0,0,0,645,2753,1,0,0,0,647,2763,1,0,0,0,649,2768,1,0,0,0,651,2773,
	1,0,0,0,653,2776,1,0,0,0,655,2782,1,0,0,0,657,2794,1,0,0,0,659,2802,1,0,
	0,0,661,2807,1,0,0,0,663,2813,1,0,0,0,665,2818,1,0,0,0,667,2828,1,0,0,0,
	669,2842,1,0,0,0,671,2848,1,0,0,0,673,2855,1,0,0,0,675,2863,1,0,0,0,677,
	2873,1,0,0,0,679,2880,1,0,0,0,681,2887,1,0,0,0,683,2891,1,0,0,0,685,2896,
	1,0,0,0,687,2902,1,0,0,0,689,2909,1,0,0,0,691,2916,1,0,0,0,693,2924,1,0,
	0,0,695,2929,1,0,0,0,697,2937,1,0,0,0,699,2942,1,0,0,0,701,2948,1,0,0,0,
	703,2955,1,0,0,0,705,2960,1,0,0,0,707,2968,1,0,0,0,709,2976,1,0,0,0,711,
	2983,1,0,0,0,713,2988,1,0,0,0,715,2990,1,0,0,0,717,2999,1,0,0,0,719,3017,
	1,0,0,0,721,3027,1,0,0,0,723,3041,1,0,0,0,725,3054,1,0,0,0,727,3056,1,0,
	0,0,729,3065,1,0,0,0,731,3067,1,0,0,0,733,3069,1,0,0,0,735,3076,1,0,0,0,
	737,3083,1,0,0,0,739,3091,1,0,0,0,741,3099,1,0,0,0,743,3101,1,0,0,0,745,
	3114,1,0,0,0,747,3135,1,0,0,0,749,3147,1,0,0,0,751,3156,1,0,0,0,753,3168,
	1,0,0,0,755,3184,1,0,0,0,757,3190,1,0,0,0,759,760,5,61,0,0,760,2,1,0,0,
	0,761,762,5,61,0,0,762,763,5,61,0,0,763,4,1,0,0,0,764,765,5,33,0,0,765,
	766,5,61,0,0,766,6,1,0,0,0,767,768,5,60,0,0,768,769,5,62,0,0,769,8,1,0,
	0,0,770,771,5,60,0,0,771,10,1,0,0,0,772,773,5,60,0,0,773,774,5,61,0,0,774,
	12,1,0,0,0,775,776,5,62,0,0,776,14,1,0,0,0,777,778,5,62,0,0,778,779,5,61,
	0,0,779,16,1,0,0,0,780,781,5,60,0,0,781,782,5,60,0,0,782,18,1,0,0,0,783,
	784,5,124,0,0,784,785,5,60,0,0,785,786,5,60,0,0,786,20,1,0,0,0,787,788,
	5,38,0,0,788,22,1,0,0,0,789,790,5,124,0,0,790,24,1,0,0,0,791,792,5,124,
	0,0,792,793,5,124,0,0,793,26,1,0,0,0,794,795,5,60,0,0,795,796,5,124,0,0,
	796,28,1,0,0,0,797,798,5,124,0,0,798,799,5,62,0,0,799,30,1,0,0,0,800,801,
	5,43,0,0,801,32,1,0,0,0,802,803,5,45,0,0,803,34,1,0,0,0,804,805,5,126,0,
	0,805,36,1,0,0,0,806,807,5,42,0,0,807,38,1,0,0,0,808,809,5,47,0,0,809,40,
	1,0,0,0,810,811,5,37,0,0,811,42,1,0,0,0,812,813,5,59,0,0,813,44,1,0,0,0,
	814,815,5,46,0,0,815,46,1,0,0,0,816,817,5,44,0,0,817,48,1,0,0,0,818,819,
	5,40,0,0,819,50,1,0,0,0,820,821,5,41,0,0,821,52,1,0,0,0,822,823,5,63,0,
	0,823,54,1,0,0,0,824,825,5,58,0,0,825,56,1,0,0,0,826,827,5,64,0,0,827,58,
	1,0,0,0,828,829,5,36,0,0,829,60,1,0,0,0,830,831,5,123,0,0,831,62,1,0,0,
	0,832,833,5,125,0,0,833,64,1,0,0,0,834,835,5,94,0,0,835,66,1,0,0,0,836,
	837,5,58,0,0,837,838,5,58,0,0,838,68,1,0,0,0,839,840,5,45,0,0,840,841,5,
	62,0,0,841,70,1,0,0,0,842,843,5,93,0,0,843,72,1,0,0,0,844,845,5,91,0,0,
	845,74,1,0,0,0,846,847,5,92,0,0,847,76,1,0,0,0,848,849,5,34,0,0,849,78,
	1,0,0,0,850,851,5,39,0,0,851,80,1,0,0,0,852,853,5,96,0,0,853,82,1,0,0,0,
	854,855,5,64,0,0,855,856,5,64,0,0,856,84,1,0,0,0,857,858,7,0,0,0,858,86,
	1,0,0,0,859,860,7,1,0,0,860,88,1,0,0,0,861,862,7,2,0,0,862,90,1,0,0,0,863,
	864,7,3,0,0,864,92,1,0,0,0,865,866,7,4,0,0,866,94,1,0,0,0,867,868,7,5,0,
	0,868,96,1,0,0,0,869,870,7,6,0,0,870,98,1,0,0,0,871,872,7,7,0,0,872,100,
	1,0,0,0,873,874,7,8,0,0,874,102,1,0,0,0,875,876,7,9,0,0,876,104,1,0,0,0,
	877,878,7,10,0,0,878,106,1,0,0,0,879,880,7,11,0,0,880,108,1,0,0,0,881,882,
	7,12,0,0,882,110,1,0,0,0,883,884,7,13,0,0,884,112,1,0,0,0,885,886,7,14,
	0,0,886,114,1,0,0,0,887,888,7,15,0,0,888,116,1,0,0,0,889,890,7,16,0,0,890,
	118,1,0,0,0,891,892,7,17,0,0,892,120,1,0,0,0,893,894,7,18,0,0,894,122,1,
	0,0,0,895,896,7,19,0,0,896,124,1,0,0,0,897,898,7,20,0,0,898,126,1,0,0,0,
	899,900,7,21,0,0,900,128,1,0,0,0,901,902,7,22,0,0,902,130,1,0,0,0,903,904,
	7,23,0,0,904,132,1,0,0,0,905,906,7,24,0,0,906,134,1,0,0,0,907,908,7,25,
	0,0,908,136,1,0,0,0,909,910,3,85,42,0,910,911,3,87,43,0,911,912,3,113,56,
	0,912,913,3,119,59,0,913,914,3,123,61,0,914,138,1,0,0,0,915,916,3,85,42,
	0,916,917,3,89,44,0,917,918,3,123,61,0,918,919,3,101,50,0,919,920,3,113,
	56,0,920,921,3,111,55,0,921,140,1,0,0,0,922,923,3,85,42,0,923,924,3,91,
	45,0,924,925,3,91,45,0,925,142,1,0,0,0,926,927,3,85,42,0,927,928,3,95,47,
	0,928,929,3,123,61,0,929,930,3,93,46,0,930,931,3,119,59,0,931,144,1,0,0,
	0,932,933,3,85,42,0,933,934,3,107,53,0,934,935,3,107,53,0,935,146,1,0,0,
	0,936,937,3,85,42,0,937,938,3,107,53,0,938,939,3,123,61,0,939,940,3,93,
	46,0,940,941,3,119,59,0,941,148,1,0,0,0,942,943,3,85,42,0,943,944,3,111,
	55,0,944,945,3,85,42,0,945,946,3,107,53,0,946,947,3,133,66,0,947,948,3,
	135,67,0,948,949,3,93,46,0,949,150,1,0,0,0,950,951,3,85,42,0,951,952,3,
	111,55,0,952,953,3,91,45,0,953,152,1,0,0,0,954,955,3,85,42,0,955,956,3,
	111,55,0,956,957,3,121,60,0,957,958,3,101,50,0,958,154,1,0,0,0,959,960,
	3,85,42,0,960,961,3,111,55,0,961,962,3,133,66,0,962,156,1,0,0,0,963,964,
	3,85,42,0,964,965,3,119,59,0,965,966,3,119,59,0,966,967,3,85,42,0,967,968,
	3,133,66,0,968,158,1,0,0,0,969,970,3,85,42,0,970,971,3,121,60,0,971,160,
	1,0,0,0,972,973,3,85,42,0,973,974,3,121,60,0,974,975,3,89,44,0,975,162,
	1,0,0,0,976,977,3,85,42,0,977,978,3,121,60,0,978,979,3,121,60,0,979,980,
	3,125,62,0,980,981,3,109,54,0,981,982,3,93,46,0,982,164,1,0,0,0,983,984,
	3,85,42,0,984,985,3,121,60,0,985,986,3,133,66,0,986,987,3,109,54,0,987,
	988,3,109,54,0,988,989,3,93,46,0,989,990,3,123,61,0,990,991,3,119,59,0,
	991,992,3,101,50,0,992,993,3,89,44,0,993,166,1,0,0,0,994,995,3,85,42,0,
	995,996,3,121,60,0,996,997,3,133,66,0,997,998,3,111,55,0,998,999,3,89,44,
	0,999,168,1,0,0,0,1000,1001,3,85,42,0,1001,1002,3,123,61,0,1002,170,1,0,
	0,0,1003,1004,3,85,42,0,1004,1005,3,123,61,0,1005,1006,3,123,61,0,1006,
	1007,3,85,42,0,1007,1008,3,89,44,0,1008,1009,3,99,49,0,1009,172,1,0,0,0,
	1010,1011,3,85,42,0,1011,1012,3,123,61,0,1012,1013,3,123,61,0,1013,1014,
	3,119,59,0,1014,1015,3,101,50,0,1015,1016,3,87,43,0,1016,1017,3,125,62,
	0,1017,1018,3,123,61,0,1018,1019,3,93,46,0,1019,1020,3,121,60,0,1020,174,
	1,0,0,0,1021,1022,3,85,42,0,1022,1023,3,125,62,0,1023,1024,3,123,61,0,1024,
	1025,3,113,56,0,1025,1026,3,101,50,0,1026,1027,3,111,55,0,1027,1028,3,89,
	44,0,1028,1029,3,119,59,0,1029,1030,3,93,46,0,1030,1031,3,109,54,0,1031,
	1032,3,93,46,0,1032,1033,3,111,55,0,1033,1034,3,123,61,0,1034,176,1,0,0,
	0,1035,1036,3,85,42,0,1036,1037,3,125,62,0,1037,1038,3,123,61,0,1038,1039,
	3,113,56,0,1039,1040,3,109,54,0,1040,1041,3,85,42,0,1041,1042,3,115,57,
	0,1042,178,1,0,0,0,1043,1044,3,87,43,0,1044,1045,3,85,42,0,1045,1046,3,
	89,44,0,1046,1047,3,105,52,0,1047,1048,3,125,62,0,1048,1049,3,115,57,0,
	1049,180,1,0,0,0,1050,1051,3,87,43,0,1051,1052,3,85,42,0,1052,1053,3,123,
	61,0,1053,1054,3,89,44,0,1054,1055,3,99,49,0,1055,182,1,0,0,0,1056,1057,
	3,89,44,0,1057,1058,3,113,56,0,1058,1059,3,107,53,0,1059,1060,3,107,53,
	0,1060,1061,3,93,46,0,1061,1062,3,89,44,0,1062,1063,3,123,61,0,1063,1064,
	3,101,50,0,1064,1065,3,113,56,0,1065,1066,3,111,55,0,1066,184,1,0,0,0,1067,
	1068,3,87,43,0,1068,1069,3,93,46,0,1069,1070,3,95,47,0,1070,1071,3,113,
	56,0,1071,1072,3,119,59,0,1072,1073,3,93,46,0,1073,186,1,0,0,0,1074,1075,
	3,87,43,0,1075,1076,3,93,46,0,1076,1077,3,97,48,0,1077,1078,3,101,50,0,
	1078,1079,3,111,55,0,1079,188,1,0,0,0,1080,1081,3,87,43,0,1081,1082,3,93,
	46,0,1082,1083,3,119,59,0,1083,1084,3,111,55,0,1084,1085,3,113,56,0,1085,
	1086,3,125,62,0,1086,1087,3,107,53,0,1087,1088,3,107,53,0,1088,1089,3,101,
	50,0,1089,190,1,0,0,0,1090,1091,3,87,43,0,1091,1092,3,93,46,0,1092,1093,
	3,123,61,0,1093,1094,3,129,64,0,1094,1095,3,93,46,0,1095,1096,3,93,46,0,
	1096,1097,3,111,55,0,1097,192,1,0,0,0,1098,1099,3,87,43,0,1099,1100,3,101,
	50,0,1100,1101,3,123,61,0,1101,1102,3,89,44,0,1102,1103,3,85,42,0,1103,
	1104,3,121,60,0,1104,1105,3,123,61,0,1105,194,1,0,0,0,1106,1107,3,87,43,
	0,1107,1108,3,133,66,0,1108,196,1,0,0,0,1109,1110,3,89,44,0,1110,1111,3,
	85,42,0,1111,1112,3,107,53,0,1112,1113,3,107,53,0,1113,1114,3,85,42,0,1114,
	1115,3,87,43,0,1115,1116,3,107,53,0,1116,1117,3,93,46,0,1117,198,1,0,0,
	0,1118,1119,3,89,44,0,1119,1120,3,85,42,0,1120,1121,3,121,60,0,1121,1122,
	3,89,44,0,1122,1123,3,85,42,0,1123,1124,3,91,45,0,1124,1125,3,93,46,0,1125,
	200,1,0,0,0,1126,1127,3,89,44,0,1127,1128,3,85,42,0,1128,1129,3,121,60,
	0,1129,1130,3,93,46,0,1130,202,1,0,0,0,1131,1132,3,89,44,0,1132,1133,3,
	85,42,0,1133,1134,3,121,60,0,1134,1135,3,123,61,0,1135,204,1,0,0,0,1136,
	1137,3,89,44,0,1137,1138,3,99,49,0,1138,1139,3,85,42,0,1139,1140,3,111,
	55,0,1140,1141,3,97,48,0,1141,1142,3,93,46,0,1142,1143,3,95,47,0,1143,1144,
	3,93,46,0,1144,1145,3,93,46,0,1145,1146,3,91,45,0,1146,206,1,0,0,0,1147,
	1148,3,89,44,0,1148,1149,3,99,49,0,1149,1150,3,93,46,0,1150,1151,3,89,44,
	0,1151,1152,3,105,52,0,1152,208,1,0,0,0,1153,1154,3,89,44,0,1154,1155,3,
	107,53,0,1155,1156,3,85,42,0,1156,1157,3,121,60,0,1157,1158,3,121,60,0,
	1158,1159,3,101,50,0,1159,1160,3,95,47,0,1160,1161,3,101,50,0,1161,1162,
	3,93,46,0,1162,1163,3,119,59,0,1163,210,1,0,0,0,1164,1165,3,89,44,0,1165,
	1166,3,113,56,0,1166,1167,3,107,53,0,1167,1168,3,107,53,0,1168,1169,3,85,
	42,0,1169,1170,3,123,61,0,1170,1171,3,93,46,0,1171,212,1,0,0,0,1172,1173,
	3,89,44,0,1173,1174,3,113,56,0,1174,1175,3,107,53,0,1175,1176,3,125,62,
	0,1176,1177,3,109,54,0,1177,1178,3,111,55,0,1178,214,1,0,0,0,1179,1180,
	3,89,44,0,1180,1181,3,113,56,0,1181,1182,3,107,53,0,1182,1183,3,125,62,
	0,1183,1184,3,109,54,0,1184,1185,3,111,55,0,1185,1186,3,121,60,0,1186,216,
	1,0,0,0,1187,1188,3,89,44,0,1188,1189,3,113,56,0,1189,1190,3,109,54,0,1190,
	1191,3,109,54,0,1191,1192,3,101,50,0,1192,1193,3,123,61,0,1193,218,1,0,
	0,0,1194,1195,3,89,44,0,1195,1196,3,113,56,0,1196,1197,3,109,54,0,1197,
	1198,3,115,57,0,1198,1199,3,85,42,0,1199,1200,3,89,44,0,1200,1201,3,123,
	61,0,1201,220,1,0,0,0,1202,1203,3,89,44,0,1203,1204,3,113,56,0,1204,1205,
	3,111,55,0,1205,1206,3,91,45,0,1206,1207,3,101,50,0,1207,1208,3,123,61,
	0,1208,1209,3,101,50,0,1209,1210,3,113,56,0,1210,1211,3,111,55,0,1211,1212,
	3,85,42,0,1212,1213,3,107,53,0,1213,222,1,0,0,0,1214,1215,3,89,44,0,1215,
	1216,3,113,56,0,1216,1217,3,111,55,0,1217,1218,3,95,47,0,1218,1219,3,107,
	53,0,1219,1220,3,101,50,0,1220,1221,3,89,44,0,1221,1222,3,123,61,0,1222,
	224,1,0,0,0,1223,1224,3,89,44,0,1224,1225,3,113,56,0,1225,1226,3,111,55,
	0,1226,1227,3,111,55,0,1227,1228,3,93,46,0,1228,1229,3,89,44,0,1229,1230,
	3,123,61,0,1230,226,1,0,0,0,1231,1232,3,89,44,0,1232,1233,3,113,56,0,1233,
	1234,3,111,55,0,1234,1235,3,121,60,0,1235,1236,3,123,61,0,1236,1237,3,119,
	59,0,1237,1238,3,85,42,0,1238,1239,3,101,50,0,1239,1240,3,111,55,0,1240,
	1241,3,123,61,0,1241,228,1,0,0,0,1242,1243,3,89,44,0,1243,1244,3,113,56,
	0,1244,1245,3,111,55,0,1245,1246,3,121,60,0,1246,1247,3,125,62,0,1247,1248,
	3,109,54,0,1248,1249,3,93,46,0,1249,1250,3,119,59,0,1250,230,1,0,0,0,1251,
	1252,3,89,44,0,1252,1253,3,113,56,0,1253,1254,3,127,63,0,1254,1255,3,93,
	46,0,1255,1256,3,119,59,0,1256,232,1,0,0,0,1257,1258,3,89,44,0,1258,1259,
	3,119,59,0,1259,1260,3,93,46,0,1260,1261,3,85,42,0,1261,1262,3,123,61,0,
	1262,1263,3,93,46,0,1263,234,1,0,0,0,1264,1265,3,89,44,0,1265,1266,3,119,
	59,0,1266,1267,3,113,56,0,1267,1268,3,121,60,0,1268,1269,3,121,60,0,1269,
	236,1,0,0,0,1270,1271,3,89,44,0,1271,1272,3,125,62,0,1272,1273,3,87,43,
	0,1273,1274,3,93,46,0,1274,238,1,0,0,0,1275,1276,3,89,44,0,1276,1277,3,
	125,62,0,1277,1278,3,119,59,0,1278,1279,3,119,59,0,1279,1280,3,93,46,0,
	1280,1281,3,111,55,0,1281,1282,3,123,61,0,1282,240,1,0,0,0,1283,1284,3,
	89,44,0,1284,1285,3,125,62,0,1285,1286,3,119,59,0,1286,1287,3,119,59,0,
	1287,1288,3,93,46,0,1288,1289,3,111,55,0,1289,1290,3,123,61,0,1290,1291,
	5,95,0,0,1291,1292,3,91,45,0,1292,1293,3,85,42,0,1293,1294,3,123,61,0,1294,
	1295,3,93,46,0,1295,242,1,0,0,0,1296,1297,3,89,44,0,1297,1298,3,125,62,
	0,1298,1299,3,119,59,0,1299,1300,3,119,59,0,1300,1301,3,93,46,0,1301,1302,
	3,111,55,0,1302,1303,3,123,61,0,1303,1304,5,95,0,0,1304,1305,3,123,61,0,
	1305,1306,3,101,50,0,1306,1307,3,109,54,0,1307,1308,3,93,46,0,1308,244,
	1,0,0,0,1309,1310,3,89,44,0,1310,1311,3,125,62,0,1311,1312,3,119,59,0,1312,
	1313,3,119,59,0,1313,1314,3,93,46,0,1314,1315,3,111,55,0,1315,1316,3,123,
	61,0,1316,1317,5,95,0,0,1317,1318,3,123,61,0,1318,1319,3,101,50,0,1319,
	1320,3,109,54,0,1320,1321,3,93,46,0,1321,1322,3,121,60,0,1322,1323,3,123,
	61,0,1323,1324,3,85,42,0,1324,1325,3,109,54,0,1325,1326,3,115,57,0,1326,
	246,1,0,0,0,1327,1328,3,91,45,0,1328,1329,3,85,42,0,1329,1330,3,123,61,
	0,1330,1331,3,85,42,0,1331,248,1,0,0,0,1332,1333,3,91,45,0,1333,1334,3,
	85,42,0,1334,1335,3,123,61,0,1335,1336,3,85,42,0,1336,1337,3,87,43,0,1337,
	1338,3,85,42,0,1338,1339,3,121,60,0,1339,1340,3,93,46,0,1340,250,1,0,0,
	0,1341,1342,3,91,45,0,1342,1343,3,93,46,0,1343,1344,3,89,44,0,1344,1345,
	3,101,50,0,1345,1346,3,109,54,0,1346,1347,3,85,42,0,1347,1348,3,107,53,
	0,1348,252,1,0,0,0,1349,1350,3,91,45,0,1350,1351,3,93,46,0,1351,1352,3,
	89,44,0,1352,1353,3,107,53,0,1353,1354,3,85,42,0,1354,1355,3,119,59,0,1355,
	1356,3,93,46,0,1356,254,1,0,0,0,1357,1358,3,91,45,0,1358,1359,3,93,46,0,
	1359,1360,3,95,47,0,1360,1361,3,85,42,0,1361,1362,3,125,62,0,1362,1363,
	3,107,53,0,1363,1364,3,123,61,0,1364,256,1,0,0,0,1365,1366,3,91,45,0,1366,
	1367,3,93,46,0,1367,1368,3,95,47,0,1368,1369,3,93,46,0,1369,1370,3,119,
	59,0,1370,1371,3,119,59,0,1371,1372,3,85,42,0,1372,1373,3,87,43,0,1373,
	1374,3,107,53,0,1374,1375,3,93,46,0,1375,258,1,0,0,0,1376,1377,3,91,45,
	0,1377,1378,3,93,46,0,1378,1379,3,95,47,0,1379,1380,3,93,46,0,1380,1381,
	3,119,59,0,1381,1382,3,119,59,0,1382,1383,3,93,46,0,1383,1384,3,91,45,0,
	1384,260,1,0,0,0,1385,1386,3,91,45,0,1386,1387,3,93,46,0,1387,1388,3,95,
	47,0,1388,1389,3,101,50,0,1389,1390,3,111,55,0,1390,1391,3,93,46,0,1391,
	262,1,0,0,0,1392,1393,3,91,45,0,1393,1394,3,93,46,0,1394,1395,3,107,53,
	0,1395,1396,3,93,46,0,1396,1397,3,123,61,0,1397,1398,3,93,46,0,1398,264,
	1,0,0,0,1399,1400,3,91,45,0,1400,1401,3,93,46,0,1401,1402,3,121,60,0,1402,
	1403,3,89,44,0,1403,266,1,0,0,0,1404,1405,3,91,45,0,1405,1406,3,93,46,0,
	1406,1407,3,121,60,0,1407,1408,3,89,44,0,1408,1409,3,119,59,0,1409,1410,
	3,101,50,0,1410,1411,3,87,43,0,1411,1412,3,93,46,0,1412,268,1,0,0,0,1413,
	1414,3,91,45,0,1414,1415,3,93,46,0,1415,1416,3,123,61,0,1416,1417,3,85,
	42,0,1417,1418,3,89,44,0,1418,1419,3,99,49,0,1419,270,1,0,0,0,1420,1421,
	3,91,45,0,1421,1422,3,101,50,0,1422,1423,3,89,44,0,1423,1424,3,123,61,0,
	1424,272,1,0,0,0,1425,1426,3,91,45,0,1426,1427,3,101,50,0,1427,1428,3,119,
	59,0,1428,1429,3,93,46,0,1429,1430,3,89,44,0,1430,1431,3,123,61,0,1431,
	1432,3,113,56,0,1432,1433,3,119,59,0,1433,1434,3,133,66,0,1434,274,1,0,
	0,0,1435,1436,3,91,45,0,1436,1437,3,101,50,0,1437,1438,3,121,60,0,1438,
	1439,3,85,42,0,1439,1440,3,87,43,0,1440,1441,3,107,53,0,1441,1442,3,93,
	46,0,1442,276,1,0,0,0,1443,1444,3,91,45,0,1444,1445,3,101,50,0,1445,1446,
	3,121,60,0,1446,1447,3,89,44,0,1447,1448,3,85,42,0,1448,1449,3,119,59,0,
	1449,1450,3,91,45,0,1450,278,1,0,0,0,1451,1452,3,91,45,0,1452,1453,3,101,
	50,0,1453,1454,3,121,60,0,1454,1455,3,123,61,0,1455,1456,3,101,50,0,1456,
	1457,3,111,55,0,1457,1458,3,89,44,0,1458,1459,3,123,61,0,1459,280,1,0,0,
	0,1460,1461,3,91,45,0,1461,1462,3,113,56,0,1462,282,1,0,0,0,1463,1464,3,
	91,45,0,1464,1465,3,119,59,0,1465,1466,3,113,56,0,1466,1467,3,115,57,0,
	1467,284,1,0,0,0,1468,1469,3,93,46,0,1469,1470,3,85,42,0,1470,1471,3,89,
	44,0,1471,1472,3,99,49,0,1472,286,1,0,0,0,1473,1474,3,93,46,0,1474,1475,
	3,107,53,0,1475,1476,3,121,60,0,1476,1477,3,93,46,0,1477,288,1,0,0,0,1478,
	1479,3,93,46,0,1479,1480,3,109,54,0,1480,1481,3,115,57,0,1481,1482,3,123,
	61,0,1482,1483,3,133,66,0,1483,290,1,0,0,0,1484,1485,3,93,46,0,1485,1486,
	3,109,54,0,1486,1487,3,115,57,0,1487,1488,3,123,61,0,1488,1489,3,133,66,
	0,1489,1490,5,95,0,0,1490,1491,3,85,42,0,1491,1492,3,89,44,0,1492,1493,
	3,123,61,0,1493,1494,3,101,50,0,1494,1495,3,113,56,0,1495,1496,3,111,55,
	0,1496,292,1,0,0,0,1497,1498,3,93,46,0,1498,1499,3,111,55,0,1499,1500,3,
	89,44,0,1500,1501,3,119,59,0,1501,1502,3,133,66,0,1502,1503,3,115,57,0,
	1503,1504,3,123,61,0,1504,1505,3,93,46,0,1505,1506,3,91,45,0,1506,294,1,
	0,0,0,1507,1508,3,93,46,0,1508,1509,3,111,55,0,1509,1510,3,91,45,0,1510,
	296,1,0,0,0,1511,1512,3,93,46,0,1512,1513,3,111,55,0,1513,1514,3,125,62,
	0,1514,1515,3,109,54,0,1515,298,1,0,0,0,1516,1517,3,93,46,0,1517,1518,3,
	119,59,0,1518,1519,3,85,42,0,1519,1520,3,121,60,0,1520,1521,3,93,46,0,1521,
	300,1,0,0,0,1522,1523,3,93,46,0,1523,1524,3,119,59,0,1524,1525,3,119,59,
	0,1525,1526,3,113,56,0,1526,1527,3,119,59,0,1527,302,1,0,0,0,1528,1529,
	3,93,46,0,1529,1530,3,121,60,0,1530,1531,3,89,44,0,1531,1532,3,85,42,0,
	1532,1533,3,115,57,0,1533,1534,3,93,46,0,1534,304,1,0,0,0,1535,1536,3,93,
	46,0,1536,1537,3,127,63,0,1537,1538,3,85,42,0,1538,1539,3,107,53,0,1539,
	1540,3,125,62,0,1540,1541,3,85,42,0,1541,1542,3,123,61,0,1542,1543,3,93,
	46,0,1543,306,1,0,0,0,1544,1545,3,93,46,0,1545,1546,3,131,65,0,1546,1547,
	3,89,44,0,1547,1548,3,93,46,0,1548,1549,3,115,57,0,1549,1550,3,123,61,0,
	1550,308,1,0,0,0,1551,1552,3,93,46,0,1552,1553,3,131,65,0,1553,1554,3,89,
	44,0,1554,1555,3,107,53,0,1555,1556,3,125,62,0,1556,1557,3,91,45,0,1557,
	1558,3,93,46,0,1558,310,1,0,0,0,1559,1560,3,93,46,0,1560,1561,3,131,65,
	0,1561,1562,3,89,44,0,1562,1563,3,107,53,0,1563,1564,3,125,62,0,1564,1565,
	3,121,60,0,1565,1566,3,101,50,0,1566,1567,3,113,56,0,1567,1568,3,111,55,
	0,1568,312,1,0,0,0,1569,1570,3,93,46,0,1570,1571,3,131,65,0,1571,1572,3,
	89,44,0,1572,1573,3,107,53,0,1573,1574,3,125,62,0,1574,1575,3,121,60,0,
	1575,1576,3,101,50,0,1576,1577,3,127,63,0,1577,1578,3,93,46,0,1578,314,
	1,0,0,0,1579,1580,3,93,46,0,1580,1581,3,131,65,0,1581,1582,3,101,50,0,1582,
	1583,3,121,60,0,1583,1584,3,123,61,0,1584,1585,3,121,60,0,1585,316,1,0,
	0,0,1586,1587,3,93,46,0,1587,1588,3,131,65,0,1588,1589,3,115,57,0,1589,
	1590,3,107,53,0,1590,1591,3,85,42,0,1591,1592,3,101,50,0,1592,1593,3,111,
	55,0,1593,318,1,0,0,0,1594,1595,3,93,46,0,1595,1596,3,131,65,0,1596,1597,
	3,115,57,0,1597,1598,3,113,56,0,1598,1599,3,119,59,0,1599,1600,3,123,61,
	0,1600,320,1,0,0,0,1601,1602,3,93,46,0,1602,1603,3,131,65,0,1603,1604,3,
	123,61,0,1604,1605,3,93,46,0,1605,1606,3,119,59,0,1606,1607,3,111,55,0,
	1607,1608,3,85,42,0,1608,1609,3,107,53,0,1609,322,1,0,0,0,1610,1611,3,95,
	47,0,1611,1612,3,85,42,0,1612,1613,3,101,50,0,1613,1614,3,107,53,0,1614,
	324,1,0,0,0,1615,1616,3,95,47,0,1616,1617,3,85,42,0,1617,1618,3,107,53,
	0,1618,1619,3,121,60,0,1619,1620,3,93,46,0,1620,326,1,0,0,0,1621,1622,3,
	95,47,0,1622,1623,3,85,42,0,1623,1624,3,109,54,0,1624,1625,3,101,50,0,1625,
	1626,3,107,53,0,1626,1627,3,133,66,0,1627,328,1,0,0,0,1628,1629,3,95,47,
	0,1629,1630,3,101,50,0,1630,1631,3,107,53,0,1631,1632,3,123,61,0,1632,1633,
	3,93,46,0,1633,1634,3,119,59,0,1634,330,1,0,0,0,1635,1636,3,95,47,0,1636,
	1637,3,101,50,0,1637,1638,3,119,59,0,1638,1639,3,121,60,0,1639,1640,3,123,
	61,0,1640,332,1,0,0,0,1641,1642,3,95,47,0,1642,1643,3,107,53,0,1643,1644,
	3,85,42,0,1644,1645,3,123,61,0,1645,1646,3,123,61,0,1646,1647,3,93,46,0,
	1647,1648,3,111,55,0,1648,334,1,0,0,0,1649,1650,3,95,47,0,1650,1651,3,107,
	53,0,1651,1652,3,113,56,0,1652,1653,3,129,64,0,1653,336,1,0,0,0,1654,1655,
	3,95,47,0,1655,1656,3,113,56,0,1656,1657,3,107,53,0,1657,1658,3,107,53,
	0,1658,1659,3,113,56,0,1659,1660,3,129,64,0,1660,1661,3,101,50,0,1661,1662,
	3,111,55,0,1662,1663,3,97,48,0,1663,338,1,0,0,0,1664,1665,3,95,47,0,1665,
	1666,3,113,56,0,1666,1667,3,119,59,0,1667,340,1,0,0,0,1668,1669,3,95,47,
	0,1669,1670,3,113,56,0,1670,1671,3,119,59,0,1671,1672,3,93,46,0,1672,1673,
	3,101,50,0,1673,1674,3,97,48,0,1674,1675,3,111,55,0,1675,342,1,0,0,0,1676,
	1677,3,95,47,0,1677,1678,3,119,59,0,1678,1679,3,113,56,0,1679,1680,3,109,
	54,0,1680,344,1,0,0,0,1681,1682,3,95,47,0,1682,1683,3,125,62,0,1683,1684,
	3,107,53,0,1684,1685,3,107,53,0,1685,346,1,0,0,0,1686,1687,3,95,47,0,1687,
	1688,3,125,62,0,1688,1689,3,111,55,0,1689,1690,3,89,44,0,1690,1691,3,123,
	61,0,1691,1692,3,101,50,0,1692,1693,3,113,56,0,1693,1694,3,111,55,0,1694,
	348,1,0,0,0,1695,1696,3,97,48,0,1696,1697,3,107,53,0,1697,1698,3,113,56,
	0,1698,1699,3,87,43,0,1699,350,1,0,0,0,1700,1701,3,97,48,0,1701,1702,3,
	107,53,0,1702,1703,3,113,56,0,1703,1704,3,87,43,0,1704,1705,3,85,42,0,1705,
	1706,3,107,53,0,1706,352,1,0,0,0,1707,1708,3,97,48,0,1708,1709,3,119,59,
	0,1709,1710,3,85,42,0,1710,1711,3,111,55,0,1711,1712,3,123,61,0,1712,354,
	1,0,0,0,1713,1714,3,97,48,0,1714,1715,3,119,59,0,1715,1716,3,113,56,0,1716,
	1717,3,125,62,0,1717,1718,3,115,57,0,1718,356,1,0,0,0,1719,1720,3,97,48,
	0,1720,1721,3,119,59,0,1721,1722,3,113,56,0,1722,1723,3,125,62,0,1723,1724,
	3,115,57,0,1724,1725,3,101,50,0,1725,1726,3,111,55,0,1726,1727,3,97,48,
	0,1727,358,1,0,0,0,1728,1729,3,97,48,0,1729,1730,3,119,59,0,1730,1731,3,
	113,56,0,1731,1732,3,125,62,0,1732,1733,3,115,57,0,1733,1734,3,121,60,0,
	1734,360,1,0,0,0,1735,1736,3,99,49,0,1736,1737,3,85,42,0,1737,1738,3,121,
	60,0,1738,1739,3,99,49,0,1739,362,1,0,0,0,1740,1741,3,99,49,0,1741,1742,
	3,85,42,0,1742,1743,3,127,63,0,1743,1744,3,101,50,0,1744,1745,3,111,55,
	0,1745,1746,3,97,48,0,1746,364,1,0,0,0,1747,1748,3,99,49,0,1748,1749,3,
	113,56,0,1749,1750,3,115,57,0,1750,366,1,0,0,0,1751,1752,3,101,50,0,1752,
	1753,3,95,47,0,1753,368,1,0,0,0,1754,1755,3,101,50,0,1755,1756,3,97,48,
	0,1756,1757,3,111,55,0,1757,1758,3,113,56,0,1758,1759,3,119,59,0,1759,1760,
	3,93,46,0,1760,370,1,0,0,0,1761,1762,3,101,50,0,1762,1763,3,107,53,0,1763,
	1764,3,101,50,0,1764,1765,3,105,52,0,1765,1766,3,93,46,0,1766,372,1,0,0,
	0,1767,1768,3,101,50,0,1768,1769,3,109,54,0,1769,1770,3,109,54,0,1770,1771,
	3,93,46,0,1771,1772,3,91,45,0,1772,1773,3,101,50,0,1773,1774,3,85,42,0,
	1774,1775,3,123,61,0,1775,1776,3,93,46,0,1776,374,1,0,0,0,1777,1778,3,101,
	50,0,1778,1779,3,109,54,0,1779,1780,3,115,57,0,1780,1781,3,113,56,0,1781,
	1782,3,119,59,0,1782,1783,3,123,61,0,1783,376,1,0,0,0,1784,1785,3,101,50,
	0,1785,1786,3,111,55,0,1786,378,1,0,0,0,1787,1788,3,101,50,0,1788,1789,
	3,111,55,0,1789,1790,3,89,44,0,1790,1791,3,119,59,0,1791,1792,3,93,46,0,
	1792,1793,3,109,54,0,1793,1794,3,93,46,0,1794,1795,3,111,55,0,1795,1796,
	3,123,61,0,1796,380,1,0,0,0,1797,1798,3,101,50,0,1798,1799,3,111,55,0,1799,
	1800,3,89,44,0,1800,1801,3,119,59,0,1801,1802,3,93,46,0,1802,1803,3,109,
	54,0,1803,1804,3,93,46,0,1804,1805,3,111,55,0,1805,1806,3,123,61,0,1806,
	1807,3,85,42,0,1807,1808,3,107,53,0,1808,382,1,0,0,0,1809,1810,3,101,50,
	0,1810,1811,3,111,55,0,1811,1812,3,91,45,0,1812,1813,3,93,46,0,1813,1814,
	3,131,65,0,1814,384,1,0,0,0,1815,1816,3,101,50,0,1816,1817,3,111,55,0,1817,
	1818,3,91,45,0,1818,1819,3,93,46,0,1819,1820,3,131,65,0,1820,1821,3,93,
	46,0,1821,1822,3,91,45,0,1822,386,1,0,0,0,1823,1824,3,101,50,0,1824,1825,
	3,111,55,0,1825,1826,3,99,49,0,1826,1827,3,93,46,0,1827,1828,3,119,59,0,
	1828,1829,3,101,50,0,1829,1830,3,123,61,0,1830,1831,3,121,60,0,1831,388,
	1,0,0,0,1832,1833,3,101,50,0,1833,1834,3,111,55,0,1834,1835,3,101,50,0,
	1835,1836,3,123,61,0,1836,1837,3,101,50,0,1837,1838,3,85,42,0,1838,1839,
	3,107,53,0,1839,390,1,0,0,0,1840,1841,3,101,50,0,1841,1842,3,111,55,0,1842,
	1843,3,101,50,0,1843,1844,3,123,61,0,1844,1845,3,101,50,0,1845,1846,3,85,
	42,0,1846,1847,3,107,53,0,1847,1848,3,107,53,0,1848,1849,3,133,66,0,1849,
	392,1,0,0,0,1850,1851,3,101,50,0,1851,1852,3,111,55,0,1852,1853,3,111,55,
	0,1853,1854,3,93,46,0,1854,1855,3,119,59,0,1855,394,1,0,0,0,1856,1857,3,
	101,50,0,1857,1858,3,111,55,0,1858,1859,3,121,60,0,1859,1860,3,93,46,0,
	1860,1861,3,119,59,0,1861,1862,3,123,61,0,1862,396,1,0,0,0,1863,1864,3,
	101,50,0,1864,1865,3,111,55,0,1865,1866,3,121,60,0,1866,1867,3,123,61,0,
	1867,1868,3,93,46,0,1868,1869,3,85,42,0,1869,1870,3,91,45,0,1870,398,1,
	0,0,0,1871,1872,3,101,50,0,1872,1873,3,111,55,0,1873,1874,3,123,61,0,1874,
	1875,3,93,46,0,1875,1876,3,119,59,0,1876,1877,3,121,60,0,1877,1878,3,93,
	46,0,1878,1879,3,89,44,0,1879,1880,3,123,61,0,1880,400,1,0,0,0,1881,1882,
	3,101,50,0,1882,1883,3,111,55,0,1883,1884,3,123,61,0,1884,1885,3,113,56,
	0,1885,402,1,0,0,0,1886,1887,3,101,50,0,1887,1888,3,121,60,0,1888,404,1,
	0,0,0,1889,1890,3,101,50,0,1890,1891,3,121,60,0,1891,1892,3,111,55,0,1892,
	1893,3,125,62,0,1893,1894,3,107,53,0,1894,1895,3,107,53,0,1895,406,1,0,
	0,0,1896,1897,3,103,51,0,1897,1898,3,113,56,0,1898,1899,3,101,50,0,1899,
	1900,3,111,55,0,1900,408,1,0,0,0,1901,1902,3,103,51,0,1902,1903,3,121,60,
	0,1903,1904,3,113,56,0,1904,1905,3,111,55,0,1905,1906,5,95,0,0,1906,1907,
	3,93,46,0,1907,1908,3,131,65,0,1908,1909,3,101,50,0,1909,1910,3,121,60,
	0,1910,1911,3,123,61,0,1911,1912,3,121,60,0,1912,410,1,0,0,0,1913,1914,
	3,103,51,0,1914,1915,3,121,60,0,1915,1916,3,113,56,0,1916,1917,3,111,55,
	0,1917,1918,5,95,0,0,1918,1919,3,117,58,0,1919,1920,3,125,62,0,1920,1921,
	3,93,46,0,1921,1922,3,119,59,0,1922,1923,3,133,66,0,1923,412,1,0,0,0,1924,
	1925,3,103,51,0,1925,1926,3,121,60,0,1926,1927,3,113,56,0,1927,1928,3,111,
	55,0,1928,1929,5,95,0,0,1929,1930,3,127,63,0,1930,1931,3,85,42,0,1931,1932,
	3,107,53,0,1932,1933,3,125,62,0,1933,1934,3,93,46,0,1934,414,1,0,0,0,1935,
	1936,3,105,52,0,1936,1937,3,93,46,0,1937,1938,3,133,66,0,1938,416,1,0,0,
	0,1939,1940,3,107,53,0,1940,1941,3,85,42,0,1941,1942,3,121,60,0,1942,1943,
	3,123,61,0,1943,418,1,0,0,0,1944,1945,3,107,53,0,1945,1946,3,93,46,0,1946,
	1947,3,95,47,0,1947,1948,3,123,61,0,1948,420,1,0,0,0,1949,1950,3,107,53,
	0,1950,1951,3,93,46,0,1951,1952,3,97,48,0,1952,1953,3,85,42,0,1953,1954,
	3,89,44,0,1954,1955,3,133,66,0,1955,422,1,0,0,0,1956,1957,3,107,53,0,1957,
	1958,3,101,50,0,1958,1959,3,105,52,0,1959,1960,3,93,46,0,1960,424,1,0,0,
	0,1961,1962,3,107,53,0,1962,1963,3,101,50,0,1963,1964,3,109,54,0,1964,1965,
	3,101,50,0,1965,1966,3,123,61,0,1966,426,1,0,0,0,1967,1968,3,107,53,0,1968,
	1969,3,101,50,0,1969,1970,3,121,60,0,1970,1971,3,123,61,0,1971,428,1,0,
	0,0,1972,1973,3,107,53,0,1973,1974,3,113,56,0,1974,1975,3,89,44,0,1975,
	1976,3,85,42,0,1976,1977,3,107,53,0,1977,430,1,0,0,0,1978,1979,3,107,53,
	0,1979,1980,3,113,56,0,1980,1981,3,97,48,0,1981,1982,3,101,50,0,1982,1983,
	3,111,55,0,1983,432,1,0,0,0,1984,1985,3,109,54,0,1985,1986,3,85,42,0,1986,
	1987,3,111,55,0,1987,1988,3,85,42,0,1988,1989,3,97,48,0,1989,1990,3,93,
	46,0,1990,434,1,0,0,0,1991,1992,3,109,54,0,1992,1993,3,85,42,0,1993,1994,
	3,123,61,0,1994,1995,3,89,44,0,1995,1996,3,99,49,0,1996,436,1,0,0,0,1997,
	1998,3,109,54,0,1998,1999,3,85,42,0,1999,2000,3,123,61,0,2000,2001,3,89,
	44,0,2001,2002,3,99,49,0,2002,2003,3,93,46,0,2003,2004,3,121,60,0,2004,
	438,1,0,0,0,2005,2006,3,109,54,0,2006,2007,3,85,42,0,2007,2008,3,123,61,
	0,2008,2009,3,89,44,0,2009,2010,3,99,49,0,2010,2011,5,95,0,0,2011,2012,
	3,119,59,0,2012,2013,3,93,46,0,2013,2014,3,89,44,0,2014,2015,3,113,56,0,
	2015,2016,3,97,48,0,2016,2017,3,111,55,0,2017,2018,3,101,50,0,2018,2019,
	3,135,67,0,2019,2020,3,93,46,0,2020,440,1,0,0,0,2021,2022,3,109,54,0,2022,
	2023,3,93,46,0,2023,2024,3,85,42,0,2024,2025,3,121,60,0,2025,2026,3,125,
	62,0,2026,2027,3,119,59,0,2027,2028,3,93,46,0,2028,2029,3,121,60,0,2029,
	442,1,0,0,0,2030,2031,3,109,54,0,2031,2032,3,101,50,0,2032,2033,3,89,44,
	0,2033,2034,3,119,59,0,2034,2035,3,113,56,0,2035,2036,3,121,60,0,2036,2037,
	3,93,46,0,2037,2038,3,89,44,0,2038,2039,3,113,56,0,2039,2040,3,111,55,0,
	2040,2041,3,91,45,0,2041,2042,3,121,60,0,2042,444,1,0,0,0,2043,2044,3,109,
	54,0,2044,2045,3,101,50,0,2045,2046,3,107,53,0,2046,2047,3,107,53,0,2047,
	2048,3,101,50,0,2048,2049,3,121,60,0,2049,2050,3,93,46,0,2050,2051,3,89,
	44,0,2051,2052,3,113,56,0,2052,2053,3,111,55,0,2053,2054,3,91,45,0,2054,
	2055,3,121,60,0,2055,446,1,0,0,0,2056,2057,3,109,54,0,2057,2058,3,113,56,
	0,2058,2059,3,91,45,0,2059,2060,3,101,50,0,2060,2061,3,95,47,0,2061,2062,
	3,133,66,0,2062,448,1,0,0,0,2063,2064,3,111,55,0,2064,2065,3,85,42,0,2065,
	2066,3,111,55,0,2066,2067,3,113,56,0,2067,2068,3,121,60,0,2068,2069,3,93,
	46,0,2069,2070,3,89,44,0,2070,2071,3,113,56,0,2071,2072,3,111,55,0,2072,
	2073,3,91,45,0,2073,2074,3,121,60,0,2074,450,1,0,0,0,2075,2076,3,111,55,
	0,2076,2077,3,85,42,0,2077,2078,3,123,61,0,2078,2079,3,125,62,0,2079,2080,
	3,119,59,0,2080,2081,3,85,42,0,2081,2082,3,107,53,0,2082,452,1,0,0,0,2083,
	2084,3,111,55,0,2084,2085,3,93,46,0,2085,2086,3,131,65,0,2086,2087,3,123,
	61,0,2087,454,1,0,0,0,2088,2089,3,111,55,0,2089,2090,3,113,56,0,2090,456,
	1,0,0,0,2091,2092,3,111,55,0,2092,2093,3,113,56,0,2093,2094,3,107,53,0,
	2094,2095,3,113,56,0,2095,2096,3,97,48,0,2096,2097,3,101,50,0,2097,2098,
	3,111,55,0,2098,458,1,0,0,0,2099,2100,3,111,55,0,2100,2101,3,113,56,0,2101,
	2102,3,123,61,0,2102,460,1,0,0,0,2103,2104,3,111,55,0,2104,2105,3,113,56,
	0,2105,2106,3,123,61,0,2106,2107,3,111,55,0,2107,2108,3,125,62,0,2108,2109,
	3,107,53,0,2109,2110,3,107,53,0,2110,462,1,0,0,0,2111,2112,3,111,55,0,2112,
	2113,3,125,62,0,2113,2114,3,107,53,0,2114,2115,3,107,53,0,2115,464,1,0,
	0,0,2116,2117,3,111,55,0,2117,2118,3,125,62,0,2118,2119,3,107,53,0,2119,
	2120,3,107,53,0,2120,2121,3,121,60,0,2121,466,1,0,0,0,2122,2123,3,113,56,
	0,2123,2124,3,87,43,0,2124,2125,3,103,51,0,2125,2126,3,93,46,0,2126,2127,
	3,89,44,0,2127,2128,3,123,61,0,2128,468,1,0,0,0,2129,2130,3,113,56,0,2130,
	2131,3,95,47,0,2131,470,1,0,0,0,2132,2133,3,113,56,0,2133,2134,3,95,47,
	0,2134,2135,3,95,47,0,2135,2136,3,121,60,0,2136,2137,3,93,46,0,2137,2138,
	3,123,61,0,2138,472,1,0,0,0,2139,2140,3,113,56,0,2140,2141,3,109,54,0,2141,
	2142,3,101,50,0,2142,2143,3,123,61,0,2143,474,1,0,0,0,2144,2145,3,113,56,
	0,2145,2146,3,111,55,0,2146,476,1,0,0,0,2147,2148,3,113,56,0,2148,2149,
	3,111,55,0,2149,2150,3,93,46,0,2150,478,1,0,0,0,2151,2152,3,113,56,0,2152,
	2153,3,111,55,0,2153,2154,3,107,53,0,2154,2155,3,133,66,0,2155,480,1,0,
	0,0,2156,2157,3,113,56,0,2157,2158,3,115,57,0,2158,2159,3,123,61,0,2159,
	2160,3,101,50,0,2160,2161,3,113,56,0,2161,2162,3,111,55,0,2162,482,1,0,
	0,0,2163,2164,3,113,56,0,2164,2165,3,115,57,0,2165,2166,3,123,61,0,2166,
	2167,3,101,50,0,2167,2168,3,113,56,0,2168,2169,3,111,55,0,2169,2170,3,85,
	42,0,2170,2171,3,107,53,0,2171,484,1,0,0,0,2172,2173,3,113,56,0,2173,2174,
	3,119,59,0,2174,486,1,0,0,0,2175,2176,3,113,56,0,2176,2177,3,119,59,0,2177,
	2178,3,91,45,0,2178,2179,3,93,46,0,2179,2180,3,119,59,0,2180,488,1,0,0,
	0,2181,2182,3,113,56,0,2182,2183,3,123,61,0,2183,2184,3,99,49,0,2184,2185,
	3,93,46,0,2185,2186,3,119,59,0,2186,2187,3,121,60,0,2187,490,1,0,0,0,2188,
	2189,3,113,56,0,2189,2190,3,125,62,0,2190,2191,3,123,61,0,2191,2192,3,93,
	46,0,2192,2193,3,119,59,0,2193,492,1,0,0,0,2194,2195,3,113,56,0,2195,2196,
	3,127,63,0,2196,2197,3,93,46,0,2197,2198,3,119,59,0,2198,494,1,0,0,0,2199,
	2200,3,115,57,0,2200,2201,3,85,42,0,2201,2202,3,119,59,0,2202,2203,3,85,
	42,0,2203,2204,3,107,53,0,2204,2205,3,107,53,0,2205,2206,3,93,46,0,2206,
	2207,3,107,53,0,2207,496,1,0,0,0,2208,2209,3,115,57,0,2209,2210,3,85,42,
	0,2210,2211,3,119,59,0,2211,2212,3,123,61,0,2212,2213,3,101,50,0,2213,2214,
	3,123,61,0,2214,2215,3,101,50,0,2215,2216,3,113,56,0,2216,2217,3,111,55,
	0,2217,498,1,0,0,0,2218,2219,3,115,57,0,2219,2220,3,85,42,0,2220,2221,3,
	121,60,0,2221,2222,3,121,60,0,2222,2223,3,101,50,0,2223,2224,3,111,55,0,
	2224,2225,3,97,48,0,2225,500,1,0,0,0,2226,2227,3,115,57,0,2227,2228,3,85,
	42,0,2228,2229,3,121,60,0,2229,2230,3,121,60,0,2230,2231,3,129,64,0,2231,
	2232,3,113,56,0,2232,2233,3,119,59,0,2233,2234,3,91,45,0,2234,502,1,0,0,
	0,2235,2236,3,115,57,0,2236,2237,3,85,42,0,2237,2238,3,121,60,0,2238,2239,
	3,123,61,0,2239,504,1,0,0,0,2240,2241,3,115,57,0,2241,2242,3,85,42,0,2242,
	2243,3,123,61,0,2243,2244,3,123,61,0,2244,2245,3,93,46,0,2245,2246,3,119,
	59,0,2246,2247,3,111,55,0,2247,506,1,0,0,0,2248,2249,3,115,57,0,2249,2250,
	3,93,46,0,2250,2251,3,119,59,0,2251,508,1,0,0,0,2252,2253,3,115,57,0,2253,
	2254,3,93,46,0,2254,2255,3,119,59,0,2255,2256,3,109,54,0,2256,2257,3,125,
	62,0,2257,2258,3,123,61,0,2258,2259,3,93,46,0,2259,510,1,0,0,0,2260,2261,
	3,115,57,0,2261,2262,3,107,53,0,2262,2263,3,85,42,0,2263,2264,3,111,55,
	0,2264,512,1,0,0,0,2265,2266,3,115,57,0,2266,2267,3,113,56,0,2267,2268,
	3,113,56,0,2268,2269,3,107,53,0,2269,514,1,0,0,0,2270,2271,3,115,57,0,2271,
	2272,3,119,59,0,2272,2273,3,85,42,0,2273,2274,3,97,48,0,2274,2275,3,109,
	54,0,2275,2276,3,85,42,0,2276,516,1,0,0,0,2277,2278,3,115,57,0,2278,2279,
	3,119,59,0,2279,2280,3,93,46,0,2280,2281,3,89,44,0,2281,2282,3,93,46,0,
	2282,2283,3,91,45,0,2283,2284,3,101,50,0,2284,2285,3,111,55,0,2285,2286,
	3,97,48,0,2286,518,1,0,0,0,2287,2288,3,115,57,0,2288,2289,3,119,59,0,2289,
	2290,3,93,46,0,2290,2291,3,121,60,0,2291,2292,3,113,56,0,2292,2293,3,119,
	59,0,2293,2294,3,123,61,0,2294,520,1,0,0,0,2295,2296,3,115,57,0,2296,2297,
	3,119,59,0,2297,2298,3,101,50,0,2298,2299,3,109,54,0,2299,2300,3,85,42,
	0,2300,2301,3,119,59,0,2301,2302,3,133,66,0,2302,522,1,0,0,0,2303,2304,
	3,115,57,0,2304,2305,3,119,59,0,2305,2306,3,101,50,0,2306,2307,3,127,63,
	0,2307,2308,3,101,50,0,2308,2309,3,107,53,0,2309,2310,3,93,46,0,2310,2311,
	3,97,48,0,2311,2312,3,93,46,0,2312,2313,3,121,60,0,2313,524,1,0,0,0,2314,
	2315,3,115,57,0,2315,2316,3,119,59,0,2316,2317,3,113,56,0,2317,2318,3,89,
	44,0,2318,2319,3,93,46,0,2319,2320,3,121,60,0,2320,2321,3,121,60,0,2321,
	526,1,0,0,0,2322,2323,3,117,58,0,2323,2324,3,125,62,0,2324,2325,3,93,46,
	0,2325,2326,3,119,59,0,2326,2327,3,133,66,0,2327,528,1,0,0,0,2328,2329,
	3,117,58,0,2329,2330,3,125,62,0,2330,2331,3,93,46,0,2331,2332,3,125,62,
	0,2332,2333,3,93,46,0,2333,530,1,0,0,0,2334,2335,3,119,59,0,2335,2336,3,
	85,42,0,2336,2337,3,101,50,0,2337,2338,3,121,60,0,2338,2339,3,93,46,0,2339,
	532,1,0,0,0,2340,2341,3,119,59,0,2341,2342,3,85,42,0,2342,2343,3,111,55,
	0,2343,2344,3,97,48,0,2344,2345,3,93,46,0,2345,534,1,0,0,0,2346,2347,3,
	119,59,0,2347,2348,3,93,46,0,2348,2349,3,91,45,0,2349,2350,3,125,62,0,2350,
	2351,3,89,44,0,2351,2352,3,93,46,0,2352,536,1,0,0,0,2353,2354,3,119,59,
	0,2354,2355,3,93,46,0,2355,2356,3,95,47,0,2356,2357,3,93,46,0,2357,2358,
	3,119,59,0,2358,2359,3,93,46,0,2359,2360,3,111,55,0,2360,2361,3,89,44,0,
	2361,2362,3,93,46,0,2362,2363,3,121,60,0,2363,538,1,0,0,0,2364,2365,3,119,
	59,0,2365,2366,3,93,46,0,2366,2367,3,97,48,0,2367,2368,3,93,46,0,2368,2369,
	3,131,65,0,2369,2370,3,115,57,0,2370,540,1,0,0,0,2371,2372,3,119,59,0,2372,
	2373,3,93,46,0,2373,2374,3,101,50,0,2374,2375,3,111,55,0,2375,2376,3,91,
	45,0,2376,2377,3,93,46,0,2377,2378,3,131,65,0,2378,542,1,0,0,0,2379,2380,
	3,119,59,0,2380,2381,3,93,46,0,2381,2382,3,107,53,0,2382,2383,3,93,46,0,
	2383,2384,3,85,42,0,2384,2385,3,121,60,0,2385,2386,3,93,46,0,2386,544,1,
	0,0,0,2387,2388,3,119,59,0,2388,2389,3,93,46,0,2389,2390,3,109,54,0,2390,
	2391,3,113,56,0,2391,2392,3,127,63,0,2392,2393,3,93,46,0,2393,546,1,0,0,
	0,2394,2395,3,119,59,0,2395,2396,3,93,46,0,2396,2397,3,111,55,0,2397,2398,
	3,85,42,0,2398,2399,3,109,54,0,2399,2400,3,93,46,0,2400,548,1,0,0,0,2401,
	2402,3,119,59,0,2402,2403,3,93,46,0,2403,2404,3,115,57,0,2404,2405,3,93,
	46,0,2405,2406,3,85,42,0,2406,2407,3,123,61,0,2407,2408,3,85,42,0,2408,
	2409,3,87,43,0,2409,2410,3,107,53,0,2410,2411,3,93,46,0,2411,550,1,0,0,
	0,2412,2413,3,119,59,0,2413,2414,3,93,46,0,2414,2415,3,115,57,0,2415,2416,
	3,107,53,0,2416,2417,3,85,42,0,2417,2418,3,89,44,0,2418,2419,3,93,46,0,
	2419,552,1,0,0,0,2420,2421,3,119,59,0,2421,2422,3,93,46,0,2422,2423,3,115,
	57,0,2423,2424,3,107,53,0,2424,2425,3,101,50,0,2425,2426,3,89,44,0,2426,
	2427,3,85,42,0,2427,2428,3,123,61,0,2428,2429,3,101,50,0,2429,2430,3,113,
	56,0,2430,2431,3,111,55,0,2431,554,1,0,0,0,2432,2433,3,119,59,0,2433,2434,
	3,93,46,0,2434,2435,3,121,60,0,2435,2436,3,93,46,0,2436,2437,3,123,61,0,
	2437,556,1,0,0,0,2438,2439,3,119,59,0,2439,2440,3,93,46,0,2440,2441,3,121,
	60,0,2441,2442,3,113,56,0,2442,2443,3,125,62,0,2443,2444,3,119,59,0,2444,
	2445,3,89,44,0,2445,2446,3,93,46,0,2446,558,1,0,0,0,2447,2448,3,119,59,
	0,2448,2449,3,93,46,0,2449,2450,3,121,60,0,2450,2451,3,115,57,0,2451,2452,
	3,93,46,0,2452,2453,3,89,44,0,2453,2454,3,123,61,0,2454,560,1,0,0,0,2455,
	2456,3,119,59,0,2456,2457,3,93,46,0,2457,2458,3,121,60,0,2458,2459,3,123,
	61,0,2459,2460,3,85,42,0,2460,2461,3,119,59,0,2461,2462,3,123,61,0,2462,
	562,1,0,0,0,2463,2464,3,119,59,0,2464,2465,3,93,46,0,2465,2466,3,121,60,
	0,2466,2467,3,123,61,0,2467,2468,3,113,56,0,2468,2469,3,119,59,0,2469,2470,
	3,93,46,0,2470,564,1,0,0,0,2471,2472,3,119,59,0,2472,2473,3,93,46,0,2473,
	2474,3,121,60,0,2474,2475,3,123,61,0,2475,2476,3,119,59,0,2476,2477,3,101,
	50,0,2477,2478,3,89,44,0,2478,2479,3,123,61,0,2479,566,1,0,0,0,2480,2481,
	3,119,59,0,2481,2482,3,93,46,0,2482,2483,3,121,60,0,2483,2484,3,125,62,
	0,2484,2485,3,107,53,0,2485,2486,3,123,61,0,2486,568,1,0,0,0,2487,2488,
	3,119,59,0,2488,2489,3,93,46,0,2489,2490,3,123,61,0,2490,2491,3,125,62,
	0,2491,2492,3,119,59,0,2492,2493,3,111,55,0,2493,570,1,0,0,0,2494,2495,
	3,119,59,0,2495,2496,3,93,46,0,2496,2497,3,123,61,0,2497,2498,3,125,62,
	0,2498,2499,3,119,59,0,2499,2500,3,111,55,0,2500,2501,3,101,50,0,2501,2502,
	3,111,55,0,2502,2503,3,97,48,0,2503,572,1,0,0,0,2504,2505,3,119,59,0,2505,
	2506,3,93,46,0,2506,2507,3,127,63,0,2507,2508,3,93,46,0,2508,2509,3,119,
	59,0,2509,2510,3,123,61,0,2510,574,1,0,0,0,2511,2512,3,119,59,0,2512,2513,
	3,93,46,0,2513,2514,3,127,63,0,2514,2515,3,113,56,0,2515,2516,3,105,52,
	0,2516,2517,3,93,46,0,2517,576,1,0,0,0,2518,2519,3,119,59,0,2519,2520,3,
	101,50,0,2520,2521,3,97,48,0,2521,2522,3,99,49,0,2522,2523,3,123,61,0,2523,
	578,1,0,0,0,2524,2525,3,119,59,0,2525,2526,3,107,53,0,2526,2527,3,101,50,
	0,2527,2528,3,105,52,0,2528,2529,3,93,46,0,2529,580,1,0,0,0,2530,2531,3,
	119,59,0,2531,2532,3,113,56,0,2532,2533,3,107,53,0,2533,2534,3,107,53,0,
	2534,2535,3,87,43,0,2535,2536,3,85,42,0,2536,2537,3,89,44,0,2537,2538,3,
	105,52,0,2538,582,1,0,0,0,2539,2540,3,119,59,0,2540,2541,3,113,56,0,2541,
	2542,3,107,53,0,2542,2543,3,107,53,0,2543,2544,3,125,62,0,2544,2545,3,115,
	57,0,2545,584,1,0,0,0,2546,2547,3,119,59,0,2547,2548,3,113,56,0,2548,2549,
	3,129,64,0,2549,586,1,0,0,0,2550,2551,3,119,59,0,2551,2552,3,113,56,0,2552,
	2553,3,129,64,0,2553,2554,3,121,60,0,2554,588,1,0,0,0,2555,2556,3,121,60,
	0,2556,2557,3,85,42,0,2557,2558,3,109,54,0,2558,2559,3,115,57,0,2559,2560,
	3,107,53,0,2560,2561,3,93,46,0,2561,590,1,0,0,0,2562,2563,3,121,60,0,2563,
	2564,3,85,42,0,2564,2565,3,127,63,0,2565,2566,3,93,46,0,2566,2567,3,115,
	57,0,2567,2568,3,113,56,0,2568,2569,3,101,50,0,2569,2570,3,111,55,0,2570,
	2571,3,123,61,0,2571,592,1,0,0,0,2572,2573,3,121,60,0,2573,2574,3,89,44,
	0,2574,2575,3,99,49,0,2575,2576,3,93,46,0,2576,2577,3,109,54,0,2577,2578,
	3,85,42,0,2578,594,1,0,0,0,2579,2580,3,121,60,0,2580,2581,3,93,46,0,2581,
	2582,3,89,44,0,2582,2583,3,113,56,0,2583,2584,3,111,55,0,2584,2585,3,91,
	45,0,2585,2586,3,121,60,0,2586,596,1,0,0,0,2587,2588,3,121,60,0,2588,2589,
	3,93,46,0,2589,2590,3,93,46,0,2590,2591,3,105,52,0,2591,598,1,0,0,0,2592,
	2593,3,121,60,0,2593,2594,3,93,46,0,2594,2595,3,107,53,0,2595,2596,3,93,
	46,0,2596,2597,3,89,44,0,2597,2598,3,123,61,0,2598,600,1,0,0,0,2599,2600,
	3,121,60,0,2600,2601,3,93,46,0,2601,2602,3,109,54,0,2602,2603,3,101,50,
	0,2603,602,1,0,0,0,2604,2605,3,121,60,0,2605,2606,3,93,46,0,2606,2607,3,
	123,61,0,2607,604,1,0,0,0,2608,2609,3,121,60,0,2609,2610,3,93,46,0,2610,
	2611,3,123,61,0,2611,2612,3,121,60,0,2612,606,1,0,0,0,2613,2614,3,121,60,
	0,2614,2615,3,99,49,0,2615,2616,3,113,56,0,2616,2617,3,129,64,0,2617,608,
	1,0,0,0,2618,2619,3,121,60,0,2619,2620,3,105,52,0,2620,2621,3,101,50,0,
	2621,2622,3,115,57,0,2622,610,1,0,0,0,2623,2624,3,121,60,0,2624,2625,3,
	93,46,0,2625,2626,3,117,58,0,2626,2627,3,125,62,0,2627,2628,3,93,46,0,2628,
	2629,3,111,55,0,2629,2630,3,89,44,0,2630,2631,3,93,46,0,2631,612,1,0,0,
	0,2632,2633,3,121,60,0,2633,2634,3,113,56,0,2634,2635,3,125,62,0,2635,2636,
	3,119,59,0,2636,2637,3,89,44,0,2637,2638,3,93,46,0,2638,614,1,0,0,0,2639,
	2640,3,121,60,0,2640,2641,3,123,61,0,2641,2642,3,85,42,0,2642,2643,3,119,
	59,0,2643,2644,3,123,61,0,2644,616,1,0,0,0,2645,2646,3,121,60,0,2646,2647,
	3,123,61,0,2647,2648,3,119,59,0,2648,2649,3,93,46,0,2649,2650,3,85,42,0,
	2650,2651,3,109,54,0,2651,618,1,0,0,0,2652,2653,3,121,60,0,2653,2654,3,
	123,61,0,2654,2655,3,119,59,0,2655,2656,3,125,62,0,2656,2657,3,89,44,0,
	2657,2658,3,123,61,0,2658,620,1,0,0,0,2659,2660,3,121,60,0,2660,2661,3,
	125,62,0,2661,2662,3,87,43,0,2662,2663,3,117,58,0,2663,2664,3,125,62,0,
	2664,2665,3,93,46,0,2665,2666,3,119,59,0,2666,2667,3,133,66,0,2667,622,
	1,0,0,0,2668,2669,3,121,60,0,2669,2670,3,125,62,0,2670,2671,3,87,43,0,2671,
	2672,3,121,60,0,2672,2673,3,93,46,0,2673,2674,3,123,61,0,2674,624,1,0,0,
	0,2675,2676,3,121,60,0,2676,2677,3,133,66,0,2677,2678,3,109,54,0,2678,2679,
	3,87,43,0,2679,2680,3,113,56,0,2680,2681,3,107,53,0,2681,2682,3,121,60,
	0,2682,626,1,0,0,0,2683,2684,3,121,60,0,2684,2685,3,133,66,0,2685,2686,
	3,109,54,0,2686,2687,3,109,54,0,2687,2688,3,93,46,0,2688,2689,3,123,61,
	0,2689,2690,3,119,59,0,2690,2691,3,101,50,0,2691,2692,3,89,44,0,2692,628,
	1,0,0,0,2693,2694,3,121,60,0,2694,2695,3,133,66,0,2695,2696,3,111,55,0,
	2696,2697,3,89,44,0,2697,630,1,0,0,0,2698,2699,3,121,60,0,2699,2700,3,133,
	66,0,2700,2701,3,121,60,0,2701,2702,3,123,61,0,2702,2703,3,93,46,0,2703,
	2704,3,109,54,0,2704,632,1,0,0,0,2705,2706,3,123,61,0,2706,2707,3,85,42,
	0,2707,2708,3,87,43,0,2708,2709,3,107,53,0,2709,2710,3,93,46,0,2710,634,
	1,0,0,0,2711,2712,3,123,61,0,2712,2713,3,85,42,0,2713,2714,3,87,43,0,2714,
	2715,3,107,53,0,2715,2716,3,93,46,0,2716,2717,3,121,60,0,2717,636,1,0,0,
	0,2718,2719,3,123,61,0,2719,2720,3,85,42,0,2720,2721,3,87,43,0,2721,2722,
	3,107,53,0,2722,2723,3,93,46,0,2723,2724,3,121,60,0,2724,2725,3,85,42,0,
	2725,2726,3,109,54,0,2726,2727,3,115,57,0,2727,2728,3,107,53,0,2728,2729,
	3,93,46,0,2729,638,1,0,0,0,2730,2731,3,123,61,0,2731,2732,3,85,42,0,2732,
	2733,3,87,43,0,2733,2734,3,107,53,0,2734,2735,3,93,46,0,2735,2736,3,121,
	60,0,2736,2737,3,123,61,0,2737,2738,3,113,56,0,2738,2739,3,119,59,0,2739,
	2740,3,93,46,0,2740,640,1,0,0,0,2741,2742,3,123,61,0,2742,2743,3,85,42,
	0,2743,2744,3,97,48,0,2744,2745,3,97,48,0,2745,2746,3,93,46,0,2746,2747,
	3,91,45,0,2747,642,1,0,0,0,2748,2749,3,123,61,0,2749,2750,3,93,46,0,2750,
	2751,3,109,54,0,2751,2752,3,115,57,0,2752,644,1,0,0,0,2753,2754,3,123,61,
	0,2754,2755,3,93,46,0,2755,2756,3,109,54,0,2756,2757,3,115,57,0,2757,2758,
	3,113,56,0,2758,2759,3,119,59,0,2759,2760,3,85,42,0,2760,2761,3,119,59,
	0,2761,2762,3,133,66,0,2762,646,1,0,0,0,2763,2764,3,123,61,0,2764,2765,
	3,99,49,0,2765,2766,3,93,46,0,2766,2767,3,111,55,0,2767,648,1,0,0,0,2768,
	2769,3,123,61,0,2769,2770,3,101,50,0,2770,2771,3,93,46,0,2771,2772,3,121,
	60,0,2772,650,1,0,0,0,2773,2774,3,123,61,0,2774,2775,3,113,56,0,2775,652,
	1,0,0,0,2776,2777,3,123,61,0,2777,2778,3,113,56,0,2778,2779,3,115,57,0,
	2779,2780,3,101,50,0,2780,2781,3,89,44,0,2781,654,1,0,0,0,2782,2783,3,123,
	61,0,2783,2784,3,119,59,0,2784,2785,3,85,42,0,2785,2786,3,111,55,0,2786,
	2787,3,121,60,0,2787,2788,3,85,42,0,2788,2789,3,89,44,0,2789,2790,3,123,
	61,0,2790,2791,3,101,50,0,2791,2792,3,113,56,0,2792,2793,3,111,55,0,2793,
	656,1,0,0,0,2794,2795,3,123,61,0,2795,2796,3,119,59,0,2796,2797,3,101,50,
	0,2797,2798,3,97,48,0,2798,2799,3,97,48,0,2799,2800,3,93,46,0,2800,2801,
	3,119,59,0,2801,658,1,0,0,0,2802,2803,3,123,61,0,2803,2804,3,119,59,0,2804,
	2805,3,125,62,0,2805,2806,3,93,46,0,2806,660,1,0,0,0,2807,2808,3,123,61,
	0,2808,2809,3,125,62,0,2809,2810,3,115,57,0,2810,2811,3,107,53,0,2811,2812,
	3,93,46,0,2812,662,1,0,0,0,2813,2814,3,123,61,0,2814,2815,3,133,66,0,2815,
	2816,3,115,57,0,2816,2817,3,93,46,0,2817,664,1,0,0,0,2818,2819,3,125,62,
	0,2819,2820,3,111,55,0,2820,2821,3,87,43,0,2821,2822,3,113,56,0,2822,2823,
	3,125,62,0,2823,2824,3,111,55,0,2824,2825,3,91,45,0,2825,2826,3,93,46,0,
	2826,2827,3,91,45,0,2827,666,1,0,0,0,2828,2829,3,125,62,0,2829,2830,3,111,
	55,0,2830,2831,3,89,44,0,2831,2832,3,113,56,0,2832,2833,3,111,55,0,2833,
	2834,3,91,45,0,2834,2835,3,101,50,0,2835,2836,3,123,61,0,2836,2837,3,101,
	50,0,2837,2838,3,113,56,0,2838,2839,3,111,55,0,2839,2840,3,85,42,0,2840,
	2841,3,107,53,0,2841,668,1,0,0,0,2842,2843,3,125,62,0,2843,2844,3,111,55,
	0,2844,2845,3,101,50,0,2845,2846,3,113,56,0,2846,2847,3,111,55,0,2847,670,
	1,0,0,0,2848,2849,3,125,62,0,2849,2850,3,111,55,0,2850,2851,3,101,50,0,
	2851,2852,3,117,58,0,2852,2853,3,125,62,0,2853,2854,3,93,46,0,2854,672,
	1,0,0,0,2855,2856,3,125,62,0,2856,2857,3,111,55,0,2857,2858,3,105,52,0,
	2858,2859,3,111,55,0,2859,2860,3,113,56,0,2860,2861,3,129,64,0,2861,2862,
	3,111,55,0,2862,674,1,0,0,0,2863,2864,3,125,62,0,2864,2865,3,111,55,0,2865,
	2866,3,109,54,0,2866,2867,3,85,42,0,2867,2868,3,123,61,0,2868,2869,3,89,
	44,0,2869,2870,3,99,49,0,2870,2871,3,93,46,0,2871,2872,3,91,45,0,2872,676,
	1,0,0,0,2873,2874,3,125,62,0,2874,2875,3,115,57,0,2875,2876,3,91,45,0,2876,
	2877,3,85,42,0,2877,2878,3,123,61,0,2878,2879,3,93,46,0,2879,678,1,0,0,
	0,2880,2881,3,125,62,0,2881,2882,3,115,57,0,2882,2883,3,121,60,0,2883,2884,
	3,93,46,0,2884,2885,3,119,59,0,2885,2886,3,123,61,0,2886,680,1,0,0,0,2887,
	2888,3,125,62,0,2888,2889,3,121,60,0,2889,2890,3,93,46,0,2890,682,1,0,0,
	0,2891,2892,3,125,62,0,2892,2893,3,121,60,0,2893,2894,3,93,46,0,2894,2895,
	3,119,59,0,2895,684,1,0,0,0,2896,2897,3,125,62,0,2897,2898,3,121,60,0,2898,
	2899,3,101,50,0,2899,2900,3,111,55,0,2900,2901,3,97,48,0,2901,686,1,0,0,
	0,2902,2903,3,127,63,0,2903,2904,3,85,42,0,2904,2905,3,89,44,0,2905,2906,
	3,125,62,0,2906,2907,3,125,62,0,2907,2908,3,109,54,0,2908,688,1,0,0,0,2909,
	2910,3,127,63,0,2910,2911,3,85,42,0,2911,2912,3,107,53,0,2912,2913,3,125,
	62,0,2913,2914,3,93,46,0,2914,2915,3,121,60,0,2915,690,1,0,0,0,2916,2917,
	3,127,63,0,2917,2918,3,85,42,0,2918,2919,3,119,59,0,2919,2920,3,101,50,
	0,2920,2921,3,85,42,0,2921,2922,3,111,55,0,2922,2923,3,123,61,0,2923,692,
	1,0,0,0,2924,2925,3,127,63,0,2925,2926,3,101,50,0,2926,2927,3,93,46,0,2927,
	2928,3,129,64,0,2928,694,1,0,0,0,2929,2930,3,127,63,0,2930,2931,3,101,50,
	0,2931,2932,3,119,59,0,2932,2933,3,123,61,0,2933,2934,3,125,62,0,2934,2935,
	3,85,42,0,2935,2936,3,107,53,0,2936,696,1,0,0,0,2937,2938,3,129,64,0,2938,
	2939,3,99,49,0,2939,2940,3,93,46,0,2940,2941,3,111,55,0,2941,698,1,0,0,
	0,2942,2943,3,129,64,0,2943,2944,3,99,49,0,2944,2945,3,93,46,0,2945,2946,
	3,119,59,0,2946,2947,3,93,46,0,2947,700,1,0,0,0,2948,2949,3,129,64,0,2949,
	2950,3,101,50,0,2950,2951,3,111,55,0,2951,2952,3,91,45,0,2952,2953,3,113,
	56,0,2953,2954,3,129,64,0,2954,702,1,0,0,0,2955,2956,3,129,64,0,2956,2957,
	3,101,50,0,2957,2958,3,123,61,0,2958,2959,3,99,49,0,2959,704,1,0,0,0,2960,
	2961,3,129,64,0,2961,2962,3,101,50,0,2962,2963,3,123,61,0,2963,2964,3,99,
	49,0,2964,2965,3,113,56,0,2965,2966,3,125,62,0,2966,2967,3,123,61,0,2967,
	706,1,0,0,0,2968,2969,3,129,64,0,2969,2970,3,119,59,0,2970,2971,3,85,42,
	0,2971,2972,3,115,57,0,2972,2973,3,115,57,0,2973,2974,3,93,46,0,2974,2975,
	3,119,59,0,2975,708,1,0,0,0,2976,2977,3,131,65,0,2977,2978,3,113,56,0,2978,
	2979,3,119,59,0,2979,710,1,0,0,0,2980,2984,8,26,0,0,2981,2982,5,92,0,0,
	2982,2984,9,0,0,0,2983,2980,1,0,0,0,2983,2981,1,0,0,0,2984,712,1,0,0,0,
	2985,2989,8,27,0,0,2986,2987,5,92,0,0,2987,2989,9,0,0,0,2988,2985,1,0,0,
	0,2988,2986,1,0,0,0,2989,714,1,0,0,0,2990,2994,3,79,39,0,2991,2993,3,711,
	355,0,2992,2991,1,0,0,0,2993,2996,1,0,0,0,2994,2992,1,0,0,0,2994,2995,1,
	0,0,0,2995,2997,1,0,0,0,2996,2994,1,0,0,0,2997,2998,3,79,39,0,2998,716,
	1,0,0,0,2999,3003,3,77,38,0,3000,3002,3,713,356,0,3001,3000,1,0,0,0,3002,
	3005,1,0,0,0,3003,3001,1,0,0,0,3003,3004,1,0,0,0,3004,3006,1,0,0,0,3005,
	3003,1,0,0,0,3006,3007,3,77,38,0,3007,718,1,0,0,0,3008,3012,3,83,41,0,3009,
	3011,9,0,0,0,3010,3009,1,0,0,0,3011,3014,1,0,0,0,3012,3013,1,0,0,0,3012,
	3010,1,0,0,0,3013,3015,1,0,0,0,3014,3012,1,0,0,0,3015,3016,3,83,41,0,3016,
	3018,1,0,0,0,3017,3008,1,0,0,0,3018,3019,1,0,0,0,3019,3017,1,0,0,0,3019,
	3020,1,0,0,0,3020,3022,1,0,0,0,3021,3023,3,57,28,0,3022,3021,1,0,0,0,3022,
	3023,1,0,0,0,3023,720,1,0,0,0,3024,3028,3,715,357,0,3025,3028,3,717,358,
	0,3026,3028,3,719,359,0,3027,3024,1,0,0,0,3027,3025,1,0,0,0,3027,3026,1,
	0,0,0,3028,3039,1,0,0,0,3029,3040,3,121,60,0,3030,3040,3,125,62,0,3031,
	3040,3,133,66,0,3032,3040,3,103,51,0,3033,3037,3,115,57,0,3034,3038,3,123,
	61,0,3035,3038,3,87,43,0,3036,3038,3,127,63,0,3037,3034,1,0,0,0,3037,3035,
	1,0,0,0,3037,3036,1,0,0,0,3037,3038,1,0,0,0,3038,3040,1,0,0,0,3039,3029,
	1,0,0,0,3039,3030,1,0,0,0,3039,3031,1,0,0,0,3039,3032,1,0,0,0,3039,3033,
	1,0,0,0,3039,3040,1,0,0,0,3040,722,1,0,0,0,3041,3046,7,28,0,0,3042,3045,
	7,28,0,0,3043,3045,3,729,364,0,3044,3042,1,0,0,0,3044,3043,1,0,0,0,3045,
	3048,1,0,0,0,3046,3044,1,0,0,0,3046,3047,1,0,0,0,3047,724,1,0,0,0,3048,
	3046,1,0,0,0,3049,3050,5,92,0,0,3050,3055,9,0,0,0,3051,3052,5,96,0,0,3052,
	3055,5,96,0,0,3053,3055,8,29,0,0,3054,3049,1,0,0,0,3054,3051,1,0,0,0,3054,
	3053,1,0,0,0,3055,726,1,0,0,0,3056,3060,3,81,40,0,3057,3059,3,725,362,0,
	3058,3057,1,0,0,0,3059,3062,1,0,0,0,3060,3058,1,0,0,0,3060,3061,1,0,0,0,
	3061,3063,1,0,0,0,3062,3060,1,0,0,0,3063,3064,3,81,40,0,3064,728,1,0,0,
	0,3065,3066,2,48,57,0,3066,730,1,0,0,0,3067,3068,7,30,0,0,3068,732,1,0,
	0,0,3069,3070,5,48,0,0,3070,3072,3,131,65,0,3071,3073,3,731,365,0,3072,
	3071,1,0,0,0,3073,3074,1,0,0,0,3074,3072,1,0,0,0,3074,3075,1,0,0,0,3075,
	734,1,0,0,0,3076,3077,5,48,0,0,3077,3079,3,113,56,0,3078,3080,2,48,56,0,
	3079,3078,1,0,0,0,3080,3081,1,0,0,0,3081,3079,1,0,0,0,3081,3082,1,0,0,0,
	3082,736,1,0,0,0,3083,3084,5,48,0,0,3084,3086,3,87,43,0,3085,3087,2,48,
	49,0,3086,3085,1,0,0,0,3087,3088,1,0,0,0,3088,3086,1,0,0,0,3088,3089,1,
	0,0,0,3089,738,1,0,0,0,3090,3092,3,729,364,0,3091,3090,1,0,0,0,3092,3093,
	1,0,0,0,3093,3091,1,0,0,0,3093,3094,1,0,0,0,3094,740,1,0,0,0,3095,3100,
	3,739,369,0,3096,3100,3,733,366,0,3097,3100,3,735,367,0,3098,3100,3,737,
	368,0,3099,3095,1,0,0,0,3099,3096,1,0,0,0,3099,3097,1,0,0,0,3099,3098,1,
	0,0,0,3100,742,1,0,0,0,3101,3104,3,741,370,0,3102,3105,3,115,57,0,3103,
	3105,3,125,62,0,3104,3102,1,0,0,0,3104,3103,1,0,0,0,3104,3105,1,0,0,0,3105,
	3112,1,0,0,0,3106,3113,3,107,53,0,3107,3113,3,121,60,0,3108,3113,3,123,
	61,0,3109,3113,3,101,50,0,3110,3113,3,87,43,0,3111,3113,3,111,55,0,3112,
	3106,1,0,0,0,3112,3107,1,0,0,0,3112,3108,1,0,0,0,3112,3109,1,0,0,0,3112,
	3110,1,0,0,0,3112,3111,1,0,0,0,3112,3113,1,0,0,0,3113,744,1,0,0,0,3114,
	3117,3,93,46,0,3115,3118,3,31,15,0,3116,3118,3,33,16,0,3117,3115,1,0,0,
	0,3117,3116,1,0,0,0,3117,3118,1,0,0,0,3118,3119,1,0,0,0,3119,3120,3,739,
	369,0,3120,746,1,0,0,0,3121,3122,3,739,369,0,3122,3126,3,45,22,0,3123,3125,
	3,729,364,0,3124,3123,1,0,0,0,3125,3128,1,0,0,0,3126,3124,1,0,0,0,3126,
	3127,1,0,0,0,3127,3130,1,0,0,0,3128,3126,1,0,0,0,3129,3131,3,745,372,0,
	3130,3129,1,0,0,0,3130,3131,1,0,0,0,3131,3136,1,0,0,0,3132,3133,3,739,369,
	0,3133,3134,3,745,372,0,3134,3136,1,0,0,0,3135,3121,1,0,0,0,3135,3132,1,
	0,0,0,3136,3145,1,0,0,0,3137,3146,3,95,47,0,3138,3143,3,115,57,0,3139,3140,
	3,95,47,0,3140,3141,7,31,0,0,3141,3144,1,0,0,0,3142,3144,3,111,55,0,3143,
	3139,1,0,0,0,3143,3142,1,0,0,0,3143,3144,1,0,0,0,3144,3146,1,0,0,0,3145,
	3137,1,0,0,0,3145,3138,1,0,0,0,3145,3146,1,0,0,0,3146,748,1,0,0,0,3147,
	3148,3,131,65,0,3148,3150,3,79,39,0,3149,3151,3,731,365,0,3150,3149,1,0,
	0,0,3151,3152,1,0,0,0,3152,3150,1,0,0,0,3152,3153,1,0,0,0,3153,3154,1,0,
	0,0,3154,3155,3,79,39,0,3155,750,1,0,0,0,3156,3157,5,47,0,0,3157,3158,5,
	42,0,0,3158,3162,1,0,0,0,3159,3161,9,0,0,0,3160,3159,1,0,0,0,3161,3164,
	1,0,0,0,3162,3163,1,0,0,0,3162,3160,1,0,0,0,3163,3165,1,0,0,0,3164,3162,
	1,0,0,0,3165,3166,5,42,0,0,3166,3167,5,47,0,0,3167,752,1,0,0,0,3168,3169,
	5,45,0,0,3169,3170,5,45,0,0,3170,3174,1,0,0,0,3171,3173,8,32,0,0,3172,3171,
	1,0,0,0,3173,3176,1,0,0,0,3174,3172,1,0,0,0,3174,3175,1,0,0,0,3175,3182,
	1,0,0,0,3176,3174,1,0,0,0,3177,3179,5,13,0,0,3178,3180,5,10,0,0,3179,3178,
	1,0,0,0,3179,3180,1,0,0,0,3180,3183,1,0,0,0,3181,3183,7,33,0,0,3182,3177,
	1,0,0,0,3182,3181,1,0,0,0,3183,754,1,0,0,0,3184,3185,7,34,0,0,3185,3186,
	1,0,0,0,3186,3187,6,377,0,0,3187,756,1,0,0,0,3188,3191,3,751,375,0,3189,
	3191,3,753,376,0,3190,3188,1,0,0,0,3190,3189,1,0,0,0,3191,3192,1,0,0,0,
	3192,3193,6,378,0,0,3193,758,1,0,0,0,34,0,2983,2988,2994,3003,3012,3019,
	3022,3027,3037,3039,3044,3046,3054,3060,3074,3081,3088,3093,3099,3104,3112,
	3117,3126,3130,3135,3143,3145,3152,3162,3174,3179,3182,3190,1,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!YQLLexer.__ATN) {
			YQLLexer.__ATN = new ATNDeserializer().deserialize(YQLLexer._serializedATN);
		}

		return YQLLexer.__ATN;
	}


	static DecisionsToDFA = YQLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}