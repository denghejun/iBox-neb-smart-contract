import { IBoxUser } from './IBoxUser'
import { IBox } from './IBox'

export interface IBoxAccount {
    user: IBoxUser;
    box: IBox;
}


// {
//   \"user\": {
//     \"name\": \"me\",
//     \"password\": \"123456\"
//   },
//   \"box\":{
//     \"key1\": \"money!!!!\"
//   }
// }
