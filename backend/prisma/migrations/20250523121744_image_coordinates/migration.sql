/*
  Warnings:

  - Added the required column `correct_x_percent_max` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correct_x_percent_min` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correct_y_percent_max` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correct_y_percent_min` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "images" ADD COLUMN     "correct_x_percent_max" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "correct_x_percent_min" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "correct_y_percent_max" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "correct_y_percent_min" DOUBLE PRECISION NOT NULL;
