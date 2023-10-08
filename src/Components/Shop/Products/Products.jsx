
const Products = ({ product }) => {
    const { name, price, image } = product || {}

    return (
        <div>
            <div className="card bg-base-100 ">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-t-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title ">{name}</h2>
                    <p className="text-gray-400 font-medium text-lg">${price}.00</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-info border-none">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;