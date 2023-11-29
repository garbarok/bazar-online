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
			className={`btn btn-primary w-64 rounded-full mt-4 ${
				disabled ? 'opacity-50 cursor-not-allowed' : ''
			}}`}
		>
			{children}
		</button>
	)
}
