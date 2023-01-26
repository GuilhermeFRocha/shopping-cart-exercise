import VectorPlus from "../assets/VectorPlus.svg";
import VectorMinus from "../assets/VectorMinus.svg";
import IconButton from "../assets/IconButton.svg";
import { useContext, useState } from "react";
import { Context } from "../Context";

interface TypesProps {
  items: {
    imgCoffee: any;
    type: string;
    name: string;
    description: string;
    value: number;
    id: number;
    numero: number;
  };
}

const Card = (props: TypesProps) => {
  const [date, setDates] = useState(1);

  const handleClick = (props: any) => {};

  const handleMinusClick = (props: any) => {};

  const { handleBuy } = useContext(Context);

  return (
    <div
      key={props.items.id}
      className="bg-grey-100 rounded-bl-3xl rounded-tl-md rounded-br-md rounded-tr-3xl max-w-xs text-center px-5 pb-5"
    >
      <img
        src={props.items.imgCoffee}
        alt="imagem chicara de cafe"
        className="m-auto pb-3 -mt-6"
      />
      <p className="bg-yellow-100 text-yellow-200 font-bold text-mn rounded-2xl max-w-max mx-auto px-2 py-1 mb-4 ">
        {props.items.type}
      </p>
      <h3 className="font-Nunito font-extrabold text-lg pb-2">
        {props.items.name}
      </h3>
      <span className="text-grey-200 text-xs">{props.items.description}</span>
      <div className="flex pt-7 justify-between items-center">
        <p className="text-xs text-grey-400">
          R$
          <span className="font-Nunito font-black text-grey-400 text-3xl">
            {props.items.value}
          </span>
        </p>
        <div className="flex bg-grey-300 px-3 py-2 gap-1 items-center rounded-md">
          <button
            onClick={() => {
              handleMinusClick(props);
            }}
          >
            <img src={VectorMinus} alt="" />
          </button>

          <span>{date}</span>
          <button
            onClick={() => {
              handleClick(props);
            }}
          >
            <img src={VectorPlus} alt="" />
          </button>
        </div>
        <button onClick={() => handleBuy(props, date)}>
          <img src={IconButton} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
