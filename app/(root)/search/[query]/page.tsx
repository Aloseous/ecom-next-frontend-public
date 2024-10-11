import ProductCard from "@/components/ProductCard"
import { getSearchProduct } from "@/lib/actions"


const SearchPage = async ({ params }: { params: { query: string } }) => {


    const searchProduct = await getSearchProduct(params.query)
    const decodedQuery = decodeURIComponent(params.query)

    return (
        <div className="px-10 py-5 bg-light-softBg text-light-text dark:bg-dark-softBg dark:text-dark-text" >
            <p className="text-heading2-bold my-10">Search Results for {decodedQuery}</p>
            {!searchProduct || searchProduct.length === 0 && (
                <p className="text-body-bold my-5">No any products</p>
            )}
            <div className=" flex flex-wrap justify-between gap-16">
                {searchProduct.map((product: any) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export const dynamic = "force-dynamic"
export default SearchPage

