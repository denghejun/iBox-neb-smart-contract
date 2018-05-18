import { NebulasSmartContract } from '../core/index'
import { IiBoxSmartContract, IBoxAccount } from '../../interfaces/index'

export class IBoxSmartContract extends NebulasSmartContract implements IiBoxSmartContract {
  signIn(account: IBoxAccount): IBoxAccount {
    throw new Error("Method not implemented.");
  }

  signOut(account: IBoxAccount): IBoxAccount {
    throw new Error("Method not implemented.");
  }

  signUp(account: IBoxAccount): IBoxAccount {
    throw new Error("Method not implemented.");
  }

  save(treasure: IBoxAccount): IBoxAccount {
    throw new Error("Method not implemented.");
  }

  get(userName: string): IBoxAccount {
    throw new Error("Method not implemented.");
  }

  init(): void {
    throw new Error("Method not implemented.");
  }
}
