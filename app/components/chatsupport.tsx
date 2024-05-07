"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function ChatSupport() {

    const [isOpen, setOpen] = useState(false)
    const [isDisplay, setDisplay] = useState(true)

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
                        if(!isOpen) {
                            setOpen(!isOpen);
                            setDisplay(false);
                        }

                    }}

                    onAnimationComplete={() => {
                        if(!isOpen) {
                            setDisplay(true);
                        }
                    }}  
                    
                    >

                    {isDisplay && <h1 className="text-lg align-middle ml-3">🪐</h1>}

                    {isOpen &&
                        <div className="w-full h-full border-bottom-b p-5 font-semibold flex justify-between">

                        <h1 className="text-2xl text-neutral-600">👾 AI Assistant</h1>

                        <div onClick={() => {
                            setOpen(false);
                        }}>-</div>
                    </div>
                    
                    }
                    
                </motion.div>
            </div>
        </div>

    )

}