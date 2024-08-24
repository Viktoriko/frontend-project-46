install:
	npm ci

gendiff:
	node bin/gendiff.js

gendiff-help:
	node bin/gendiff.js -h

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

