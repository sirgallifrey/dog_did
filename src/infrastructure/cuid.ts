import { init } from "@paralleldrive/cuid2";

export const createId = init({
    length: 26,
    fingerprint: "dog-did-server",
});
