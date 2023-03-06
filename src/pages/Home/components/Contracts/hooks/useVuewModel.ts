import { useGetContract } from "@/helpers/hooks/useGetContract"
import { IContractRGBMethods, IContractRGBValue } from "@/infra/near/methods/ContractRGB.interface"
import { useQuery } from "react-query"
import { IContractItemProps } from "@/pages/Home/components/Contracts/components/ContractItem/Contract.item"
import { useCallback, useMemo } from "react"
import { useSnackbar } from "notistack"

const contractName = "frontend-test-2.badconfig.testnet"

export const useVuewModel = () => {
  const contract = useGetContract<IContractRGBMethods>("frontend-test-2.badconfig.testnet")
  const snackbar = useSnackbar()
  const { data: RGBData, isLoading, isError } = useQuery(contractName, async () => await contract.get())

  const handleChangeColor = useCallback(
    async (rgbColor: IContractRGBValue) => {
      try {
        await contract.set({ r: rgbColor.r, g: rgbColor.g, b: rgbColor.b })
      } catch (e) {
        snackbar.enqueueSnackbar("Error saved color", { variant: "error" })
        throw e
      }
    },
    [contract, snackbar]
  )

  const contracts: IContractItemProps[] = useMemo(() => {
    if (RGBData && !isLoading) {
      return [{ name: contractName, rgbColor: RGBData, handleChangeRgb: handleChangeColor }]
    }
    return []
  }, [RGBData, handleChangeColor, isLoading])

  return { contracts, isLoading, isError }
}
