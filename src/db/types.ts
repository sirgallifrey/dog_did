/**
 * This file was auto-generated from the database definition, if this is out of sync with the database schema
 * run the generation again.
 */

import type { ColumnType } from "kysely";

export type Decimal = ColumnType<string, string | number, string | number>;

export interface Events {
  id: string;
  petId: string;
  createdBy: string;
  date: string;
  type: "exercise" | "food" | "medicine" | "other" | "pee" | "play" | "poop" | "walk" | "water" | "weight";
  duration: Decimal | null;
  number: Decimal | null;
  string: string | null;
}

export interface PackMember {
  id: string;
  packId: string;
  userId: string;
  role: "admin" | "member" | "owner";
}

export interface Packs {
  id: string;
  name: string;
}

export interface Pets {
  id: string;
  packId: string;
  name: string;
  color: string | null;
  breed: string | null;
  birthDate: string | null;
  createdAt: string;
}

export interface Users {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

export interface DB {
  events: Events;
  pack_member: PackMember;
  packs: Packs;
  pets: Pets;
  users: Users;
}
