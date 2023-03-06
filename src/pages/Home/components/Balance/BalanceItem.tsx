import React from "react"
import styled from "@emotion/styled"
import { Typography } from "@mui/material"

export interface IBalanceItemProps {
  amount: string
  currency: string
  icon?: React.ReactNode
}

export const BalanceItem: React.FC<IBalanceItemProps> = props => {
  const { currency, amount, icon } = props
  return (
    <Wrapper>
      <Typography fontWeight={"600"}>{currency}: </Typography>
      <AmountWrapper>
        <Typography>{amount}</Typography>
        {icon}
      </AmountWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
`
