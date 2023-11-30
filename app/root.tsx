import { cssBundleHref } from '@remix-run/css-bundle'
import { type LinksFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	type MetaFunction,
} from '@remix-run/react'
import faviconAssetUrl from './assets/truck.svg'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import fontStylesheetUrl from './styles/font.css'
import ratingStylesheetUrl from './styles/rating.css'
import tailwindStylesheetUrl from './styles/tailwind.css'
import './styles/global.css'
import { Analytics } from '@vercel/analytics/react'

export const links: LinksFunction = () => {
	return [
		{ rel: 'icon', type: 'image/svg+xml', href: faviconAssetUrl },
		{ rel: 'stylesheet', href: fontStylesheetUrl },
		{ rel: 'stylesheet', href: tailwindStylesheetUrl },
		{ rel: 'stylesheet', href: ratingStylesheetUrl },
		cssBundleHref ? { rel: 'stylesheet', href: cssBundleHref } : null,
	].filter(Boolean)
}

function Document({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full overflow-x-hidden">
			<head>
				<Meta />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=0.75" />
				<Links />
			</head>
			<body className="flex h-full flex-col justify-between bg-background text-foreground overflow-y-hidden">
				<Analytics />
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

export default function App() {
	return (
		<Document>
			<div className="flex-1">
				<Outlet />
			</div>
		</Document>
	)
}

export const meta: MetaFunction = () => {
	return [
		{ title: 'Bazar Online' },
		{ name: 'description', content: `Your own captain's log` },
		{ name: 'keywords', content: 'remix, react, javascript' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
	]
}

export function ErrorBoundary() {
	return (
		<Document>
			<div className="flex-1">
				<GeneralErrorBoundary />
			</div>
		</Document>
	)
}
