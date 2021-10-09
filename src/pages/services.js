import React from "react"
import HeaderSection from "../components/sections/header-section"
import { ServicesSection } from "../components/sections/services-section"
import MainLayout from "../components/layout/main-layout"

function ApplyPage() {
  return (
    <div>
      <MainLayout>
        <HeaderSection onlyHeader={true} />
        <ServicesSection />
      </MainLayout>
    </div>
  )
}

export default ApplyPage
