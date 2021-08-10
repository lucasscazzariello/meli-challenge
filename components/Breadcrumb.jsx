import React from 'react'

const Breadcrumb = ({categories}) => {
    return (
        <div>
            <ol className="breadcrumb">
                {categories && categories.map( ({name, id}) => {
                    return <li className="breadcrumb-item" key={id}>{name}</li>
                })
                }
            </ol>
        </div>
    )

}

export default Breadcrumb