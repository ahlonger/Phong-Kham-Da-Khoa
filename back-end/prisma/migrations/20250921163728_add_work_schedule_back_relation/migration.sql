-- CreateTable
CREATE TABLE `WorkSchedule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `startTime` VARCHAR(191) NOT NULL,
    `endTime` VARCHAR(191) NOT NULL,
    `room` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Đang chờ xác nhận',
    `doctorId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WorkSchedule` ADD CONSTRAINT `WorkSchedule_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
