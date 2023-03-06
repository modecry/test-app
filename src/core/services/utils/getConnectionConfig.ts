import { CONNECTION_CONFIG } from "@/core/constants"
import { KeyStore } from "near-api-js/lib/key_stores"
import { IConnection } from "@/infra/near/Connection.interface"

export const getConnectionConfig = (keyStore: KeyStore): IConnection => ({ ...CONNECTION_CONFIG, keyStore })
