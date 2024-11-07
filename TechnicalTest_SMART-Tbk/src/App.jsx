import { useState } from "react";

export default function App() {
  // State to store number as a string
  const [number, setNumber] = useState("");
  // State to store the calculated
  const [result, setResult] = useState(0);

  // Function to handle changes in the input field
  function handleInput(num) {
    //please put your logic here
    const inputNumber = num.target.value;

    const wholeNumber = inputNumber.replace(/\D/g, "");
    setNumber(wholeNumber);
  }

  // Function to handle the calculation
  function handleSubmit() {
    if (number) {
      const reversedNumber = parseInt(number.split("").reverse().join(""), 10);

      const difference = Math.abs(parseInt(number, 10) - reversedNumber);
      setResult(difference);
    } else {
      setResult(0);
    }
  }

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Reverse Difference Calculator
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="numberInput"
          >
            Enter a Number:
          </label>
          <input
            id="numberInput"
            value={number}
            onChange={handleInput}
            className="w-full px-3 py-2 border rounded-md text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a whole number"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
        <div className="mt-6 text-lg font-semibold text-gray-800">
          Result: <span className="text-blue-500">{result}</span>
        </div>
      </div>
    </div>
  );
}
