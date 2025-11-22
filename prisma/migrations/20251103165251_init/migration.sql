/*
  Warnings:

  - You are about to drop the column `username` on the `Post` table. All the data in the column will be lost.
  - Added the required column `posterUsername` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Post" DROP CONSTRAINT "Post_username_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "username",
ADD COLUMN     "posterUsername" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_posterUsername_fkey" FOREIGN KEY ("posterUsername") REFERENCES "User"("username") ON DELETE CASCADE ON UPDATE CASCADE;
