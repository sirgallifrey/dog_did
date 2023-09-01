import { routes } from "./instance";
import { getPack } from "./packs/get_pack";
import { getPackPets } from "./packs/get_pack_pets";
import { getPacks } from "./packs/get_packs";
import { postPack } from "./packs/post_pack";

export const packRoutes = routes(getPack, getPacks, getPackPets, postPack);
