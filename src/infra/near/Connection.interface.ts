import { ConnectConfig } from "near-api-js/lib/connect"
// # https://docs.near.org/tools/near-api-js/quick-reference
// in documentation has "explorerUrl"
export interface IConnection extends ConnectConfig {
  explorerUrl: string
}
