import { ContractRGB_GET, COntractRGB_SET } from "@/infra/near/methods/Contract.methods"

export interface IContractRGBValue {
  r: number
  g: number
  b: number
}

export interface IContractRGBMethods {
  get: ContractRGB_GET
  set: COntractRGB_SET
}
