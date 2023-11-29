import { Link } from '@remix-run/react'
import { ProductContext } from '#app/ProductContenxt.ts'
import { type Product } from '#types/product.ts'
import Rating from './Rating.tsx'

interface ResultProductType {
	products: Product[]
	searchTerm?: string
}

export default function ResultList({
	products,
	searchTerm,
}: ResultProductType) {
	return (
		<>
			<h4 className="font-bold text-center text-black text-sm">
				Search results for "{searchTerm}": {products.length}
			</h4>
			<div className="flex-1">
				<ul className="flex flex-col space-y-4 p-4">
					{products.map(product => (
						<ProductContext.Provider value={product} key={product.id}>
							<Link
								to={`../products/${product.id}`}
								prefetch="viewport"
								state={{ search: searchTerm }}
								key={product.id}
							>
								<li className="flex space-x-4 items-center">
									<img
										src={product.thumbnail}
										alt={`Thumbnail for ${product.title}`}
										className="max-w-[5rem]  rounded-full bg-cover"
										key={product.id}
									/>
									<div className="flex flex-col">
										<h4 className="font-bold text-black text-l">
											{product.title}
										</h4>
										<p className="text-black text-ellipsis text-sm">
											{product.description}
										</p>
										<div className="flex place-content-between pt-2 ">
											<h5 className="text-xl font-bold text-black">
												{product.price}$
											</h5>
											<Rating />
										</div>
									</div>
								</li>
							</Link>
						</ProductContext.Provider>
					))}
				</ul>
			</div>
		</>
	)
}
