<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sarah & Michael - Wedding Coming Soon</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        rose: {
                            50: '#fff1f2',
                            100: '#ffe4e6',
                            200: '#fecdd3',
                            300: '#fda4af',
                            400: '#fb7185',
                            500: '#f43f5e',
                            600: '#e11d48',
                            700: '#be123c',
                            800: '#9f1239',
                            900: '#881337',
                        },
                        pink: {
                            50: '#fdf2f8',
                            100: '#fce7f3',
                            200: '#fbcfe8',
                            300: '#f9a8d4',
                            400: '#f472b6',
                            500: '#ec4899',
                            600: '#db2777',
                            700: '#be185d',
                            800: '#9d174d',
                            900: '#831843',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;500&display=swap');
        
        body {
            font-family: 'Roboto', sans-serif;
            overflow-x: hidden;
        }
        
        .font-serif {
            font-family: 'Playfair Display', serif;
        }
        
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
        
        .countdown-number {
            transition: all 0.3s ease;
        }
        
        .countdown-number:hover {
            transform: scale(1.05);
        }
        
        .form-input:focus {
            box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.3);
        }
        
        .btn-primary {
            transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -5px rgba(244, 63, 94, 0.25), 0 8px 10px -6px rgba(244, 63, 94, 0.25);
        }
        
        .detail-card {
            transition: all 0.3s ease;
        }
        
        .detail-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
        
        .gallery-item {
            transition: all 0.3s ease;
        }
        
        .gallery-item:hover {
            transform: scale(1.03);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body class="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 flex flex-col relative overflow-hidden">
    <!-- Floating hearts -->
    <div class="absolute top-20 left-10 w-24 h-24 rounded-full bg-rose-200/30 blur-xl"></div>
    <div class="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-pink-200/30 blur-xl"></div>
    <div class="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-rose-300/20 blur-xl"></div>
    
    <!-- Header -->
    <header class="py-6 px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex justify-between items-center">
            <div class="text-3xl font-serif font-bold text-rose-800 flex items-center">
                <i class="fas fa-heart text-rose-500 mr-2"></i>
                Sarah & Michael
            </div>
            <nav class="hidden md:block">
                <ul class="flex space-x-8">
                    <li><a href="#details" class="text-rose-700 hover:text-rose-900 transition-colors font-medium">Details</a></li>
                    <li><a href="#rsvp" class="text-rose-700 hover:text-rose-900 transition-colors font-medium">RSVP</a></li>
                    <li><a href="#gallery" class="text-rose-700 hover:text-rose-900 transition-colors font-medium">Gallery</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <main class="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center relative z-10">
        <div class="max-w-4xl">
            <div class="mb-8">
                <div class="relative inline-block">
                    <i class="fas fa-heart text-6xl text-rose-400 mx-auto"></i>
                    <div class="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 rounded-full"></div>
                    <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full"></div>
                </div>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-serif font-bold text-rose-900 mb-6">
                Sarah <span class="text-rose-500">&</span> Michael
            </h1>
            
            <p class="text-2xl md:text-3xl text-rose-700 mb-4 font-light">
                Are Getting Married
            </p>
            
            <div class="flex items-center justify-center space-x-3 text-rose-600 mb-16">
                <i class="fas fa-calendar-alt w-6 h-6"></i>
                <span class="text-xl font-medium" id="wedding-date"></span>
            </div>
            
            <!-- Countdown -->
            <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-xl max-w-3xl mx-auto border border-rose-100">
                <h2 class="text-2xl font-semibold text-rose-800 mb-6">Counting Down to Our Big Day</h2>
                <div class="flex justify-center space-x-4 md:space-x-8" id="countdown">
                    <div class="text-center">
                        <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-3 shadow-md border border-rose-50 countdown-number">
                            <span class="text-2xl md:text-3xl font-bold text-rose-700" id="days">00</span>
                        </div>
                        <span class="text-sm md:text-base text-rose-600 font-medium">Days</span>
                    </div>
                    <div class="text-center">
                        <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-3 shadow-md border border-rose-50 countdown-number">
                            <span class="text-2xl md:text-3xl font-bold text-rose-700" id="hours">00</span>
                        </div>
                        <span class="text-sm md:text-base text-rose-600 font-medium">Hours</span>
                    </div>
                    <div class="text-center">
                        <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-3 shadow-md border border-rose-50 countdown-number">
                            <span class="text-2xl md:text-3xl font-bold text-rose-700" id="minutes">00</span>
                        </div>
                        <span class="text-sm md:text-base text-rose-600 font-medium">Minutes</span>
                    </div>
                    <div class="text-center">
                        <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-3 shadow-md border border-rose-50 countdown-number">
                            <span class="text-2xl md:text-3xl font-bold text-rose-700" id="seconds">00</span>
                        </div>
                        <span class="text-sm md:text-base text-rose-600 font-medium">Seconds</span>
                    </div>
                </div>
            </div>
            
            <!-- RSVP Form -->
            <div id="rsvp" class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto mb-16 border border-rose-100">
                <h2 class="text-3xl font-semibold text-rose-800 mb-4">Be the First to Know</h2>
                <p class="text-rose-600 mb-8 text-lg">Sign up to receive updates and save the date!</p>
                
                <div id="form-message" class="hidden bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-6 text-lg">
                    Thank you! We'll keep you updated.
                </div>
                
                <form id="rsvp-form" class="flex flex-col sm:flex-row gap-4">
                    <div class="flex-grow relative">
                        <i class="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-rose-400"></i>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email address"
                            class="w-full pl-12 pr-4 py-4 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent text-lg form-input"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        class="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all shadow-lg btn-primary text-lg"
                    >
                        Notify Me
                    </button>
                </form>
            </div>
            
            <!-- Wedding Details -->
            <div id="details" class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose-100 detail-card">
                    <div class="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-map-marker-alt w-8 h-8 text-rose-600"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-rose-800 mb-4">Venue</h3>
                    <p class="text-rose-600 mb-2 font-medium">Sunset Gardens</p>
                    <p class="text-rose-600 mb-2">123 Romance Lane</p>
                    <p class="text-rose-600">Napa Valley, CA</p>
                </div>
                
                <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose-100 detail-card">
                    <div class="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-clock w-8 h-8 text-rose-600"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-rose-800 mb-4">Time</h3>
                    <p class="text-rose-600 mb-2 font-medium">Ceremony: 4:00 PM</p>
                    <p class="text-rose-600 mb-2">Reception: 6:00 PM</p>
                    <p class="text-rose-600">Cocktail Hour: 5:00 PM</p>
                </div>
                
                <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose-100 detail-card">
                    <div class="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-users w-8 h-8 text-rose-600"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-rose-800 mb-4">Dress Code</h3>
                    <p class="text-rose-600 mb-2 font-medium">Formal</p>
                    <p class="text-rose-600 mb-2">Black Tie Optional</p>
                    <p class="text-rose-600">Garden Chic</p>
                </div>
            </div>
            
            <!-- Gallery Preview -->
            <div id="gallery" class="max-w-4xl mx-auto mb-16">
                <h2 class="text-3xl font-semibold text-rose-800 mb-8">Our Love Story</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl overflow-hidden shadow-md gallery-item">
                        <div class="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center text-rose-300">
                            <i class="fas fa-camera w-8 h-8"></i>
                        </div>
                    </div>
                    <div class="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl overflow-hidden shadow-md gallery-item">
                        <div class="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center text-rose-300">
                            <i class="fas fa-camera w-8 h-8"></i>
                        </div>
                    </div>
                    <div class="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl overflow-hidden shadow-md gallery-item">
                        <div class="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center text-rose-300">
                            <i class="fas fa-camera w-8 h-8"></i>
                        </div>
                    </div>
                    <div class="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl overflow-hidden shadow-md gallery-item">
                        <div class="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center text-rose-300">
                            <i class="fas fa-camera w-8 h-8"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="py-10 text-center text-rose-600 relative z-10">
        <p class="mb-4 text-lg">We can't wait to celebrate with you!</p>
        <p class="text-sm">© <span id="current-year"></span> Sarah & Michael. All rights reserved.</p>
    </footer>

    <script>
        $(document).ready(function() {
            // Set current year
            $('#current-year').text(new Date().getFullYear());
            
            // Set wedding date (6 months from now)
            const weddingDate = new Date();
            weddingDate.setMonth(weddingDate.getMonth() + 6);
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            $('#wedding-date').text(weddingDate.toLocaleDateString('en-US', options));
            
            // Countdown timer
            function updateCountdown() {
                const now = new Date().getTime();
                const distance = weddingDate.getTime() - now;
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                $('#days').text(days.toString().padStart(2, '0'));
                $('#hours').text(hours.toString().padStart(2, '0'));
                $('#minutes').text(minutes.toString().padStart(2, '0'));
                $('#seconds').text(seconds.toString().padStart(2, '0'));
            }
            
            // Update countdown every second
            setInterval(updateCountdown, 1000);
            updateCountdown();
            
            // Floating hearts animation
            function createHeart() {
                const heart = $('<div>❤</div>');
                heart.addClass('floating-heart');
                heart.css({
                    left: Math.random() * 100 + 'vw',
                    animationDuration: (Math.random() * 3 + 2) + 's',
                    opacity: Math.random() * 0.5 + 0.5,
                    fontSize: (Math.random() * 20 + 10) + 'px'
                });
                
                $('body').append(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }
            
            setInterval(createHeart, 300);
            
            // RSVP Form submission
            $('#rsvp-form').on('submit', function(e) {
                e.preventDefault();
                const email = $('#email').val();
                
                if (email) {
                    // In a real app, you would send this to your backend
                    console.log('Email submitted:', email);
                    
                    // Show success message
                    $('#form-message').removeClass('hidden').addClass('block');
                    
                    // Reset form
                    $('#email').val('');
                    
                    // Hide message after 3 seconds
                    setTimeout(() => {
                        $('#form-message').removeClass('block').addClass('hidden');
                    }, 3000);
                }
            });
        });
    </script>
</body>
</html>