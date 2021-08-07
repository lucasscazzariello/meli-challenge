import React, { useEffect } from 'react'
import { Container } from "reactstrap";
import { useRouter } from 'next/dist/client/router'
import Breadcrumb from '../../components/Breadcrumb';
import ListItems from '../../components/ListItems/ListItems'

const Items = () => {
    const router = useRouter()
    const { search } = router.query

    useEffect(() => {
        !search && console.log(search)
    }, [search])

    return (
        <Container>
            <div className="items-content">
                <Breadcrumb />
                <ListItems />
            </div>
        </Container>
    )

}

export default Items