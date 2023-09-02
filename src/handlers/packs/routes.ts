import { routes } from "../route";
import { getPack } from "./get_pack";
import { getPackPets } from "./get_pack_pets";
import { getPacks } from "./get_packs";
import { postPack } from "./post_pack";

export const packRoutes = routes(getPack, getPacks, getPackPets, postPack);
