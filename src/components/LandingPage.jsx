import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-orange-950 to-gray-900 flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Floating Petals Animation */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-70 animate-float shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Sparkles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute text-yellow-300 text-xl animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          ✨
        </div>
      ))}

      {/* Main Content */}
      <div className={`text-center z-10 px-4 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Marigold Flowers with Enhanced Animation */}
        <div className="flex justify-center gap-8 mb-12 animate-bounceIn">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`${i === 1 ? 'w-24 h-24' : 'w-20 h-20'} rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 shadow-2xl animate-pulse relative`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Inner petals effect */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 opacity-60"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-200 to-orange-400 opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Diya with Multiple Flames */}
        <div className="mb-12 animate-scaleIn">
          <div className="relative inline-block">
            {/* Glow effect behind diya */}
            <div className="absolute inset-0 bg-orange-400 blur-3xl opacity-50 animate-pulse"></div>
            
            {/* Main Diya */}
            <div className="relative w-40 h-40 mx-auto bg-gradient-to-t from-orange-900 via-orange-700 to-orange-600 rounded-b-full shadow-2xl">
              {/* Decorative pattern on diya */}
              <div className="absolute inset-x-0 bottom-4 h-1 bg-yellow-400 opacity-60"></div>
              <div className="absolute inset-x-4 bottom-8 h-1 bg-yellow-400 opacity-40"></div>
              
              {/* Main Flame */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-16 bg-gradient-to-t from-orange-600 via-yellow-400 to-yellow-100 rounded-full animate-flicker blur-sm"></div>
                <div className="absolute inset-0 w-10 h-16 bg-gradient-to-t from-orange-500 via-yellow-300 to-white rounded-full animate-flicker"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gradient-to-t from-yellow-400 to-white rounded-full opacity-80 animate-flicker" style={{ animationDelay: '0.15s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Title with Gradient Animation */}
        <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-400 mb-6 animate-slideDown drop-shadow-2xl">
          Happy Diwali
        </h1>

        {/* Subtitle with Better Spacing */}
        <p className="text-2xl md:text-3xl text-orange-100 mb-4 animate-slideUp font-light tracking-wide">
          May this festival of lights
        </p>
        <p className="text-2xl md:text-3xl text-yellow-200 mb-8 animate-slideUp font-light tracking-wide" style={{ animationDelay: '0.1s' }}>
          brighten your life with joy and prosperity
        </p>

        {/* From: Harsh Dixit */}
        <div className="mb-12 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-orange-200/80 font-light italic">
            From: <span className="text-yellow-300 font-semibold not-italic">Harsh Dixit</span>
          </p>
        </div>

        {/* Enhanced CTA Button with Ripple Effect */}
        <button
          onClick={() => navigate('/wishes')}
          className="group relative px-12 py-6 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white text-2xl font-bold rounded-full shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-orange-500/60 animate-bounceIn overflow-hidden"
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <span className="relative z-10 flex items-center gap-3">
            Click Here to See Your Wishes
            <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">✨</span>
          </span>
        </button>

        {/* Decorative Dots */}
        <div className="mt-16 flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full animate-twinkle shadow-lg"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Rotating Rangoli Patterns */}
      <div className="absolute bottom-10 left-10 w-48 h-48 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute inset-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
      </div>
      
      <div className="absolute top-10 right-10 w-48 h-48 opacity-20" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute inset-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  );
};

export default LandingPage;
