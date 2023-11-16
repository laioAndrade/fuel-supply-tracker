import styles from "./page.module.css";
export default function HistoryTable({ data }) {
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  // Example usage:
  const inputDate = "2023-11-15T22:47:50.037Z";
  const formattedDate = formatDate(inputDate);
  return (
    <div className={styles.table}>
      <ul className={styles.header}>
        <li>Motorista</li>
        <li>Preço Total</li>
        <li>Quantidade</li>
        <li>Combustivel</li>
        <li>Data:</li>
      </ul>
      {data.map((dataItem) => (
        <ul key={dataItem.id} className={styles.dataItem}>
          <li>{dataItem.driver}</li>
          <li>{dataItem.fuelSupplyPrice}</li>
          <li>{dataItem.fuelLevel}</li>
          <li>{dataItem.fuelType.name}</li>
          <li>{formatDate(dataItem.date)}</li>
        </ul>
      ))}
    </div>
  );
}
