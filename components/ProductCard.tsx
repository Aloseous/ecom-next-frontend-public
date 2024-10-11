import Image from 'next/image'
import Link from 'next/link'
import Favorite from './Favorite'
import { IndianRupee } from 'lucide-react';

interface ProductCardProps {
    product: ProductTypes;
    updateSignedInUser?: (updatedUser: UserTypes) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {

    return (
        <Link href={`/products/${product._id}`} className='flex flex-col gap-2 w-[220px]  text-light-text dark:text-dark-text tracking-tight'>
            <Image src={product.media[0]} alt="Product" width={250} height={300} className='h-[250px] rounded-lg object-cover' />
            <div className=''>
                <p className='text-base-bold mb-2'>{product.title}</p>
                <p className='text-small-medium text-grey-2'>{product.category}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-body-bold flex items-center gap-1'><IndianRupee width={16} height={16} />{product.price}</p>
                <Favorite product={product} updateSignedInUser={updateSignedInUser} />
            </div>
        </Link>
    )
}

export default ProductCard