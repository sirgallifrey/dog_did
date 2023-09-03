import {
    ContextConfigDefault,
    FastifySchema,
    RawReplyDefaultExpression,
    RawRequestDefaultExpression,
    RawServerDefault,
    RouteGenericInterface,
    RouteOptions,
    TypedFastifyInstance,
} from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { merge } from "lodash";
import { PartialDeep } from "type-fest";

/**
 * All the helpers in this file serve the purpose of adding dependency inversion, so we can define
 * the handlers without having a concrete Fastify instance, while benefiting from the type safety of
 * zod + fastify-zod
 */

type InstanceInjector = (f: TypedFastifyInstance) => unknown;

type OptionsOverride = PartialDeep<RouteOptions>;

interface InjectableRoute {
    apply: InstanceInjector;
    override: (opts: OptionsOverride) => void;
}

export class Route<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema
> {
    constructor(
        private opts: RouteOptions<
            RawServerDefault,
            RawRequestDefaultExpression<RawServerDefault>,
            RawReplyDefaultExpression<RawServerDefault>,
            RouteGeneric,
            ContextConfig,
            SchemaCompiler,
            TypeBoxTypeProvider
        >
    ) {}

    apply = (f: TypedFastifyInstance) => f.route(this.opts);
    override = (newOpts: OptionsOverride) => {
        this.opts = merge(this.opts, newOpts);
    };
}

export class Routes {
    private routes: InjectableRoute[];
    constructor(...routes: InjectableRoute[]) {
        this.routes = routes;
    }

    apply = (f: TypedFastifyInstance) => this.routes.forEach((r) => r.apply(f));
    override = (opts: OptionsOverride) => this.routes.forEach((r) => r.override(opts));
}
