import Link from "../../../node_modules/next/link";
import styles from "./components.module.css";

export default function NavBar() {
  return (
    <aside className={styles.navBar}>
      <h2 className={styles.navBarTitle}>FuelSupply</h2>
      <Link href="/registerfuelsupply">Registrar Abastecimento</Link>
      <Link href="/historyfuelsupply">Histórico de Abastecimento</Link>
    </aside>
  );
}
