type Driver = {
  id: string;
  name: string;
};

export async function getDrivers() {
  const data = await fetch(`${process.env.API_URL}/drivers`);
  const drivers = await data.json();
  return drivers;
}
