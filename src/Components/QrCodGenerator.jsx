import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { IoMdDownload } from "react-icons/io";

const QrCodeGenerator = () => {
  const [userInput, setUserInput] = useState('')
  const [showQR, setShowQR] = useState('')

  const handleGenerate = () => {
    if (!userInput.trim()) return
    setShowQR(userInput)
    setUserInput('')
  }

  const handleReset = () => {
    setShowQR('')
    setUserInput('')
  }

  const handleDownload = () => {
    const svg = document.getElementById("QRCodeId")
    const data = new XMLSerializer().serializeToString(svg)
    const blob = new Blob([data], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "QRCode.svg"
    link.click()
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          QR Code Generator
        </h1>

        {/* Input Field */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
          <input
            type="text"
            placeholder="Enter text or URL..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <div className="flex gap-2">
            <button
              onClick={handleGenerate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-all"
            >
              Generate
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-xl transition-all"
            >
              Reset
            </button>
          </div>
        </div>

        {/* QR Code Display */}
        {showQR && (
          <div className="flex flex-col justify-center items-center mt-6">
            <div className="bg-white p-4 rounded-2xl border shadow-md">
              <QRCode id="QRCodeId" value={showQR} size={180} />
            </div>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-all"
            >
              <IoMdDownload className="text-xl" />
              Download
            </button>
          </div>
        )}
      </div>
 
      <p className="mt-6 text-gray-500 text-sm text-center">
        Designed By ❤️ ABHI...
      </p>
    </div>
  )
}

export default QrCodeGenerator
