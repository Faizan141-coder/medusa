'use client'

import Image from "next/image";
import { formatCurrencyString } from "use-shopping-cart";
import { useCart } from "../../../../context/cart";

export default function Checkout() {
  const { cart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border p-4 rounded-lg">
              <div className="w-1/4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="w-3/4 ml-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p>
                  {formatCurrencyString({
                    currency: item.currency,
                    value: item.price,
                    language: "en-PK",
                  })}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Proceed to Payment</button>
          </div>
        </div>
      )}
    </div>
  );
}
