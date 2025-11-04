import React from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import { IoMdDownload } from "react-icons/io";


const QrCodGenerator = () => {
    const [userInput, setUserInput] = useState('')
    const [showqr, setQrshow] = useState()


    const show = () => {
        setQrshow(userInput)
        setUserInput('')
    }

    const ResetBtn = () => {
        setQrshow('')
        setUserInput('')
    }

    const handleDownload = () => {
        const svg = document.getElementById("QRCodeId")
        const data = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([data], { type: "image/svg+xml" })

        const url = URL.createObjectURL(blob)

        // <a href ="blob://QRCode.svg" download="QRCode.svg">
        const link = document.createElement("a")

        link.href = url;

        link.download = "barcod.svg"

        link.click()





    }

    return (
        <div>
            <div className='w-full justify-center items-center flex' >
                <input className='border-2 border-red-600 p-3 m-3 w-[300px] rounded-2xl ' value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" placeholder='Type here..' />
                <button className='text-center m-3 border-2 border-blue-600 p-2 rounded-2xl w-1/9' onClick={show}>Show</button>
                <button className='text-center m-3 border-2 border-blue-600 p-2 rounded-2xl w-1/9' onClick={ResetBtn}>Reset</button>

            </div>
            <div className='flex  flex-col justify-center items-center  mt-3 '>
                {
                    showqr && <  QRCode value={showqr} id='QRCodeId' className='border-2 p-2  rounded-2xl' />
                }
            </div>
            <div className='flex  flex-col justify-center items-center  mt-3 '>
                {
                    showqr && <button className='text-center m-3 border-2 border-blue-600 p-2 rounded-2xl w-1/9' onClick={handleDownload} >Download</button>

                }
            </div>
        </div>
    )
}

export default QrCodGenerator  