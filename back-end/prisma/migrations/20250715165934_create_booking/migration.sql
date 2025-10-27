-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hoten` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `sdt` VARCHAR(191) NOT NULL,
    `diachi` VARCHAR(191) NOT NULL,
    `dichvu` VARCHAR(191) NOT NULL,
    `bacsi` VARCHAR(191) NOT NULL,
    `ghichu` VARCHAR(191) NULL,
    `thoigianhen` DATETIME(3) NOT NULL,
    `dongy` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
