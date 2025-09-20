import { useState, useEffect } from 'react';
import { Mail, Calendar, Heart, Users, MapPin, Clock, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  // Wedding date - 6 months from now
  const weddingDate = new Date();
  weddingDate.setMonth(weddingDate.getMonth() + 6);
  
  // Calculate time until wedding
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [weddingDate]);

  // Floating hearts animation
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.innerHTML = '❤';
      heart.className = 'floating-heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 3 + 2 + 's';
      heart.style.opacity = Math.random() * 0.5 + 0.5 + '';
      heart.style.fontSize = Math.random() * 20 + 10 + 'px';
      
      document.body.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 5000);
    };
    
    const heartInterval = setInterval(createHeart, 300);
    
    return () => clearInterval(heartInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 flex flex-col relative overflow-hidden">
      {/* Floating hearts */}
      <style>{`
        .floating-heart {
          position: absolute;
          top: 100%;
          animation: floatUp linear forwards;
          z-index: 0;
        }
        @keyframes floatUp {
          to {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
      `}</style>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-rose-200/30 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-pink-200/30 blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-rose-300/20 blur-xl"></div>
      
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-serif font-bold text-rose-800 flex items-center"
          >
            <Heart className="w-8 h-8 mr-2 text-rose-500" />
            Sarah & Michael
          </motion.div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#details" className="text-rose-700 hover:text-rose-900 transition-colors font-medium">Details</a></li>
              <li><a href="#rsvp" className="text-rose-700 hover:text-rose-900 transition-colors font-medium">RSVP</a></li>
              <li><a href="#gallery" className="text-rose-700 hover:text-rose-900 transition-colors font-medium">Gallery</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <Heart className="w-16 h-16 text-rose-400 mx-auto" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-rose-900 mb-6"
          >
            Sarah <span className="text-rose-500">&</span> Michael
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl text-rose-700 mb-4 font-light"
          >
            Are Getting Married
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center space-x-3 text-rose-600 mb-16"
          >
            <Calendar className="w-6 h-6" />
            <span className="text-xl font-medium">
              {weddingDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </motion.div>
          
          {/* Countdown */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-xl max-w-3xl mx-auto border border-rose-100"
          >
            <h2 className="text-2xl font-semibold text-rose-800 mb-6">Counting Down to Our Big Day</h2>
            <div className="flex justify-center space-x-4 md:space-x-8">
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-3 shadow-md border border-rose-50">
                  <span className="text-2xl md:text-3xl font-bold text-rose-700">{timeLeft.days}</span>
                </div>
                <span className="text-sm md:text-base text-rose-600 font-medium">Days</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-3 shadow-md border border-rose-50">
                  <span className="text-2xl md:text-3xl font-bold text-rose-700">{timeLeft.hours.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-sm md:text-base text-rose-600 font-medium">Hours</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-3 shadow-md border border-rose-50">
                  <span className="text-2xl md:text-3xl font-bold text-rose-700">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-sm md:text-base text-rose-600 font-medium">Minutes</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-3 shadow-md border border-rose-50">
                  <span className="text-2xl md:text-3xl font-bold text-rose-700">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-sm md:text-base text-rose-600 font-medium">Seconds</span>
              </div>
            </div>
          </motion.div>
          
          {/* RSVP Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            id="rsvp" className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto mb-16 border border-rose-100"
          >
            <h2 className="text-3xl font-semibold text-rose-800 mb-4">Be the First to Know</h2>
            <p className="text-rose-600 mb-8 text-lg">Sign up to receive updates and save the date!</p>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-6 text-lg"
              >
                Thank you! We'll keep you updated.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-rose-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent text-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300 text-lg"
                >
                  Notify Me
                </button>
              </form>
            )}
          </motion.div>
          
          {/* Wedding Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            id="details" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold text-rose-800 mb-4">Venue</h3>
              <p className="text-rose-600 mb-2 font-medium">Sunset Gardens</p>
              <p className="text-rose-600 mb-2">123 Romance Lane</p>
              <p className="text-rose-600">Napa Valley, CA</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold text-rose-800 mb-4">Time</h3>
              <p className="text-rose-600 mb-2 font-medium">Ceremony: 4:00 PM</p>
              <p className="text-rose-600 mb-2">Reception: 6:00 PM</p>
              <p className="text-rose-600">Cocktail Hour: 5:00 PM</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold text-rose-800 mb-4">Dress Code</h3>
              <p className="text-rose-600 mb-2 font-medium">Formal</p>
              <p className="text-rose-600 mb-2">Black Tie Optional</p>
              <p className="text-rose-600">Garden Chic</p>
            </div>
          </motion.div>
          
          {/* Gallery Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            id="gallery" className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-semibold text-rose-800 mb-8">Our Love Story</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center text-rose-300">
                    <Camera className="w-8 h-8" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-rose-600 relative z-10">
        <p className="mb-4 text-lg">We can't wait to celebrate with you!</p>
        <p className="text-sm">© {new Date().getFullYear()} Sarah & Michael. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;