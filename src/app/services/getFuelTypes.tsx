export async function getFuelTypes() {
  const data = await fetch("http://127.0.0.1:3003/fuel-types");
  const fuelTypes = await data.json();
  return fuelTypes;
}
