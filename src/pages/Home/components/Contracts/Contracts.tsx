import React, { memo, useMemo } from "react"
import { Card, CardContent, Typography } from "@mui/material"
import { Loader } from "@/components/common"
import { ContractItem } from "./components/ContractItem/Contract.item"
import { useViewModel } from "./hooks/useViewModel"

export const Contracts = memo(() => {
  const { contracts, isLoading, isError } = useViewModel()

  const contractsContent = useMemo(() => {
    if (isLoading) {
      return <Loader wraperProps={{ styles: { height: 100 } }} />
    }
    if (isError && !contracts?.length) {
      return <Typography color={"red"}>Error to load balance</Typography>
    }

    return contracts.map(contract => <ContractItem key={contract.name} {...contract} />)
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
