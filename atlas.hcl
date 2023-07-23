// Define an environment named "local"
env "local" {
  // Declare where the schema definition resides.
  // Also supported: ["file://multi.hcl", "file://schema.hcl"].
  src = "file://src/db/schema.sql"

  // Define the URL of the database which is managed
  // in this environment.
  url = "mysql://dogdid:password@localhost:3306/dogdid"

  // Define the URL of the Dev Database for this environment
  // See: https://atlasgo.io/concepts/dev-database
  dev = "mysql://root:password@localhost:3306/devdb"

  migration {
    // URL where the migration directory resides.
    dir = "file://src/db/migrations"

    // An optional format of the migration directory:
    // atlas (default) | flyway | liquibase | goose | golang-migrate | dbmate
    format = "golang-migrate"
  }
}
