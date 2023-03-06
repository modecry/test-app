import React from "react"
import { Fragment } from "react"
import { Typography } from "@mui/material"
import styled from "@emotion/styled"

import { styled as MUIStyled } from "@mui/system"

export interface MainLayoutProps {
  children: React.ReactNode
  title?: string
}

export const MainLayout: React.FC<MainLayoutProps> = props => {
  const { children, title } = props

  return (
    <Fragment>
      <Header>This is header</Header>
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
})

export const Content = styled.main`
  padding: 5px 30px 0 30px;
  width: 100%;
  box-sizing: border-box;
`
