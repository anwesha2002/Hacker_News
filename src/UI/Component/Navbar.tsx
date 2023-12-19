import {Container, FormControl, InputGroup, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import Logo from '../../assets/Logo.png'
import '../../Style/Navbar.css'
import {FaSearch} from "react-icons/fa";
import {UseData} from "../Context/DataProvider.tsx";

export function Navbar(){
    const {searchQuery , setSearchQuery} = UseData()

    return(
        <NavbarBs expand="lg">
            <Container fluid="sm" className="border-bottom">
                <NavbarBs.Brand className="d-flex flex-row align-items-center justify-content-center">
                    <img className="Logo" src={Logo}/>
                    <div className="ms-3 text-secondary">
                        <h4 className="d-flex flex-column">
                            Search
                            <span>Hacker News</span>
                        </h4>
                    </div>
                </NavbarBs.Brand>
                <Nav className="w-50">
                    <Nav.Item  className=" w-100">
                            <InputGroup >
                                <InputGroup.Text className="rounded-start-pill w-25"><FaSearch style={{color : "orange"}}/></InputGroup.Text>
                                <FormControl type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="rounded-end-pill" aria-label="default"/>
                            </InputGroup>
                    </Nav.Item>
                </Nav>
                <NavbarBs.Toggle aria-controls="basic-navbar-nav"/>
                <NavbarBs.Collapse id="basic-navbar-nav">
                    <Nav className="text-muted" >
                        <Nav.Link>Sort by : </Nav.Link>
                        <Nav.Link>Popularity</Nav.Link>
                        <Nav.Link className="border-bottom border-warning">Date</Nav.Link>
                    </Nav>
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>
    )
}