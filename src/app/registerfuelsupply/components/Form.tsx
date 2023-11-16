"use client";
import Input from "../../components/input";
import Button from "../../components/button";
import styles from "./form.module.css";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface IFormValues {
  Driver: string;
  FuelType: string;
  FuelLevel: number;
}

type Driver = {
  id: string;
  name: string;
};

type FuelTypes = {
  id: string;
  name: string;
  price: number;
};

type FormProps = {
  drivers: Driver[];
  fuelTypes: FuelTypes[];
};

export default function Form({ drivers, fuelTypes }: FormProps) {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const body = JSON.stringify({
      driver: data["CPF do Motorista"],
      fuelTypeId: data["Tipo de combustivel"],
      fuelLevel: data["Quantidade de combustivel"],
    });
    const res = await fetch(`${process.env.API_URL}/fuel-supply`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "Post",
      body,
    });
    const dataRes = await res.json();
    alert(`Registrado com sucesso! Preço Total: R$${dataRes.fuelSupplyPrice}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        <Input register={register} required label="CPF do Motorista" />
        <Input register={register} required label="Quantidade de combustivel" />
        <Input
          register={register}
          label="Tipo de combustivel"
          isDataList
          selectOptions={fuelTypes}
        />
        <div className={styles.formFooter}>
          <Button type="submit" title="Inserir abastecimento" />
        </div>
      </div>
    </form>
  );
}
