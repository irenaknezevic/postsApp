import { AddressDTO } from "../data-transfer-object/addressDTO";
import { UserDTO } from "../data-transfer-object/userDTO";

export class User {
    constructor(
        public id?: number,
        public name?: string,
        public username?: string,
        public email?: string,
        public address?: AddressDTO
    ) {}

    static adapt( data: UserDTO ): User {
        return new User(
            data.id,
            data.name,
            data.username,
            data.email,
            data.address
        )
    }
}