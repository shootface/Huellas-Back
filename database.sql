CREATE TABLE  Producto
(
	PK_PRODUCTO integer NOT NULL,    -- Columna que almacena la llave primaria del conjunto de entidades producto de los diferentes productos a vender en la empresa NatAme
	C_NOMBRE VARCHAR(30) NOT NULL,    -- Nombre del producto a vender
	K_SUBCATEGORIA integer NOT NULL,	-- Subcategoria a la que pertenece el producto
	V_NOMBREIMAGEN VARCHAR(300), 	-- Imagen para cargar dinámicamente donde encontrar la imagen del producto
    N_CANTIDAD integer NOT NULL    -- Cantidad del producto
);

ALTER TABLE  Producto 
 ADD CONSTRAINT PK_PRODUCTO
	PRIMARY KEY (PK_PRODUCTO) 
;

CREATE TABLE Usuario
(
    PK_CEDULA integer NOT NULL,
    C_NOMBRE VARCHAR(30) NOT NULL,
    C_PASS VARCHAR(30) NOT NULL
);

ALTER TABLE  Usuario 
 ADD CONSTRAINT PK_Usuario
	PRIMARY KEY (PK_cedula) 
;