import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionPage = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [matchedFriend, setMatchedFriend] = useState(null);
  const navigate = useNavigate();

  // Friend data with relationship keywords
  const friends = [
    {
    id: 0,
    name: "Harsh",
    photo: "/images/friend0.jpg",
    message: "A very happy diwali to you and your family may you keep doing good work, find success and stay happy forever! 💖💖 \n\n- from the whole friend group",
    cardType: "diya",
    color: "from-orange-400 to-red-600",
    keywords: ["myself", "me", "harsh", "creator", "owner"]
  },
    
    
    {
       
      id: 1,
      name: "Divik",
      photo: "/images/friend1.jpg",
      message: "May this diwali bring you great coding skills and may you get great results of your hardwork",
      cardType: "diya",
      color: "from-orange-400 to-orange-600",
      keywords: ["rand", "Rand", "icpussy", "ICPUSSY"]
    },
    {
      id: 2,
      name: "Hardik",
      photo: "/images/friend2.jpg",
      message: "May this diwali our bond gets stronger and you achieve great heights",
      cardType: "rangoli",
      color: "from-pink-500 to-purple-600",
      keywords: ["son", "yashpal ke beta", "bhai", "bestie"]
    },
    {
      id: 3,
      name: "Ansh",
      photo: "/images/friend3.jpg",
      message: "May your chatgpt keeps giving you ZIP folder and this diwali may u get some fine shytts",
      cardType: "diya",
      color: "from-blue-400 to-teal-500",
      keywords: ["physical", "Randi", , "chudakad"]
    },
    {
      id: 4,
      name: "Aditya",
      photo: "/images/friend4.jpg",
      message: "May this diwali that katori ladki loves u back and gives you a bj",
      cardType: "rangoli",
      color: "from-yellow-400 to-orange-500",
      keywords: ["katori ladki ka aashiq", "sexual", "father and son"]
    },
    {
      id: 5,
      name: "Arnav",
      photo: "/images/friend5.jpg",
      message: "May this diwali get u some muscles",
      cardType: "peacock",
      color: "from-indigo-500 to-purple-600",
      keywords: [ "brotherhood"]
    },
    {
      id: 6,
      name: "Aarushi",
      photo: "/images/friend6.jpg",
      message: "May this diwali bring u 'sadboodhi' along with prosperity and happiness and u get some help😍",
      cardType: "diya",
      color: "from-rose-400 to-pink-600",
      keywords: ["pati"]
    },
    {
      id: 7,
      name: "Aradhya",
      photo: "/images/friend7.jpg",
      message: "May this Diwali bring the more happiness and joy to your life and Please say yes to Hardik😊",
      cardType: "rangoli",
      color: "from-green-400 to-emerald-600",
      keywords: ["hone_wala_pati"]
    },
    {
      id: 8,
      name: "Ashi",
      photo: "/images/friend8.jpg",
      message: "May this Diwali bring more happiness and joy to your life and may you always stay crazy and fun ❤️",
      cardType: "peacock",
      color: "from-amber-400 to-orange-600",
      keywords: ["girlfriend"]
    },
    {
      id: 9,
      name: "Arpita",
      photo: "/images/friend9.jpg",
      message: "May this Diwali bring more happiness and joy to your life dishwasher and may u get a husband soon 😂",
      cardType: "diya",
      color: "from-cyan-400 to-blue-600",
      keywords: ["dishwasher", "marriage seeker", "future bride", "household helper","ho chuka pati"]
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const normalizedAnswer = answer.toLowerCase().trim();
    
    // Check if answer matches any friend's keywords
    const friend = friends.find(f => 
      f.keywords.some(keyword => normalizedAnswer.includes(keyword.toLowerCase()))
    );

    if (friend) {
      setMatchedFriend(friend);
      setShowCard(true);
      setError('');
    } else {
      setError('Hmm, that doesn\'t match anyone! Try again 🤔');
      setAnswer('');
    }
  };

  const handleReset = () => {
    setShowCard(false);
    setMatchedFriend(null);
    setAnswer('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Petals */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
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

      {/* Main Content */}
      {!showCard ? (
        <div className="max-w-2xl w-full z-10 animate-fadeIn">
          <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-orange-400/20">
            {/* Question Header */}
            <div className="text-center mb-10">
              <div className="text-6xl mb-6 animate-bounce">🪔</div>
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-400 mb-4">
                Find Your Diwali Wish
              </h1>
              <p className="text-xl text-orange-200 font-light">
                Answer the question below to unlock your personalized message
              </p>
            </div>

            {/* Question */}
            <div className="mb-8">
              <div className="bg-orange-500/5 rounded-2xl p-6 border border-orange-400/20">
                <p className="text-2xl text-yellow-200 font-semibold text-center">
                  What's your relationship with Harsh?
                </p>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  className="w-full px-6 py-4 bg-gray-800/50 border-2 border-orange-400/30 rounded-full text-white text-lg placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 transition-all duration-300"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-center">
                  <p className="text-red-400 text-lg animate-pulse">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 hover:from-orange-600 hover:to-orange-700"
              >
                Reveal My Wish ✨
              </button>
            </form>

            {/* Hint */}
            <div className="mt-8 text-center">
              <p className="text-sm text-orange-200/60 italic">
                Hint: Think about how you know Harsh or your connection with him
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Card Display */
        <div className="max-w-md w-full z-10 animate-scaleIn">
          <div className="perspective-1000">
            <div className="relative w-full h-[550px]">
              {/* Card */}
              <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
                <div className={`relative w-full h-full bg-gradient-to-br ${matchedFriend.color} p-8 flex flex-col items-center justify-center`}>
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

                  {/* Success Icon */}
                  <div className="text-6xl mb-6 animate-bounce">🎉</div>

                  {/* Photo Frame */}
                  <div className="mb-8 relative z-10">
                    <div className="absolute inset-0 bg-yellow-300 blur-2xl opacity-50 animate-pulse"></div>
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-yellow-300 shadow-2xl ring-4 ring-white/30">
                      <img
                        src={matchedFriend.photo}
                        alt={matchedFriend.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${matchedFriend.name}&size=144&background=random`;
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-4xl font-bold text-white mb-6 drop-shadow-xl z-10">
                    {matchedFriend.name}
                  </h3>

                  <p className="text-center text-white text-lg leading-relaxed px-6 drop-shadow-lg z-10 max-w-md mb-8">
                    {matchedFriend.message}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 z-10 w-full max-w-xs">
                    <button
                      onClick={handleReset}
                      className="w-full px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30"
                    >
                      Try Another Answer
                    </button>
                    
                    <button
                      onClick={() => navigate('/wishes')}
                      className="w-full px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-500/50 transform hover:scale-105"
                    >
                      View All Wishes 🎉
                    </button>
                  </div>

                  {/* Decorative Corners */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-yellow-300 rounded-tl-3xl opacity-80"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-yellow-300 rounded-tr-3xl opacity-80"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-yellow-300 rounded-bl-3xl opacity-80"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-300 rounded-br-3xl opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
