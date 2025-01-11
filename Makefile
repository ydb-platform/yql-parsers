IMAGE_NAME=yql-antlr-parser:latest
ANTLR_VERSION=4.13.2
CURRENT_DIR := $(shell pwd)

.PHONY: build-image clean go python all go_clean py_clean build-image

all: go python

go: build-image
	docker run --rm -v "$(CURRENT_DIR)/go":/workspace/go $(IMAGE_NAME) \
		java -jar /antlr-${ANTLR_VERSION}-complete.jar -Dlanguage=Go -package parser -o go YQL.g4

python: build-image
	docker run --rm -v "$(CURRENT_DIR)/python":/workspace/python $(IMAGE_NAME) \
		java -jar /antlr-${ANTLR_VERSION}-complete.jar -Dlanguage=Python3 -o python YQL.g4
	printf "from YQLParser import *\nfrom YQLLexer import *\nfrom YQLListener import *\n" > python/__init__.py


build-image:
	docker build -t $(IMAGE_NAME) .

clean: go_clean python_clean

go_clean:
	rm -rf go/*.go
	rm -rf go/*.interp
	rm -rf go/*.tokens

python_clean:
	rm -rf python/*.py
	rm -rf python/*.interp
	rm -rf python/*.tokens
