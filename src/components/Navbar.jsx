import {ShoppingCart} from "lucide-react";
import React from "react";

const Navbar = (cartItems) => {
    return (
        <nav className="bg-red-700 text-white p-4 fixed w-full z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold" data-aos="fade-right">Festive Decor Pro</h1>
                <div className="flex items-center gap-6" data-aos="fade-left">
                    <a href="#services" className="hover:text-red-200">Services</a>
                    <a href="#products" className="hover:text-red-200">Products</a>
                    <a href="#contact" className="hover:text-red-200">Contact</a>
                    <div className="relative">
                        <ShoppingCart className="cursor-pointer"/>
                        {cartItems.length > 0 && (
                            <span
                                className="absolute -top-2 -right-2 bg-white text-red-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;