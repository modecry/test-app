import React, { memo, useMemo } from "react"
import { utils } from "near-api-js"
import { useQuery } from "react-query"
import { Card, CardContent, Typography } from "@mui/material"
import { NearService } from "@/core/services/Near.service"
import { AccountBalance } from "near-api-js/lib/account"
import { Loader } from "@/components/common"
import { NearIconSvg } from "@/assets/icons"
import { BalanceItem } from "./BalanceItem"

export const Balance = memo(() => {
  const { data, isLoading, isError } = useQuery<AccountBalance>(
    "near-balance",
    async () => await NearService.account.getAccountBalance()
  )

  const balanceContent = useMemo(() => {
    if (isLoading) {
      return <Loader wraperProps={{ styles: { height: 100 } }} />
    }
    if (isError && !data) {
      return <Typography color={"red"}>Error to load balance</Typography>
    }
    const amount = utils.format.formatNearAmount(data?.available as string, 5)

    return <BalanceItem amount={amount} currency={"NEAR TOKENS"} icon={<NearIconSvg />} />
  }, [data, isError, isLoading])

  return (
    <Card sx={{ width: 400, minHeight: 150, marginRight: 2 }}>
      <CardContent>
        <Typography variant={"h5"} gutterBottom>
          Your balance
        </Typography>
        {balanceContent}
      </CardContent>
    </Card>
  )
})
