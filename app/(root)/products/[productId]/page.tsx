import Gallery from '@/components/Gallery';
import ProductCard from '@/components/ProductCard';
import ProductInfo from '@/components/ProductInfo';
import { getProductDetail, getRelatedProducts } from '@/lib/actions';

const ProductDetail = async ({ params }: { params: { productId: string } }) => {


    const productDetils = await getProductDetail(params.productId)
    const relatedProducts = await getRelatedProducts(params.productId)

    return (
        <div className=' flex flex-col bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text gap-5'>
            <div className='flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center bg-light-softBg dark:bg-dark-softBg'>
                <Gallery productMedia={productDetils.media} />
                <ProductInfo productInfo={productDetils} />
            </div>
            <div className='flex flex-col items-center px-10 py-5 max-md:px-3  bg-light-softBg dark:bg-dark-softBg'>
                <p className='text-heading3-bold border-b-2 border-crimson w-max py-0.5'>Related Products</p>
                <div className='flex flex-wrap gap-16 mx-auto mt-8'>
                    {relatedProducts.map((product: ProductTypes) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export const dynamic = "force-dynamic"
export default ProductDetail

