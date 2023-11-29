type ButtonProps = {
	formId: string
	children: React.ReactNode
	disabled?: boolean
}
export default function Buttton({ formId, children, disabled }: ButtonProps) {
	return (
		<button
			type="submit"
			form={formId}
			className={`btn w-64 rounded-full mt-10 bg-Elm text-gray-100 border-0 hover:bg-Pelorous ${
				disabled ? 'opacity-50 cursor-not-allowed' : ''
			}}`}
		>
			{children}
		</button>
	)
}
