import { useNavigate } from "react-router-dom"
import PhoneLayout from "./PhoneLayout"

function Setting() {
  const navigate = useNavigate()

  return (
    <PhoneLayout>
      <div className="h-full flex flex-col bg-[#f7f8f9]">
        <div className=" h-full">
          <div>
          <h1 className="p-4 pl-4 bg-white text-lg font-medium text-[#1D2226]">Account Settings</h1>
          </div>

          <div className="p-6 pl-4 flex">
            <div className="relative">
              <img
                src="/pic.png"
                alt="Profile"
                className="w-16 h-16  object-cover"
              />
              <div className="absolute bottom-0 right-0 flex items-center justify-center">
               <img src="/cam.svg" alt="" />
              </div>
            </div>
            <div className="ml-4 text-[#1D2226] ">
              <h2 className="font-medium text-sm">Marry Doe</h2>
              <p className=" text-xs">Marry@Gmail.Com</p>
            </div>
          </div>

          <div className=" pb-4 pl-4 pr-4 border-b border-gray-300 border-dashed">
            <p className="text-[#1D2226] text-xs font-medium ">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore
              Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </PhoneLayout>
  )
}

export default Setting

