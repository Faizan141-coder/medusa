import { ProductGrid } from "components/product-grid"
import getProducts from "../../../../actions/get-products"

export default async function Home() {

  const products = await getProducts()

  if (!products) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">
          Medusa Store
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">This is Medusa Store</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} result{products.length === 1 ? "" : "s"}
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <ProductGrid products={products} />
          </section>
        </main>
      </div>
    </div>
  )
}
