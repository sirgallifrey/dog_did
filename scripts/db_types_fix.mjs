/**
 * Simple script to fix database types created by kysely-codegen
 *
 * kysely-codegen will make columns of type DATETIME into Date,
 * but then when kysely ingests a Date object it will call Date.toIsoString()
 * the thing is DATETIME does not accept iso format, so we convert it into string here.
 */
import fs from "node:fs";

const header = `/**
 * This file was auto-generated from the database definition, if this is out of sync with the database schema
 * run the generation again.
 */`;

const types = fs.readFileSync("./src/db/types.ts", { encoding: "utf-8" });
const fixed = types.replaceAll(/: Date;/g, ": string;").replaceAll(/: Date \| null;/g, ": string | null;");

fs.writeFileSync("./src/db/types.ts", `${header}\n\n${fixed}`);
