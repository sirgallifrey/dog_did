# Architecture

# Contracts vs Domain type

Contracts here serve the purpose to specify the the schema and validation on the web API, altho in most case they will be the same as the domain types, we keep them separate on purpose, so that the internal code can evolve, internal representations can change without silently or accidentally changing contract.

# Database

# Dependency injection