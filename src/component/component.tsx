const greeting = "Hello component!";
const innerGreeting = "I am nested component!";

function InnerComponent() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jack" },
  ];

  return (
    <>
      <p className="content">{innerGreeting}</p>
      <li>
        {users.map((user) => (
          <span key={user.id}>{user.name}</span>
        ))}
      </li>
    </>
  );
}

export default function NestedComponent() {
  return (
    <div>
      <h1>{greeting}</h1>
      <InnerComponent />
    </div>
  );
}
