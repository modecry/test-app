import React from "react"
import { CenterdLayout } from "@/components/layouts"
import CircularProgress from "@mui/material/CircularProgress"
export const GlobalLoader = () => {
  return (
    <CenterdLayout>
      <CircularProgress size={150} />
    </CenterdLayout>
  )
}
