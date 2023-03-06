import { useGetContract } from "@/helpers/hooks/useGetContract"
import { IContractRGBMethods, IContractRGBValue } from "@/infra/near/methods/ContractRGB.interface"
import { useQuery } from "react-query"
import { IContractItemProps } from "@/pages/Home/components/Contracts/components/ContractItem/Contract.item"
import { useMemo } from "react"
import { useSnackbar } from "notistack"

export const useVewModel = () => {
  const contract = useGetContract<IContractRGBMethods>("frontend-test-5.badconfig.testnet")
  const snackbar = useSnackbar()
  const {
    data: RGBData,
    isLoading,
    isError,
  } = useQuery("contract-frontend-test-5.badconfig.testnet", async () => await contract.get())

  const handleChangeColor = async (rgbColor: IContractRGBValue) => {
    try {
      await contract.set({ r: rgbColor.r, g: rgbColor.g, b: rgbColor.b })
      snackbar.enqueueSnackbar("Color saved in contract", { variant: "success" })
    } catch (e) {
      snackbar.enqueueSnackbar("Error saved color", { variant: "error" })
      throw e
    }
  }

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
