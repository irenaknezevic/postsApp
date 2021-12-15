import { CordinateDTO } from "./coordinateDTO";

export interface AddressDTO {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    geo?: CordinateDTO
}