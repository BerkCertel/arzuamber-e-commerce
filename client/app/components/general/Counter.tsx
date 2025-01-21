import { CardProductProps } from "@/constans/Props";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  cardProduct: CardProductProps;
  increaseFunc: () => void;
  descreaseFunc: () => void;
}

function Counter({ cardProduct, increaseFunc, descreaseFunc }: CounterProps) {
  return (
    <div className="flex items-center justify-center gap-4 text-3xl md:text-4xl w-full">
      <button
        onClick={descreaseFunc}
        className="border rounded-lg px-4 py-2 text-xl text-gray-600 hover:bg-primary hover:text-white transition-all transform hover:scale-110"
      >
        <AiOutlineMinus />
      </button>

      <p className="text-2xl font-semibold">{cardProduct.quantity}</p>

      <button
        onClick={increaseFunc}
        className="border rounded-lg px-4 py-2 text-xl text-gray-600 hover:bg-primary hover:text-white transition-all transform hover:scale-110"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
}

export default Counter;
