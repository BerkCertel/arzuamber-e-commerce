import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
  cardProduct: CardProductProps;
  increaseFunc: () => void;
  descreaseFunc: () => void;
}

function Counter({ cardProduct, increaseFunc, descreaseFunc }: CounterProps) {
  return (
    <div className="flex items-center justify-center text-5xl gap-2 ">
      <button onClick={descreaseFunc} className="border rounded-lg px-2 ">
        -
      </button>
      <p>{cardProduct.quantity}</p>
      <button onClick={increaseFunc} className="border rounded-lg px-2 ">
        +
      </button>
    </div>
  );
}

export default Counter;
