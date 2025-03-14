import { ChevronRight } from 'lucide-react'
import React from 'react'

type Props = {
    title: string
}

const DashboardTitle = ({title}: Props) => {
  return (
    <div className="flex justify-between items-center font-neulis font-semibold w-full">
        <h3 className="text-2xl">{title}</h3>
        <ChevronRight />
    </div>
    
  )
}

export default DashboardTitle