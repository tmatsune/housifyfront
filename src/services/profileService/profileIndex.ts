import { gql } from "@apollo/client";
import { apolloClient } from "../../graphql-apollo/graphql";
import { Profile, CreateProfileInput } from "../../types/houseType";


export const findProfileById = async(profileId: number)=> {
    const res = await apolloClient.query({
        query: gql`
            query{
                findProfileById(profileId: ${profileId}) {
                    name
                    email
                    profImg
                    desc
	            }
            }`
        })
    return res.data.findProfileById
}
export const findOneProfile = async(emai: string, password: string) => {
    const email = `"${emai}"`
    const pass = `"${password}"`
    const res = await apolloClient.query({
        fetchPolicy: "network-only",
        query: gql`
            query{
                findOneProfile(email: ${email}, pass: ${pass}) {
                    id
                    name
                    email
                    desc
                    profImg
	            }
            }`
    })
    return res.data.findOneProfile
}

export const createProfile = async(nwProfile: CreateProfileInput) => {
    const {name, email, password, desc, profImg} = nwProfile;
    const fmName = `"${name}"`
    const fmEmail = `"${email}"`
    const fmPass = `"${password}"`
    const fmDesc = `"${desc}"`
    const fmProfImg = `"${profImg}"`
    const res = await apolloClient.mutate({
        mutation: gql`
            mutation{
            createProfile(profileInput: {
                name: ${fmName},
                email: ${fmEmail},
                desc: ${fmDesc},
                profImg: ${fmProfImg},
                password: ${fmPass}
                }) {
                id
                name
                email
                desc
                profImg
                }
            }`
    })
    return res.data.createProfile
}