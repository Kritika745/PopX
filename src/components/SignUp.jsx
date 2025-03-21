import { useNavigate } from "react-router-dom"
import PhoneLayout from "./PhoneLayout"

function SignUp() {
  const navigate = useNavigate()

  return (
    <PhoneLayout>
      <div className="p-6 h-full flex flex-col bg-[#f7f8f9]">
        <div className="mt-2">
          <h1 className="text-[28px] font-bold text-[#333333] leading-tight">
            Create your
            <br />
            PopX account
          </h1>

          <div className="space-y-4 mt-6">
            <div className="relative">
              <div className="absolute -top-4 left-3 px-1 bg-[#f7f8f9]">
                <label htmlFor="fullName" className="text-xs font-medium text-[#6C25FF]">
                  Full Name<span className="text-red-500">*</span>
                </label>
              </div>
              <input
                id="fullName"
                type="text"
                className="w-full text-xs px-4 py-3 border border-gray-300 rounded-lg bg-[#f7f8f9] focus:outline-none text-gray-500"
                defaultValue="Marry Doe"
              />
            </div>

            <div className="relative">
              <div className="absolute -top-4 left-3 px-1 bg-[#f7f8f9]">
                <label htmlFor="phone" className="text-xs font-medium text-[#6C25FF]">
                  Phone number<span className="text-red-500">*</span>
                </label>
              </div>
              <input
                id="phone"
                type="tel"
                className="w-full text-xs px-4 py-3 border border-gray-300 rounded-lg bg-[#f7f8f9] focus:outline-none text-gray-500"
                defaultValue="Marry Doe"
              />
            </div>

            <div className="relative">
              <div className="absolute -top-4 left-3 px-1 bg-[#f7f8f9]">
                <label htmlFor="email" className="text-xs font-medium text-[#6C25FF]">
                  Email address<span className="text-red-500">*</span>
                </label>
              </div>
              <input
                id="email"
                type="email"
                className="w-full text-xs px-4 py-3 border border-gray-300 rounded-lg bg-[#f7f8f9] focus:outline-none text-gray-500"
                defaultValue="Marry Doe"
              />
            </div>

            <div className="relative">
              <div className="absolute -top-4 left-3 px-1 bg-[#f7f8f9]">
                <label htmlFor="password" className="text-xs font-medium text-[#6C25FF]">
                  Password<span className="text-red-500">*</span>
                </label>
              </div>
              <input
                id="password"
                type="password"
                className="w-full text-xs px-4 py-3 border border-gray-300 rounded-lg bg-[#f7f8f9] focus:outline-none text-gray-500"
                defaultValue="Marry Doe"
              />
            </div>

            <div className="relative">
              <div className="absolute -top-4 left-3 px-1 bg-[#f7f8f9]">
                <label htmlFor="company" className="text-xs font-medium text-[#6C25FF]">
                  Company name
                </label>
              </div>
              <input
                id="company"
                type="text"
                className="w-full text-xs px-4 py-3 border border-gray-300 rounded-lg bg-[#f7f8f9] focus:outline-none text-gray-500"
                defaultValue="Marry Doe"
              />
            </div>

            <div className="mt-2">
              <p className="text-xs font-medium text-[#6C25FF]">
                Are you an Agency?<span className="text-red-500">*</span>
              </p>
              <div className="flex items-center space-x-6 mt-2">
                <label className="flex items-center">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="radio"
                      name="agency"
                      value="yes"
                      defaultChecked
                      className="opacity-0 absolute h-5 w-5"
                    />
                    <div className="h-5 w-5 rounded-full border border-[#6c5ce7] flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-[#6c5ce7]"></div>
                    </div>
                  </div>
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <div className="relative flex items-center justify-center">
                    <input type="radio" name="agency" value="no" className="opacity-0 absolute h-5 w-5" />
                    <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center"></div>
                  </div>
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              className="w-full bg-[#6C25FF]  text-white py-2 px-4 rounded-lg font-medium"
              onClick={() => navigate("/setting")}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </PhoneLayout>
  )
}

export default SignUp