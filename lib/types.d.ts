type CollectionTypes = {
    _id: string;
    title: string;
    description?: string;
    image: string;
    products: ProductType[]; // Assuming the products are referenced by ObjectId
}

type ProductTypes = {
    _id: string;
    title: string;
    description?: string;
    media: [string];
    category: string;
    collections: [CollectionType];
    tags: [string];
    colors: [string];
    sizes: [string];
    price: number;
    expense: number;
    createdAt: Date;
    updatedAt: Date;
}

type UserTypes = {
    clerkId: string,
    wishlist: [string],
    orders: [string],
    createdAt: Date;
    updatedAt: Date;
}

type OrderTypes = {
    _id: string,
    shippingAddress: object,
    customerClerkId: string,
    products: [OrderItemTypes],
    totalAmount: number,
    shippingFee: string,
}

type OrderItemTypes = {
    _id: string,
    product: ProductTypes,
    color: string,
    size: string,
    quantity: number
}