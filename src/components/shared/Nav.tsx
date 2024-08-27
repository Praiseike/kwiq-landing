

function Nav() {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src="assets/icons/logo.png" alt="" className="" />
        </div>

        <ul className="hidden md:flex space-x-4 font-[500]">
          <li><a href="/" className="px-4 py-2 rounded-full text-sm hover:bg-neutral-200 duration-300 ">Home</a></li>
          <li><a href="/about" className="px-4 py-2 rounded-full text-sm hover:bg-neutral-200 duration-300 ">About Us</a></li>
          <li><a href="/contact" className="px-4 py-2 rounded-full text-sm hover:bg-neutral-200 duration-300 ">Contact</a></li>
          <li><a href="/blog" className="px-4 py-2 rounded-full text-sm hover:bg-neutral-200 duration-300 ">Blog</a></li>
        </ul>

        <button className="bg-blue-500 sm:block hidden text-white px-4 py-2.5 font-[500] rounded-md hover:bg-blue-600">
          Get Started →
        </button>

        {/* Hamburger menu for small screens */}
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
