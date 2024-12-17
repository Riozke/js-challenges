export default function transformer(input) {
  const { nombres, edades } = input;

  return nombres.map((nombre, index) => ({
    id: index + 1,
    nombre: nombre,
    edad: edades[index],
  }));
}

console.log(
  transformer({
    nombres: ["Juan", "Pedro", "María"],
    edades: [23, 45, 18],
  })
);
