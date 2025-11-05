import { useState } from "react";

const TicTacGame = () => {
  const [arr, setArr] = useState(Array(9).fill(null));
  const [isxTurn, setIsTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [drow, setDrow] = useState(null);

  const handleClick = (index) => {
    if (arr[index] || winner) return;
    const tempArr = [...arr];

    tempArr[index] = isxTurn ? "X" : "O";
    setArr(tempArr);

    // Check winner
    if (
      (tempArr[0] && tempArr[0] === tempArr[1] && tempArr[1] === tempArr[2]) ||
      (tempArr[3] && tempArr[3] === tempArr[4] && tempArr[4] === tempArr[5]) ||
      (tempArr[6] && tempArr[6] === tempArr[7] && tempArr[7] === tempArr[8]) ||
      (tempArr[0] && tempArr[0] === tempArr[3] && tempArr[3] === tempArr[6]) ||
      (tempArr[1] && tempArr[1] === tempArr[4] && tempArr[4] === tempArr[7]) ||
      (tempArr[2] && tempArr[2] === tempArr[5] && tempArr[5] === tempArr[8]) ||
      (tempArr[0] && tempArr[0] === tempArr[4] && tempArr[4] === tempArr[8]) ||
      (tempArr[2] && tempArr[2] === tempArr[4] && tempArr[4] === tempArr[6])
    ) {
      setWinner(isxTurn ? "X" : "O");
      setDrow(false);
    } else {
      if (!tempArr.includes(null)) setDrow(true);
      setIsTurn(!isxTurn);
    }
  };

  const handleReset = () => {
    setArr(Array(9).fill(null));
    setWinner(null);
    setDrow(null);
    setIsTurn(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-4">
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6 tracking-wide drop-shadow-lg">
        🎮 Tic Tac Toe
      </h1>

      {/* Game Board */}
      {!winner && !drow && (
        <div className="backdrop-blur-md bg-white/40 shadow-lg border border-white/30 rounded-2xl p-6 w-full max-w-xs sm:max-w-md aspect-square grid grid-cols-3 gap-3">
          {arr.map((elem, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className="border-2 border-blue-400 bg-white/60 hover:bg-blue-100 active:scale-95 transition-all duration-200 flex justify-center items-center rounded-xl text-5xl sm:text-6xl font-bold text-blue-700 shadow-md cursor-pointer select-none"
            >
              {elem}
            </div>
          ))}
        </div>
      )}

      {/* Winner Message */}
      {winner && (
        <div className="text-center mt-8 p-6 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg border border-white/40 max-w-sm">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-3 animate-bounce">
            🏆 Player {winner} Wins!
          </h2>
          <p className="text-gray-700 mb-4">
            Great job! Want to play another round?
          </p>
          <button
            onClick={handleReset}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition-all duration-200"
          >
            Play Again 🔁
          </button>
        </div>
      )}

      {/* Draw Message */}
      {drow && !winner && (
        <div className="text-center mt-8 p-6 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg border border-white/40 max-w-sm">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-3">
            😅 It's a Draw!
          </h2>
          <p className="text-gray-700 mb-4">
            That was close! Both played smart.
          </p>
          <button
            onClick={handleReset}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition-all duration-200"
          >
            Try Again 🎯
          </button>
        </div>
      )}

      {/* Footer / Designer Credit */}
      <footer className="mt-10 text-center text-gray-700 text-sm sm:text-base font-medium">
        Designed with ❤️ by{" "}
        <span className="text-blue-700 font-semibold hover:text-purple-700 transition-all duration-300">
          Abhi
        </span>
      </footer>
    </div>
  );
};

export default TicTacGame;
