function Product() {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: "₹59,999",
            image: "https://picsum.photos/300/200?random=1"
        },
        {
            id: 2,
            name: "Smartphone",
            price: "₹24,999",
            image: "https://picsum.photos/300/200?random=2"
        },
        {
            id: 3,
            name: "Headphones",
            price: "₹2,999",
            image: "https://picsum.photos/300/200?random=3"
        },
        {
            id: 4,
            name: "Smart Watch",
            price: "₹4,999",
            image: "https://picsum.photos/300/200?random=4"
        },
        {
            id: 5,
            name: "Keyboard",
            price: "₹1,499",
            image: "https://picsum.photos/300/200?random=5"
        },
        {
            id: 6,
            name: "Gaming Mouse",
            price: "₹999",
            image: "https://picsum.photos/300/200?random=6"
        }
    ];

    return (
        <>
            <div className="container py-5">

                <h1 className="text-center fw-bold mb-5">
                    Our Products
                </h1>

                <div className="row g-4">

                    {
                        products.map((product) => (
                            <div className="col-md-4" key={product.id}>

                                <div className="card h-100 shadow border-0">

                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt={product.name}
                                    />

                                    <div className="card-body">

                                        <h4 className="card-title">
                                            {product.name}
                                        </h4>

                                        <h5 className="text-success">
                                            {product.price}
                                        </h5>

                                        <p className="text-muted">
                                            Premium quality product with
                                            excellent features and performance.
                                        </p>

                                    </div>

                                    <div className="card-footer bg-white border-0">

                                        <button className="btn btn-primary w-100">
                                            Add To Cart
                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    );
}

export default Product;