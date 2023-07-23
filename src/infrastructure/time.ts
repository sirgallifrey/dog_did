export function toDateTime(isoDate: string) {
    return isoDate.replace(/Z$/, "").replace(/T/, " ");
}

export function toIsoDate(dateTime: string) {
    return `${dateTime.replace(" ", "T")}z`;
}

export function nowDateTime() {
    return toDateTime(new Date().toISOString());
}
