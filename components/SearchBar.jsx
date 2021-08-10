import React, { useEffect, useState } from "react";
import { Navbar, Input, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link'

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()

    useEffect(() => {
        router.asPath === '/' && setSearch('')
    }, [router.pathname]);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        search.length > 0 &&
            router.push({
                pathname: "/items/",
                query: { search },
            });
    };

    return (
        <Navbar className="nav-bar">
            <Container className="nav-bar__container">
                <Link
                    href={{ pathname: '/' }}>
                    <a title="toHome" className="nav-bar__image"></a>
                </Link>
                <div className="search-bar">
                    <Input
                        value={search}
                        type="text"
                        placeholder="Nunca dejes de buscar"
                        className="search-bar__input"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={handleKeyPress} />
                    <Button
                        className="btn btn-light search-bar__button"
                        onClick={handleSubmit}
                        title="search">
                        <span>
                            <FontAwesomeIcon icon="search" />
                        </span>
                    </Button>
                </div>
            </Container>
        </Navbar>
    );
};

export default SearchBar;
