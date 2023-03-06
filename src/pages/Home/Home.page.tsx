import React, { useEffect } from "react"
import { MainLayout } from "@/components/layouts"
import { WithAuth } from "@/helpers/hocs"

export const PageComponent = () => {
  return <MainLayout title={"Wallet 💳"}>HomePage</MainLayout>
}

export const HomePage = WithAuth(PageComponent)
