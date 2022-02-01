THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: start stop test dev
start:
	docker-compose up -d
stop:
	docker-compose down
test:
	npm test
dev: 
	docker-compose down
	sudo systemctl start mongod
	npm run dev