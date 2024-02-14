import type { Metadata } from 'next'
import NavBar from '@/components/navbar/navbar'
import Banner from '@/components/banner'
import Panel from '@/components/navbar/navbar'
import Servicios from '@/components/'
import Vistas from '@/components/navbar/navbar'

export const metadata: Metadata = {
  title: 'Compratulote.pe : Inicio',
  description: 'Pagina incial de compra tu lote',
  icons: {
    icon: '/images/compratulote.ico', // /public path
  },
}
export default function Home() {
  return (
    <>
      <div>
        <div className = "container">
          <div className="">
          <NavBar />  
          </div>
      </div>
      <div className="content">
      <div className="">
          <Banner />
     
        </div>
    </div>
    </div>
    </>
  )
}