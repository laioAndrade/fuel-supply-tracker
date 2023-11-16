"use client";
import { useState } from "react";
import Button from "../components/button";
import CardBox from "../components/cardBox";
import Input from "../components/input";
import { getFuelSupplys } from "../services/getFuelSupplys";
import HistoryTable from "./components/HistoryTable";
import styles from "./page.module.css";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

interface IFormValues {
  Driver: string;
}

export default function HistoryFuelSupply() {
  const [fuelSupplys, setFuelSupplys] = useState();
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const param = data["Insira o cpf do motorista"];
    const res = await getFuelSupplys(param);
    setFuelSupplys(res);
  };

  return (
    <main className={styles.main}>
      <CardBox>
        <header className={styles.header}>
          <h1>Histórico de Abastecimento</h1>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input register={register} label="Insira o cpf do motorista" />
          <Button title="Buscar histórico" />
        </form>
        {fuelSupplys && <HistoryTable data={fuelSupplys} />}
      </CardBox>
    </main>
  );
}
