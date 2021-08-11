import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import dispatch from '../../client/items'
import { Container, Alert } from "reactstrap";
import Breadcrumb from '../../components/Breadcrumb';
import ListItems from '../../components/ListItems/ListItems'

const Items = () => {
    const [results, setResults] = useState();
    const [categories, setCategories] = useState();
    const [error, setError] = useState();
    const router = useRouter()
    const { search } = router.query

    useEffect(() => {
        search && getItemsSearch()
    }, [search])

    const getItemsSearch = async () => {
        try {
            const { data } = await dispatch.searchWithText(search)
            const { items, categories } = data
            setResults(items)
            setCategories(categories)
        } catch (err) {
            setError(err.response.data)
        }
    }

    return (
        <Container>
            <div className="items-content">
                {error ?
                    <Alert color="danger" className="items-content-error">
                        {error}
                    </Alert> : results && results.length < 1 ?
                        <Alert className="items-content-error">
                            No se encontraron resultados de la búsqueda
                        </Alert> :
                        <>
                            <Breadcrumb categories={categories} />
                            <ListItems items={results} />
                        </>
                }
            </div>
        </Container>
    )

}

export default Items