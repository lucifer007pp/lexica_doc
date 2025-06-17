import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hyperspeed from "../../Reactbits/Hyperspeed/Hyperspeed.jsx";
import logo from '../assets/logo.png'; // Add your logo image to public/assets or src/assets

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col min-h-screen overflow-hidden bg-black text-white">
            {/* Hyperspeed Background */}
            <div className="absolute inset-0 z-0">
                <Hyperspeed
                    effectOptions={{
                        onSpeedUp: () => { },
                        onSlowDown: () => { },
                        distortion: 'turbulentDistortion',
                        length: 400,
                        roadWidth: 10,
                        islandWidth: 2,
                        lanesPerRoad: 4,
                        fov: 90,
                        fovSpeedUp: 150,
                        speedUp: 2,
                        carLightsFade: 0.4,
                        totalSideLightSticks: 20,
                        lightPairsPerRoadWay: 40,
                        shoulderLinesWidthPercentage: 0.05,
                        brokenLinesWidthPercentage: 0.1,
                        brokenLinesLengthPercentage: 0.5,
                        lightStickWidth: [0.12, 0.5],
                        lightStickHeight: [1.3, 1.7],
                        movingAwaySpeed: [60, 80],
                        movingCloserSpeed: [-120, -160],
                        carLightsLength: [400 * 0.03, 400 * 0.2],
                        carLightsRadius: [0.05, 0.14],
                        carWidthPercentage: [0.3, 0.5],
                        carShiftX: [-0.8, 0.8],
                        carFloorSeparation: [0, 5],
                        colors: {
                            roadColor: 0x080808,
                            islandColor: 0x0a0a0a,
                            background: 0x000000,
                            shoulderLines: 0xFFFFFF,
                            brokenLines: 0xFFFFFF,
                            leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                            rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                            sticks: 0x03B3C3,
                        }
                    }}
                />
            </div>

            {/* Logo */}
            <div className="absolute top-6 left-6 z-20 flex items-center space-x-3">
                <img src={logo} alt="Logo" className="w-10 h-10 rounded-full shadow-lg" />
                <h2 className="text-xl font-bold text-white drop-shadow">Lexica-Learn Space</h2>
            </div>

            {/* Main content */}
            <main className="relative z-10 flex-grow flex items-center justify-center px-4">
                <div className="bg-white/10 dark:bg-black/30 backdrop-blur-sm border border-white/10 shadow-2xl p-10 rounded-3xl max-w-2xl w-full transition transform hover:scale-[1.01]">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                        Welcome to <span className="text-blue-400">Lexica-Learn Space</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                        A fun and interactive way for kids to learn coding — visually, intuitively, and with adventure.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => navigate('/docs')}
                            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl group"
                        >
                            <span
                                className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></span>
                            <span className="relative z-10 flex items-center gap-2">
      🚀 Get Started
      <svg
          className="w-5 h-5 transition-transform transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
    </span>
                        </button>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer
                className="relative z-10 text-gray-400 text-sm py-5 text-center border-t border-white/10 bg-black/40 backdrop-blur-md">
                © 2025 Lexica. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;
