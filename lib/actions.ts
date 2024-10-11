export const getCollections = async () => {

    const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
    return await collections.json();
}

export const getCollectionDetail = async (collectionId: string) => {
    const collectionDetails = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
    return await collectionDetails.json();
}
export const getProducts = async () => {

    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    return await products.json();
}

export const getProductDetail = async (productId: string) => {

    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
    return await products.json();
}
export const getSearchProduct = async (productId: string) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${productId}`)
    return await res.json()
}

export const getOrders = async (customerId: string) => {

    const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
    return await orders.json();
}

export const getRelatedProducts = async (productId: string) => {

    const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
    return await relatedProducts.json();
}
