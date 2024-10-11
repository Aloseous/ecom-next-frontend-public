

import { getProducts } from "@/lib/actions"
import ProductCard from "./ProductCard"

const ProductList = async () => {

    const productList = await getProducts()

    return (
        <div className="flex flex-col items-center gap-10 px-10 py-5  bg-light-softBg dark:bg-dark-softBg">
            <p className="text-heading2-bold  text-light-text dark:text-dark-text tracking-tight border-b-2 border-crimson w-max py-0.5">Products</p>
            {!productList || productList.length === 0 ? (<p className="text-body-bold  text-light-text dark:text-dark-text tracking-tight">No any products</p>)
                :
                <div className="flex flex-wrap mx-auto gap-16">
                    {productList.map((product: ProductTypes) =>
                        <ProductCard key={product._id} product={product} />

                    )}
                </div>}
        </div>
    )
}

export default ProductList