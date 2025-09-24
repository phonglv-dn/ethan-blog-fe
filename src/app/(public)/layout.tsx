import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { ReactNode } from "react"

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}
