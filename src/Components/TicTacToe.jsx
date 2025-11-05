// import React from 'react'
// import { useState } from 'react'

// const TicTacToe = () => {

//     const [arr, setArr] = useState([null, null, null, null, null, null, null, null, null])

//     const [isOTurn, setOTrun] = useState(true)

//     const [winner, setWinner] = useState(null)

//     const handleClick = (index) => {
//         const tempArr = [...arr]
//         if (isOTurn) {
//             tempArr[index] = "O";
//             setArr(tempArr)
//             setOTrun(!isOTurn)

//         } else {

//             tempArr[index] = "X";
//             setArr(tempArr)
//             setOTrun(!isOTurn)
//         }

//         if ((tempArr[0] && tempArr[0] == tempArr[1] && tempArr[1] == tempArr[2]) ||
//             (tempArr[3] && tempArr[3] == tempArr[4] && tempArr[4] == tempArr[5]) ||
//             (tempArr[6] && tempArr[6] == tempArr[7] && tempArr[7] == tempArr[8]) ||
//             (tempArr[0] && tempArr[0] == tempArr[3] && tempArr[3] == tempArr[6]) || 
//             (tempArr[1] && tempArr[1] == tempArr[4] && tempArr[4] == tempArr[7]) || 
//             (tempArr[2] && tempArr[2] == tempArr[5] && tempArr[5] == tempArr[8]) ||
//             (tempArr[0] && tempArr[0] == tempArr[4] && tempArr[4] == tempArr[8]) ||
//             (tempArr[2] && tempArr[2] == tempArr[4] && tempArr[4] == tempArr[6]) 
        
//         ) {
//             setWinner(isOTurn? "O" : "X")
//          }
// console.log(winner);

//     }
//     return (
//         <div>
//             <h1 className='text-center font-bold
//         '>Tic Tac Toe</h1>

//             <div className="flex justify-center">
//                 <div className="grid grid-cols-3  items-center text-center w-60">
//                     {arr.map((elemt, index) => <div key={index} className="border p-5 h-20" onClick={() => handleClick(index)}>{elemt}</div>)}
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default TicTacToe


// import React from 'react'
import { useState } from 'react'

const TicTacToe = () => {
    const [arr, setArr] = useState([null, null, null, null, null, null, null, null, null])
    const [isxTurn, setIsTurn] = useState(true)
    const [winner, setWinner] = useState(null)
    const [drow, setDrow] = useState(null)

    const handleClick = (index) => {
        if (arr[index]) return;
        const tempArr = [...arr]

        if (isxTurn) {
            tempArr[index] = 'X';
        } else {
            tempArr[index] = 'O'
        }
        setArr(tempArr);
        if (
            (tempArr[0] && tempArr[0] == tempArr[1] && tempArr[1] == tempArr[2]) ||
            (tempArr[3] && tempArr[3] == tempArr[4] && tempArr[4] == tempArr[5]) ||
            (tempArr[6] && tempArr[6] == tempArr[7] && tempArr[7] == tempArr[8]) ||
            (tempArr[0] && tempArr[0] == tempArr[3] && tempArr[3] == tempArr[6]) ||
            (tempArr[1] && tempArr[1] == tempArr[4] && tempArr[4] == tempArr[7]) ||
            (tempArr[2] && tempArr[2] == tempArr[5] && tempArr[5] == tempArr[8]) ||
            (tempArr[0] && tempArr[0] == tempArr[4] && tempArr[4] == tempArr[8]) ||
            (tempArr[2] && tempArr[2] == tempArr[4] && tempArr[4] == tempArr[6])
        ) {
            setWinner(isxTurn ? 'X' : 'O')
           setDrow(false);
            
        }
        else
        {
           if( !tempArr.includes(null))
            {
                setDrow(true)
            }
            setIsTurn(!isxTurn)
        }


    }
    return (
        <div>
            <h1 className='text-center text-5xl my-7 font-bold'>Tic Tac Toe</h1>
            {
                winner ? <div className='text-center font-bold text-3xl'>Winner is={winner}</div>
                    : <div className='w-full md:w-1/2 h-[500px] mx-auto grid grid-cols-3 gap-1'>
                        {
                            arr.map((elem, i) => {
                                return (
                                    <div className='border-2 cursor-pointer text-center font-bold text-6xl justify-center flex items-center' key={i} onClick={() => handleClick(i)}>{elem}</div>
                                )
                            })

                        } </div>
            }

            {
                drow && <><h1 className='text-3xl text-center'>Match is Drow</h1></>
            }


        </div>
    )
}

export default TicTacToe