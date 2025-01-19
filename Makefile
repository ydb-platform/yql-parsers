IMAGE_NAME=yql-antlr-parser:latest
CURRENT_DIR := $(shell pwd)

ANTLR_VERSION = 4.13.1
COMMIT_HASH ?= 99ceb562485efe2cefe47db042606e38259640c6

.PHONY: build-image clean go python dotnet java all go_clean py_clean

all: go python dotnet java

go: build-image
	docker run --rm -v "$(CURRENT_DIR)/go":/workspace/go $(IMAGE_NAME) \
		java -jar /antlr-${ANTLR_VERSION}-complete.jar -Dlanguage=Go -package yql_antlr4_parser -o go YQL.g4

python: build-image
	docker run --rm -v "$(CURRENT_DIR)/python":/workspace/python $(IMAGE_NAME) \
		java -jar /antlr-${ANTLR_VERSION}-complete.jar -Dlanguage=Python3 -o python YQL.g4
	printf "from YQLParser import *\nfrom YQLLexer import *\nfrom YQLListener import *\n" > python/__init__.py

dotnet: build-image
	docker run --rm -v "$(CURRENT_DIR)/dotnet":/workspace/dotnet $(IMAGE_NAME) \
		java -jar /antlr-${ANTLR_VERSION}-complete.jar -Dlanguage=CSharp -package YQLAntlr4Parser -o dotnet YQL.g4

java: build-image
	docker run --rm -v "$(CURRENT_DIR)/java":/workspace/java $(IMAGE_NAME) \
		java -jar /antlr-${ANTLR_VERSION}-complete.jar -Dlanguage=Java -package yql.antlr4.parser -o java YQL.g4

build-image: 
	docker build --build-arg ANTLR_VERSION=$(ANTLR_VERSION) --build-arg COMMIT_HASH=$(COMMIT_HASH) -t $(IMAGE_NAME) .

clean: go_clean python_clean dotnet_clean java_clean

go_clean:
	rm -rf go/*.go
	rm -rf go/*.interp
	rm -rf go/*.tokens

python_clean:
	rm -rf python/*.py
	rm -rf python/*.interp
	rm -rf python/*.tokens

dotnet_clean:
	rm -rf dotnet/*.cs
	rm -rf dotnet/*.interp
	rm -rf dotnet/*.tokens

java_clean:
	rm -rf java/*.java
	rm -rf java/*.interp
	rm -rf java/*.tokens