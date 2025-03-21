import { useNavigate } from "react-router-dom"
import PhoneLayout from "./PhoneLayout"

function Login() {
  const navigate = useNavigate()

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
                className="w-full text-xs px-4 py-3 border border-gray-300 rounded-lg bg-[#f7f8f9] focus:outline-none text-gray-500"
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
                className="w-full text-xs px-4 py-3 border border-gray-300 rounded-lg bg-[#f7f8f9] focus:outline-none text-gray-500"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              className="w-full bg-[#b8b8b8] hover:bg-[#a0a0a0] text-white py-2 px-4 rounded-lg font-medium"
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

