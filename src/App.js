import React, { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input)); // Avoid using eval in production
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center">
        <h1 className="text-4xl text-blue-900 font-bold mb-5">Calculator</h1>

        {/* Display Component */}
        <Display input={input} result={result} />

        {/* Responsive Buttons Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {["7", "8", "9", "/"].map((val) => (
            <Button
              key={val}
              value={val}
              onClick={handleClick}
              className="bg-blue-300 text-blue-900 sm:text-lg md:text-xl lg:text-2xl sm:p-3 md:p-4 lg:p-5"
            />
          ))}
          {["4", "5", "6", "*"].map((val) => (
            <Button
              key={val}
              value={val}
              onClick={handleClick}
              className="bg-blue-300 text-blue-900 sm:text-lg md:text-xl lg:text-2xl sm:p-3 md:p-4 lg:p-5"
            />
          ))}
          {["1", "2", "3", "-"].map((val) => (
            <Button
              key={val}
              value={val}
              onClick={handleClick}
              className="bg-blue-300 text-blue-900 sm:text-lg md:text-xl lg:text-2xl sm:p-3 md:p-4 lg:p-5"
            />
          ))}
          <Button
            value="0"
            onClick={handleClick}
            className="col-span-2 bg-blue-300 text-blue-900 sm:text-lg md:text-xl lg:text-2xl sm:p-3 md:p-4 lg:p-5"
          />
          <Button
            value="."
            onClick={handleClick}
            className="bg-blue-300 text-blue-900 sm:text-lg md:text-xl lg:text-2xl sm:p-3 md:p-4 lg:p-5"
          />
          <Button
            value="+"
            onClick={handleClick}
            className="bg-blue-300 text-blue-900 sm:text-lg md:text-xl lg:text-2xl sm:p-3 md:p-4 lg:p-5"
          />
          <Button
            value="C"
            onClick={handleClick}
            className="col-span-2 bg-red-300 text-red-800 sm:text-lg md:text-xl lg:text-2xl sm:p-3 md:p-4 lg:p-5"
          />
          <Button
            value="="
            onClick={handleClick}
            className="col-span-2 bg-green-300 text-green-900 sm:text-lg md:text-xl lg:text-2xl sm:p-3 md:p-4 lg:p-5"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
