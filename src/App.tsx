import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { router } from "./routes"
import AppHeader from "./components/layout/header/AppHeader"
import AppFooter from "./components/layout/footer/AppFooter"
import AppContent from "./components/layout/content/AppContent"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppContent>
        <Routes>
          {router.map((route, index) => (
            <Route element={route.element} path={route.path} key={index} />
          ))}
        </Routes>
      </AppContent>
      <AppFooter />
    </BrowserRouter>
  )
}

export default App
