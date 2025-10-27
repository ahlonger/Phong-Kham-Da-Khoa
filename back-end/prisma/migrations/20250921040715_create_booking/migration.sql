-- AlterTable
ALTER TABLE `booking` ADD COLUMN `doctorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
