import React from "react"
import { Fragment } from "react"
import { Typography } from "@mui/material"
import { ExitToApp, Wallet } from "@mui/icons-material"
import styled from "@emotion/styled"

import { styled as MUIStyled } from "@mui/system"
import { NearService } from "@/core/services/Near.service"
import { useNavigate } from "react-router-dom"
import { URLS } from "@/pages/routes"

export interface MainLayoutProps {
  children: React.ReactNode
  title?: string
}

export const MainLayout: React.FC<MainLayoutProps> = props => {
  const { children, title } = props
  const navigate = useNavigate()
  const handleLogout = () => {
    NearService.logOut().then(() => {
      navigate(URLS.root)
    })
  }

  return (
    <Fragment>
      <Header>
        <AccountData>
          <Wallet />
          <Typography paddingLeft={1}>{NearService.account.accountId}</Typography>
        </AccountData>
        <LogOut onClick={handleLogout}>
          <ExitToApp />
          <Typography paddingLeft={1}>Log out</Typography>
        </LogOut>
      </Header>
      <Content>
        <Typography variant="h1" fontWeight={"600"} paddingTop={5}>
          {title}
        </Typography>
        {children}
      </Content>
    </Fragment>
  )
}

const Header = MUIStyled("header")({
  position: "sticky",
  padding: 30,
  backgroundColor: "aliceblue",
  boxShadow: "0px 5px 18px 0px rgba(214,203,214,0.57)",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
})

export const Content = styled.main`
  padding: 5px 30px 0 30px;
  width: 100%;
  box-sizing: border-box;
`

const LogOut = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const AccountData = styled.div`
  display: flex;
  align-items: center;
`
