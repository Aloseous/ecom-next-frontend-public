import ProductCard from '@/components/ProductCard'
import { getCollectionDetail } from '@/lib/actions'
import Image from 'next/image'
import React from 'react'

const CollectionDetails = async ({ params }: { params: { collectionId: string } }) => {

    const collection = await getCollectionDetail(params.collectionId)
    return (
        <div className='flex flex-col items-center gap-8 text-grey-2 px-10 py-5'>
            <Image src={collection?.image} alt={collection?.title} width={1500} height={500} className='w-full h-[400px] rounded-lg shadow-xl object-cover' />
            <p className='text-heading3-bold'>{collection?.title}</p>
            <p className='text-body-small max-w-[900px]'>{collection?.description}</p>
            <div className='flex flex-wrap gap-20 mx-auto'>
                {collection?.products.map((product: ProductTypes) => (
                    <ProductCard product={product} key={product._id} />
                ))}
            </div>
        </div>
    )
}

export const dynamic = "force-dynamic";

export default CollectionDetails;
