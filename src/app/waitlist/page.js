import Image from 'next/image'
import Header from '@/components/header'
import { Logo } from '../../../public'

export default function Home() {
  return (
    <main className="bg-[#000212F5] pt-4 items-center text-center justify-center flex-1 w-full h-screen">
      <div className='flex text-center pt-24 w-full items-center justify-center'>
      <Image src={Logo} alt='logo' />
      </div>
      <div className='text-[48px] pt-16 font-bold text-white' >
        Welcome to Paywayve
      </div>
      <div  className='text-[18px] px-36 text-white'>
        We at Paywayve believe in bringing seamless business and personal transactions to our customers. Our product is currently being developed and will soon be rolled out.
      </div>
      <div className='text-[18px] pt-6 text-white'>Enter your email address below to join the waitlist and get notified when we launch the product.</div>
      <div>
        <div>Join the waitlist</div>
        <input placeholder='Enter your email address' type='text' className='w-1/3 py-2 pl-2 outline-none border-[#9A11FF] rounded-md border-2' />
        <input type='submit' className='bg-[#9A11FF] cursor-pointer py-2 px-1' />
      </div>
    </main>
  )
}
