# Aplicación de Carrito de Compras

Este proyecto es una aplicación de carrito de compras construida con React. Permite a los usuarios explorar productos, agregarlos a un carrito de compras, ajustar las cantidades, ver el costo total y proceder al pago. El objetivo es ofrecer una experiencia de compra ligera e interactiva.

## Funcionalidades

- **Listado de Productos:** Muestra una lista de productos obtenidos de una API.
- **Agregar al Carrito:** Permite agregar productos al carrito de compras con un solo clic.
- **Gestión del Carrito:**
  - Incrementar o disminuir la cantidad de productos en el carrito.
  - Eliminar productos del carrito.
- **Cálculo de Total:** Calcula y muestra automáticamente el precio total de los productos en el carrito.
- **Pago:** Permite proceder al pago, mostrando una alerta de confirmación y limpiando el carrito.
- **Diseño Responsivo:** Diseño minimalista y centrado para facilitar su uso.

---

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/maxin7399/Prueba-Tecnica.git
   cd Prueba-Tecnica
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar la aplicación:**
   ```bash
   npm run dev
   ```

---

## Descripción de los Componentes

### 1. `App.tsx`
El componente principal de la aplicación que gestiona el estado de los productos, el carrito y los cálculos del total. Utiliza hooks como `useState` y `useEffect` para manejar las actualizaciones dinámicas.

### 2. `CartView.tsx`
Muestra el carrito de compras con las siguientes características:
- Lista de productos en el carrito.
- Botones para disminuir cantidades o eliminar productos.
- Cálculo del precio total.
- Botón de pago que muestra una alerta de confirmación y limpia el carrito.

### 3. `Card.tsx`
Componente para mostrar los detalles individuales del producto (por ejemplo, nombre, precio, imagen) en la lista de productos.