import React, { useEffect } from 'react'
import { Container } from "reactstrap";
import { useRouter } from 'next/dist/client/router'
import Breadcrumb from '../../components/Breadcrumb';
import ListItems from '../../components/ListItems/ListItems'
import dispatch from '../../client/items'

const Items = () => {
    const router = useRouter()
    const { search } = router.query

    useEffect(() => {
        search && getItemsSearch()
    }, [search])

    const getItemsSearch = async () => {
        try {
            const response = await dispatch.searchWithText(search)
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

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