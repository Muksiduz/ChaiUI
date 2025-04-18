import React from 'react';
import Clock from "../assets/clock-icon.svg";
import Face from "../assets/face-icon.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="py-5">
      <div className="container">
        {/* First Section: Heading + Image */}
        <div className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left content */}
            <motion.div
              className="lg:col-span-8 space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 leading-tight text-center lg:text-left"
                whileHover={{ scale: 1.05, color: "#4f46e5" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Excellent
              </motion.h1>
              <p className="text-base md:text-lg text-slate-600 lg:w-2/3 mx-auto lg:mx-0 text-center lg:text-left">
                My new design template that is definitely not only a design — it’s an experience crafted with passion and precision.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.pexels.com/photos/2756844/pexels-photo-2756844.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hero"
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Second Section: Bento Cards */}
        <div className="lg:grid grid-cols-12 py-2 gap-5">
          {/* Left Large Image */}
          <motion.div
            className="lg:col-span-8 rounded-3xl overflow-hidden mb-6 lg:mb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.01 }}
          >
            <img
              src="https://images.pexels.com/photos/998713/pexels-photo-998713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Showcase"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

          {/* Right Two Cards */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Card 1 */}
            <motion.div
              className="h-1/2 bg-[#F7A072] p-5 rounded-3xl flex flex-col justify-between shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={Clock} alt="Clock Icon" className="w-[40px]" />
              <p className="text-slate-900 font-medium">
                Always on time, because we respect you and know that time is money.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="h-1/2 bg-[#B5E2FA] p-5 rounded-3xl flex flex-col justify-between shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={Face} alt="Face Icon" className="w-[40px]" />
              <p className="text-slate-900 font-medium">
                You’ll leave happy, because we’re here to make sure you win.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;





// import React from 'react';
// import Clock from "../assets/clock-icon.svg";
// import Face from "../assets/face-icon.svg";
// import { motion } from "framer-motion";


// const Hero = () => {
// 	return (
// 		<div className='py-5'>
// 			<div className='container'>
				
// 				{/* First section */}
// 				<div className="py-16 lg:py-24 bg-white">
//   <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
    
//     {/* Left content */}
//     <div className="lg:col-span-8 space-y-6">
//       <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 leading-tight text-center lg:text-left">
//         Excellent
//       </h1>
//       <p className="text-base md:text-lg text-slate-600 lg:w-2/3 mx-auto lg:mx-0 text-center lg:text-left">
//         My new design template that is definitely not only a design — it’s an experience crafted with passion and precision.
//       </p>
//     </div>

//     {/* Optional Right Image or Graphic Section */}
//     <div className="lg:col-span-4">
//       <img 
//         src="https://images.pexels.com/photos/2756844/pexels-photo-2756844.jpeg?auto=compress&cs=tinysrgb&w=600" 
//         alt="Hero" 
//         className="w-full h-auto rounded-xl shadow-md"
//       />
//     </div>
//   </div>
// </div>


// 				{/* second section */}
// 				<div className='lg:grid grid-cols-12 py-2 gap-5'>
// 					<div className='lg:col-span-8 rounded-3xl overflow-hidden mb-6 lg:mb-0'>
// 						<img src="https://images.pexels.com/photos/998713/pexels-photo-998713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""  className='w-full h-full' />
// 					</div>

// 					<div className='lg:col-span-4 flex flex-col gap-5'>
// 						<div className='h-1/2 bg-[#F7A072] p-5 rounded-3xl flex flex-col justify-between'>
// 							<img src={Clock} alt="" className='w-[40px]' />

// 							<p>
// 								Always on time. because we respect you and know that time is money.
// 							</p>
// 						</div>

// 						<div className='h-1/2 bg-[#B5E2FA] p-5 rounded-3xl flex flex-col justify-between'>
// 							<img src={Face} alt="" className='w-[40px]' />

// 							<p>
// 								You'll leave happy. because we're hear to make sure you win.
// 							</p>
// 						</div>

// 					</div>

// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Hero;
