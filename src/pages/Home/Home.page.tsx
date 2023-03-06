import React from "react"
import { MainLayout } from "@/components/layouts"
import { WithAuth } from "@/helpers/hocs"
import { Balance } from "./components/Balance/Balance"

export const PageComponent = () => {
  return (
    <MainLayout title={"Wallet 💳"}>
      <Balance />
    </MainLayout>
  )
}

export const HomePage = WithAuth(PageComponent)
