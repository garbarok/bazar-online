import { Link } from '@remix-run/react'
import truckStylesheetUrl from '../assets/truck.png'

export default function Logo({ ...props }) {
	return (
		<Link to="/">
			<img
				className="max-h-60"
				src={truckStylesheetUrl}
				alt="truck-logo"
				{...props}
			/>
		</Link>
	)
}
