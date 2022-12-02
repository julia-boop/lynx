import React from 'react'
import '../Product/Product.css'
import Slide from 'react-reveal'

function Product() {
    return (
        
        <div className="product-container" id="products">
            <Slide bottom>
            <div className="product-title">
                <h1>Productos</h1>
            </div>
            </Slide>
            <Slide bottom>
            <div className="product-content">
                <h4>A través de Lynx Valores SA los clientes tendrán acceso a los productos financieros que el mercado de capitales ofrece a fin de diversificar su portfolio de inversiones, a través de nuestros asesores podrán invertir en: </h4>
                <ul>
                    <li>Acciones locales (Renta Variable)</li>
                    <li>Bonos soberanos y corporativos (Renta Fija)</li>
                    <li>Opciones</li>
                    <li>Pases y Cauciones</li>
                    <li>Fideicomisos</li>
                    <li>Futuros BYMA</li>                
                </ul>
                <h4>Y una amplia gama de productos financieros tanto en el mercado local como en el internacional, además, realizamos la custodia de los títulos y el pago de servicios de dividendos y renta financiera.</h4>
            </div>
            </Slide>
        </div>
    )
}

export default Product
