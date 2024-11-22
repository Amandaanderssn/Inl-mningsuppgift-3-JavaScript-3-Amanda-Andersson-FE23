

function Cart({ cart, handleRemoveFromCart }) {

    //Räknar ihop det totala priset på alla varor i varukorgen
    const totalCartPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0)

    return (
        <div>
            <h2>Shopping Cart:</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <div className='Cart'>
                    {cart.map((product, index) => (
                        <div key={index} className="ProductInCart">

                            <img src={product.images} alt='img'></img>
                            <div className="productInfo">
                                <h4>{product.title} </h4>
                                <p>{product.price} $</p>
                                <p>Qty: {product.quantity}</p>
                            </div>
                            <button
                                onClick={() => handleRemoveFromCart(product.id)}
                            >
                                {product.quantity > 1 ? 'Delete 1' : 'Delete'}</button>
                        </div>
                    ))}
                </div>
            )}
            <h4>Total: {totalCartPrice} $</h4>
        </div>
    )
}

export default Cart;