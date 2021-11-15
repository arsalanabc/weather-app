test:
	npm test

build-image:test
	docker build -t weather_app:latest .

up:
	docker run -p 3000:3000 weather_app:latest