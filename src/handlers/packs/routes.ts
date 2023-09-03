import { Routes } from "../route";
import { getPack } from "./get_pack";
import { getPackPets } from "./get_pack_pets";
import { getPacks } from "./get_packs";
import { postPack } from "./post_pack";

export const packRoutes = new Routes(getPack, getPacks, getPackPets, postPack);
packRoutes.override({
    schema: {
        tags: ["Pack"],
    },
});
