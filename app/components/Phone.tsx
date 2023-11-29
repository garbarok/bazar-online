type PhoneProps = {
	children: React.ReactNode
}

export default function Phone({ children }: PhoneProps) {
	return (
		<div className="mockup-phone border-primar">
			<div className="camera"></div>
			<div className="display ">
				<div className="artboard artboard-demo phone-5">{children}</div>
			</div>
		</div>
	)
}
