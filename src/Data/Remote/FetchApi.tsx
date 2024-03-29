import axios from "axios";

export function FetchDataFromApi(query : string, page : number){
    return(
        axios.get(`https://hn.algolia.com/api/v1/search?query=${query? query: `All`}&page=${page}`)
    )
}

export function FetchDetail(id : string | undefined){
    return(
        axios.get(`https://hn.algolia.com/api/v1/items/${id}`)
    )
}