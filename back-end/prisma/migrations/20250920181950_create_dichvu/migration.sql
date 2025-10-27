-- AlterTable
ALTER TABLE `user` ADD COLUMN `dichvuId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_dichvuId_fkey` FOREIGN KEY (`dichvuId`) REFERENCES `Dichvu`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
