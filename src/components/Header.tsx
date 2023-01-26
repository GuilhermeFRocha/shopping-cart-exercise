import Logo from "../assets/Logo.svg";
import Cart from "../assets/Cart.svg";
import Local from "../assets/Local.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";


export const Header = () => {
  const navigate = useNavigate();
  function buyClick () {
   navigate('/cart');
  }

  const { numbershop } =
  useContext(Context);
  return (
    <header>
    <div className="flex container mx-auto px-24 py-8 justify-between items-center  ">
      <a href="/">
      <img src={Logo} alt="logo" />
      </a>
      
      <div className="flex items-center gap-3">
        <button className="bg-purple-100 px-3 py-2 rounded-md flex gap-1 items-center">
          <img src={Local} alt="localização" />
          <p className="text-purple-300 text-xs">Porto Alegre, RS</p>
        </button>
        <button onClick={buyClick}>
        <img src={Cart} alt="carrinho"/>
        </button>
        {numbershop}
      </div>
    </div>
  </header>
  );
};