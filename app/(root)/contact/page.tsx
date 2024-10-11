import Image from 'next/image';

const ContactUs = () => {
    return (
        <div className="px-10 py-20 max-sm:px-5 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg max-w-3xl mx-auto">
                    We’d love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out to us.
                </p>
            </div>

            {/* Contact Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto items-start mb-16">
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-semibold">Get in Touch</h2>
                    <p className="text-base leading-7">
                        Our team is here to help you. Whether it’s an inquiry about an order, partnership, or our products, feel free to drop us a message.
                    </p>
                    <div>
                        <p className="font-medium">Address:</p>
                        <p>No:780, AK Street, Chennai - 600045, India</p>
                    </div>
                    <div>
                        <p className="font-medium">Phone:</p>
                        <p>+91 5624 5632</p>
                    </div>
                    <div>
                        <p className="font-medium">Email:</p>
                        <p>kingz@mail.com</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col gap-8 bg-light-softBg dark:bg-dark-softBg p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                    <form className="flex flex-col gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-4 border rounded-lg text-base bg-light-bg dark:bg-dark-bg"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-4 border rounded-lg text-base bg-light-bg dark:bg-dark-bg"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={6}
                            className="p-4 border rounded-lg text-base bg-light-bg dark:bg-dark-bg"
                        />
                        <button className="bg-crimson text-light-bg px-6 py-3 rounded-lg text-lg font-semibold hover:bg-light-text hover:text-light-bg transition-all">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-light-softBg dark:bg-dark-softBg py-16 mt-20 rounded-lg">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">Connect with Us on Social Media</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        Follow us for the latest updates, new arrivals, and exclusive offers!
                    </p>
                    <div className="flex justify-center gap-8">
                        <Image src="/facebook.png" alt="Facebook" width={40} height={40} className="cursor-pointer" />
                        <Image src="/instagram.png" alt="Instagram" width={40} height={40} className="cursor-pointer" />
                        <Image src="/youtube.png" alt="YouTube" width={40} height={40} className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
