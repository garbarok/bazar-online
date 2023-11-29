import { useContext } from 'react'
import { ProductContext } from '#app/ProductContenxt.ts'
import { invariantResponse } from '#app/utils/misc.tsx'

function getOriginalPrice(price: number, discountPercentage: number) {
	const originalPrice = price / (1 - discountPercentage / 100)
	return originalPrice.toFixed(2)
}

export default function CardBody() {
	const product = useContext(ProductContext)
	invariantResponse(product, 'Product is required')

	return (
		<div className="card-body p-4">
			<div className="flex items-center justify-evenly">
				<div className="text-red-500">-{product.discountPercentage}%</div>
				<div className="text-black text-4xl font-medium">
					{product.price} <span className="text-sm align-top">$</span>
				</div>
			</div>
			<div className="text-gray-500 text-sm">
				{`Price before: `}
				<del>
					{getOriginalPrice(product.price, product.discountPercentage)}$
				</del>
			</div>

			<section>
				Description <p className="text-gray-700">{product.description}</p>
			</section>
			<div className="card-actions justify-center h-full content-end	">
				<button className="btn bg-orange-400 text-black border-orange-400 rounded-full w-60 hover:bg-orange-600 hover:border-orange-600">
					Buy now
				</button>
			</div>
		</div>
	)
}
