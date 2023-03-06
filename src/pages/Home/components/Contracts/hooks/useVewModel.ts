import { useGetContract } from "@/helpers/hooks/useGetContract"
import { IContractRGBMethods } from "@/infra/near/methods/ContractRGB.interface"
import { useQuery } from "react-query"
import { IContractItemProps } from "@/pages/Home/components/Contracts/components/ContractItem/Contract.item"
import { useMemo } from "react"
import { RGBType } from "@/infra/common/RGB.type"

export const useVewModel = () => {
  const contract = useGetContract<IContractRGBMethods>("frontend-test-5.badconfig.testnet")
  const {
    data: RGBData,
    isLoading,
    isError,
  } = useQuery("contract-frontend-test-5.badconfig.testnet", async () => await contract.get())

  const handleChangeColor = async (rgbColor: RGBType) => {}

  const contracts: IContractItemProps[] = useMemo(() => {
    if (RGBData && !isLoading) {
      return [
        { name: "contract-frontend-test-5.badconfig.testnet", rgbColor: RGBData, handleChangeRgb: handleChangeColor },
      ]
    }
    return []
  }, [RGBData, isLoading])

  return { contracts, isLoading, isError }
}
