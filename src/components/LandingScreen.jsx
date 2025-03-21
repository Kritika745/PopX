import { useNavigate } from "react-router-dom"
import PhoneLayout from "./PhoneLayout"

function LandingScreen() {
  const navigate = useNavigate()

  return (
    <PhoneLayout>
      <div className="flex flex-col justify-end h-full p-6">
        <div className="w-full max-w-xs mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
          <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button
            className="w-full bg-[#6C25FF] text-white font-medium py-2 px-4 rounded mb-3"
            onClick={() => navigate("/signUp")}
          >
            Create Account
          </button>
          <button
            className="w-full bg-[#6C25FF4B] text-[#1D2226] font-medium py-2 px-4 rounded"
            onClick={() => navigate("/login")}
          >
            Already Registered?Login
          </button>
        </div>
      </div>
    </PhoneLayout>
  )
}

export default LandingScreen

