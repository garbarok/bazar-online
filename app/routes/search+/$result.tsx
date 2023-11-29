import {
	json,
	redirect,
	type LoaderFunction,
	type DataFunctionArgs,
} from '@remix-run/node'
import { Form, Link, useLoaderData, useParams } from '@remix-run/react'
import Phone from '#app/components/Phone.tsx'
import ResultList from '#app/components/ResultList.tsx'
import RootWrapper from '#app/components/RootWrapper.tsx'
import SearchInput from '#app/components/SearchInput.tsx'
import { invariantResponse } from '#app/utils/misc.tsx'
import { type Product } from '#types/product.ts'

type CachedData = {
	products: Product[]
	timestamp: number
}

type SearchCacheType = {
	[key: string]: CachedData
}

let searchCache: SearchCacheType = {}

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000

export const loader: LoaderFunction = async ({ params }) => {
	const searchTerm = params.result
	invariantResponse(searchTerm, 'result param is required')

	const currentTime = Date.now()
	const cachedData = searchCache[searchTerm]

	if (cachedData && currentTime - cachedData.timestamp < ONE_DAY_IN_MS) {
		return json({ products: cachedData.products })
	}
	const apiUrl = process.env.API_URL
	invariantResponse(apiUrl, 'API_URL environment variable is required')
	const url = new URL(apiUrl)
	url.searchParams.append('search', searchTerm)
	const res = await fetch(url.toString())

	if (!res.ok) {
		throw new Error('Failed to fetch products')
	}
	const products: Product[] = (await res.json()) as Product[]
	invariantResponse(products, 'No products found')

	searchCache[searchTerm] = { products, timestamp: currentTime }

	return json({ products })
}

export async function action({ request }: DataFunctionArgs) {
	const formData = await request.formData()
	const searchQuery = formData.get('searchQuery')
	invariantResponse(searchQuery, 'Search element is required')

	return redirect(`/search/${searchQuery}`)
}

const formId = 'search-form'

export default function Results() {
	const { products } = useLoaderData<{ products: Product[] }>()
	const { result: searchTerm } = useParams<{ result?: string }>()

	return (
		<RootWrapper>
			<Phone>
				<div className="flex flex-col h-full bg-white w-full overflow-y-auto scrollbar-hide">
					<header className="pt-9 pb-3 flex items-center justify-center sticky top-0 bg-white z-10">
						<div className="flex items-center space-x-4 px-4 max-w-md w-full">
							<Link to=".." className="text-2xl">
								🔙
							</Link>
							<Form method="post" id={formId} className="w-full">
								<SearchInput
									className="flex-grow text-ellipsis"
									placeholder={searchTerm || 'Search'}
									btnProps="right-8"
								/>
							</Form>
						</div>
					</header>
					<ResultList products={products} searchTerm={searchTerm} />
				</div>
			</Phone>
		</RootWrapper>
	)
}
