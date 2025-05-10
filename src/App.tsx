import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Count from "./Count";

const Degree = {
  ASSOCIATES: "ASSOCIATES",
  MASTERS: "MASTERS",
  DOCTORATE: "DOCTORATE",
  PROFRESSINAL: "PROFRESSINAL",
} as const;

type Degree = (typeof Degree)[keyof typeof Degree];

type People = {
  name: string;
  age: number;
  address: string;
  phone?: any;
  degree: Degree;
  level?: string | number | Degree;
};

type Employee = People & {
  phone: Number;
};

interface IAnimal {
  name: String;
  age: Number;
}

interface Dog extends IAnimal {
  makeSound: () => String;
}

type ApiResponse<T, K> = {
  data: T;
  status: "success" | "failure";
  messageType?: K;
};

// type BookResponse = {
//   data : {id: number, bookName: string}
//   status: 'success' | 'failure'
// }

const userResponse: ApiResponse<{ id: number; name: String }, {}> = {
  data: { id: 1, name: "" },
  status: "success",
};

function App() {
  const [count, setCount] = useState<number>(123);

  const [people, setPeople] = useState<People>();

  function total(number1: number, number2: number): number {
    return number1 + number2;
  }

  const employee: Employee = {
    name: "Em",
    age: 14,
    phone: 234234,
    address: "Noi BAi",
    degree: Degree.MASTERS,
  };

  const employee2: typeof employee = {
    name: "Em2",
    age: 14,
    phone: 234234,
    address: "Noi BAi2",
    degree: Degree.MASTERS,
  };

  useEffect(() => {
    setPeople({
      name: "Anh",
      age: 12,
      address: "Ha Noi",
      degree: Degree.ASSOCIATES,
    });
  }, []);

  console.log(employee2, people);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count count={count} setCount={setCount} total={total} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
