import { ChevronRight } from 'lucide-react'
import React from 'react'

type Props = {
    title: string
}

const DashboardTitle = ({title}: Props) => {
  return (
    <div className="flex justify-between items-center text-2xl font-semibold w-full">
        <h3>{title}</h3>
        <ChevronRight />
    </div>
    
  )
}

export default DashboardTitle