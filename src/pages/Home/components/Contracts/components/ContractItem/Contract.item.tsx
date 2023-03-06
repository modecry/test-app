import React, { memo, useCallback, useMemo, useState } from "react"
import { RGBType } from "@/infra/common/RGB.type"
import styled from "@emotion/styled"
import { Typography, Button } from "@mui/material"
import { ColorResult, HuePicker } from "react-color"
import { rgbColorMapper } from "@/core/mappers/rgbColorMapper"
import { IContractRGBValue } from "@/infra/near/methods/ContractRGB.interface"

export interface IContractItemProps {
  name: string
  rgbColor: RGBType
  handleChangeRgb: (rgbValue: IContractRGBValue) => Promise<void>
}

export const ContractItem: React.FC<IContractItemProps> = memo(props => {
  const { name, rgbColor, handleChangeRgb } = props
  const [color, setColor] = useState<IContractRGBValue>(rgbColorMapper(rgbColor))
  const [isTriggeredChanges, setTriggeredChanges] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeColor = useCallback(
    (color: ColorResult) => {
      if (isLoading) return
      setTriggeredChanges(true)
      setColor(color.rgb)
    },
    [isLoading]
  )

  const handleSubmitColor = useCallback(() => {
    if (isLoading) return
    setIsLoading(true)
    handleChangeRgb(color).finally(() => {
      setIsLoading(false)
    })
  }, [color, handleChangeRgb, isLoading])

  const buttonText = useMemo(() => {
    if (isLoading) return "Loading...."
    return isTriggeredChanges ? "Save color" : "Please change color"
  }, [isLoading, isTriggeredChanges])

  return (
    <ContractWrapper itemColor={color}>
      <Typography gutterBottom fontWeight={600}>
        {name}
      </Typography>
      <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column" }}>
        <HuePicker onChange={handleChangeColor} color={color} />
        <Button
          variant={"contained"}
          color={"primary"}
          style={{ marginTop: 10 }}
          disabled={!isTriggeredChanges}
          onClick={handleSubmitColor}
        >
          {buttonText}
        </Button>
      </div>
    </ContractWrapper>
  )
})

const ContractWrapper = styled.div<{ itemColor: IContractRGBValue }>`
  display: flex;
  justify-content: space-between;
  border: 3px solid ${({ itemColor }) => `rgb(${itemColor.r}, ${itemColor.g}, ${itemColor.b})`};
  padding: 10px;
  border-radius: 10px;
`
