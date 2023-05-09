import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { useState } from 'react';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (name, age) => {
		setUsersList(prevUsersList => {
			return [
				...prevUsersList,
				{ name: name, age: age, id: prevUsersList.length + 1 },
			];
		});
	};

	return (
		<div className="bg-neutral-800 min-h-screen overflow-auto">
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
