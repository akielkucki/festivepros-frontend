import React, {useState, useEffect, useRef} from 'react';
import { ShoppingCart, Star, Phone, Mail, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import './index.css'
import {Link} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductCard from "./components/ProductCard.jsx";


const holidayProducts = [

        {
            id: 1,
            name: 'Starter Bundle',
            price: 350,
            description: '*Includes:* [Christmas Tree], [Garland], [Christmas Lights 5x], [Christmas reef], [Ornaments]'.replaceAll(", ", ""),
            image: '/2.png'
        },
        {
            id: 2,
            name: 'Intermediate Bundle',
            price: 600,
            description: '*Includes:* [Christmas Tree or Real Xmas Tree], [Garland 2x], [Christmas Lights 10x], [Christmas reef], [Ornaments], [Christmas Window Silhouette Lights]'.replaceAll(", ", ""),
            image: '/1.png'
        },
        {
            id: 3,
            name: 'Premium Bundle',
            price: 1500,
            description: '*Includes:* [Christmas Tree] [Garland 3x] [Christmas Lights 20x] [Christmas reef] [Ornaments] [Christmas Window Silhouette Lights] [Multicolor Led Animated Outdoor Christmas Tree] [Christmas Deer Set] [Climbing Santa Claus] [Icicle Christmas Lights]',
            image: '/3.png'
        }
];



const testimonialsData = [
    { id: 1, text: "They transformed our home into a winter wonderland! Highly recommend their service.", author: "Sarah M." },
    { id: 2, text: "Professional setup and stunning decorations. Will use again next year!", author: "James R." },

];

const Home = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [currentProducts, setCurrentProducts] = useState([])
    let startIndex = useRef(0);
    const elementRef = useRef(null);
    const [productsIsVisible, setProductsIsVisible] = useState(false);
    const [mouseOverImage, setMouseOverImage] = useState(false);
    useEffect(() => {
        // Initialize AOS
        if (typeof window !== 'undefined') {

            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        }
        // eslint-disable-next-line no-unused-vars
        const handleScroll = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                if (rect.top >= 0 && rect.left >= 0
                    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                    setProductsIsVisible(!productsIsVisible);
                }
                window.addEventListener('scroll', handleScroll);
                handleScroll();

                return () => window.removeEventListener('scroll', handleScroll);
            }
        }
    }, []);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);

    };
    function findNextIndex(description, parts) {
        const result = [];

        // Process parts and wrap each in <li> tags
        for (let s of parts) {
            const formattedPart = processPart(s);
            result.push(`<li>${formattedPart}</li>`);
        }

        return `<ul>${result.join('')}</ul>`;
    }
    function processPart(part) {
        let inBold = false;
        const processed = [];
        for (let i = 0; i < part.length; i++) {
            if (part[i] === '*' && !inBold) {
                processed.push("<b>");
                inBold = true;
            } else if (part[i] === '*' && inBold) {
                processed.push("</b>");
                inBold = false;
            } else {
                processed.push(part[i]);
            }
        }
        return processed.join('');
    }
    function setRotatedProducts(startIndex, count) {
        // Check if holidayProducts is valid
        if (!holidayProducts || holidayProducts.length === 0) {
            console.error("No products available!");
            return;
        }

        const products = [];
        for (let i = 0; i < count; i++) {
            const safeIndex = (startIndex + i) % holidayProducts.length; // Wrap index
            let description = holidayProducts[safeIndex].description;



            if (!description.includes('<ul>')) {

                const parts = description.split(/\[|\]/).filter(Boolean);
                description = findNextIndex(description, parts);
            }
            products.push({
                ...holidayProducts[safeIndex],
                description,
            });

        }
        setCurrentProducts(products);
    }

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };
    useEffect(() => {
        setRotatedProducts(startIndex.current, 3);
        let interval = setInterval(() => {
            setRotatedProducts(startIndex.current, 3);
            startIndex.current += 3;
        },7000);
        return () => clearInterval(interval);

    }, [holidayProducts]);



    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}

            <Navbar cartItems={cartItems}/>

            {/* Hero Section */}
            <Hero/>

            {/* Services Section */}
            <section id="services" className="py-16 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-xl font-bold mb-4">Tree Setup & Decoration</h3>
                        <p>Professional installation and decoration of your Christmas tree, including lights and ornaments.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-xl font-bold mb-4">Exterior Lighting</h3>
                        <p>Custom outdoor lighting design and installation for your home&#39;s exterior and landscape.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-xl font-bold mb-4">Interior Decoration</h3>
                        <p>Complete indoor holiday decoration services, from garlands to window displays.</p>
                    </div>
                </div>
            </section>

            {/* Checkout Section */}
            <section id="products" ref={elementRef} className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Packages </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {currentProducts.map((product, index) => (
                            <ProductCard
                                key={product.id} // Changed from index to product.id for better React key handling
                                product={product}
                                onAddToCart={addToCart}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">What Our Clients Say</h2>
                <div
                    className="relative bg-white p-8 rounded-lg shadow-md"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="text-center px-12">
                        <div className="flex justify-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <p className="text-lg mb-4">{testimonialsData[currentTestimonial].text}</p>
                        <p className="font-bold">- {testimonialsData[currentTestimonial].author}</p>
                    </div>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-red-700 text-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Contact Us</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div data-aos="fade-right">
                            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                            <div className="flex items-center gap-3 mb-4">
                                <Phone className="w-5 h-5" />
                                <span>(267) 962-9559</span>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <Mail className="w-5 h-5" />
                                <span>info@festivedecorpro.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="w-5 h-5" />
                                <span>Available 7 days a week, 9AM-7PM</span>
                            </div>
                        </div>
                        <form className="space-y-4" data-aos="fade-left">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded text-gray-800"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 rounded text-gray-800"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-3 rounded text-gray-800"
                            ></textarea>
                            <button className="bg-white text-red-700 px-6 py-3 rounded hover:bg-gray-100 transition">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p>&copy; 2024 Festive Decor Pro. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;