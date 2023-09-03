import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { FastifyInstance, TypedFastifyInstance } from "fastify";

type Plugin<O = unknown> = (instance: TypedFastifyInstance, options?: O) => Promise<void> | void;

export const createFastifyPlugin =
    <O = unknown>(plugin: Plugin<O>) =>
    async (fastify: FastifyInstance, options?: O) => {
        const instance = fastify.withTypeProvider<TypeBoxTypeProvider>();

        return plugin(instance, options);
    };
