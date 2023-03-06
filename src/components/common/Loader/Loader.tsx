import React, { CSSProperties } from "react"
import { CircularProgress } from "@mui/material"
import styled from "@emotion/styled"
import { CircularProgressProps } from "@mui/material/CircularProgress/CircularProgress"

export interface ILoaderProps {
  loaderProps?: CircularProgressProps
  wraperProps?: {
    className?: string
    styles?: CSSProperties
  }
}

export const Loader: React.FC<ILoaderProps> = props => {
  return (
    <LoaderWrapper {...props?.wraperProps}>
      <CircularProgress {...props.loaderProps} />
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
