-- AlterTable
ALTER TABLE `booking` ADD COLUMN `serviceId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Dichvu`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
