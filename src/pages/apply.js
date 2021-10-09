import React from "react"
import HeaderSection from "../components/sections/header-section"
import MainLayout from "../components/layout/main-layout"
import { ApplySection } from "../components/sections/apply-section"

function ApplyPage() {
  return (
    <div>
      <MainLayout>
        <HeaderSection onlyHeader={true} />
        <ApplySection />
      </MainLayout>
    </div>
  )
}

export default ApplyPage
