// Nombre: Daniel Francisco Muñoz Benítez
// Parcial 2: Gestión de reservaciones

// =============================================================
// 1. ORGANIZAR LOS DATOS
// =============================================================
interface Reservacion {
  id: number;
  cliente: string;
  personas: number;
  zona: string; // "Interior" o "Terraza"
}

// Cuatro reservaciones iniciales: ids distintos, dos por zona,
// tres de cinco o más personas (Lucía, Roberto y Sofía).
let reservaciones: Reservacion[] = [
  { id: 1, cliente: "Carlos Méndez", personas: 4, zona: "Interior" },
  { id: 2, cliente: "Lucía Hernández", personas: 6, zona: "Terraza" },
  { id: 3, cliente: "Roberto Alas", personas: 5, zona: "Interior" },
  { id: 4, cliente: "Sofía Martínez", personas: 8, zona: "Terraza" }
];

// =============================================================
// 5. FUNCIÓN TIPADA
// Decisión: organizo la operación de ATENDER en una función,
// porque se ejecutará más de una vez (lista con datos y lista vacía).
// Recibe el arreglo por parámetro y no depende de arreglos globales.
// Retorna void: modifica la lista (shift) y muestra mensajes.
// =============================================================
function atenderReservacion(lista: Reservacion[]): void {
  // shift() retira el primer elemento; devuelve undefined si la lista está vacía
  let atendida: Reservacion | undefined = lista.shift();

  if (atendida) {
    console.log(`Atendido: ${atendida.cliente} (${atendida.personas} personas)`);
  } else {
    console.log("No hay reservaciones pendientes para atender.");
  }
}

// =============================================================
// 2. REGISTRAR NUEVAS RESERVACIONES
// =============================================================
// push(): agrega una reservación normal al FINAL de la lista
reservaciones.push({ id: 5, cliente: "Ana Flores", personas: 2, zona: "Interior" });

// unshift(): agrega una reservación prioritaria al INICIO de la lista
reservaciones.unshift({ id: 6, cliente: "Mario Rivera", personas: 3, zona: "Terraza" });

console.log("=== Lista antes de atender (la prioritaria va primero) ===");
console.log(reservaciones);

// =============================================================
// 3. ATENDER UNA RESERVACIÓN
// =============================================================
console.log("\n=== Atención ===");
// Primera llamada: lista con datos (se retira Mario Rivera, el prioritario)
atenderReservacion(reservaciones);

// Segunda llamada: situación diferente, arreglo vacío de prueba
let listaVacia: Reservacion[] = [];
atenderReservacion(listaVacia);

// =============================================================
// 4. BUSCAR Y CONSULTAR
// =============================================================
console.log("\n=== Búsqueda por identificador ===");

// Caso que existe
let encontrada: Reservacion | undefined = reservaciones.find(r => r.id === 3);
if (encontrada) {
  console.log("Reservación encontrada:", encontrada);
} else {
  console.log("No existe una reservación con el ID 3.");
}

// Caso que no existe
let noEncontrada: Reservacion | undefined = reservaciones.find(r => r.id === 999);
if (noEncontrada) {
  console.log("Reservación encontrada:", noEncontrada);
} else {
  console.log("No existe una reservación con el ID 999.");
}

console.log("\n=== Filtro: Terraza y 5 o más personas ===");
let cantidadAntes: number = reservaciones.length;

// Ambas condiciones deben cumplirse (&&)
let terrazaGrupos: Reservacion[] = reservaciones.filter(
  r => r.zona === "Terraza" && r.personas >= 5
);

let cantidadDespues: number = reservaciones.length;

if (terrazaGrupos.length > 0) {
  console.log(terrazaGrupos);
} else {
  console.log("No hay reservaciones de terraza con 5 o más personas.");
}

// =============================================================
// 6. COMPROBAR EL ESTADO FINAL
// =============================================================
console.log("\n=== Estado final ===");
console.log("Reservaciones pendientes:", reservaciones);
console.log(`Cantidad de pendientes: ${reservaciones.length} (esperado 5)`);
console.log(`Coincidencias del filtro: ${terrazaGrupos.length} (esperado 2)`);
console.log(`Antes de filtrar: ${cantidadAntes} | Después de filtrar: ${cantidadDespues}`);
console.log(`El filtro conserva el arreglo original: ${cantidadAntes === cantidadDespues}`);
console.log(`Lista vacía de prueba: ${listaVacia.length} (esperado 0)`);