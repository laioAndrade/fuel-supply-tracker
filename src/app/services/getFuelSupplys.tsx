export async function getFuelSupplys(driver) {
  const data = await fetch(`http://127.0.0.1:3003/fuel-supply/${driver}`, {
    method: "GET",
  });
  const drivers = await data.json();
  return drivers;
}
