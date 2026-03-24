.PHONY: download tests tests-update
.DEFAULT_GOAL := tests

test:
	@bun gencss.ts

download: 
	bun download.ts

tests:
	bun run vitest --coverage

tests-update:
	bun run vitest --update

tests-view-coverage: ./coverage/index.html
	xdg-open ./coverage/index.html &

tests-add-new-file: test.add.sh
	./test.add.sh

help:
	@printf "\033[0;32mAvailable commands:\033[0m\n"
	@echo "  test                    Run CSS generator"
	@echo "  download                Run download script"
	@echo "  tests                   Run tests with coverage"
	@echo "  tests-update            Update test snapshots"
	@echo "  tests-view-coverage     Open coverage report"
	@echo "  tests-add-new-file      Add a new test file"
