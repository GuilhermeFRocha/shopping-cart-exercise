import {  Dispatch, SetStateAction, useState } from "react";
import CoffeeTradicional from "../assets/CoffeeTradicional.svg";
import Card from "./Card";

export const Cards = (props:any) => {
  interface TypesProps {
    imgCoffee: any;
    type: string;
    name: string;
    description: string;
    value: number;
    id: number;
    count: number;
    numero: any;
  }

  

  const typesCoffee: TypesProps[] = [
    {
      imgCoffee: CoffeeTradicional,
      type: "TRADICIONAL",
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      value: 9.9,
      id: 1,
      count:1,
      numero: 0,
    },
    {
      imgCoffee: CoffeeTradicional,
      type: "TRADICIONAL",
      name: "Expresso americano",
      description: "O tradicional café feito com água quente e grãos moídos",
      value: 9.9,
      id: 2,
      count:1,
      numero: 0 ,
    },
    {
      imgCoffee: CoffeeTradicional,
      type: "TRADICIONAL",
      name: "Expresso cremosso",
      description: "O tradicional café feito com água quente e grãos moídos",
      value: 9.9,
      id: 3,
      count:1,
      numero: 0 ,
    },
    {
      imgCoffee: CoffeeTradicional,
      type: "TRADICIONAL",
      name: "Expresso gelado",
      description: "O tradicional café feito com água quente e grãos moídos",
      value: 9.9,
      id: 4,
      count:1,
      numero: 0 ,
    },
    {
      imgCoffee: CoffeeTradicional,
      type: "TRADICIONAL",
      name: "Cafe com leite ",
      description: "O tradicional café feito com água quente e grãos moídos",
      value: 9.9,
      id: 5,
      count:1,
      numero: 0 ,
    },
    {
      imgCoffee: CoffeeTradicional,
      type: "TRADICIONAL",
      name: "Latte",
      description: "O tradicional café feito com água quente e grãos moídos",
      value: 9.9,
      id: 6,
      count:1,
      numero: 0 ,
    },
    {
      imgCoffee: CoffeeTradicional,
      type: "TRADICIONAL",
      name: "Capuccino",
      description: "O tradicional café feito com água quente e grãos moídos",
      value: 9.9,
      id: 7,
      count:1,
      numero: 0 ,
    },
    {
      imgCoffee: CoffeeTradicional,
      type: "TRADICIONAL",
      name: "Machiatto",
      description: "O tradicional café feito com água quente e grãos moídos",
      value: 9.9,
      id: 8,
      count:1,
      numero: 0 ,
    },
  ];

  return (
    <div className="grid grid-cols-4">
      {typesCoffee.map((items) => {
        return <Card items={items}  key={items.id}/>;
      })}
    </div>
  );
};