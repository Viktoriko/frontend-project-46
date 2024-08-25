install: deps-install
	npx simple-git-hooks

deps-install:
	npm ci --legacy-peer-deps

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

