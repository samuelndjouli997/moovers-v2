"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Toaster } from 'react-hot-toast'

type Props = {
    children: React.ReactNode
}

const Providers = ({children}: Props) => {
  return (
    <>
        <SessionProvider>
            {children}
            <Toaster />
        </SessionProvider>
    </>
  )
}

export default Providers