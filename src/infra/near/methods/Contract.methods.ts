import { RGBType } from "@/infra/common/RGB.type"
import { IContractRGBValue } from "@/infra/near/methods/ContractRGB.interface"

export type ContractRGB_GET = () => Promise<RGBType>
export type COntractRGB_SET = (value: IContractRGBValue) => Promise<unknown>
