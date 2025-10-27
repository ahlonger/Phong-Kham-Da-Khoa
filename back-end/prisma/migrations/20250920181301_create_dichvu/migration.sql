-- CreateTable
CREATE TABLE `Dichvu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tendichvu` VARCHAR(191) NOT NULL,
    `gia` INTEGER NOT NULL,
    `mota` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Dichvu_tendichvu_key`(`tendichvu`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
