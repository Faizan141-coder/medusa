interface Props {
  product: any
}

export function ProductInfoDetails({ product }: Props) {

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">

      <div>
        <h3 className="mb-4 text-2xl font-bold">Description</h3>
        <div>{product.description1}</div>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div>{product.description2}</div>
      </div>
      
      <div className="mt-10">
        <h3 className="text-2xl font-bold">Features</h3>
        <ul className="mt-4 list-inside list-disc space-y-2">
          {product.features.map((feature: any, index: any) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold">Sensing Ranges</h3>
        <ul className="mt-4 list-inside list-disc space-y-2">
          {product.sensingRanges.map((range: any, index: any) => (
            <li key={index}>{range}</li>
          ))}
        </ul>
      </div>

      <div className="my-10">
        <h3 className="text-2xl font-bold">Applications</h3>
        <ul className="mt-4 list-inside list-disc space-y-2">
          {product.applications.map((application: any, index: any) => (
            <li key={index}>{application}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}
