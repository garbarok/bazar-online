import {
	type DataFunctionArgs,
	json,
	redirect,
	type LoaderFunction,
} from '@remix-run/node'
import { Form, Link, useLoaderData, useLocation } from '@remix-run/react'
import { useEffect, useState } from 'react'
import Card from '#app/components/Card.tsx'
import Phone from '#app/components/Phone.tsx'
import RootWrapper from '#app/components/RootWrapper.tsx'
import SearchInput from '#app/components/SearchInput.tsx'
import { ProductContext } from '#app/ProductContenxt.ts'
import { db } from '#app/utils/db.server.ts'
import { invariantResponse } from '#app/utils/misc.tsx'
import { type Product } from '#types/product.ts'

type productType = {
	product: Product
}

export const loader: LoaderFunction = ({ params }) => {
	invariantResponse(params.productId, 'productId param is required')
	const searchTerm = Number(params.productId)
	console.log('loader', searchTerm)
	let product = db.product.findFirst({
		where: { id: { equals: searchTerm } },
	})

	invariantResponse(product, 'No products found')

	return json({ product, searchTerm })
}

export async function action({ request }: DataFunctionArgs) {
	const formData = await request.formData()
	const searchQuery = formData.get('searchQuery')

	return redirect(`/search/${searchQuery}`)
}

const formId = 'search-form'

export default function Product() {
	const location = useLocation()
	const [history, setHistory] = useState()
	const { product } = useLoaderData<productType>()

	useEffect(() => {
		if (!location.state) return
		if (typeof location.state.search !== 'string') return
		setHistory(location.state.search)
	}, [location.state])

	return (
		<ProductContext.Provider value={product}>
			<RootWrapper>
				<Phone>
					<div className="flex flex-col h-full bg-white w-full overflow-y-auto">
						<header className="p-4 mt-4 flex items-center justify-center">
							<div className="flex items-center space-x-4 max-w-md w-full">
								<Link to={`../search/${history}`} className="text-2xl">
									🔙
								</Link>
								<Form method="post" id={formId} className="w-full">
									<SearchInput
										className="flex-grow text-ellipsis"
										placeholder={history || 'Search'}
										btnProps="right-8"
									/>
								</Form>
							</div>
						</header>
						<Card />
					</div>
				</Phone>
			</RootWrapper>
		</ProductContext.Provider>
	)
}
