import {UseData} from "../Context/DataProvider.tsx";
import {Row} from "react-bootstrap";
import {News} from "./News.tsx";
import {HiOutlineShare} from "react-icons/hi2";

export function Body(){
    const { news, loading, error }= UseData()

    if(loading) return <h1 className="d-flex justify-content-center align-items-center"> Loading...</h1>
    if(error) return <h1 className="d-flex justify-content-center align-items-center"> Error</h1>

    return(
        <>
            <div className="w-75 mt-3 ms-4">
                <div className="d-flex flex-row align-items-baseline text-secondary">
                    <h5 >All</h5>
                    <p className="mx-4">{news.length} results</p>
                    <HiOutlineShare/>
                </div>
                {news.map(data=>(
                    <Row key={data.story_id}><News {...data}/></Row>
                ))}
            </div>
        </>
    )
}