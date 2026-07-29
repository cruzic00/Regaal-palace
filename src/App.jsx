import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'
import Header from './components/Header'
import { initSmoothScroll, jumpToTop } from './lib/smoothScroll'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import Home from './pages/Home'
import RoomDetail from './pages/RoomDetail'
import RoomsPage from './pages/RoomsPage'
import TeamPage from './pages/TeamPage'

/** Routers keep scroll position between pages; hotels shouldn't. */
function ScrollToTop() {
  const { pathname } = useLocation()
  // Braces matter: a concise body would return scrollTo's value, and React
  // treats any non-function return as a broken cleanup.
  useEffect(() => {
    jumpToTop()
  }, [pathname])
  return null
}

function SmoothScroll() {
  useEffect(() => initSmoothScroll(), [])
  return null
}

export default function App() {
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
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
