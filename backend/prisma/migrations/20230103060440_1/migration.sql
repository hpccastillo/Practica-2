-- CreateTable
CREATE TABLE `Organizacion` (
    `idorganizacion` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `mision` VARCHAR(191) NOT NULL,
    `vision` VARCHAR(191) NOT NULL,
    `valores` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idorganizacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Personal` (
    `idpersonal` INTEGER NOT NULL AUTO_INCREMENT,
    `cedula` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido_1` VARCHAR(191) NOT NULL,
    `apellido_2` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `rol` VARCHAR(191) NOT NULL,
    `organizacionId` INTEGER NULL,

    PRIMARY KEY (`idpersonal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Productos` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,
    `organizacionId` INTEGER NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mensaje` (
    `idmensaje` INTEGER NOT NULL AUTO_INCREMENT,
    `cuerpo` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `asunto` VARCHAR(191) NOT NULL,
    `nombre_remitente` VARCHAR(191) NOT NULL,
    `organizacionId` INTEGER NULL,

    PRIMARY KEY (`idmensaje`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Personal` ADD CONSTRAINT `Personal_organizacionId_fkey` FOREIGN KEY (`organizacionId`) REFERENCES `Organizacion`(`idorganizacion`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Productos` ADD CONSTRAINT `Productos_organizacionId_fkey` FOREIGN KEY (`organizacionId`) REFERENCES `Organizacion`(`idorganizacion`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mensaje` ADD CONSTRAINT `Mensaje_organizacionId_fkey` FOREIGN KEY (`organizacionId`) REFERENCES `Organizacion`(`idorganizacion`) ON DELETE SET NULL ON UPDATE CASCADE;
