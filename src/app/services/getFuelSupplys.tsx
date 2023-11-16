export async function getFuelSupplys(driver) {
  const data = await fetch(`${process.env.API_URL}/fuel-supply/${driver}`, {
    method: "GET",
  });
  const drivers = await data.json();
  return drivers;
}
