import Card from '../UI/Card';
import Button from '../UI/Button';

function AddUser() {
	const addUserHandler = event => {
		event.preventDefault();
	};

	return (
		<Card className="my-8 mx-auto p-4 w-[90%] max-w-2xl">
			<form className="flex flex-col space-y-2" onSubmit={addUserHandler}>
				<label className="font-bold" htmlFor="username">
					Username
				</label>
				<input className="border-2" id="username" type="text" />
				<label className="font-bold" htmlFor="age">
					Age (Years)
				</label>
				<input className="border-2" id="age" type="number" />
				<Button className="self-start" type="submit">
					Add User
				</Button>
			</form>
		</Card>
	);
}

export default AddUser;
