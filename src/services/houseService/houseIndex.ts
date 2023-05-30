import { Houses, CreateHouseInput } from "../../types/houseType"
import { apolloClient } from "../../graphql-apollo/graphql"
import { GET_HOUSES, TEST_HOUSE, GET_HOUSES_CATEG, GET_USER_HOUSES } from "./houseQuery"
import { gql } from "@apollo/client"

export const getHouses = async(): Promise<Houses> => {
    const res = await apolloClient.query({query: GET_HOUSES}).catch(err => {
        console.log(err)
        throw(err)
    })
    return res.data.getHouses 
}
export const housesTest = async() => {
    const res = await apolloClient.query({query: TEST_HOUSE}).catch(err => {
        console.log(err);
        throw(err);
    })
    console.log(res.data);
}
export const getHousesCateg = async( houseCateg: string, minCost: number, maxCost: number) => {
    const nwCateg = `"${houseCateg}"`
    const res = await apolloClient.query({
        query: gql`
            query {
                getHouseCateg(houseCateg: ${nwCateg}, minCost: ${minCost}, maxCost: ${maxCost}) {
                id
                name
                city
                cost
                imgUrl
                profileId
            }
        }`
    })
    return res.data.getHouseCateg
}
export const findUsersHouses = async( profileId: number) => {
    const res = await apolloClient.query({
        query: gql`
        query {
            findUsersHouses(user_id: ${profileId}){
            id
            name
            city
            cost
            imgUrl
            profileId
            }
        }`
    })
    return res.data.findUsersHouses;
}
export const getOneHouse = async( houseId: number ) => {
    const res = await apolloClient.query({
        query: gql`
        query{
            getOneHouse(houseId: ${houseId}) {
                id
                name
                city
                state
                cost
                imgUrl
                simgUrl
                profileId
                bedrooms
                bathrooms
                desc
                guests
                maxNights
            }
        }`
    })
    return res.data.getOneHouse;
}
export const createHouse = async(houseInput: CreateHouseInput) => {
    const { name, city, state, cost, imgUrl, simgUrl, bedrooms, bathrooms, profileId, desc, guests, maxNights } = houseInput;
    const fmName = `"${name}"`;
    const fmCity = `"${city}"`;
    const fmState = `"${state}"`
    const fmImgUrl = `"${imgUrl}"`;
    const fmSimgUrl = `"${simgUrl}"`;
    const fmDesc = `"${desc}"`;
    const res = await apolloClient.mutate({
        mutation: gql`
            mutation{
                createHouse(newHouseData: {
                    name: ${fmName},
                    city: ${fmCity},
                    state: ${fmState}
                    cost: ${cost},
                    imgUrl: ${fmImgUrl}
                    simgUrl: ${fmSimgUrl}
                    bedrooms: ${bedrooms},
                    profileId: ${profileId},
                    bathrooms: ${bathrooms},
                    desc: ${fmDesc}
                    guests: ${guests},
                    maxNights: ${maxNights}
                    }) {
                        id
                        name
                        city
                        cost
                        imgUrl
                        simgUrl
                        profileId
                        bedrooms
                        bathrooms
                        desc
                        guests
                        maxNights
                    }
            }`
    })
    return res.data.createHouse;
}

