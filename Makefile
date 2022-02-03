THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: start stop test dev
start:
	docker-compose up -d
stop:
	docker-compose down
test-local:
	cp .env.example .env
	npm test
dev: 
	cp .env.example .env
	npm run dev
test:
	docker-compose -f docker-compose.test.yml up -d --remove-orphans
	npm test
	docker-compose -f docker-compose.test.yml down