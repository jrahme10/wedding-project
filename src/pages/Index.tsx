import { useState } from 'react';
import { Mail, Calendar, Heart, Users, MapPin, Clock } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  
  // Calculate days until wedding
  const daysUntilWedding = Math.ceil(
    (weddingDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-rose-800">
            &</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#details" className="text-rose-700 hover:text-rose-900 transition-colors">Details</a></li>
              <li><a href="#rsvp" className="text-rose-700 hover:text-rose-900 transition-colors">RSVP</a></li>
              <li><a href="#gallery" className="text-rose-700 hover:text-rose-900 transition-colors">Gallery</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center">
        <div className="max-w-4xl">
          <div className="mb-6">
            <Heart className="w-12 h-12 text-rose-500 mx-auto" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-rose-900 mb-4">
            Sarah <span className="text-rose-500">&</span> Michael
          </h1>
          
          <p className="text-xl md:text-2xl text-rose-700 mb-2">
            Are Getting Married
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-rose-600 mb-10">
            <Calendar className="w-5 h-5" />
            <span className="text-lg font-medium">
              {weddingDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          
          {/* Countdown */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-10 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-rose-800 mb-4">Counting Down to Our Big Day</h2>
            <div className="flex justify-center space-x-4 md:space-x-8">
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-rose-100 flex items-center justify-center mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-rose-700">{daysUntilWedding}</span>
                </div>
                <span className="text-sm md:text-base text-rose-600">Days</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-rose-100 flex items-center justify-center mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-rose-700">00</span>
                </div>
                <span className="text-sm md:text-base text-rose-600">Hours</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-rose-100 flex items-center justify-center mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-rose-700">00</span>
                </div>
                <span className="text-sm md:text-base text-rose-600">Minutes</span>
              </div>
            </div>
          </div>
          
          {/* RSVP Form */}
          <div id="rsvp" className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold text-rose-800 mb-4">Be the First to Know</h2>
            <p className="text-rose-600 mb-6">Sign up to receive updates and save the date!</p>
            
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you! We'll keep you updated.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
          
          {/* Wedding Details */}
          <div id="details" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-rose-800 mb-2">Venue</h3>
              <p className="text-rose-600">Sunset Gardens</p>
              <p className="text-rose-600">123 Romance Lane</p>
              <p className="text-rose-600">Napa Valley, CA</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-rose-800 mb-2">Time</h3>
              <p className="text-rose-600">Ceremony: 4:00 PM</p>
              <p className="text-rose-600">Reception: 6:00 PM</p>
              <p className="text-rose-600">Cocktail Hour: 5:00 PM</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-rose-800 mb-2">Dress Code</h3>
              <p className="text-rose-600">Formal</p>
              <p className="text-rose-600">Black Tie Optional</p>
              <p className="text-rose-600">Garden Chic</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-rose-600">
        <p className="mb-2">We can't wait to celebrate with you!</p>
        <p className="text-sm">© {new Date().getFullYear()} Sarah & Michael. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;