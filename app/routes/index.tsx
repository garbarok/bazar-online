import { redirect, type ActionFunctionArgs } from '@remix-run/node'
import { Form, useNavigation } from '@remix-run/react'
import Buttton from '#app/components/Buttton.tsx'
import Logo from '#app/components/Logo.tsx'
import Phone from '#app/components/Phone.tsx'
import RootWrapper from '#app/components/RootWrapper.tsx'
import SearchInput from '#app/components/SearchInput.tsx'
import LoadingDots from '#app/components/ui/loadingDots.tsx'
import { invariantResponse } from '#app/utils/misc.tsx'

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData()
	const searchQuery = formData.get('searchQuery')
	invariantResponse(searchQuery, 'Search element is required')
	return redirect(`/search/${searchQuery}`)
}

export default function Index() {
	const navigation = useNavigation()
	const isSubmitting = navigation.state === 'submitting'

	return (
		<RootWrapper>
			<Phone>
				<div className="flex h-screen w-full justify-center items-center bg-white">
					<div className="flex flex-col items-center">
						<Logo />
						<h1 className="mb-4 text-2xl font-bold">Bazar Online</h1>
						<Form method="post" className="relative" id="search-form">
							<SearchInput />
						</Form>

						<Buttton formId="search-form" disabled={isSubmitting}>
							{!isSubmitting ? 'Search' : <LoadingDots />}
						</Buttton>
					</div>
				</div>
			</Phone>
		</RootWrapper>
	)
}
