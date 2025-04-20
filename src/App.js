import './App.css';

function App() {
  return (
    <div className="font-sans">
 
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-6 bg-gray-900 text-white">
        <div className="text-2xl font-bold">CloudVision</div>
        <div className="space-x-6 text-lg">
          <a href="#features" className="hover:text-indigo-400">Features</a>
          <a href="#blog" className="hover:text-indigo-400">Blog</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>
      </nav>
 
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-indigo-600 to-purple-700">
        <h1 className="text-6xl font-bold mb-4">Welcome to CloudVision</h1>
        <p className="text-xl mb-8">Your future-ready marketing website powered by React + Vite + Tailwind</p>
        <button className="px-6 py-3 text-lg font-semibold text-indigo-600 bg-white rounded-full hover:bg-gray-100">
          Get Started
        </button>
      </section>
 
      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Features</h2>
        <div className="grid gap-8 px-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Fast Performance</h3>
            <p>Lightning-fast load times and responsive design for every device.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Modern Stack</h3>
            <p>Built with React, Vite, and Tailwind CSS for future-proof development.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Easy Deployment</h3>
            <p>Seamless hosting and updates with Cloudflare Pages integration.</p>
          </div>
        </div>
      </section>
 
      {/* Blog Preview Section */}
      <section id="blog" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Latest Blog Posts</h2>
        <div className="grid gap-8 px-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-2">Why React + Vite is a Game-Changer</h3>
            <p className="mb-4">Discover how this modern setup improves developer productivity and site performance.</p>
            
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-2">5 Tips for Faster Frontend Builds</h3>
            <p className="mb-4">Simple techniques to shave seconds off your build and deploy times.</p>
            
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-2">Deploying to Cloudflare Pages</h3>
            <p className="mb-4">Step-by-step guide to take your project live in minutes with Cloudflare.</p>
            
          </div>
        </div>
      </section>
 
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">What Our Users Say</h2>
        <div className="grid gap-8 px-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="mb-4 text-lg italic">"Super fast setup and great performance. Highly recommend for any new project!"</p>
            <span className="font-semibold text-gray-700">— Alex Carter</span>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="mb-4 text-lg italic">"Clean code, responsive design, and it was a breeze to deploy with Cloudflare Pages."</p>
            <span className="font-semibold text-gray-700">— Priya Desai</span>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="mb-4 text-lg italic">"A solid starter kit that saved us tons of time getting our marketing site live."</p>
            <span className="font-semibold text-gray-700">— Marcus Lee</span>
          </div>
        </div>
      </section>
 
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-6">
          <input type="text" placeholder="Name" className="w-full p-4 border rounded-lg" required />
          <input type="email" placeholder="Email" className="w-full p-4 border rounded-lg" required />
          <textarea placeholder="Your Message" rows="4" className="w-full p-4 border rounded-lg" required></textarea>
          <button type="submit" className="w-full py-3 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Send Message
          </button>
        </form>
      </section>
 
      {/* Call to Action Section */}
      <section className="py-20 bg-indigo-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to build your vision?</h2>
        <p className="text-lg mb-8">Deploy your marketing site in minutes on Cloudflare Pages.</p>
        <button className="px-8 py-3 text-lg font-semibold bg-white text-indigo-600 rounded-full hover:bg-gray-100">
          Launch Now
        </button>
      </section>
 
      {/* Footer */}
      <footer className="p-6 bg-gray-900 text-center text-white">
        &copy; 2025 CloudVision. All rights reserved.
      </footer>
 
    </div>
  )
}
 
export default App