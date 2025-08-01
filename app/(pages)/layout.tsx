import { Footer, Header } from '@/components/layouts'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className='space-y-[80px] min-h-screen'>{children}</main>
      <Footer />
    </>
  )
}

export default layout
