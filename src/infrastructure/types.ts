import { Kysely, Selectable as KyselySelectable } from "kysely";
import { DB as GeneratedDB } from "../db/types";

export type DB = Kysely<GeneratedDB>;

export type Selectable<T extends keyof GeneratedDB> = KyselySelectable<GeneratedDB[T]>;
