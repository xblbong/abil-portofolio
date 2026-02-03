"use client";
import { motion } from "framer-motion";
import Lanyard from "../../canvas/Lanyard";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-black">
            {/* Efek Warna Background (Boom Effect) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full -ml-48 -mb-48" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* SISI KIRI: LANYARD 3D */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-puple-500/20 blur-3xl rounded-full scale-75" />
                        <Lanyard />
                        <p className="text-center text-xs text-gray-500 italic mt-4 animate-pulse">
                            *Try dragging my ID card!
                        </p>
                    </motion.div>

                    {/* SISI KANAN: STORY (COPYWRITING) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold tracking-[0.4em] text-purple-400 uppercase">
                                About Me
                            </h2>
                            <h3 className="text-5xl md:text-7xl font-black italic text-white leading-none capitalize">
                                beyond <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-puple-500 to-blue-400">
                                    the code.
                                </span>
                            </h3>
                        </div>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                            <p>
                                Hi, I’m <span className="text-white font-semibold">Sabilah Mudrikah</span> based in Indonesia, specializing in building high-performance, responsive websites using <span className="text-white font-semibold">React, Next.js, and Tailwind CSS</span>. The focus is on delivering digital products where technical precision meets thoughtful design, ensuring every interface is not only functional but also intuitive and visually polished to meet modern user standards.
                            </p>

                            <p>
                              Background in <span className="text-white font-semibold">photography and video editing</span> provides a sharper eye for layout, motion, and visual hierarchy, allowing for a more holistic approach to web development. This multidisciplinary perspective enables fast iteration and seamless collaboration in fast-paced environments, bridging the gap between technical logic and compelling aesthetics to create meaningful digital experiences.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 px-10 py-4 bg-gradient-to-r from-purple-600 to-puple-600 rounded-full text-white font-bold shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all capitalize tracking-widest text-sm"
                            >
                                Let’s work together!
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}