"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function ChatSupport() {

    const [isOpen, setOpen] = useState(false)

    return (

        <div>
            <div className="fixed bottom-10 right-5 z-20">
                <motion.div 

                layout

                animate={{ borderRadius: isOpen ? 10 : 50 }}
                
                initial = {{ borderRadius: 50 }}

                className= {cn(
                    "bg-neutral-300 h-[50px] w-[50px] rounded-lg shadow-sm border cursor-pointer",
                    {
                        "w-96 h-[34rem]":isOpen,
                    }
                    
                    )}
                    
                    onClick={() => {
                        setOpen(!isOpen);
                    }}
                    
                    >
                    
                </motion.div>
            </div>
        </div>

    )

}