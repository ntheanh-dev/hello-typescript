import React from "react";

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

interface IProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  total: (a: number, b: number) => number;
}

function Count({ count, setCount, total }: IProps) {
  console.log(total(23, 45));

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default Count;
