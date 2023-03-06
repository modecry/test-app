import React, { useEffect } from "react"

import { Button, Typography } from "@mui/material"
import { NearService } from "@/core/services/Near.service"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { URLS } from "@/pages/routes"
import { CenterdLayout } from "@/components/layouts"
import styled from "@emotion/styled"

export const AuthPage = () => {
  const { mutate: logIn, isLoading } = useMutation(NearService.logIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (NearService.walletConnection?.isSignedIn()) {
      navigate(URLS.root)
    }
  }, [navigate])

  return (
    <CenterdLayout>
      <div>
        <Title variant={"h4"}>Sign In</Title>
        <Button variant={"contained"} color={"primary"} onClick={() => logIn()} disabled={isLoading}>
          Connect with NEAR Wallet
        </Button>
      </div>
    </CenterdLayout>
  )
}

const Title = styled(Typography)`
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 20px;
  font-weight: 600;
`
