import React from 'react'
import {Container, Button, Row, Col} from "reactstrap";
import Breadcrumb from '../../components/Breadcrumb';

const ItemDetail = () => {

    return (
        <Container>
            <div>
                <Breadcrumb/>
                <div className="detail-content">
                    <Row className="detail-product">
                        <Col sm={8}>
                            <div className="detail-product__image">
                                <img
                                    src="https://http2.mlstatic.com/D_NQ_NP_966059-MLA44454383918_122020-O.webp"
                                    alt="foto"/>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="detail-product__info">
                                <span>Nuevo - 234 vendidos</span>
                                <h4>Deco reverse sombrero Oxford</h4>
                                <h2>$ 1.980</h2>
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
                                <p className="description-product__info">* Todos los productos tienen garantía
                                    oficial * Realizamos entregas a todo el país con excepción de Tierra del Fuego *
                                    La presente publicación está destinada únicamente a consumidores finales. En
                                    consecuencia, conforme normas fiscales la factura a emitirse será tipo B
                                    **ATENCIÓN** La empresa nunca te solicitará información sobre tus datos
                                    bancarios (tarjetas de crédito/débito, cuentas, etc.). No te llamaremos, ni
                                    escribiremos por ningún medio para solicitarte los mismos. Si observás una
                                    conducta sospechosa por favor consultanos por mensaje privado. ** Para conocer
                                    todos nuestros productos ingresá a: https://tienda.mercadolibre.com.ar/Mall-360
                                    **</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )

}

export default ItemDetail