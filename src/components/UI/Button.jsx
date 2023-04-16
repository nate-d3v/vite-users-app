function Button({ type, onClick, children, className }) {
	return (
		<button
			className={`border-2 border-purple-900 bg-purple-900 text-white py-1 px-4 cursor-pointer hover:bg-purple-600 hover:border-purple-600 focus:outline-0 ${className}`}
			type={type || 'button'}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
