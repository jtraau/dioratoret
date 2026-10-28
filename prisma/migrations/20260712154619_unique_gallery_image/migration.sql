/*
  Warnings:

  - A unique constraint covering the columns `[imageUrl]` on the table `Gallery` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Gallery_imageUrl_key" ON "Gallery"("imageUrl");
