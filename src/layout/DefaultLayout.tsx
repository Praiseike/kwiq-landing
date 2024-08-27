import { Outlet } from 'react-router-dom'
import Nav from '../components/shared/Nav'
import Footer from '../components/shared/Footer'

export default function DefaultLayout() {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
