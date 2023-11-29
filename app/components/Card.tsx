import { useContext } from 'react'
import { ProductContext } from '#app/ProductContenxt.ts'
import { invariantResponse } from '#app/utils/misc.tsx'
import CardBody from './CardBody.tsx'
import Carousel from './Carousel.tsx'
import Rating from './Rating.tsx'

export default function Card() {
	const product = useContext(ProductContext)
	invariantResponse(product, 'Product is required')
	return (
		<main className="card w-full h-full bg-white shadow-xl">
			<div className="flex p-2 align-middle justify-evenly">
				<h2 className="card-title text-black text-3xl font-bold justify-center">
					{product.title} - {product.brand}
				</h2>
				<Rating />
			</div>
			<Carousel />
			<CardBody />
		</main>
	)
}
