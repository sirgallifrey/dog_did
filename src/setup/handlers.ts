import { setupUserHandlers } from "../handlers/users";
import { TypedFastifyInstance } from "../handlers/instance";
import { Dependencies } from "./dependencies";

export function setupHandlers(instance: TypedFastifyInstance, dependencies: Dependencies) {
    setupUserHandlers(instance, {
        userService: dependencies.userService
    });
}