import AuthNav from '@/components/section/AuthNav/AuthNav'
import React from 'react'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-full">
      <AuthNav />
      {children}
    </div>
  )
}

export default Layout
