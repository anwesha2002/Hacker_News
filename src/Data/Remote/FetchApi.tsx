import axios from "axios";

export function FetchDataFromApi(query : string){
    return(
        axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
    )
}

export function FetchDetail(id : string | undefined){
    return(
        axios.get(`http://hn.algolia.com/api/v1/items/${id}`)
    )
}