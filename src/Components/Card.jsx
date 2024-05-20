import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from 'react-icons/lu';
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

export default function Card({data,reference}) {
    return (
        <div>
            <motion.div drag dragConstraints={reference} className='w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden relative'>
                <FaRegFileAlt/>
                <p className='py-4 text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
                <div className='footer absolute bottom-0 w-full left-0'>
                    <div className='flex items-center justify-between py-3 px-8 mb-4'>
                        <h5>{data.fileSize}</h5>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                            {data.close ? <IoMdClose/> : <LuDownload size=".8em" color='#fff'/>}
                            </span>
                    </div>
                    {
                        data.tag.isOpen ?   <div className={`tag ${data.tag.tagColor  === "blue" ? "bg-blue-600" : "bg-green-600"} py-3 w-full flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div> : null
                    }
                </div>
            </motion.div>
        </div>
    )
}
