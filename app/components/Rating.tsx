import { useContext } from 'react'
import { ProductContext } from '#app/ProductContenxt.ts'
import { invariantResponse } from '#app/utils/misc.tsx'

export default function Rating() {
	const product = useContext(ProductContext)
	invariantResponse(product, 'Product is required')
	const fullStars = Math.floor(product.rating)
	const halfStar = product.rating % 1 >= 0.5 ? 1 : 0
	const emptyStars = 5 - fullStars - halfStar
	return (
		<div className="rating items-center rating-lg rating-half">
			{[...Array(fullStars)].map((_, index) => (
				<input
					key={`full-${index}`}
					type="radio"
					name={`rating-${product.id}`}
					className="bg-orange-400 mask mask-star-2"
					readOnly
				/>
			))}
			{halfStar === 1 && (
				<input
					key="half"
					type="radio"
					name={`rating-${product.id}`}
					className="bg-orange-400 mask mask-star-2 mask-half-1 h-100%"
					readOnly
				/>
			)}
			{[...Array(emptyStars)].map((_, index) => (
				<input
					key={`empty-${index}`}
					type="radio"
					name={`rating-${product.id}`}
					className="mask mask-star-2 h-100%"
					readOnly
				/>
			))}
		</div>
	)
}
