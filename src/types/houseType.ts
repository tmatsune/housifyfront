import { type } from "os"

export type House = {
    __typename: string
    id: number
    name: string
    city: string
    cost: number
    imgUrl: string
    user_id: number
}
export type Houses = {
    __typename: string
    id: number
    name: string
    city: string
    cost: number
    imgUrl: string
    user_id: number
}[]
export type Reserve = {
    __typename: string
    id: number;
    reserveDates: number[];
    profileId: number;
    houseId: number;
}
export type Profile = {
    __typename: string;
    id: number;
    email: string;
    desc: string
    password: string;
}
export type CreateHouseInput = {
    name: string;
    city: string;
    state: string
    cost: number;
    imgUrl: string|null;
    simgUrl: string|null;
    profileId: number;
    bedrooms: number;
    bathrooms: number;
    desc: string;
    guests: number;
    maxNights: number;
}
export type CreateProfileInput = {
    name: string;
    email: string;
    password: string;
    desc: string;
    profImg: string|null;
}