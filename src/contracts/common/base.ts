import { Type } from "@sinclair/typebox";

export const EmptySchema = Type.Object({}, { title: "EmptyObject" });

export const LiteralString = <T extends string>(str: T) => Type.Literal(str, { title: str, examples: [str] });

export const LiteralStringUnion = <T extends string>(strs: T[]) => Type.Union(strs.map(LiteralString));

/**
 * Event Id
 */
export const IdSchema = () =>
    Type.String({
        minLength: 26,
        maxLength: 26,
        description: "Entity Id",
        examples: ["pb72whtdpn8drvktvwaf0dvfky"],
        title: "Id",
    });

/**
 *  Id Object
 */
export const IdObjectSchema = Type.Object(
    {
        id: IdSchema(),
    },
    {
        description: "Entity Id",
        title: "IdObject",
        examples: [
            {
                id: "pb72whtdpn8drvktvwaf0dvfky",
            },
        ],
    }
);

export const DateTimeSchema = () =>
    Type.String({ format: "date-time", examples: ["2018-11-13T20:20:39Z"], title: "DateTime" });
