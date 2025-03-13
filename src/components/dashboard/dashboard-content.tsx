"use client";

import React from 'react'
import { Button } from '../ui/button';
import { signOut } from 'next-auth/react';

type Props = {}

const DashboardContent = (props: Props) => {
    const handleSignOut = async () => await signOut()
    
  return (
    <Button onClick={handleSignOut}>
        se déconnecter
    </Button>
  )
}

export default DashboardContent