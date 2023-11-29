import { useContext } from 'react'
import { ProductContext } from '#app/ProductContenxt.ts'
import { type Product } from '#types/product.ts'

export default function Carousel() {
	const product: Product = useContext(ProductContext)
	return (
		<>
			<figure className="p-4 flex justify-center">
				<img
					src={product.thumbnail}
					alt={product.title}
					className="rounded-[30px] shadow-xl h-60 w-100"
				/>
			</figure>
			<section className="carousel rounded-box pt-4 w-full overflow-hidden">
				{product.images.map((image, index) => (
					<div className="carousel-item" key={index}>
						<img
							src={image}
							alt={`${product.title}`}
							className="rounded-[30px] h-20 w-20 p-2"
						/>
					</div>
				))}
			</section>
		</>
	)
}
