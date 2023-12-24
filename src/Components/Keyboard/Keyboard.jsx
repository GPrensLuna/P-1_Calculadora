import { useState } from "react";
import { ButtonStyle } from "./ButtonStyle/ButtonStyle.jsx";

export const Keyboard = () => {
  const [result, setResult] = useState("0");

  const btnNumber = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const btnSpecials = ["AC", "+/-", "%"];
  const btnSymbol = ["/", "X", "-", "+", "="];

  const handleButtonClick = (buttonValue) => {
    setResult((prevResult) => {
      if (prevResult === "0" || prevResult === "Error") {
        return buttonValue.toString();
      } else {
        return prevResult + buttonValue.toString();
      }
    });
  };

  return (
    <>
      <div className="flex justify-center items-center  h-[950px]">
        <div
          className="grid bg-black w-[420px] h-[850px] m-1 rounded-[32px] border-4 metal-border"
          style={{ gridTemplateRows: "50px 230px 1fr" }}
        >
          <header className="row-start-1 text-white mx-10">
            <h1>status</h1>
          </header>
          <main className="row-start-2 text-white text-[68px] grid justify-end items-end overflow-hidden p-2">
            <h1>{result}</h1>
          </main>
          <footer
            className="grid justify-center gap-2"
            style={{ gridTemplateRows: "310px 100px" }}
          >
            <div className="col-start-1">
              <div className="grid grid-cols-3 gap-2">
                {btnSpecials.map((special) => (
                  <ButtonStyle
                    key={special}
                    number={special}
                    isSpecial={true}
                    isPlusMinus={special === "+/-"}
                  />
                ))}
                {btnNumber.map((number) => (
                  <ButtonStyle
                    key={number}
                    number={number}
                    isDoubleWidth={number === 0}
                    isTripleWidth={number === "."}
                    onClick={handleButtonClick}
                  />
                ))}
              </div>
            </div>

            <div className="col-start-2 justify-center items-center">
              <div className="flex flex-col gap-2 ">
                {btnSymbol.map((symbol) => (
                  <ButtonStyle
                    key={symbol}
                    number={symbol}
                    isDoubleWidth={symbol === 0}
                    isSymbol={true}
                  />
                ))}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
