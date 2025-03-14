import React from 'react'
import getCurrentUser from "@/app/actions/get-current-user"
import DashboardContent from '@/components/dashboard/dashboard-content'
import Section from '@/components/section'
import { Card } from '@/components/ui/card'
import { getFormattedDate } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import DashboardTitle from '@/components/dashboard/dashboard-title'
import StepCounter from '@/components/dashboard/step-counter'
import MobileNavbar from '@/components/mobile-navbar'
import DashboardLikedContent from '@/components/dashboard/dashboard-liked-content'

const Dashboard = async () => {
    const user = await getCurrentUser()

    if (!user) return

    const todayDate = getFormattedDate();

  return (
    <>
    <main>
        <Section className="py-[72px]">
            <div className="flex flex-col space-y-8">
                <h2 className="text-[42px] font-neulis font-semibold">Hello {user.name} !</h2>
                {/* Card */}
                <Card 
                    style={{
                        backgroundImage: "url('/moovers-purple.svg')",
                        backgroundColor: "#25E38C",
                        backgroundPosition: "left",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundBlendMode: "multiply",
                    }} 
                    className="py-16 lg:py-32 relative">
                    
                    <span className="absolute right-10 text-2xl font-semibold">Comédie</span>
                </Card>

                {/* date */}
                <div className="flex justify-between items-center px-4 py-2 lg:p-4 w-full bg-decathlon-blue rounded-full">
                    <div className="flex items-center gap-2.5">
                        <div className="bg-marine-blue flex justify-center items-center size-10 text-center rounded-[999px]">
                            <img src="/calendar.svg" alt="calendar" />
                        </div>

                        <div>
                            <p className="font-verdana font-normal text-sm">{todayDate}</p>
                            <p className="font-verdana font-bold text-base">Aujourd&apos;hui</p>
                        </div>
                    </div>

                    <div className="flex justify-center size-10 items-center bg-marine-blue rounded-[999px]">
                        <ChevronRight className="size-8" />
                    </div>

                </div>
            

                {/* Objectif du jour */}
                <DashboardTitle title="Objectif du jour" />
                <StepCounter />

                {/* Vous aimerez peut-être */}
                <DashboardTitle title="Vous aimerez peut-être" />

                <DashboardLikedContent />

                {/* Vos cat préférées */}
                <DashboardTitle title="Vos catégories préférées" />
                <div className="grid grid-rows-2 gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="inline-block">
                            <Card 
                                style={{
                                    backgroundColor: "#3746B3",
                                    backgroundImage: "url('/moovers-green.svg')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "200px",
                                    backgroundPosition: "top center",
                                }} 
                                className="h-[200px] lg:h-[320px] py-2 flex justify-end items-center"
                            >
                                <p className="text-2xl font-semibold text-white">Comédie</p>
                            </Card>
                        </div>
                        <div className="grid grid-rows-2 gap-4">
                            <Card
                                style={{
                                    backgroundColor: "#FFF",
                                    backgroundImage: "url('/moovers-purple.svg')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "150px",
                                    backgroundPosition: "top center",
                                }} 
                                className="flex justify-start items-end pr-6"
                            >
                                <p className="text-2xl font-semibold text-marine-blue">Action</p>
                            </Card>
                        
                            <Card
                                style={{
                                    backgroundColor: "#25E38C",
                                    backgroundImage: "url('/moovers-white.svg')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "150px",
                                    backgroundPosition: "top center",
                                }} 
                                className="flex justify-start items-end pr-6"
                            >
                               <p className="text-2xl font-semibold text-marine-blue">Sport</p> 
                            </Card>    
                        </div>
                    </div>
                    <div>
                        <Card 
                            style={{
                                backgroundColor: "#FFF",
                                backgroundImage: "url('/moovers-purple.svg')",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "230px",
                                backgroundPosition: "left -40px",
                            }}
                            className="p-0 lg:py-24 h-[130px] lg:h-[280px] flex justify-end items-end">
                            <p className="text-2xl font-semibold text-marine-blue pr-6">Horreur</p>
                        </Card>
                    </div>
                </div>


                <DashboardContent />
            </div>
        </Section>
    </main>
    <MobileNavbar />
    </>
  )
}

export default Dashboard