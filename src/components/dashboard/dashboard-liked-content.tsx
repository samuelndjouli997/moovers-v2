"use client"

import { useRouter } from 'next/navigation'
import React from 'react'



const DashboardLikedContent = () => {

    const router = useRouter();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
                    <div 
                        onClick={() => router.push("/podcast")} 
                        className="flex flex-col space-y-4 max-w-[189px] lg:max-w-full cursor-pointer"
                    >
                        <img 
                            className={`object-cover rounded-xl`}
                            src="/moovers-img1.png" 
                            alt="moovers podcast"
                        />

                        <p className="font-neulis text-fluo-green text-xl font-semibold">Les 1000 vies de Simone Veil
                        </p>

                        <p className="font-verdana text-[#F0F4EF] text-base font-medium">Nicolas Despres</p>
                        
                    </div>
                    <div className="flex flex-col space-y-4 max-w-[189px] lg:max-w-full  cursor-pointer">
                        <img 
                            className={`object-cover rounded-xl`}
                            src="/moovers-img2.png" 
                            alt="moovers podcast"
                        />

                        <p className="font-neulis text-fluo-green text-xl font-semibold">À l’écoute
                        du swing
                        </p>

                        <p className="font-verdana text-[#F0F4EF] text-base font-medium">Romane Butler</p>
                        
                    </div> 
                    <div className="flex flex-col space-y-4 max-w-[189px] lg:max-w-full  cursor-pointer">
                        <img 
                            className={`object-cover rounded-xl`}
                            src="/moovers-img3.png" 
                            alt="moovers podcast"
                        />

                        <p className="font-neulis text-fluo-green text-xl font-semibold">Quand Paris joue le jeu
                        </p>

                        <p className="font-verdana text-[#F0F4EF] text-base font-medium">Michael Williams</p>
                        
                    </div>
                    <div className="flex flex-col space-y-4 max-w-[189px] lg:max-w-full  cursor-pointer">
                        <img 
                            className={`object-cover rounded-xl`}
                            src="/moovers-img4.png" 
                            alt="moovers podcast"
                        />

                        <p className="font-neulis text-fluo-green text-xl font-semibold">La maison aux secrets oubliés
                        </p>

                        <p className="font-verdana text-[#F0F4EF] text-base font-medium">Sacha De la Porte</p>
                        
                    </div> 
                </div>
  )
}

export default DashboardLikedContent