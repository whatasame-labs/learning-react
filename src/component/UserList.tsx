export interface UserProps {
  id: number;
  name: string;
}

export function UserList({ users }: { users: UserProps[] }) {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} </li>
        ))}
      </ul>
    </>
  );
}
