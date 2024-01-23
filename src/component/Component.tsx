const greeting = "Hello component!";
const innerGreeting = "I am nested component!";

function InnerComponent() {
  return (
    <>
      <p className="content">{innerGreeting}</p>
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
