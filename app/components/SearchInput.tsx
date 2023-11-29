type InputProps = {
	name?: string
	placeholder?: string
	className?: string
	btnProps?: string
	type?: string
}

export default function SearchInput({
	className,
	btnProps,
	...props
}: InputProps) {
	return (
		<div className={`relative ${className}`}>
			<input
				type="text"
				name="searchQuery"
				placeholder="Search in Bazar Online"
				className={`input input-bordered w-full max-w-xs h-10 bg-gray-200 text-black placeholder:text-gray-500 pr-10 ${className} ? ...className : ''}`}
				{...props}
			/>
			<button
				type="submit"
				className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${btnProps} ? ...btnProps : ''}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 0 512 512"
					className="text-gray-600"
				>
					<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
				</svg>
			</button>
		</div>
	)
}
