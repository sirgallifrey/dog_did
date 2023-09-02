-- Make sure we are in UTC
SET
    GLOBAL time_zone = '+00:00';

-- create "users" table
CREATE TABLE `users` (
    `id` VARCHAR(26) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    -- we need to change collation to make email case insensitive
    `email` VARCHAR(255) NOT NULL,
    `passwordHash` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `idx_email` (`email`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- create "packs" table
CREATE TABLE `packs` (
    `id` VARCHAR(26) NOT NULL PRIMARY KEY,
    `name` VARCHAR(255) not NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- create "pack_member" table
CREATE TABLE `pack_member` (
    `id` VARCHAR(26) NOT NULL,
    `packId` VARCHAR(26) NOT NULL,
    `userId` VARCHAR(26) NOT NULL,
    `role` ENUM('member', 'admin', 'owner') NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY (`packId`) REFERENCES `packs`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- create "pets" table
CREATE TABLE `pets` (
    `id` VARCHAR(26) NOT NULL,
    `packId` VARCHAR(26) NOT NULL,
    `name` VARCHAR(255) not NULL,
    `color` VARCHAR(100),
    `breed` VARCHAR(100),
    `birthDate` DATETIME,
    `createdAt` DATETIME NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY (`packId`) REFERENCES `packs`(id) ON DELETE RESTRICT
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- create "events" table
CREATE TABLE `events` (
    `id` VARCHAR(26) NOT NULL,
    `petId` VARCHAR(26) NOT NULL,
    `createdBy` VARCHAR(26) NOT NULL,
    `date` DATETIME NOT NULL,
    -- they say enums always come back to hunt you... Should we use it here?
    `type` ENUM(
        'food',
        'water',
        'poop',
        'pee',
        'play',
        'walk',
        'exercise',
        'weight',
        'medicine',
        'other'
    ) NOT NULL,
    -- Event table is generic over many types of information
    `duration` DECIMAL,
    -- number could be the weight of the pet or
    -- maybe the weight of the food they just ate
    `number` DECIMAL,
    -- Which food the dog ate? Or which medicine they took
    `string` VARCHAR(255),
    PRIMARY KEY(`id`),
    INDEX (`date`),
    FOREIGN KEY (`petId`) REFERENCES `pets`(id) ON DELETE RESTRICT,
    FOREIGN KEY (`createdBy`) REFERENCES `users`(id) ON DELETE RESTRICT
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;