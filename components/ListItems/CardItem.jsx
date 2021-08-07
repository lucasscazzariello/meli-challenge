import React from 'react'
import { useRouter } from 'next/dist/client/router'

const CardItem = () => {
    const router = useRouter();

    const handleClick = (id = 'asdasdas') => {
        router.push({
            pathname: `items/${id}`
        })
    }

    return (
        <div className="card-result">
            <div className="card-result__content" onClick={() => handleClick()}>
                <div className="card-result__image">
                    <div className="card-result__image--content">
                        <img className="card-result__image--element" src="https://http2.mlstatic.com/D_NQ_NP_955217-MLA44051208430_112020-V.webp"  alt="imagen"/>
                    </div>
                </div>
                <div className="card-result__description">
                    <div>
                        <div className="card-result__description--price">
                            <h2 className="card-result-price">$ 1.980</h2>
                        </div>
                        <div className="card-result__description--info">
                            <h4 className="card-result-info">Cama De Dos Plazas Con Respaldo Repisa Melamina 1,50m Ancho</h4>
                        </div>
                    </div>
                    <div className="card-result__description--address">
                        <span className="card-result-address">Capital federal</span>
                    </div>
                </div>
            </div>
        </div>        
    )

}

export default CardItem