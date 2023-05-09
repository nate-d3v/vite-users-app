import Card from './Card';
import Button from './Button';

function ErrorModal({ title, message, onConfirm }) {
	return (
		<>
			<div
				className="fixed top-0 left-0 w-full h-screen z-10 bg-black opacity-75"
				onClick={onConfirm}
			/>
			<Card className="fixed top-[30vh] left-[10%] w-[80%] z-[100] overflow-hidden">
				<header className="bg-[#4f005f] p-4">
					<h2 className="text-white">{title}</h2>
				</header>
				<div className="p-4">
					<p>{message}</p>
				</div>
				<footer className="p-4 flex justify-end">
					<Button onClick={onConfirm}>Ok</Button>
				</footer>
			</Card>
		</>
	);
}

export default ErrorModal;
