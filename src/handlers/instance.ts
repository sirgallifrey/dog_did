import { FastifyZod } from "fastify-zod";
import { ContractSchemas } from "../contracts";

export type TypedFastifyInstance = FastifyZod<typeof ContractSchemas>;