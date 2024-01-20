import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Complete } from './pages/Complete'
import { DefaultLayout } from './layouts/DefaultLayout'
import { useEffect } from 'react'

export function Router() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/checkout/complete" element={<Complete />}></Route>
      </Route>
    </Routes>
  )
}
