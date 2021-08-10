import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Alert } from "reactstrap";
import { useRouter } from 'next/dist/client/router'
import Breadcrumb from '../../components/Breadcrumb';
import ListItems from '../../components/ListItems/ListItems'
import { searchWithText } from '../../redux/items/items'
// import dispatch from '../../client/items'

const Items = () => {
    const dispatch = useDispatch()
    const items = useSelector(store => store.items.items)
    const categories = useSelector(store => store.items.categories)
    const error = false

    const router = useRouter()
    const { search } = router.query

    useEffect(() => {
        search && dispatch(searchWithText(search))
    }, [search])

    console.log(items)

    return (
        <Container>
            <div className="items-content">
                {error ?
                    <Alert color="danger" className="items-content-error">
                        {error}
                    </Alert> : items && items.length < 1 ?
                        <Alert className="items-content-error">
                            No se encontraron resultados de la búsqueda
                        </Alert> :
                        <>
                            <Breadcrumb categories={categories} />
                            <ListItems items={items} />
                        </>
                }
            </div>
        </Container>
    )

}

export default Items