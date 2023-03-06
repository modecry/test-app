import React from "react"
import { IProvider } from "../../infra/common/Provider.interface"
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material"

const theme = createTheme()

const ThemeProvider: React.FC<IProvider> = ({ children }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}

export default ThemeProvider
