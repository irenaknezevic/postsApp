import { AddressDTO } from "./addressDTO";

export interface UserDTO {
    id?: number,
    name?: string,
    username?: string,
    email?: string,
    address?: AddressDTO
}