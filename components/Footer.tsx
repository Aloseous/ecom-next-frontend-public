import { IndianRupee } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 text-sm   bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text ">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24 ">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 text-light-text dark:text-dark-text">
          <Link href={"/"}><div className="text-2xl tracking-wide">Kingz</div></Link>
          <p>No:780, AK Street, Ch-45</p>
          <span className="font-semibold">kingz@mail.com</span>
          <span className="font-semibold">+91 56245632</span>
          <div className="flex gap-6">
            <Image src={"/facebook.png"} alt="" width={16} height={16} className="w-4 h-auto object-contain hover:scale-110 transition-transform" />
            <Image src={"/instagram.png"} alt="" width={16} height={16} className="w-4 h-auto object-contain hover:scale-110 transition-transform" />
            <Image src={"/youtube.png"} alt="" width={16} height={16} className="w-4 h-auto object-contain hover:scale-110 transition-transform" />
          </div>
        </div>
        {/* center */}
        <div className="w-1/2 hidden lg:flex justify-between">
          <div className=" flex flex-col gap-6">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className=" flex flex-col gap-6">
              <Link href="">About us</Link>
              <Link href="">Carrers</Link>
              <Link href="">Affliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact</Link>
            </div>
          </div>
          <div className=" flex flex-col gap-6">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className=" flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className=" flex flex-col gap-6">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className=" flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, fugiat.</p>
          <div className="flex">
            <input type="text" placeholder="Email address" className="p-4 w-3/4 text-black border" />
            <button className="w-1/4 bg-cartColor border border-gray-400">JOIN</button>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Kingz Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="mr-4">Language</span>
            <span className="font-medium">Tamil | English</span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="mr-4">Currency |</span>
            <span className="font-medium flex"><IndianRupee /> INR</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
