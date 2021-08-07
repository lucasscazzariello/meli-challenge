import React, { useEffect } from 'react'
import { Container } from "reactstrap";
import { useRouter } from 'next/dist/client/router'
import Breadcrumb from '../../components/Breadcrumb';

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
                Aca muestro los items
            </div>
        </Container>
    )

}

export default Items