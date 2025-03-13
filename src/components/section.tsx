import { cn } from '@/lib/utils';
import React from 'react'

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string
}

const Section = ({children, id, className}: SectionProps) => {
  return (
    <section id={`${id}`} className={cn("container mx-auto px-6 pt-5 pb-8 lg:pt-[70px] lg:pb-[110px]", className)}>
      {children}
    </section>
  )
}

export default Section