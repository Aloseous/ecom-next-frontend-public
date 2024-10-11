import Link from "next/link";
import { getCollections } from "@/lib/actions";
import Image from "next/image";

const Collections = async () => {
    const collections = await getCollections();
    return (
        <div className="flex flex-col items-center gap-10 px-10 py-5 bg-light-softBg dark:bg-dark-softBg">
            <p className="text-heading2-bold text-light-text dark:text-dark-text tracking-tight border-b-2 border-crimson w-max py-0.5">Collections</p>
            {!collections || collections.length === 0 ? (
                <p className="text-body-bold  text-light-text dark:text-dark-text tracking-tight">No any collections</p>
            ) : (
                <div className="flex items-center flex-wrap justify-center gap-8">
                    {collections.map((collection: CollectionTypes) => (
                        <Link href={`/collections/${collection._id}`} key={collection._id}>
                            <Image
                                src={collection.image}
                                alt={collection.title}
                                width={350}
                                height={200}
                                className="rounded-md object-cover hover:opacity-70 hover:scale-105 transition-all duration-300"
                            />
                        </Link>
                    ))}
                </div>
            )}
        </div>


    );
};

export default Collections;