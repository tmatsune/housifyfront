import { gql } from "@apollo/client";

export const GET_HOUSES = gql`
query{
  getHouses{
    id
    name
    city
    cost
    imgUrl
    profileId
  }
}
`
export const TEST_HOUSE = gql`
    query{
        houseTest
    }
`
export const GET_USER_HOUSES = gql`
query findUsersHouses($user_id: Int!) {
   findUsersHouses(user_id: $user_id){
    id
    name
    city
    cost
    imgUrl
    profileId
    simgUrl
  }
}
`
export const GET_HOUSES_CATEG = gql`
query getHousesCateg($houseCateg: String, $minCost: Int, $maxCost: Int){
  getHouseCateg(houseCateg: $houseCateg, minCost: $minCost, maxCost: $maxCost) {
    id
    name
    city
    cost
    imgUrl
    profileId
  }
}
`
/*
export const GET_USER_HOUSES = gql`
query findUsersHouses0($profileId: Int!){
  findUsersHouses(user_id: 1){
    id
    name
    city
    cost
    imgUrl
    profileId
  }
}
`
*/
