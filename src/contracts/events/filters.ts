import { Type } from "@sinclair/typebox";

import { DateTimeSchema, IdSchema, LiteralStringUnion } from "../common/base";
import { EventTypes } from "./base_event";

export const EventFiltersSchema = Type.Object({
    petId: Type.Optional(Type.Array(IdSchema())),
    fromDate: Type.Optional(DateTimeSchema()),
    toDate: Type.Optional(DateTimeSchema()),
    type: Type.Optional(Type.Array(LiteralStringUnion(Object.values(EventTypes)))),
});
