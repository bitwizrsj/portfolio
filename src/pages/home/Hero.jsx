import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Hero() {
    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const el = document.getElementById('contact');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, [location]);

    return (
        <div>
            <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="lg:w-2/3">
                            <motion.p
                                className="text-sm font-normal tracking-widest text-gray-300 uppercase"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                HI THERE, I’M <span className='font-bold text-yellow-400'>BITWIZ RSJ,</span> A FULL STACK DEVELOPER 
                            </motion.p>

                            <motion.h1
                                className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                                    I create websites
                                </span>{' '}
                                Inspiration
                            </motion.h1>

                            <motion.p
                                className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                I'm passionate about creating innovative and responsive websites. With experience in both front-end and back-end development, I build seamless digital experiences that look great and perform well across all devices.
                            </motion.p>

                            <div className="mt-8 sm:mt-12 flex gap-4">
  {/* Contact Me Button */}
  <div className="relative inline-flex items-center justify-center group">
    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
    <a
      href="#contact"
      className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"      role="button"
    >
      Contact Me
    </a>
  </div>

  {/* Resume Button */}
  <div className="relative inline-flex items-center justify-center group">
    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-green-400 to-blue-600 group-hover:shadow-lg group-hover:shadow-green-500/50"></div>
    <a
      href="#"
      className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
      role="button"
    >
      Resume
    </a>
  </div>
</div>


                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '50%' }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                <hr className="mt-8 border-gray-700" />
                            </motion.div>
                        </div>

                        <motion.div
                            className="mt-8 h-full md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0 flex justify-center items-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <iframe
                                src='https://my.spline.design/robotfollowcursorforlandingpage-GYBobiXuD6CYa3kjuf7VgsMY/'
                                frameBorder='0'
                                width='100%'
                                height='100%'
                            ></iframe>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
