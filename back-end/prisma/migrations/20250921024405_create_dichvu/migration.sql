/*
  Warnings:

  - You are about to drop the column `gia` on the `dichvu` table. All the data in the column will be lost.
  - You are about to drop the column `mota` on the `dichvu` table. All the data in the column will be lost.
  - You are about to drop the column `tendichvu` on the `dichvu` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Dichvu` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `price` to the `Dichvu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Dichvu` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Dichvu_tendichvu_key` ON `dichvu`;

-- AlterTable
ALTER TABLE `dichvu` DROP COLUMN `gia`,
    DROP COLUMN `mota`,
    DROP COLUMN `tendichvu`,
    ADD COLUMN `desc` VARCHAR(191) NULL,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Dichvu_title_key` ON `Dichvu`(`title`);
