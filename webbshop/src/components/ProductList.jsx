import { useState } from "react";


const ProductList = ({ products, handleAddToCart }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null)

    const handleOpenModal = (productId) => {
        // event.preventDefault();
        setSelectedProductId(productId)
        setIsModalVisible(true)
    }

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedProductId(null)
    }

    return (
        <section>
            <h2>Search results:</h2>
            {products.length > 0 ? (

                <div className="wrapProducts">
                    {products.map((product) => (
                        <div key={product.id}>
                            <div className="productCard">
                                <img src={product.images[0]} alt={product.title}></img>
                                <div>
                                    <p>{product.title}</p>
                                    <a href="#" onClick={() => handleOpenModal(product.id)}>More info</a>
                                </div>
                                <div>
                                    <p>{product.price} $</p>
                                    <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {isModalVisible && (
                        <div className="MoreInformationModal">
                            {products
                                .filter(product => product.id === selectedProductId)
                                .map(product => (
                                    <div key={product.id}>

                                        <p>Description for <b>{product.title}</b>:</p>
                                        <p>{product.description}</p>
                                    </div>
                                ))}
                            <button onClick={() => handleCloseModal(selectedProductId)}>X</button>
                        </div>
                    )}
                </div>
            ) : (
                <p>No products found</p>
            )
            }
        </section >
    )

}

export default ProductList;