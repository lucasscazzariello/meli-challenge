import React from "react";
import { Navbar, Input, Button, Container } from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchBar = () => {

    return (
        <Navbar className="nav-bar">
            <Container className="nav-bar__container">
                <a className="nav-bar__image"></a>
                <div className="search-bar">
                    <Input type="text" placeholder="Nunca dejes de buscar" className="search-bar__input"/>
                    <Button className="btn btn-light search-bar__button">
                        <span>
                            <FontAwesomeIcon icon="search"/>
                        </span>
                    </Button>
                </div>
            </Container>
        </Navbar>
    );
};

export default SearchBar;
