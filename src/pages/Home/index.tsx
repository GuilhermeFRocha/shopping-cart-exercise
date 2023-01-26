import { Header } from "../../components/Header";

import Coffee from "../../assets/Coffee.svg";
import IconPurchase from "../../assets/IconPurshase.svg";
import IconCoffee from "../../assets/IconCoffee.svg";
import IconTimer from "../../assets/IconTimer.svg";
import IconBlock from "../../assets/IconBlock.svg";
import { Cards } from "../../components/Cards";
import { useContext } from "react";
import { Context } from "../../Context";

export const Home = () => {
  interface BenefiteProps {
    text: string;
    src: any;
  }

  const benefitsCoffee: BenefiteProps[] = [
    {
      src: IconPurchase,
      text: "Compra simples e segura",
    },
    {
      src: IconBlock,
      text: "Embalagem mantém o café intacto",
    },
    {
      src: IconTimer,
      text: "Entrega rápida e rastreada",
    },
    {
      src: IconCoffee,
      text: "O café chega fresquinho até você",
    },
  ];

  const { dateItems } = useContext(Context);
  

  return (
    <>
     <Header />
    
      <main>
        <div className="flex container mx-auto px-24 py-8 pb-24 justify-between items-center">
          <div>
            <h2 className="font-black text-xl font-Nunito pb-4">
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h2>

            <p className="text-lg pb-16">
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
              qualquer hora
            </p>

            <div className="grid grid-cols-2 gap-y-5">
              {benefitsCoffee.map((item) => (
                <p className="flex items-center gap-3" key={item.src}>
                  <img src={item.src} alt="icon" />
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          <div>
            <img src={Coffee} alt="Café" />
          </div>
        </div>

        <div className="container mx-auto px-24 py-8 ">
          <h2 className="font-Nunito text-2xl font-black pb-14">
            Nossos cafés
          </h2>
          <Cards/>
        </div>
      </main>
    </>
  );
};