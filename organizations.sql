-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-01-2023 a las 02:45:10
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `organizations`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensaje`
--

CREATE TABLE `mensaje` (
  `idmensaje` int(11) NOT NULL,
  `cuerpo` varchar(191) NOT NULL,
  `telefono` varchar(191) NOT NULL,
  `correo` varchar(191) NOT NULL,
  `asunto` varchar(191) NOT NULL,
  `nombre_remitente` varchar(191) NOT NULL,
  `organizacionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `mensaje`
--

INSERT INTO `mensaje` (`idmensaje`, `cuerpo`, `telefono`, `correo`, `asunto`, `nombre_remitente`, `organizacionId`) VALUES
(1, 'Tres helados de coco', '0984673212', 'teresatorres@gmail.com', 'Pedido', 'Teresa Torres', 10),
(2, 'Dos helados de mora', '0936524199', 'pedrorojas@gmail.com', 'Pedido', 'Pedro Rojas', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `organizacion`
--

CREATE TABLE `organizacion` (
  `idorganizacion` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `foto` varchar(191) NOT NULL,
  `descripcion` varchar(191) NOT NULL,
  `mision` varchar(191) NOT NULL,
  `vision` varchar(191) NOT NULL,
  `valores` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `organizacion`
--

INSERT INTO `organizacion` (`idorganizacion`, `nombre`, `foto`, `descripcion`, `mision`, `vision`, `valores`) VALUES
(10, 'Helados Mr. Ice\r\n', 'https://drive.google.com/file/d/1unMLlFGiEwHj145kXqkR7Bz3K_0Sl0Nj/view?usp=share_link', 'Somos una empresa que fue creada en el año 2012', 'Brindar a nuestros\r\nclientes productos de la más alta calidad\r\n', 'Crear nuevas sucursales y generar fuentes de trabajo', 'Respeto, Honestidad, Lealtad\r\n'),
(11, 'CAFECOM', 'https://drive.google.com/file/d/1ABTMnksY27lDPqEoNmZwvITODUo5vDBu/view?usp=share_link', 'En 1996, CAFECOM nace de la pasión por el café de nuestro fundador', 'Siempre comprometidos con las necesidades de nuestros clientes', 'Crecer armónicamente forjando relaciones duraderas', 'Integridad, Respeto, Comunicación');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE `personal` (
  `idpersonal` int(11) NOT NULL,
  `cedula` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `apellido_1` varchar(191) NOT NULL,
  `apellido_2` varchar(191) NOT NULL,
  `telefono` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `rol` varchar(191) NOT NULL,
  `organizacionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`idpersonal`, `cedula`, `nombre`, `apellido_1`, `apellido_2`, `telefono`, `email`, `rol`, `organizacionId`) VALUES
(1, 1723120191, 'Carlos', 'Toledo', 'Mera', '0971330156', 'carlostoledo@gmail.com', 'vendedor', 11),
(2, 1314562378, 'Emma', 'Andrade', 'Lara', '0912534783', 'emmaandrade@gmail.com', 'administrador', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `descripcion` varchar(191) NOT NULL,
  `foto` varchar(191) NOT NULL,
  `organizacionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`codigo`, `nombre`, `descripcion`, `foto`, `organizacionId`) VALUES
(1, 'Cono', 'De chocolate', 'https://drive.google.com/file/d/1aUnkzgpxcfCd68i0U4cv59owCNXux_pb/view?usp=share_link', 10),
(2, 'Coco', 'De Salcedo', 'https://drive.google.com/file/d/15zXxvwvCfxuaLscNWH8p5LClxVLi-9L7/view?usp=share_link', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('9175e65b-e239-411a-b671-2588dba41d18', '65495b8a1a9d8451ed14e3d16b58a3800705fbfd8b758c7a3fee179c32f9e071', '2023-01-03 06:04:43.142', '20230103060440_1', NULL, NULL, '2023-01-03 06:04:40.509', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD PRIMARY KEY (`idmensaje`),
  ADD KEY `Mensaje_organizacionId_fkey` (`organizacionId`);

--
-- Indices de la tabla `organizacion`
--
ALTER TABLE `organizacion`
  ADD PRIMARY KEY (`idorganizacion`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`idpersonal`),
  ADD KEY `Personal_organizacionId_fkey` (`organizacionId`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `Productos_organizacionId_fkey` (`organizacionId`);

--
-- Indices de la tabla `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  MODIFY `idmensaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `organizacion`
--
ALTER TABLE `organizacion`
  MODIFY `idorganizacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `personal`
--
ALTER TABLE `personal`
  MODIFY `idpersonal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD CONSTRAINT `Mensaje_organizacionId_fkey` FOREIGN KEY (`organizacionId`) REFERENCES `organizacion` (`idorganizacion`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `personal`
--
ALTER TABLE `personal`
  ADD CONSTRAINT `Personal_organizacionId_fkey` FOREIGN KEY (`organizacionId`) REFERENCES `organizacion` (`idorganizacion`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `Productos_organizacionId_fkey` FOREIGN KEY (`organizacionId`) REFERENCES `organizacion` (`idorganizacion`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
