import { Kysely } from "kysely";
import { DB as GeneratedDB } from "../db/types";

export type DB = Kysely<GeneratedDB>;
