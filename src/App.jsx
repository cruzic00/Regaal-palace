import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'
import Header from './components/Header'
import { initSmoothScroll, jumpToTop, scrollToTarget } from './lib/smoothScroll'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CorporateStaysPage from './pages/CorporateStaysPage'
import GalleryPage from './pages/GalleryPage'
import Home from './pages/Home'
import MeetingsEventsPage from './pages/MeetingsEventsPage'
import RoomDetail from './pages/RoomDetail'
import RoomsPage from './pages/RoomsPage'
import TeamPage from './pages/TeamPage'
import Brands from './sections/Brands'

/** Routers keep scroll position between pages; hotels shouldn't. */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        scrollToTarget(hash)
      }, 100)
    } else {
      jumpToTop()
    }
  }, [pathname, hash])
  return null
}

function SmoothScroll() {
  useEffect(() => initSmoothScroll(), [])
  return null
}

export default function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <>
      <SmoothScroll />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/:slug" element={<RoomDetail />} />
          <Route path="/corporate-stays" element={<CorporateStaysPage />} />
          <Route path="/meetings-events" element={<MeetingsEventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      {!isHomePage && <Brands />}
      <Footer />
      <FloatingContact />
    </>
  )
}

