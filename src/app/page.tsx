import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm mb-8">
              <span className="text-blue-300 text-sm font-medium">
                🤖 AI-Powered Applications
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8 leading-tight">
              PoGo Labs
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Exploring the future of development through artificial
              intelligence.
              <span className="block mt-2 text-lg text-blue-300">
                Built by{' '}
                <span className="font-semibold text-cyan-400">heypran</span>{' '}
                using AI assistants
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/ai-basics"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">🎓 Learn AI Basics</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/timeflow"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Explore Time Flow</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-300 font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Apps Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              AI-Crafted Applications
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Each application represents a unique exploration into what&apos;s
              possible when human creativity meets artificial intelligence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Time Flow App */}
              <Link href="/timeflow" className="group">
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      Time Flow
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      An immersive visualization of life&apos;s precious
                      moments, featuring animated water tanks and particle
                      systems that show time flowing away.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                        Canvas Animation
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        Real-time Data
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                        Interactive
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* AI Basics App */}
              <Link href="/ai-basics" className="group">
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      AI Basics
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      Interactive learning platform teaching AI fundamentals, 
                      LLMs, agents, and frameworks with visual explanations 
                      and progress tracking.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        Interactive Learning
                      </span>
                      <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">
                        Progress Tracking
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                        Visual Diagrams
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-300 mb-3">
                    Data Visualizer
                  </h3>
                  <p className="text-gray-500 mb-4 leading-relaxed">
                    Transform complex datasets into beautiful, interactive
                    visualizations with AI-powered insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 text-xs rounded-full border border-yellow-400/30">
                  In Development
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              Other Projects
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Beyond AI experiments, exploring web3 development, blockchain technology, and sharing insights through technical writing.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <a
                href="https://evmtools.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">⚡</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors">
                            EVMTools
                          </h3>
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-400/30">
                            Live
                          </span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                          A comprehensive web3 development toolkit for Ethereum
                          Virtual Machine (EVM) and zero-knowledge technologies.
                          Providing essential utilities for blockchain
                          developers.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="text-white font-semibold mb-2 text-sm">
                              🔧 Developer Tools
                            </h4>
                            <ul className="text-gray-400 text-sm space-y-1">
                              <li>• Transaction Decoder</li>
                              <li>• Merkle Tree Generator</li>
                              <li>• ABI Encoder</li>
                              <li>• Gas Converter</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-2 text-sm">
                              ⚡ ZK & DeFi
                            </h4>
                            <ul className="text-gray-400 text-sm space-y-1">
                              <li>• Zero-Knowledge Tools</li>
                              <li>• Uniswap V4 Hooks</li>
                              <li>• EIP-712 Utilities</li>
                              <li>• Burner Wallet</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                            Web3
                          </span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                            EVM
                          </span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                            Zero-Knowledge
                          </span>
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                            DeFi
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Medium Blog */}
              <a
                href="https://medium.com/@heypran"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">✍️</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                            Tech Insights on Medium
                          </h3>
                          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-400/30">
                            Active
                          </span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                          Sharing thoughts and insights on AI, technology trends, development experiences, and the intersection of human creativity with artificial intelligence.
                        </p>
                        
                        <div className="grid grid-cols-1 gap-4 mb-6">
                          <div>
                            <h4 className="text-white font-semibold mb-2 text-sm">📝 Writing Topics</h4>
                            <ul className="text-gray-400 text-sm space-y-1">
                              <li>• AI & Machine Learning Insights</li>
                              <li>• Development Best Practices</li>
                              <li>• Technology Trends & Analysis</li>
                              <li>• Personal Growth & Learning</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">
                            Technical Writing
                          </span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                            AI Insights
                          </span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                            Development
                          </span>
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                            Learning
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Social Connect */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Connect & Follow
            </h2>
            <div className="flex justify-center">
              <a
                href="https://x.com/heypran"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    𝕏
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      Follow on X
                    </h3>
                    <p className="text-gray-400 text-lg">@heypran</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Stay updated with the latest AI experiments
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
