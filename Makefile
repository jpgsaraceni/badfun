THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: start stop test dev test-no-docker
start:
	docker-compose up -d
stop:
	docker-compose down
test:
	npm install
	docker-compose -f docker-compose.test.yml up -d --remove-orphans
	npm test
	docker-compose -f docker-compose.test.yml down
dev: 
	npm install
	cp .env.example .env
	npm run dev
test-no-docker:
	npm install
	npm test