interface IBoxSmartContractResponse<T> {
  isSuccess?: boolean;
  message?: string;
  context?: T;
}

interface IBox {
  [propName: string]: any; // it coulde be anything.
}

interface IBoxAccount {
  user: IBoxUser;
  box: IBox;
}

interface IBoxUser {
  name: string;
  password: string;
}

interface IiBoxSmartContract {
  signIn(account: IBoxAccount): IBoxAccount;
  signOut(account: IBoxAccount): IBoxAccount;
  signUp(account: IBoxAccount): IBoxAccount;
  save(treasure: IBoxAccount): IBoxAccount;
  get(userName: string): IBoxAccount;
}

class IBoxNebulasSmartContract {
  signIn(account: IBoxAccount): IBoxSmartContractResponse<IBoxAccount> {
    account = JSON.parse(account.toString());
    const existsAccount = this.get(account.user.name);
    if (existsAccount.context == null) {
      return {
        isSuccess: false,
        message: 'user' + account.user.name + ' NOT found!'
      }
    }

    if (existsAccount.context.user.password !== account.user.password) {
      return {
        isSuccess: false,
        message: 'password not correct!'
      }
    }

    return {
      isSuccess: true,
      message: '',
      context: existsAccount.context
    }
  }

  signOut(account: IBoxAccount): IBoxSmartContractResponse<IBoxAccount> {
    throw new Error("Method not implemented.");
  }

  signUp(account: IBoxAccount): IBoxSmartContractResponse<IBoxAccount> {
    account = JSON.parse(account.toString());
    const existsAccount = this.get(account.user.name);
    if (existsAccount.context != null) {
      return {
        isSuccess: false,
        message: 'user already exists.'
      };
    } else {
      LocalContractStorage.put(account.user.name, account);
      return {
        isSuccess: true,
        message: '',
        context: account
      }
    }
  }

  save(account: IBoxAccount): IBoxSmartContractResponse<IBoxAccount> {
    account = JSON.parse(account.toString());
    const existsAccount = this.get(account.user.name);
    if (existsAccount.context == null) {
      return {
        isSuccess: false,
        message: 'account not exists.'
      }
    }

    LocalContractStorage.put(account.user.name, account);
    return { isSuccess: true, message: '', context: account };
  }

  getBackPassword() {

  }

  get(userName: string): IBoxSmartContractResponse<IBoxAccount> {
    const existsAccount = LocalContractStorage.get(userName);
    return {
      isSuccess: existsAccount !== null,
      message: existsAccount == null ? 'account not exists.' : '',
      context: existsAccount
    }
  }

  init(): string {
    return 'all good!'
  }
}

module.exports = IBoxNebulasSmartContract
