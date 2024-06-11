// "use client"

// import Image from "next/image"
// import { XCircle } from "lucide-react"
// import { formatCurrencyString } from "use-shopping-cart"
// import toast from "react-hot-toast"

// interface Props {
//   products: any[]
// }

// export function ProductGrid({ products }: Props) {
//   const usdToPkr = 280;

//   if (products.length === 0) {
//     return (
//       <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
//         <div>
//           <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
//           <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
//             No products found
//           </h1>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-4 lg:gap-x-8">
//       {products.map((product: any) => {
//         if (product.images && product.images.length > 0) {
//           const firstImageUrl = product.images[0].url;
//           const priceInPkr = product.variants[0]?.prices[0]?.amount
//             ? product.variants[0].prices[0].amount * usdToPkr
//             : 0;

//           return (
//             <button
//               key={product.id}
//               className="hover:scale-105 transition-transform duration-300 ease-in-out"
//               onClick={() => {
//                 toast.success(`${product.title} Added to cart`);
//               }}
//             >
//               <div className="text-center">
//                 <div className="mx-auto mb-2 h-60 w-60 overflow-hidden rounded-lg border-2 border-gray-600">
//                   <Image
//                     src={firstImageUrl}
//                     alt={product.title}
//                     width={225}
//                     height={280}
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>
//                 <h3 className="mt-4 font-medium">{product.title}</h3>
//                 <p className="mt-2 font-medium">
//                   {formatCurrencyString({
//                     currency: "PKR",
//                     value: priceInPkr,
//                     language: "en-PK",
//                   })}
//                 </p>
//               </div>
//             </button>
//           );
//         }

//         return (
//           <div key={product._id}>
//             <h3>{product.name}</h3>
//             <p>No images available</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

"use client"

import Image from "next/image"
import { XCircle } from "lucide-react"
import { formatCurrencyString } from "use-shopping-cart"
import toast from "react-hot-toast"
import { useCart } from "../../context/cart"
import Link from "next/link"

interface ProductVariantPrice {
  amount: number
}

interface ProductVariant {
  prices: ProductVariantPrice[]
}

interface ProductImage {
  url: string
}

interface Product {
  id: string
  title: string
  images: ProductImage[]
  variants: ProductVariant[]
}

interface Props {
  products: Product[]
}

export function ProductGrid({ products }: Props) {
  const { addToCart } = useCart()
  const usdToPkr = 280

  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-4 lg:gap-x-8">
        {products.map((product) => {
          if (product.images && product.images.length > 0) {
            const firstImageUrl = product.images[0].url
            const priceInPkr = product.variants[0]?.prices[0]?.amount
              ? product.variants[0].prices[0].amount * usdToPkr
              : 0

            return (
              <button
                key={product.id}
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={() => {
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: priceInPkr,
                    currency: "PKR",
                    image: firstImageUrl,
                  })
                  toast.success(`${product.title} Added to cart`)
                }}
              >
                <div className="text-center">
                  <div className="mx-auto mb-2 h-60 w-60 overflow-hidden rounded-lg border-2 border-gray-600">
                    <Image
                      src={firstImageUrl}
                      alt={product.title}
                      width={225}
                      height={280}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 font-medium">{product.title}</h3>
                  <p className="mt-2 font-medium">
                    {formatCurrencyString({
                      currency: "PKR",
                      value: priceInPkr,
                      language: "en-PK",
                    })}
                  </p>
                </div>
              </button>
            )
          }

          return (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>No images available</p>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col items-center justify-center mx-auto mt-16">
        <Link href="/checkoutt">
          <button className="p-4 bg-black hover:bg-gray-900 text-white rounded-md">
            Go to Checkout
          </button>
        </Link>
      </div>
    </>
  )
}
