import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { NearService } from "@/core/services/Near.service"
import { URLS } from "@/pages/routes"

/**
 * HOC Для обработки авторизации
 * @param Component {React.ComponentType<Tprops>}
 */
export const WithAuth = <TProps extends Record<string, unknown>>(Component: React.ComponentType<TProps>) => {
  function wrapper(props: TProps) {
    const isSignIn = NearService.walletConnection?.isSignedIn()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!isSignIn) {
        navigate(URLS.auth)
      }
    }, [isSignIn, navigate])

    if (!isSignIn) {
      return null
    }

    return <Component {...props} />
  }
  return wrapper
}
