##if block where we can load .env file
ifneq (,$(wildcard ./.env))
include .env
export
ENV_FILE_PARAM = --env-file .env

endif

##declaring tasks
build:
	docker-compose up --build -d --remove-orphans

up:
	docker-compose up -d

down:
	docker-compose down

show-logs:
	docker-compose logs

migrate:
	docker-compose exec api python3 manage.py migrate

makemigrations:
	docker-compose exec api python3 manage.py makemigrations

superuser:
	docker-compose exec api python3 manage.py createsuperuser

collectstatic:
	docker-compose exec api python3 manage.py collectstatic --no-input --clear

down-v:
	docker-compose down -v

volume:
<<<<<<< HEAD
<<<<<<< HEAD
	docker volume inspect real_estate_postgres_data
=======
	docker-volume inspect django_real_estate_postgres_data
>>>>>>> 902181add14f8a243a1f616d2902fedbedf60dc4
=======
	docker volume inspect django_real_estate_postgres_data
>>>>>>> cea0e2d2d04ce52a71e556c5bc9309523d46955d

estate-db:
	docker-compose exec postgres-db psql --username=postgres --dbname=estate

test:
	docker-compose exec api pytest -p no:warnings --cov=.

##test to generate htm report
test-html:
	docker-compose exec api pytest -p no:warnings --cov=. --cov-report html

flake8:
	docker-compose exec api flake8 .

black-check:
	docker-compose exec api black --check --exclude=migrations .

black-diff:
	docker-compose exec api black --diff --exclude=migrations .

black:
	docker-compose exec api black --exclude=migrations .

isort-check:
	docker-compose exec api isort . --check-only --skip venv --skip migrations

isort-diff:
	docker-compose exec api isort . --diff --skip venv --skip migrations

isort:
	docker-compose exec api isort . --skip venv --skip migrations


