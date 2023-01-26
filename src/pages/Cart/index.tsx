import { Header } from "../../components/Header";
import { Formik, Form } from "formik";
import { FormGroup, Input } from "reactstrap";
import IconLocal from "../../assets/IconLocal.svg";
import { useContext, useState } from "react";
import { Context } from "../../Context";
import IconRemove from "../../assets/IconRemove.svg";
import VectorPlus from "../../assets/VectorPlus.svg";
import VectorMinus from "../../assets/VectorMinus.svg";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Button } from "../../components/Button";

export const CartPage = () => {
  const { employees } = useContext(Context);

  const [count, setCount] = useState(0);

  const handleMinusClick = (ide: any) => {
    if (ide.items.count > 1) {
      setCount(ide.items.count - 1);
      ide.items.count = ide.items.count - 1;
    }
  };

  const handleClick = (ide: any) => {
    setCount(ide.items.count + 1);
    ide.items.count = ide.items.count + 1;
  };

  interface paymentsProps {
    iconPayment: any;
    textPayment: string;
  }

  const payments: paymentsProps[] = [
    {
      iconPayment: <CreditCard size={16} color={"#8047F8"} />,
      textPayment: "CARTÃO DE CRÉDITO",
    },
    {
      iconPayment: <Bank size={16} color={"#8047F8"} />,
      textPayment: "CARTÃO DE DÉBITO",
    },
    {
      iconPayment: <Money size={16} color={"#8047F8"} />,
      textPayment: "DINHEIRO",
    },
  ];
  return (
    <>
      <Header />

      <main>
        <div className="flex container mx-auto px-24 py-8 pb-24 justify-around items-baseline gap-8">
          <div>
            <h2 className="pb-4 font-black">Complete seu pedido</h2>
            <Formik initialValues={{ name: "sss" }} onSubmit={() => {}}>
              {({}) => {
                return (
                  <Form className="bg-grey-100 p-10 rounded-md">
                    <div className="">
                      <h2 className=" flex gap-2 items-center text-sm text-black-200">
                        <img src={IconLocal} alt="" /> Endereço de Entrega
                      </h2>
                      <p className="text-xs text-black-300 pl-8 pb-6">
                        Informe o endereço onde deseja receber seu pedido
                      </p>
                    </div>
                    <FormGroup className="py-2">
                      <Input
                        id="cep"
                        placeholder="CEP"
                        className="bg-grey-500 bg-white-200 rounded text-grey-200 p-3 border-2 border-grey-300 w-52 text-xs"
                      />
                    </FormGroup>

                    <FormGroup className="py-2">
                      <Input
                        placeholder="Rua"
                        id="street"
                        className="bg-grey-500 bg-white-200 rounded text-grey-200 p-3 border-2 border-grey-300 w-96 text-xs"
                      />
                    </FormGroup>

                    <div className="flex gap-3">
                      <FormGroup className="py-2">
                        <Input
                          placeholder="Número"
                          id="number"
                          className="bg-grey-500 bg-white-200 rounded text-grey-200 p-3 border-2 border-grey-300 w-52 text-xs"
                        />
                      </FormGroup>

                      <FormGroup className="py-2">
                        <Input
                          placeholder="Complemento"
                          id="complement"
                          className="bg-grey-500 bg-white-200 rounded text-grey-200 p-3 border-2 border-grey-300 w-96 text-xs"
                        />
                      </FormGroup>
                    </div>

                    <div className="flex gap-3">
                      <FormGroup className="py-2">
                        <Input
                          placeholder="Bairro"
                          id="district"
                          className="bg-grey-500 bg-white-200 rounded text-grey-200 p-3 border-2 border-grey-300 w-52 text-xs"
                        />
                      </FormGroup>

                      <FormGroup className="py-2">
                        <Input
                          placeholder="Cidade"
                          id="city"
                          className="bg-grey-500 bg-white-200 rounded text-grey-200 p-3 border-2 border-grey-300 w-96 text-xs"
                        />
                      </FormGroup>

                      <FormGroup className="py-2">
                        <Input
                          placeholder="UF"
                          id="state"
                          className="bg-grey-500 bg-white-200 rounded text-grey-200 p-3 border-2 border-grey-300 w-16 text-xs"
                        />
                      </FormGroup>
                    </div>
                  </Form>
                );
              }}
            </Formik>

            <div className="bg-grey-100 mt-3 p-10">
              <h2 className="pb-1 flex items-center gap-1 text-sm text-grey-600">
                <CurrencyDollar size={22} color={"#8047F8"} />
                Pagamento
              </h2>
              <p className="pb-8 text-xs text-grey-400 pl-8">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>

              <div className="flex gap-3">
                {payments.map((payment) => (
                  <Button payment={payment} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="pb-4 font-black">Cafés selecionados</h2>

            {employees.length > 0 ? (
              <div className="bg-grey-100 p-10 rounded-tr-3xl rounded-bl-3xl border-top-left-radius border-bottom-right-radius">
                {employees.map((ide: any) => {
                  return (
                    <div className="flex gap-5 py-8 border-b-2 border-b-grey-300">
                      <div className="w-16">
                        <img src={ide.items.imgCoffee} alt="" />
                      </div>

                      <div>
                        <p className="whitespace-nowrap font-normal text-sm text-grey-600">
                          {ide.items.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex bg-grey-300 px-3 py-2 gap-1 items-center rounded-md">
                            <button
                              onClick={() => {
                                handleMinusClick(ide);
                              }}
                            >
                              <img src={VectorMinus} alt="" />
                            </button>
                            {ide.items.count > 0 ? (
                              <p>{ide.items.count}</p>
                            ) : null}
                            <button
                              onClick={() => {
                                handleClick(ide);
                              }}
                            >
                              <img
                                src={VectorPlus}
                                className="text-sm"
                                alt=""
                              />
                            </button>
                          </div>
                          <button className="flex items-center gap-1 font-normal text-xs text-grey-400 bg-grey-300 rounded-md px-2 py-2">
                            <img src={IconRemove} alt="" /> Remover
                          </button>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-sans font-bold">
                          R$ {ide.items.value}0
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>Nenhum produto selecionado</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
