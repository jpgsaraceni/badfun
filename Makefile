THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: start stop test dev
start:
	docker-compose up -d
stop:
	docker-compose down
test:
	cp .env.example .env
	docker-compose down
	sudo systemctl start mongod
	npm test
dev: 
	cp .env.example .env
	docker-compose down
	sudo systemctl start mongod
	npm run dev