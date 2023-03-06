import React from "react"
import { MainLayout } from "@/components/layouts"
import { WithAuth } from "@/helpers/hocs"
import { Balance, Contracts } from "./components"
import styled from "@emotion/styled"

export const PageComponent = () => {
  return (
    <MainLayout title={"Wallet 💳"}>
      <HomePageContent>
        <Balance />
        <Contracts />
      </HomePageContent>
    </MainLayout>
  )
}

export const HomePage = WithAuth(PageComponent)

const HomePageContent = styled.div`
  display: flex;
  margin-top: 20px;
`
