import { IBoxAccount } from './IBoxAccount'

export interface IiBoxSmartContract {
  signIn(account: IBoxAccount): IBoxAccount;
  signOut(account: IBoxAccount): IBoxAccount;
  signUp(account: IBoxAccount): IBoxAccount;
  save(treasure: IBoxAccount): IBoxAccount;
  get(userName: string): IBoxAccount;
}
