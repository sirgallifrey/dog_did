import { TSchema, Type } from "@sinclair/typebox";

export const Nullable = <T extends TSchema>(schema: T) => Type.Union([schema, Type.Null()]);

export const OptNull = <T extends TSchema>(schema: T) => Type.Optional(Type.Union([schema, Type.Null()]));
