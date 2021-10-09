import React from "react"
import HeaderSection from "../components/sections/header-section"
import MainLayout from "../components/layout/main-layout"
import { Blog } from "../components/sections/blog-section"

function ApplyPage() {
  return (
    <div>
      <MainLayout>
        <HeaderSection onlyHeader={true} />
        <Blog />
      </MainLayout>
    </div>
  )
}

export default ApplyPage
