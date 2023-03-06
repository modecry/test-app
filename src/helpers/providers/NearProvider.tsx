import React, { Fragment, useEffect, useState } from "react"
import { IProvider } from "@/infra/common/Provider.interface"
import { NearService } from "@/core/services/Near.service"
import { GlobalLoader } from "@/components/common"

const NearProvider: React.FC<IProvider> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!NearService.store) {
      NearService.init().finally(() => {
        setIsLoading(false)
      })
    }
  }, [])

  if (isLoading) {
    return <GlobalLoader />
  }

  return <Fragment>{children}</Fragment>
}

export default NearProvider
