export async function getFuelTypes() {
  const data = await fetch(`${process.env.API_URL}/fuel-types`);
  const fuelTypes = await data.json();
  return fuelTypes;
}
