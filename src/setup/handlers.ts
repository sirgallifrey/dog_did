import { setupUserHandlers } from "../handlers/users";
import { TypedFastifyInstance } from "../handlers/instance";
import { Dependencies } from "./dependencies";
import { setupPackHandlers } from "../handlers/packs";

export function setupHandlers(instance: TypedFastifyInstance, dependencies: Dependencies) {
    setupUserHandlers(instance, {
        userService: dependencies.userService,
    });
    setupPackHandlers(instance, {
        packService: dependencies.packService,
    });
}
