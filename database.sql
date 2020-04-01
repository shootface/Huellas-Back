CREATE TABLE  Producto
(
	PK_PRODUCTO NUMBER(8) NOT NULL,    -- Columna que almacena la llave primaria del conjunto de entidades producto de los diferentes productos a vender en la empresa NatAme
	C_NOMBRE VARCHAR2(30) NOT NULL,    -- Nombre del producto a vender
	K_SUBCATEGORIA NUMBER(8) NOT NULL,	-- Subcategoria a la que pertenece el producto
	V_NOMBREIMAGEN VARCHAR2(300), 	-- Imagen para cargar dinámicamente donde encontrar la imagen del producto
    N_CANTIDAD NUMBER(8) NOT NULL    -- Cantidad del producto
);

CREATE TABLE Usuario
(
    PK_CEDULA NUMBER(15) NOT NULL,
    C_NOMBRE VARCHAR(30) NOT NULL,
    
)

