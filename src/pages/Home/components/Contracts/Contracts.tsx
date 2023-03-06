import React, { memo, useMemo } from "react"
import { useVewModel } from "@/pages/Home/components/Contracts/hooks/useVewModel"
import { Card, CardContent, Typography } from "@mui/material"
import { Loader } from "@/components/common"
import { ContractItem } from "@/pages/Home/components/Contracts/components/ContractItem/Contract.item"
export const Contracts = memo(() => {
  const { contracts, isLoading, isError } = useVewModel()

  const contractsContent = useMemo(() => {
    if (isLoading) {
      return <Loader wraperProps={{ styles: { height: 100 } }} />
    }
    if (isError && !contracts?.length) {
      return <Typography color={"red"}>Error to load balance</Typography>
    }

    return contracts.map(contract => <ContractItem {...contract} />)
  }, [contracts, isError, isLoading])

  return (
    <Card sx={{ width: 700, minHeight: 150 }}>
      <CardContent>
        <Typography variant={"h5"} gutterBottom>
          Contracts
        </Typography>
        {contractsContent}
      </CardContent>
    </Card>
  )
})
