import React from 'react';
import { CheckCircle, Layout, Zap, Shield, ArrowRight, Apple, Cuboid as Android } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Organize your life with
            <span className="text-purple-400 inline-block hover:scale-105 transition-transform duration-300"> Task2Do</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-slide-up-delay">
            The simple, intuitive way to manage your tasks. Stay organized, focused, and accomplish more every day.
          </p>
          <div className="flex justify-center gap-4 animate-slide-up-delay-2">
<a href="https://just2d.vercel.app/" target="_blank" rel="noopener noreferrer">
  <button className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:scale-105 transition-all duration-300 flex items-center gap-2 hover:gap-3">
    Get Started <ArrowRight className="w-5 h-5 transition-transform" />
  </button>
</a>

            <button className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 hover:scale-105 transition-all duration-300">
              Dawnload
            </button>
          </div>
        </div>

        {/* App Preview */}
        <div className="mt-16 rounded-lg shadow-2xl overflow-hidden ring-1 ring-purple-400/20 transform hover:scale-[1.02] transition-transform duration-500">
          <img
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=2400&q=80"
            alt="Task2Do App Preview"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Task2Do?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Designed to help you achieve more with less effort. Our features are carefully crafted to boost your productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8 text-purple-400" />}
              title="Simple & Intuitive"
              description="Clean interface that helps you focus on what matters most - your tasks."
              delay="delay-[0ms]"
            />
            <FeatureCard
              icon={<Layout className="w-8 h-8 text-purple-400" />}
              title="Flexible Organization"
              description="Organize tasks your way with custom lists, tags, and priorities."
              delay="delay-[150ms]"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-purple-400" />}
              title="Lightning Fast"
              description="Optimized performance ensures your tasks sync instantly across devices."
              delay="delay-[300ms]"
            />
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">Take Task2Do Everywhere</h2>
              <p className="text-gray-300 text-lg">
                Download our mobile app and stay productive on the go. Available for iOS and Android devices(soon).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-sm">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </button>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Android className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-sm">Get it on</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </button>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>Free Download</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>Regular Updates</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 md:hidden"></div>
             <img
  src="/cover.png"
  alt="Task2Do Mobile App"
  className="rounded-lg shadow-2xl ring-1 ring-purple-400/20 transform hover:scale-105 transition-transform duration-500"
/>

            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get organized?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their productivity with Task2Do.
          </p>
<a href="https://just2d.vercel.app/" target="_blank" rel="noopener noreferrer">
  <button className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:scale-105 transition-all duration-300 flex items-center gap-2 hover:gap-3">
    Get Started <ArrowRight className="w-5 h-5 transition-transform" />
  </button>
</a>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-purple-400" />
              <span className="font-bold text-xl text-white">Task2Do</span>
            </div>
            <div className="flex gap-8 text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">About</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Features</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300"></a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300"></a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © 2024 Task2Do. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }) {
  return (
    <div className={`bg-gray-900/50 p-8 rounded-lg hover:shadow-lg transition-all duration-500 border border-gray-700 hover:border-purple-400/50 hover:-translate-y-1 ${delay}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default App;
