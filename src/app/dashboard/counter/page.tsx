import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Shopping Cart",
  description: "Add product in shopping cart",
  date: "2021-07-19",
  tags: ['react', 'state', 'local']
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <span>Products in the shopping cart</span>
      <CartCounter value={0} />

    </div>
  );
}