import { IConnection } from "@/infra/near/Connection.interface"

export const CONNECTION_CONFIG: IConnection = {
  networkId: "testnet",
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
}
