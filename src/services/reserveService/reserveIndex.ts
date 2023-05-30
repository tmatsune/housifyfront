import { Reserve } from "../../types/houseType";
import { apolloClient } from "../../graphql-apollo/graphql";
import { gql } from "@apollo/client";

export const getHouseReserve = async(houseId: number): Promise<Reserve[]> => {
    const res = await apolloClient.query({
        fetchPolicy: "network-only",
        query: gql`
            query {
                getHouseReserve(houseId: ${houseId}) {
                    reserveDates
                    houseId
                    profileId
                }
            }`
    })
    return res.data.getHouseReserve;
}
export const createReservation = async(reserveArray: number[], profileId:number, houseId:number) : Promise<Reserve> => {
    //console.log(reserveArray)
    const res = await apolloClient.mutate({
        mutation: gql`
            mutation {
            createReservation(reserveData: { reserveDates: [${reserveArray}], profileId: ${profileId}, houseId: ${houseId}, }) {
                reserveDates
                profileId
                houseId
            }
        }`
    })
    return res.data.createReservation
}