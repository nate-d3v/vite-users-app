import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddUser({ onAddUser }) {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = event => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0).',
			});
			return;
		}
		onAddUser(enteredUsername, enteredAge);
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = event => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = event => {
		setEnteredAge(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className="my-8 mx-auto p-4 w-[90%] max-w-2xl">
				<form className="flex flex-col space-y-2" onSubmit={addUserHandler}>
					<label className="font-bold" htmlFor="username">
						Username
					</label>
					<input
						className="border-2"
						id="username"
						type="text"
						onChange={usernameChangeHandler}
						value={enteredUsername}
					/>
					<label className="font-bold" htmlFor="age">
						Age (Years)
					</label>
					<input
						className="border-2"
						id="age"
						type="number"
						onChange={ageChangeHandler}
						value={enteredAge}
					/>
					<Button className="self-start" type="submit">
						Add User
					</Button>
				</form>
			</Card>
		</>
	);
}

export default AddUser;
