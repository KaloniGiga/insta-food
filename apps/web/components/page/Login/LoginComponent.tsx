import React from 'react'
import { LoginForm } from './LoginFom'
// import { Separator } from "@/components/ui/separator"
// import SocialMediaAuth from '@/components/section/SocialMediaAuth/SocialMediaAuth'

const LoginComponent = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-10 space-y-4">
      <LoginForm />
      {/* <div className='w-[30%] mx-2 flex justify-between items-center'>
      <Separator className='w-[45%]' />
      <span className='mx-4'>OR</span>
      <Separator className='w-[45%]' />
      </div>
      <SocialMediaAuth /> */}
    </div>
  )
}

export default LoginComponent
