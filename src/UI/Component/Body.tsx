import {UseData} from "../Context/DataProvider.tsx";
import {Pagination, Row, Spinner} from "react-bootstrap";
import {News} from "./News.tsx";
import {HiOutlineShare} from "react-icons/hi2";
import '../../Style/Body.css'

export function Body(){
    const { news, loading, error, setPageNum, pageNum }= UseData()

    if(loading) return <div className="d-flex ms-5 justify-content-center align-self-center align-items-center text-center text-muted">
        <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
    </div>
    if(error) return <h1 className="d-flex justify-content-center align-items-center"> Error</h1>

    return(
        <>
            <div className="w-75 my-3 ms-4  ">
                <div className="d-flex flex-row align-items-baseline text-secondary  ">
                    <h5 >All</h5>
                    <p className="mx-4">{news.length} results</p>
                    <HiOutlineShare/>
                </div>
                {news.map(data=>(
                    <Row key={data.story_id}><News {...data}/></Row>
                ))}
                <Pagination className="d-flex justify-content-center" size="lg">
                    {pageNum === 0 ? null : <Pagination.Prev onClick={() => {
                        setPageNum(pageNum - 1)
                    }}/>}
                    {pageNum > 0 && <Pagination.Item active onClick={() => {
                        setPageNum(pageNum)
                    }}>{pageNum}</Pagination.Item>}
                    <Pagination.Item onClick={() => {
                        setPageNum(pageNum + 1)
                    }}>{pageNum + 1}</Pagination.Item>
                    <Pagination.Item onClick={() => {
                        setPageNum(pageNum + 2)
                    }}>{pageNum + 2}</Pagination.Item>
                    <Pagination.Next onClick={() => {
                        setPageNum(pageNum + 1)
                    }}/>
                </Pagination>
            </div>
        </>
    )
}