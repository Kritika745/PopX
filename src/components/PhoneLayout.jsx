function PhoneLayout({ children }) {
  return (
    <main className="min-h-screen bg-[#FCFCFD] flex flex-col items-center justify-center sm:p-4">
      {/* Mobile view - full width */}
      <div className="w-full h-full mx-auto sm:hidden">
        <div className="bg-[#F7F8F9] p-6 w-full h-full">{children}</div>
      </div>

      {/* Tablet and desktop view - phone sized div */}
      <div className="hidden sm:block">
        <div className="bg-[#F7F8F9] w-[340px] h-[580px] border-1 border-gray-200 overflow-hidden">
          <div className="flex flex-col h-full">{children}</div>
        </div>
      </div>
    </main>
  )
}

export default PhoneLayout

