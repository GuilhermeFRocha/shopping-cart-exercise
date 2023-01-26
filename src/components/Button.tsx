import { useState } from "react";

export const Button = ({ payment }: any) => {
  const [active, setActive] = useState(false);

//   function hadleClick(props: any) {
//     setActive(true);
//     console.log(props);
//   }

  return (
    <>
      {active ? (
        <button
          onClick={() => {
            setActive(false);
          }}
          className="p-4 flex items-center gap-3 bg-purple-100 rounded-md w-48 text-xs text-grey-400 uppercase whitespace-nowrap border-2 border-purple-400"
          >
          {payment.iconPayment} {payment.textPayment}
        </button>
      ) : (
          <button
          onClick={(props) => {
            

              if (payment.textPayment !== props.target.innerText ) {

                setActive(false);
                console.log( payment);
              }
            }}
            className="p-4 flex items-center gap-3 bg-grey-300 rounded-md w-48 text-xs text-grey-400 uppercase whitespace-nowrap"
        >
          {payment.iconPayment} {payment.textPayment}
        </button>
      )}
    </>
  );
};
