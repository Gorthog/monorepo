import { useState } from 'react';

export const Button = ({ name }: { name: string }) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      Counter: {counter}
      <br />
      <button onClick={() => setCounter((counter) => counter + 1)}>{name}</button>
    </>
  );
};
