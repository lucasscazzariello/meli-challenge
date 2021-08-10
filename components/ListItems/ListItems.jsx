import React from 'react'
import CardItem from './CardItem'

const ListItems = ({items}) => {
    return (
        <div>
            {items &&
                items.map((item) => (
                    <CardItem key={item.id} {...item} />
                ))
            }
        </div>
    )

}

export default ListItems

