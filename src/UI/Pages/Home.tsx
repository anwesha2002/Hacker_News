import {Navbar} from "../Component/Navbar.tsx";
import {Container} from "react-bootstrap";
import {SideBar} from "../Component/SideBar.tsx";
import {Body} from "../Component/Body.tsx";

export function Home(){
    return(
        <>
            <Navbar/>
            <Container className="d-flex flex-row ">
                <SideBar/>
                <Body/>
            </Container>
        </>
    )
}