import React, { useState } from 'react';
import Logo from "..src/assets/images/logos/without-ui/dark-logo-without-ui.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const handleMenu = () => {
		setMenu(!menu);
	};

	return (
		<div className='relative'>
			<nav className='mx-auto max-w-7xl px-4 md:px-6 py-5 flex justify-between items-center'>
				{/* Left - Logo */}
				<div className="w-12">
					<img src={Logo} alt="Logo" className='w-full h-auto' />
				</div>

				{/* Desktop Menu */}
				<div className='hidden md:flex items-center gap-10'>
					<a href="#" className='text-slate-600 hover:text-slate-900 duration-200'>Home</a>
					<a href="#" className='text-slate-600 hover:text-slate-900 duration-200'>Work</a>
					<a href="#" className='text-slate-600 hover:text-slate-900 duration-200'>About</a>
				</div>

				{/* Mobile Menu Icon */}
				<div className='md:hidden z-50' onClick={handleMenu}>
					{menu ? <MdOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
				</div>
			</nav>
			<div className="hidden md:block w-full h-[1px] bg-gray-200 shadow-sm"></div>


			{/* Mobile Menu Dropdown */}
			{menu && (
				<div className='md:hidden flex flex-col gap-5 p-5 absolute top-16 right-0 bg-white w-3/4 h-screen shadow-md z-40'>
					<a href="#" className='text-slate-600 hover:text-slate-900 duration-200'>Home</a>
					<a href="#" className='text-slate-600 hover:text-slate-900 duration-200'>Work</a>
					<a href="#" className='text-slate-600 hover:text-slate-900 duration-200'>About</a>
				</div>
			)}
		</div>
	);
};

export default Navbar;






// Basic design ----------



// import React, { useState } from 'react';
// import Logo from "../assets/dark-logo-without-ui.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineClose } from "react-icons/md";

// const Navbar = () => {

// 	// render the icons on condition
// 	const [menu, setMenu] = useState(false);
	
// 	// change the icon state
// 	const handleMenu = () => {
// 		setMenu(!menu);
// 	}

// 	return (
// 		<div className='py-5 relative'>
// 			<nav className='container'>
// 				<div className="flex justify-between items-center">
// 					{/* Left side - Logo */}
// 					<div className="w-12">
// 						<img src={Logo} alt="Logo" 
// 						/>
// 					</div>

// 					{/* right side - div */}
// 					<div className='hidden md:flex justify-between items-center gap-5'>
// 						<a href="#" className=' pr-32 text-slate-600 hover:text-slate-900 duration-75'>Home</a>
// 						<a href="#" className='pr-32 text-slate-600 hover:text-slate-900 duration-75'>Work</a>
// 						<a href="#" className='pr-32 text-slate-600 hover:text-slate-900 duration-75'>About</a>
// 					</div>

// 					{/* Mobile Navbar */}
// 					<div className='md:hidden' onClick={handleMenu}>
// 						<div className='z-50 absolute top-7 right-8'>
// 							{/* rendering 2 icons */}
// 							{menu ? <MdOutlineClose /> : <GiHamburgerMenu />}
// 						</div>
						

// 						{/* creating mobile nav links */}
// 						<div>
// 							{menu ? (
// 								<div className='flex flex-col gap-5 p-5 py-52 absolute top-0 right-0 shadow-md h-screen'>
// 									<a href="#" className='pr-32 text-slate-600 hover:text-slate-900 transition'>Home</a>
// 									<a href="#" className='pr-32 text-slate-600 hover:text-slate-900 transition'>Work</a>
// 									<a href="#" className='pr-32 text-slate-600 hover:text-slate-900 transition'>About</a>
// 								</div>
// 							) : ("")}
// 						</div>
// 					</div>
// 				</div>
// 			</nav>
// 		</div>
// 	);
// };

// export default Navbar;
