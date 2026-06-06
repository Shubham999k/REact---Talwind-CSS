function Product() {
  const products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse",
    "Monitor",
  ];

  return (
    <>
      <div className="container mt-5">
        <div className="bg-light p-4 shadow rounded">
          <h1>Products</h1>

          <ul className="list-group mt-3">
            {products.map((item, index) => (
              <li key={index} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Product;