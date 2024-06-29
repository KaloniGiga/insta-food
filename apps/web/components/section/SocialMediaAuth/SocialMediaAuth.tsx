import { Button } from '@/components/ui/button'
import React from 'react'
import { GoogleIcon } from '../CustomIcon/GoogleIcon'

const SocialMediaAuth = () => {
  return (
    <div className="w-[30%]">
      <Button className="w-full space-x-2 h-10 bg-[#e9e9e9] hover:bg-[#e9e9e9] text-black">
        <GoogleIcon style={{ width: '20px', color: 'black' }} />
        <span>Continue with Google</span>
      </Button>
    </div>
  )
}

export default SocialMediaAuth
