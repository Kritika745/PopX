import { useNavigate } from "react-router-dom"
import { useState, useRef } from "react"
import PhoneLayout from "./PhoneLayout"

function Login() {
  const navigate = useNavigate()
  const [isButtonBlue, setIsButtonBlue] = useState(false)
  const timerRef = useRef(null)

  const handleInputClick = () => {
    // Clear any existing timer to handle rapid clicks
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    // Change button to blue
    setIsButtonBlue(true)

    // Set timer to change back to gray after 1 second
    timerRef.current = setTimeout(() => {
      setIsButtonBlue(false)
    }, 300)
  }

  return (
    <PhoneLayout>
      <div className="p-6 h-full flex flex-col bg-[#f7f8f9]">
        <div className="mt-2">
          <h1 className="text-[28px] font-bold text-[#333333] leading-tight">
            Signin to your
            <br />
            PopX account
          </h1>
          <p className="text-[#666666] mt-3 text-base">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <div className="space-y-5 mt-8">
            <div className="relative">
              <div className="absolute -top-4 left-3 px-1 bg-[#f7f8f9]">
                <label htmlFor="email" className="text-xs font-medium text-[#6c5ce7]">
                  Email Address
                </label>
              </div>
              <input
                id="email"
                type="email"
                readOnly
                onClick={handleInputClick}
                className="w-full text-xs px-4 py-3 border border-[#CBCBCB] rounded-lg !bg-[#f7f8f9] focus:outline-none text-gray-600 [&:-webkit-autofill]:!bg-[#f7f8f9] [&:-webkit-autofill]:[box-shadow:0_0_0_30px_#f7f8f9_inset] cursor-pointer"
                placeholder="Enter email address"
              />
            </div>

            <div className="relative">
              <div className="absolute -top-4 left-3 px-1 bg-[#f7f8f9]">
                <label htmlFor="password" className="text-xs font-medium text-[#6c5ce7]">
                  Password
                </label>
              </div>
              <input
                id="password"
                type="password"
                readOnly
                onClick={handleInputClick}
                className="w-full text-xs px-4 py-3 border border-[#CBCBCB] rounded-lg !bg-[#f7f8f9] focus:outline-none text-gray-600 [&:-webkit-autofill]:!bg-[#f7f8f9] [&:-webkit-autofill]:[box-shadow:0_0_0_30px_#f7f8f9_inset] cursor-pointer"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              className={`w-full ${isButtonBlue ? "bg-[#6b9fcdd4]" : "bg-[#CBCBCB]"} text-white py-2 px-4 rounded font-medium transition-colors duration-300`}
              onClick={() => navigate("/setting")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </PhoneLayout>
  )
}

export default Login

