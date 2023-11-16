import CardBox from "../components/cardBox";
import { getDrivers } from "../services/getDrives";
import { getFuelTypes } from "../services/getFuelTypes";
import Form from "./components/Form";
import styles from "./page.module.css";

type Driver = {
  id: number;
  name: string;
};

type FuelTypes = {
  id: number;
  name: string;
  price: number;
};

export default async function RegisterFuelSupply() {
  const drivers = await getDrivers();
  const fuelTypes = await getFuelTypes();

  return (
    <main className={styles.main}>
      <CardBox>
        <header className={styles.header}>
          <h1>Registrar Abastecimento</h1>
        </header>
        <Form drivers={drivers} fuelTypes={fuelTypes} />
      </CardBox>
    </main>
  );
}
