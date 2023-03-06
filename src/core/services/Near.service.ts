import { KeyStore } from "near-api-js/lib/key_stores"
import { keyStores, connect, WalletConnection, Account } from "near-api-js"
import { getConnectionConfig } from "@/core/services/utils/getConnectionConfig"
import { Near } from "near-api-js/lib/near"

export class NearService {
  public static store: KeyStore
  public static walletConnection: WalletConnection
  public static account: Account
  private static connection: Near

  /**
   * Иницилизация кей стора
   */
  public static init = async () => {
    try {
      NearService.store = new keyStores.BrowserLocalStorageKeyStore()
      await NearService.connect()
      await NearService.connectWallet()
      if (NearService.walletConnection?.isSignedIn()) {
        await NearService.initAccount()
      }
    } catch (e) {
      throw e
    }
  }

  /**
   * Коннект wallet
   * @private
   */
  private static connectWallet = () => {
    try {
      NearService.walletConnection = new WalletConnection(NearService.connection, null)
    } catch (e) {
      throw e
    }
  }

  /**
   * Коннект to near
   * @private
   * @return Promise<void>
   */
  private static connect = async () => {
    try {
      const connectionConfig = getConnectionConfig(NearService.store)
      NearService.connection = await connect(connectionConfig)
    } catch (e) {
      throw e
    }
  }

  /**
   * Логин в near wallet
   */
  public static logIn = async () => {
    try {
      await NearService.walletConnection.requestSignIn({
        successUrl: "http://localhost:3000", //todo: need read by envs
      })
    } catch (e) {
      throw e
    }
  }

  /**
   * Логаут из near
   */
  public static logOut = async () => {
    try {
      await NearService.walletConnection.signOut()
    } catch (e) {
      throw e
    }
  }

  private static initAccount = async () => {
    try {
      const accountId = NearService.walletConnection.getAccountId()
      NearService.account = await NearService.connection.account(accountId)
    } catch (e) {
      throw e
    }
  }
}
