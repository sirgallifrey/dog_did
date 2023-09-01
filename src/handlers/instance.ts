import { FastifyZod } from "fastify-zod";
import { ContractSchemas } from "../contracts";

/**
 * All the helpers in this file serve the purpose of adding dependency inversion, so we can define
 * the handlers without having a concrete Fastify instance, while benefiting from the type safety of
 * zod + fastify-zod
 */

export type TypedFastifyInstance = FastifyZod<typeof ContractSchemas>;

type InstanceInjector = (f: TypedFastifyInstance) => unknown;

interface InjectableRoute {
    apply: InstanceInjector;
}

export class Route {
    private delegator: InstanceInjector;

    apply = (f: TypedFastifyInstance) => this.delegator(f);

    get: TypedFastifyInstance["get"] = (...args) => {
        this.delegator = (f: TypedFastifyInstance) => f.get(...args);
    };
    head: TypedFastifyInstance["head"] = (...args) => {
        this.delegator = (f: TypedFastifyInstance) => f.head(...args);
    };
    post: TypedFastifyInstance["post"] = (...args) => {
        this.delegator = (f: TypedFastifyInstance) => f.post(...args);
    };
    put: TypedFastifyInstance["put"] = (...args) => {
        this.delegator = (f: TypedFastifyInstance) => f.put(...args);
    };
    patch: TypedFastifyInstance["patch"] = (...args) => {
        this.delegator = (f: TypedFastifyInstance) => f.patch(...args);
    };
    delete: TypedFastifyInstance["delete"] = (...args) => {
        this.delegator = (f: TypedFastifyInstance) => f.delete(...args);
    };
}

export const routes =
    (...routes: InjectableRoute[]) =>
    (f: TypedFastifyInstance) =>
        routes.forEach((r) => r.apply(f));
