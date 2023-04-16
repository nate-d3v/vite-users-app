function Card({ children, className }) {
	return (
		<div className={`bg-white shadow rounded-lg ${className}`}>{children}</div>
	);
}

export default Card;
