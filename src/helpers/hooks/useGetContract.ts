import { Contract } from "near-api-js"
import { NearService } from "@/core/services/Near.service"
import { TContract } from "@/infra/near/methods/Contract.type"
import { useMemo } from "react"

export const useGetContract = <TMethods = unknown>(contractId: string) => {
  const contract = useMemo(() => {
    return new Contract(NearService.account, contractId, {
      viewMethods: ["get"],
      changeMethods: ["set"],
    }) as TContract<TMethods>
  }, [contractId])

  return contract
}
