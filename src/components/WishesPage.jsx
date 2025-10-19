import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WishesPage = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const friends = [
    {
      id: 1,
      name: "Divik",
      photo: "/images/friend1.jpg",
      message: " HAPPY DIWALI to you and your family ! May this diwali bring you great coding skills and may you get great results of your hardwork",
      cardType: "diya",
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 2,
      name: "Hardik",
      photo: "/images/friend2.jpg",
      message: " HAPPY DIWALI to you and your family ! May this diwali our bond gets stronger and you achieve great heights",
      cardType: "rangoli",
      color: "from-pink-500 to-purple-600"
    },
    {
      id: 3,
      name: "Ansh",
      photo: "/images/friend3.jpg",
      message: " HAPPY DIWALI to you and your family ! May your chatgpt keeps giving you ZIP folder and this diwali may u get some fine shytts",
      cardType: "diya",
      color: "from-blue-400 to-teal-500"
    },
    {
      id: 4,
      name: "Aditya",
      photo: "/images/friend4.jpg",
      message: " HAPPY DIWALI to you and your family ! May this diwali that katori ladki loves u back and gives you a bj",
      cardType: "rangoli",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 5,
      name: "Arnav",
      photo: "/images/friend5.jpg",
      message: " HAPPY DIWALI to you and your family ! May this diwali get u some muscles",
      cardType: "peacock",
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      name: "Aarushi",
      photo: "/images/friend6.jpg",
      message: " HAPPY DIWALI to you and your family ! May this diwali bring  prosperity and happiness in your life and u get some emotions 😍",
      cardType: "diya",
      color: "from-rose-400 to-pink-600"
    },
    {
      id: 7,
      name: "Aradhya",
      photo: "/images/friend7.jpg",
      message: " HAPPY DIWALI to you and your family ! May this Diwali bring the more happiness and joy to your life and Please say yes to Hardik😊",
      cardType: "rangoli",
      color: "from-green-400 to-emerald-600"
    },
    {
      id: 8,
      name: "Ashi",
      photo: "/images/friend8.jpg",
      message: " HAPPY DIWALI to you and your family ! May this Diwali bring more happiness and joy to your life and may you always stay crazy and fun ❤️",
      cardType: "peacock",
      color: "from-amber-400 to-orange-600"
    },
    {
      id: 9,
      name: "Arpita",
      photo: "/images/friend9.jpg",
      message: " HAPPY DIWALI to you and your family ! May this Diwali bring more happiness and joy to your life dishwasher and may u get a husband soon 😂",
      cardType: "diya",
      color: "from-cyan-400 to-blue-600"
    },
  ];

  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 py-16 px-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Marigolds with Enhanced Animation */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 opacity-20 animate-float shadow-xl"
          style={{
            width: `${40 + Math.random() * 20}px`,
            height: `${40 + Math.random() * 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 opacity-60"></div>
        </div>
      ))}

      {/* Floating Petals */}
      {[...Array(40)].map((_, i) => (
        <div
          key={`petal-${i}`}
          className="absolute w-2 h-3 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full opacity-40 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        />
      ))}

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-8 left-8 z-50 px-6 py-3 bg-orange-500/20 backdrop-blur-md text-orange-200 rounded-full hover:bg-orange-500/40 transition-all duration-300 hover:scale-110 border border-orange-400/30 shadow-lg"
      >
        ← Back
      </button>

      {/* Enhanced Header */}
      <div className="text-center mb-20 animate-fadeIn relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-400 mb-6 drop-shadow-2xl">
          Diwali Wishes
        </h1>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-400"></div>
          <p className="text-2xl text-orange-200 font-light">
            Click on a card to reveal your personalized message
          </p>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
        </div>
        <p className="text-xl text-yellow-300 animate-pulse">✨ ✨ ✨</p>
      </div>

      {/* Enhanced Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {friends.map((friend, index) => (
          <div
            key={friend.id}
            className="perspective-1000 animate-cardFadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredCard(friend.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`relative w-full h-[420px] cursor-pointer transition-all duration-700 transform-style-3d ${
                flippedCard === friend.id ? 'rotate-y-180' : ''
              } ${hoveredCard === friend.id && flippedCard !== friend.id ? 'scale-105' : ''}`}
              onClick={() => handleCardClick(friend.id)}
            >
              {/* Front of Card - Enhanced */}
              <div className="absolute inset-0 backface-hidden rounded-3xl shadow-2xl overflow-hidden group">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${friend.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                
                <div className={`relative w-full h-full bg-gradient-to-br ${friend.color} p-8 flex flex-col items-center justify-center transition-all duration-500`}>
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-500"></div>

                  {/* Decorative Elements Based on Card Type */}
                  {friend.cardType === 'diya' && (
                    <div className="mb-8 relative">
                      <div className="absolute inset-0 bg-orange-300 blur-2xl opacity-40 animate-pulse"></div>
                      <div className="relative w-28 h-28 bg-gradient-to-t from-orange-900 via-orange-700 to-orange-600 rounded-b-full shadow-2xl">
                        <div className="absolute inset-x-0 bottom-3 h-1 bg-yellow-400 opacity-60"></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-14 bg-gradient-to-t from-orange-600 via-yellow-400 to-yellow-100 rounded-full animate-flicker blur-sm"></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-14 bg-gradient-to-t from-orange-500 via-yellow-300 to-white rounded-full animate-flicker"></div>
                      </div>
                    </div>
                  )}
                  
                  {friend.cardType === 'rangoli' && (
                    <div className="mb-8 relative w-36 h-36">
                      <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-spin-slow"></div>
                      <div className="absolute inset-3 bg-yellow-300 rounded-full opacity-30 animate-spin-slow" style={{ animationDelay: '0.5s', animationDirection: 'reverse' }}></div>
                      <div className="absolute inset-6 bg-pink-400 rounded-full opacity-40 animate-spin-slow" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute inset-10 bg-purple-500 rounded-full opacity-50 animate-spin-slow" style={{ animationDelay: '1.5s', animationDirection: 'reverse' }}></div>
                    </div>
                  )}

                  {friend.cardType === 'peacock' && (
                    <div className="mb-8 relative">
                      <div className="w-36 h-36 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-50 animate-pulse"></div>
                        <div className="absolute inset-3 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                        <div className="absolute inset-6 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full opacity-90 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                      </div>
                    </div>
                  )}

                  <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    Happy Diwali
                  </h2>
                  <p className="text-2xl text-white/95 font-semibold tracking-wide">
                    {friend.name}
                  </p>

                  {/* Enhanced Sparkles */}
                  <div className="absolute top-6 right-6 text-yellow-200 text-3xl animate-twinkle drop-shadow-lg">✨</div>
                  <div className="absolute bottom-6 left-6 text-yellow-200 text-3xl animate-twinkle drop-shadow-lg" style={{ animationDelay: '0.5s' }}>✨</div>
                  <div className="absolute top-6 left-6 text-yellow-300 text-2xl animate-twinkle drop-shadow-lg" style={{ animationDelay: '0.8s' }}>⭐</div>
                  <div className="absolute bottom-6 right-6 text-yellow-300 text-2xl animate-twinkle drop-shadow-lg" style={{ animationDelay: '1.2s' }}>⭐</div>

                  {/* Enhanced Hover Hint */}
                  <div className="mt-10 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    Click to reveal message
                  </div>
                </div>
              </div>

              {/* Back of Card - Enhanced */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl shadow-2xl overflow-hidden">
                <div className={`relative w-full h-full bg-gradient-to-br ${friend.color} p-8 flex flex-col items-center justify-center`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-32 h-32 border border-white rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `float ${5 + i}s ease-in-out infinite`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Enhanced Photo Frame */}
                  <div className="mb-8 relative z-10">
                    <div className="absolute inset-0 bg-yellow-300 blur-2xl opacity-50 animate-pulse"></div>
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-yellow-300 shadow-2xl ring-4 ring-white/30">
                      <img
                        src={friend.photo}
                        alt={friend.name}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${friend.name}&size=144&background=random`;
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-4xl font-bold text-white mb-6 drop-shadow-xl z-10">
                    {friend.name}
                  </h3>

                  <p className="text-center text-white text-lg leading-relaxed px-6 drop-shadow-lg z-10 max-w-md">
                    {friend.message}
                  </p>

                  {/* Enhanced Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-yellow-300 rounded-tl-3xl opacity-80"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-yellow-300 rounded-tr-3xl opacity-80"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-yellow-300 rounded-bl-3xl opacity-80"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-300 rounded-br-3xl opacity-80"></div>

                  {/* Inner corner accents */}
                  <div className="absolute top-6 left-6 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                  <div className="absolute top-6 right-6 w-3 h-3 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute bottom-6 left-6 w-3 h-3 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Message */}
      <div className="text-center mt-20 animate-fadeIn relative z-10" style={{ animationDelay: '1s' }}>
        <p className="text-orange-200/60 text-lg font-light italic">
          "May the light of Diwali fill your heart with warmth and joy"
        </p>
      </div>
    </div>
  );
};

export default WishesPage;
