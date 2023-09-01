export interface LogFn {
    (obj: unknown, msg?: string): void;
    (msg?: string): void;
}

export interface LoggerService {
    error: LogFn;
    warn: LogFn;
    info: LogFn;
    debug: LogFn;
}
