import { Routes } from "../route";
import { deleteEvent } from "./delete_event";
import { getEvent } from "./get_event";
import { getEvents } from "./get_events";
import { postEvent } from "./post_event";

export const eventsRoutes = new Routes(getEvent, getEvents, postEvent, deleteEvent);
eventsRoutes.override({
    schema: {
        tags: ["Pet Events"],
    },
});
