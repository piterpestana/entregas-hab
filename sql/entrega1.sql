-- Entrega: Reservas durante el Covid

-- Usuarios (#ID, nombre, apellidos, email, contraseña)
-- Reservas (#ID, fecha, llegada, salida, acompañantes)
-- Acompañantes (#ID, DNI, nombre, apellidos) 
-- Restaurantes (#ID, nombre, dirección, capacidad)
-- Encargados (#ID, nombre, apellidos, email, contraseña)
-- reservas_usuario (#(-id_usuario, -id_reserva))
-- reservas_restaurante (#(-id_restaurante, -id_reserva))


USE ejercicio1;

CREATE TABLE usuarios (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellidos VARCHAR(50),
    email VARCHAR(50) UNIQUE NOT NULL,
    contrasena VARCHAR(40) NOT NULL
);

CREATE TABLE reservas (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fecha_reserva DATETIME,
    fecha_llegada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	fecha_salida TIMESTAMP,
    acompanantes ????
);


CREATE TABLE acompanantes (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    DNI VARCHAR(50),
    nombre VARCHAR(50),
    apellidos VARCHAR(50)
);

CREATE TABLE restaurantes (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(10) UNIQUE NOT NULL,
    direccion VARCHAR(20),
    capacidad DECIMAL(7, 0)
);

CREATE TABLE encargados (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellidos VARCHAR(50),
    email VARCHAR(50) UNIQUE NOT NULL,
    contrasena VARCHAR(40) NOT NULL
);

CREATE TABLE usuario_reserva (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    id_reserva INT UNSIGNED,
    FOREIGN KEY (id_reserva) REFERENCES reservas(id),
    rating INT DEFAULT 0
);

CREATE TABLE restaurante_reserva (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_restaurante INT UNSIGNED,
    FOREIGN KEY (id_restaurante) REFERENCES restaurantes(id),
    id_reserva INT UNSIGNED,
    FOREIGN KEY (id_reserva) REFERENCES reservas(id)
);

SET FOREIGN_KEY_CHECKS = 1;
