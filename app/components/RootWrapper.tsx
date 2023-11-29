export default function RootWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="h-screen bg-gray-400 flex justify-center items-center overflow-hidden">
			{children}
		</div>
	)
}
