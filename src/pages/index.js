import AdainNavBar from '../../components/navbar'
import Footer from '../../components/footer'
import Layouts from '../../components/layout'
import Hero from '../../components/hero'
import Foot2 from '../../components/foot2'
import Getpostal from '../../components/postal'


export default function Home() {
  return (
    <>
    <Layouts showNavbar={AdainNavBar} showFooter={Footer}>
      <Hero/>
      <Getpostal/>
      
    </Layouts>
    <Foot2/>
    </>
  )
}
