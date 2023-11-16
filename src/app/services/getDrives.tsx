type Driver = {
  id: string;
  name: string;
};

export async function getDrivers() {
  const data = await fetch("http://127.0.0.1:3003/drivers");
  const drivers = await data.json();
  return drivers;
}
