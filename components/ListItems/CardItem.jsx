import React from 'react'
import NumberFormat from "react-number-format";
import { getCurrencySymbol } from '../../utils/priceFormat'
import { useRouter } from 'next/dist/client/router'

const CardItem = ({ id, title, picture, price, state_name }) => {
    const router = useRouter();

    const handleClick = (id) => {
        router.push({
            pathname: `items/${id}`
        })
    }

    return (
        <div className="card-result">
            <div className="card-result__content" onClick={() => handleClick(id)}>
                <div className="card-result__image">
                    <div className="card-result__image--content">
                        <img className="card-result__image--element" src={picture}  alt={title}/>
                    </div>
                </div>
                <div className="card-result__description">
                    <div>
                        <div className="card-result__description--price">
                            <h2>
                                <NumberFormat 
                                    value={price.amount} 
                                    displayType={"text"} 
                                    thousandSeparator="." 
                                    decimalSeparator="," 
                                    prefix={getCurrencySymbol(price.currency)} 
                                />
                            </h2>
                        </div>
                        <div className="card-result__description--info">
                            <h4 className="card-result-info">{title}</h4>
                        </div>
                    </div>
                    <div className="card-result__description--address">
                        <span className="card-result-address">{state_name}</span>
                    </div>
                </div>
            </div>
        </div>        
    )

}

export default CardItem