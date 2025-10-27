/*
  Warnings:

  - You are about to drop the column `passwword` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `passwword`,
    ADD COLUMN `password` VARCHAR(191) NULL;
