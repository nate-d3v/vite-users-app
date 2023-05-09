import Card from '../UI/Card';

function UsersList({ users }) {
	return (
		<Card className={'my-8 mx-auto w-[90%] max-w-2xl'}>
			<ul className="p-4">
				{users.map(user => (
					<li key={user.id} className="border-[1px] border-[#ccc] my-2 p-2">
						{user.name} ({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
}

export default UsersList;
