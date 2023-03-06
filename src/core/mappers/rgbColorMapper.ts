import { RGBColor } from "react-color"
import { RGBType } from "@/infra/common/RGB.type"
import { IContractRGBValue } from "@/infra/near/methods/ContractRGB.interface"

/**
 * Мапит rgb массив в rgb ключи
 * @param rbcolor
 */
export const rgbColorMapper = (rbcolor: RGBType): IContractRGBValue => {
  return { r: rbcolor[0], g: rbcolor[1], b: rbcolor[2] }
}
