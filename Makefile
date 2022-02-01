THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: start stop test
start:
	docker-compose up -d
stop:
	docker-compose down
test:
	npm test