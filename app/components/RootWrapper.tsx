export default function RootWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="h-screen flex bg-Eden justify-center items-center overflow-hidden">
			{children}
		</div>
	)
}
