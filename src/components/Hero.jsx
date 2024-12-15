import React from "react";

const Hero = () => {
    return (
        <div
            className="bg-[url('https://images.squarespace-cdn.com/content/v1/62ef9f333b26b24f053c9aa0/d5f9e2e3-b777-4417-800d-0c6be4d55c75/Top+5+Interior+Designer-Approved+Christmas+Decoration+Ideas+For+Your+Charlotte+Home')] bg-cover bg-center h-screen">
            <div className="h-full bg-black bg-opacity-50 flex items-center justify-center text-center pt-16">
                <div className="text-white max-w-3xl p-8">
                    <h1 className="text-5xl font-bold mb-4" data-aos="fade-down">Transform Your Home for the
                        Holidays</h1>
                    <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">Professional Christmas
                        decoration services and premium products</p>
                    <button
                        className="bg-red-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-800 transition"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )

}
export default Hero;