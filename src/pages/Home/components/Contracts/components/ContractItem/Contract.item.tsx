import React, { memo, useState } from "react"
import { RGBType } from "@/infra/common/RGB.type"
import styled from "@emotion/styled"
import { Typography, Button } from "@mui/material"
import { ColorResult, HuePicker } from "react-color"
import { rgbColorMapper } from "@/core/mappers/rgbColorMapper"
import { IContractRGBValue } from "@/infra/near/methods/ContractRGB.interface"

export interface IContractItemProps {
  name: string
  rgbColor: RGBType
  handleChangeRgb: (rgbValue: RGBType) => void
}

export const ContractItem: React.FC<IContractItemProps> = memo(props => {
  const { name, rgbColor } = props
  const [color, setColor] = useState<IContractRGBValue>(rgbColorMapper(rgbColor))
  const [isTriggeredChanges, setTriggeredChanges] = useState(false)

  const handleChangeColor = (color: ColorResult) => {
    setTriggeredChanges(true)
    setColor(color.rgb)
  }

  return (
    <ContractWrapper itemColor={color}>
      <Typography gutterBottom fontWeight={600}>
        {name}
      </Typography>
      <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column" }}>
        <HuePicker onChange={handleChangeColor} color={color} />
        <Button variant={"contained"} color={"primary"} style={{ marginTop: 10 }} disabled={!isTriggeredChanges}>
          {isTriggeredChanges ? "Save color" : "Please change color"}
        </Button>
      </div>
    </ContractWrapper>
  )
})

const ContractWrapper = styled.div<{ itemColor: IContractRGBValue }>`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ itemColor }) => `rgb(${itemColor.r}, ${itemColor.g}, ${itemColor.b})`};
  padding: 10px;
  border-radius: 10px;
`
