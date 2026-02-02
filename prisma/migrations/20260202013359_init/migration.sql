/*
  Warnings:

  - A unique constraint covering the columns `[followerId,personFollowedId]` on the table `Follow` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Follow_followerId_personFollowedId_key" ON "Follow"("followerId", "personFollowedId");
