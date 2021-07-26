## Introduction

ShortLink is a URL shortening service where you enter a URL such as https://xyz.co and it
returns a short URL such as http://short.est/GeAi9K. Visiting the shortened URL should redirect
the user to the long URL. Using the example above, visiting http://short.est/GeAi9K should
redirect the user to https://xyz.co.

### How to use the app

```bash

# Clone this repository
$ git clone https://github.com/privatesaint/shortlink.git

# Navigate into the cloned repository
$ cd shortlink

# Install dependencies
$ npm install

# create a copy of env
$ cp .env.example .env

#Provide all the required variables
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Documentation

<!-- using the defined port on the .env.example -->

- [Documentation](http://localhost:3333)

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
