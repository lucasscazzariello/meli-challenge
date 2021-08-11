import React from 'react'
import NumberFormat from "react-number-format";
import { getCurrencySymbol } from '../../utils/priceFormat'
import {  Button, Row, Col } from "reactstrap";


const parseCondition = (condition) => {
    return condition === 'new' ? "Nuevo" : "Usado"
}

const Detail = ({ picture, description, condition, sold_quantity, title, price }) => {

    return (
        <div className="detail-content">
                    <Row className="detail-product">
                        <Col sm={8}>
                            <div className="detail-product__image">
                                <img
                                    src={picture}
                                    alt={title} />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="detail-product__info">
                                <span className="detail-product__info--condition">{parseCondition(condition)} - {sold_quantity} vendidos</span>
                                <h4>{title}</h4>
                                <h2>
                                    <NumberFormat
                                        className="detail-product__info--price" 
                                        value={price.amount} 
                                        displayType={"text"} 
                                        thousandSeparator="." 
                                        decimalSeparator="," 
                                        prefix={getCurrencySymbol(price.currency)} 
                                    />
                                </h2>
                                <Button>
                                    <span>Comprar</span>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <div className="description-product">
                                <h2 className="description-product__title">Descripción del producto</h2>
                                <p className="description-product__info">{description}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
    )

}

export default Detail