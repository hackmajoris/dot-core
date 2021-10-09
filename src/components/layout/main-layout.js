import React from "react"
import { FooterSection } from "../sections/footer-section"
import DelimiterLayout from "./delimiter-layout"

function MainLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <FooterSection />
    </>
  )
}

export default MainLayout
