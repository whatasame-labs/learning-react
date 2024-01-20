# Component

## Rules

React component names must always start with a capital letter, while HTML tags must be lowercase.

```ts
const MyComponent = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};
```

The export default keywords specify the main component in the file.

```ts
export default MyComponent;
```

In React, you specify a CSS class with className. It works the same way as the HTML class attribute

```ts
<div className="my-class"></div>
```
JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.

```ts
const name = 'John Doe';

const element = <h1>Hello, {name}</h1>;
```
