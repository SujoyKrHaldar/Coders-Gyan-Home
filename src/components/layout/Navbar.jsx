function Navbar() {
  return (
    <header className="z-100 fixed inset-0 w-full mx-auto px-40 h-fit flex items-center justify-between bg-[#191919c3] backdrop-blur-xl border-b border-dashed border-[#4a4a4a]">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 p-1 bg-white rounded-full overflow-hidden">
            <img src="https://custom-webpage-static-assets-production.fermion.app/6654af5442cc797654980578-custom-zip-pages//_next/static/media/cglogo.b9879683.png" />
          </div>
          <p className="text-xl font-bold">Coder&apos;s Gyan</p>
        </div>

        <div className="bg-[#3e3e3e] w-[1px] h-[30px]"></div>

        <nav className="flex items-center justify-between gap-10 mt-1">
          <p className="uppercase text-sm font-medium text-[#f7d260] border-b border-[#f7d260] py-8 tracking-widest">
            Home
          </p>
          <p className="uppercase text-sm tracking-widest font-medium">
            Courses
          </p>
          <p className="uppercase text-sm tracking-widest font-medium">
            Interview
          </p>
          <p className="uppercase text-sm tracking-widest font-medium">
            Community
          </p>
        </nav>
      </div>

      <div className="flex items-center gap-4 justify-center">
        <button className="py-3 px-6 uppercase font-medium rounded-lg text-sm tracking-widest">
          Login
        </button>
        <button className="text-white bg-[#353535] py-4 px-6 uppercase font-medium rounded-lg text-sm tracking-widest">
          Book 1:1 Call
        </button>
      </div>
    </header>
  );
}

export default Navbar;
