"use client"

import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

interface Props {
  product: any
}

export function ProductInfo({ product }: Props) {

  const { addItem, incrementItem, cartDetails } = useShoppingCart()
  const isInCart = !!cartDetails?.[product._id]
 
  const addToCart = () => {
    const item = {
      ...product
    }
    isInCart ? incrementItem(item._id) : addItem(item)
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">{formatCurrencyString({ value: product.price, currency: 'PKR' })}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Info</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <button
            onClick={addToCart}
            className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Add to cart
          </button>
        </div>
      </form>
    </div> 
  )
}
