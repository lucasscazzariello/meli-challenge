import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import dispatch from '../../client/items'
import { Container, Alert } from "reactstrap";
import Breadcrumb from '../../components/Breadcrumb';
import Detail from '../../components/Detail/Detail';

const ItemDetail = () => {
    const [item, setItem] = useState()
    const [error, setError] = useState()
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        id && getItemById()
    }, [id])

    const getItemById = async () => {
        try {
            const response = await dispatch.getItemById(id)
            const { item } = response.data
            setItem(item)
        } catch (err) {
            setError(err.response.data)
        }
    }

    return (
        <Container>
            <div className="detail">
                {error ?
                    <Alert color="danger" className="items-content-error">
                        {error}
                    </Alert> :
                    item &&
                    <>
                        <Breadcrumb />
                        <Detail {...item} />
                    </>
                }
            </div>
        </Container >
    )

}

export default ItemDetail