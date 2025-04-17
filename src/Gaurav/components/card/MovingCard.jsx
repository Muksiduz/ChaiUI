import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import {motion} from 'framer-motion'

const MovingCard = ({reference}) => {
  return (
    <motion.div drag dragConstraints={reference} className=' drag w-60 h-72 relative rounded-[40px] bg-zinc-600 text-white px-8 py-10 overflow-hidden' >
<FaFileAlt />
<p className=' text-sm leading-tight mt-5 font-semibold'>Lorem, ipsum dolor mque labore vero commodi?</p>
<div className='footer absolute bottom-0 w-full h-10 left-0 bg-red-600'></div>
    </motion.div>
  )
}

export default MovingCard