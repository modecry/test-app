import { Contract } from "near-api-js/lib/contract"

export type TContract<T = unknown> = Contract & T
