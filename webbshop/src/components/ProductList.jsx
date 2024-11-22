import { useState } from "react";


const ProductList = ({ products, handleAddToCart }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const OpenMoreInformationModal = (event) => {
        event.preventDefault();
        setIsModalVisible(true)
    }

    const CloseMoreInformationModal = () => {
        setIsModalVisible(false);
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
                                    <a href="#" onClick={OpenMoreInformationModal}>More info</a>
                                </div>
                                <div>
                                    <p>{product.price} $</p>
                                    <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                                </div>
                            </div>
                            {isModalVisible && (
                                <div className="MoreInformationModal">
                                    <p>Description:</p>
                                    <p>{product.description}</p>
                                    <button onClick={CloseMoreInformationModal}>X</button>
                                </div>
                            )}
                        </div>

                    ))}
                </div>
            ) : (
                <p>No products found</p>
            )
            }
        </section >
    )

}

export default ProductList;