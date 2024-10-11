import { getOrders } from '@/lib/actions'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'

const Orders = async () => {
    const { userId } = auth()

    const orders = await getOrders(userId as string)

    return (
        <div className="px-10 py-8 max-sm:px-4 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text shadow-sm rounded-md">
            <p className="text-3xl font-bold mb-6 text-light-textColor dark:text-dark-textColor">
                Your Orders
            </p>
            {!orders && orders.length === 0 && <p>No Orders Found</p>}
            <div className="flex flex-col gap-10">
                {orders.map((order: OrderTypes) => (
                    <div
                        key={order._id}
                        className="flex flex-col gap-6 p-6 bg-light-softBg dark:bg-dark-softBg rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex gap-20 max-md:flex-col max-md:gap-3">
                            <p className="text-base-bold">Order Id: {order._id}</p>
                            <p className="text-body-medium">Total Amount: {order.totalAmount}</p>
                            {/* <p className="text-body-medium">{order.createdAt}</p> */}
                        </div>
                        <div className="flex flex-col gap-5">
                            {order.products.map((orderedItem: OrderItemTypes) => (
                                <div key={orderedItem._id} className="flex gap-5">
                                    <Image
                                        src={orderedItem.product.media[0]}
                                        alt={orderedItem.product.title}
                                        width={100}
                                        height={100}
                                        className="w-24 h-24 rounded-lg object-cover"
                                    />
                                    <div className="flex flex-col justify-between">
                                        <p className="text-small-medium">
                                            Title: {orderedItem.product.title}
                                        </p>
                                        {orderedItem.color && (
                                            <p className="text-small-medium">
                                                Color:{' '}
                                                <span className="text-small-bold">{orderedItem.color}</span>
                                            </p>
                                        )}
                                        {orderedItem.size && (
                                            <p className="text-small-medium">
                                                Size: <span className="text-small-bold">{orderedItem.size}</span>
                                            </p>
                                        )}
                                        <p className="text-small-medium">
                                            Unit Price:{' '}
                                            <span className="text-small-bold">
                                                {orderedItem.product.price}
                                            </span>
                                        </p>
                                        <p className="text-small-medium">
                                            Quantity:{' '}
                                            <span className="text-small-bold">{orderedItem.quantity}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Optional: View Details button */}
                        {/* <button className="mt-4 py-2 px-6 bg-crimson text-white rounded-md hover:bg-dark-textColor transition-colors">
                            View Details
                        </button> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export const dynamic = 'force-dynamic'
export default Orders
