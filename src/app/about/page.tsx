import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 backdrop-blur-sm mb-8">
              <span className="text-purple-300 text-sm font-medium">
                🧠 About the Lab
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              Meet the Creator
            </h1>
          </div>

          {/* Creator Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bio Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl">
                  🧙‍♂️
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">heypran</h2>
                  <p className="text-purple-300">The Curious Head</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Meet{' '}
                  <span className="text-cyan-400 font-semibold">heypran</span> –
                  a delightfully curious soul who believes the universe is just
                  one big, fascinating puzzle waiting to be solved! 🧩
                </p>
                <p>
                  When he&apos;s not busy building the next cool thing,
                  you&apos;ll find him deep-diving into the mysteries of
                  <span className="text-purple-300"> spirituality</span>,
                  decoding the matrix of{' '}
                  <span className="text-green-300">finance</span>, or getting
                  lost in the endless rabbit holes of{' '}
                  <span className="text-blue-300">learning</span> and
                  <span className="text-yellow-300"> personal growth</span>.
                </p>
                <p>
                  His journey has taken him through the corridors of MNCs and
                  the chaotic beauty of startups across the globe – collecting
                  wisdom, war stories, and an impressive collection of coffee
                  mugs along the way. ☕
                </p>
                <p className="text-cyan-300 italic">
                  &quot;Why choose between technology and consciousness when you
                  can have both?&quot; - heypran&apos;s life motto (probably)
                </p>
              </div>

              {/* Passion Areas */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-purple-500/20 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🧘</div>
                  <h3 className="text-white font-semibold text-sm">
                    Spirituality
                  </h3>
                  <p className="text-gray-400 text-xs">Inner exploration</p>
                </div>
                <div className="bg-green-500/20 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <h3 className="text-white font-semibold text-sm">Finance</h3>
                  <p className="text-gray-400 text-xs">Money mastery</p>
                </div>
                <div className="bg-blue-500/20 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <h3 className="text-white font-semibold text-sm">Learning</h3>
                  <p className="text-gray-400 text-xs">Endless curiosity</p>
                </div>
                <div className="bg-yellow-500/20 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🌱</div>
                  <h3 className="text-white font-semibold text-sm">Growth</h3>
                  <p className="text-gray-400 text-xs">Always evolving</p>
                </div>
              </div>
            </div>

            {/* Lab Purpose */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl">
                  🚀
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">PoGo Labs</h2>
                  <p className="text-cyan-300">AI Experimentation Hub</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Welcome to{' '}
                  <span className="text-cyan-400 font-semibold">PoGo Labs</span>{' '}
                  – where artificial intelligence meets human creativity in the
                  most delightful ways! 🤖✨
                </p>
                <p>
                  This digital playground serves as heypran&apos;s laboratory
                  for pushing the boundaries of what&apos;s possible when you
                  combine:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-400">•</span>
                    <span>Human curiosity with AI assistance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-400">•</span>
                    <span>Rapid prototyping with modern tech</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">•</span>
                    <span>Wild ideas with practical execution</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-400">•</span>
                    <span>Learning in public with style</span>
                  </li>
                </ul>
                <p>
                  Every project here is a testament to the power of AI-assisted
                  development – proving that with the right tools, imagination
                  truly is the only limit! 🌟
                </p>
              </div>

              {/* Mission Statement */}
              <div className="mt-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-400/30">
                <h3 className="text-cyan-300 font-bold mb-3 flex items-center">
                  <span className="text-xl mr-2">🎯</span>
                  Mission Statement
                </h3>
                <p className="text-gray-300 italic">
                  &quot;To explore the fascinating intersection of human
                  creativity and artificial intelligence, building tools that
                  make the impossible feel inevitable.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              The Journey So Far
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  🏢
                </div>
                <h3 className="text-white font-bold mb-2">
                  Corporate Explorer
                </h3>
                <p className="text-gray-400 text-sm">
                  Navigated the complex ecosystems of multinational
                  corporations, learning the art of scale and structured
                  innovation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  🚀
                </div>
                <h3 className="text-white font-bold mb-2">
                  Startup Adventurer
                </h3>
                <p className="text-gray-400 text-sm">
                  Dove headfirst into the beautiful chaos of startups worldwide,
                  mastering the art of building something from nothing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  🤖
                </div>
                <h3 className="text-white font-bold mb-2">AI Pioneer</h3>
                <p className="text-gray-400 text-sm">
                  Now pushing the boundaries of human-AI collaboration, creating
                  tools that seemed like magic just yesterday.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Want to follow along on this wild journey of discovery? Connect
              with heypran and be part of the AI revolution! 🌊
            </p>
            <a
              href="https://x.com/heypran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="text-2xl mr-3">𝕏</span>
              Follow the Journey
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
