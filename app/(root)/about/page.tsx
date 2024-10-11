import Image from "next/image";

const About = () => {
    return (
        <div className="px-10 py-20 max-sm:px-5 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg max-w-3xl mx-auto">
                    Welcome to Kingz, where we blend style, comfort, and quality into every piece we create. From everyday essentials to
                    statement pieces, we are committed to bringing you products that elevate your lifestyle.
                </p>
            </div>

            {/* Team Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                <Image
                    src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg"
                    alt="Our Team"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover shadow-lg"
                />
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                    <p className="text-base leading-7">
                        Kingz was founded in 2015 with a vision to provide high-quality, stylish, and affordable clothing for everyone.
                        Our journey began with a small team of passionate designers and craftsmen who shared a common goal of making
                        fashion accessible to all.
                    </p>
                    <p className="text-base leading-7 mt-4">
                        Over the years, we&aposve grown into a diverse team of creators, innovators, and fashion enthusiasts who are
                        dedicated to delivering the best products to our customers. Our core values revolve around sustainability,
                        quality, and customer satisfaction.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="bg-light-softBg dark:bg-dark-softBg py-16 mt-20 rounded-lg">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        Our mission is simple: to inspire confidence and self-expression through fashion. We believe that what you wear
                        is an extension of who you are, and we are here to help you express yourself in the most authentic way.
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="max-w-7xl mx-auto py-16">
                <h2 className="text-3xl font-semibold text-center mb-10">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div className="p-6 bg-light-softBg dark:bg-dark-softBg rounded-lg shadow-lg">
                        <h3 className="text-xl font-medium mb-2">Quality</h3>
                        <p className="text-sm leading-6">
                            We prioritize high-quality materials and craftsmanship in every product to ensure you get the best.
                        </p>
                    </div>
                    <div className="p-6 bg-light-softBg dark:bg-dark-softBg rounded-lg shadow-lg">
                        <h3 className="text-xl font-medium mb-2">Sustainability</h3>
                        <p className="text-sm leading-6">
                            We are committed to minimizing our environmental impact through sustainable practices in production and
                            packaging.
                        </p>
                    </div>
                    <div className="p-6 bg-light-softBg dark:bg-dark-softBg rounded-lg shadow-lg">
                        <h3 className="text-xl font-medium mb-2">Customer Satisfaction</h3>
                        <p className="text-sm leading-6">
                            Our customers are at the heart of everything we do, and we strive to exceed their expectations in every way.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-light-softBg dark:bg-dark-softBg py-16 rounded-lg mt-20 text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">Join Us on Our Journey</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        Whether you&aposre a long-time customer or a first-time visitor, we invite you to explore our collections and be part
                        of the Kingz family. Fashion is more than what you wear—it&aposs how you express yourself. Let&aposs make every day a
                        style statement!
                    </p>
                    <button className="bg-crimson text-light-bg px-6 py-3 rounded-lg text-lg font-semibold hover:bg-light-text hover:text-light-bg transition-all">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
