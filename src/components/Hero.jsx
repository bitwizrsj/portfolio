import React from 'react';
import Navbar from './Navbar';  // Import Navbar component

export default function Hero() {
    return (
        <div>

            <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="relative">
                        <div className="lg:w-2/3">
                            <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
                                HI THERE, I’M <span className='font-bold text-yellow-400'>BITWIZ RSJ,</span> A FULL STACK DEVELOPER 
                            </p>
                            <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                                    I create websites
                                </span>{' '}
                                Inspiration
                            </h1>
                            <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                            I'm passionate about creating innovative and responsive websites. With experience in both front-end and back-end development, I build seamless digital experiences that look great and perform well across all devices.
                            </p>
                            <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                <a
                                    href="#"
                                    title=""
                                    className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                                    role="button"
                                >
                                    Start Exploring Inspiration
                                </a>
                            </div>

                            <div>
                                <hr className="w-1/2 mt-8 border-gray-700" />
                            </div>
                        </div>

                        <div className="mt-8 h-full  md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0 flex justify-center items-center">
                            {/* Spline Embed */}
                            <iframe src='https://my.spline.design/robotfollowcursorforlandingpage-GYBobiXuD6CYa3kjuf7VgsMY/' frameborder='0' width='100%' height='100%'></iframe>                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
