import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { BackToTop } from '@/components/common/BackToTop'
import { PageLoader } from '@/components/common/PageLoader'
import { ScrollProgress } from '@/components/common/ScrollProgress'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SITE } from '@/lib/constants'
import { getOrganizationBySlug } from '@/data/catalog'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { OrganizationPage } from '@/pages/OrganizationPage'

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function usePageTitle() {
  const location = useLocation()

  useEffect(() => {
    const parts = location.pathname.split('/').filter(Boolean)
    if (parts[0] === 'org' && parts[1]) {
      const org = getOrganizationBySlug(parts[1])
      document.title = org ? `${org.name} | ${SITE.name}` : `Company | ${SITE.name}`
      return
    }
    document.title = `${SITE.name} | Computer Science Student & Product Builder`
  }, [location.pathname])
}

function AppLayout() {
  const location = useLocation()
  usePageTitle()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route
              path="/org/:slug"
              element={
                <PageTransition>
                  <OrganizationPage />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFoundPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <PageLoader key="loader" />
      ) : (
        <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <AppLayout />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
