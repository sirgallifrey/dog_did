# Dependencies

To run this project locally you need the following software:

- nodejs
- [Atlas](https://atlasgo.io/getting-started) (for managing DB schema) 
- docker
- docker-composer

# Running locally

First thing to do is installing dependencies:
```bash
npm i
```

## Setting up the database

First thing you need to do is get your Database running:

```bash
docker-composer up -d
```
This command starts the dogdid database and also a dev database that is used by Atlas to manage schema change and migrations.

Now you need to apply the database schema. 
During development it is ok to just apply database changes, but for production deployments migrations have to be created.

```bash
npm run db:apply
```

## Starting the HTTP server

This command will start the application in watch mode, meaning it will re-start every-time the code changes
```bash
npm start
```

# Architecture

# Contracts vs Domain type

Contracts here serve the purpose to specify the the schema and validation on the web API, altho in most case they will be the same as the domain types, we keep them separate on purpose, so that the internal code can evolve, internal representations can change without silently or accidentally changing contract.

# Database

# Dependency injection