'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Section {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: React.ReactNode;
}

export default function AIBasics() {
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState<string>('fundamentals');

  // Load progress from cookies on component mount
  useEffect(() => {
    const savedProgress = document.cookie
      .split('; ')
      .find((row) => row.startsWith('ai-basics-progress='))
      ?.split('=')[1];

    if (savedProgress) {
      try {
        setCompletedSections(JSON.parse(decodeURIComponent(savedProgress)));
      } catch (error) {
        console.error('Error parsing saved progress:', error);
      }
    }
  }, []);

  // Save progress to cookies
  const saveProgress = (sections: string[]) => {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1); // 1 year expiry
    document.cookie = `ai-basics-progress=${encodeURIComponent(JSON.stringify(sections))}; expires=${expiryDate.toUTCString()}; path=/`;
  };

  const markSectionComplete = (sectionId: string) => {
    if (!completedSections.includes(sectionId)) {
      const newCompleted = [...completedSections, sectionId];
      setCompletedSections(newCompleted);
      saveProgress(newCompleted);
    }
  };

  const sections: Section[] = [
    {
      id: 'fundamentals',
      title: 'AI Fundamentals',
      description: 'What is AI and how does it think?',
      icon: '🧠',
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              What is Artificial Intelligence?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Think of AI as a computer that can learn and make decisions, just
              like humans do - but in its own unique way. Instead of following
              strict rules, AI learns from examples and patterns.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">
                  Traditional Programming
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">📝</span>
                    <span>Humans write exact rules</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">⚙️</span>
                    <span>Computer follows rules precisely</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">📊</span>
                    <span>Same input = same output</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">
                  AI Programming
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">🎯</span>
                    <span>Humans provide examples</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">🔍</span>
                    <span>AI finds patterns in data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">🧭</span>
                    <span>AI makes educated guesses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border border-green-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">Types of AI</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="text-lg font-semibold text-green-300 mb-2">
                  Narrow AI
                </h4>
                <p className="text-gray-400 text-sm">
                  Good at one specific task (like playing chess or recognizing
                  photos)
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-3">🧠</div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                  General AI
                </h4>
                <p className="text-gray-400 text-sm">
                  Can think and learn like humans (doesn&apos;t exist yet!)
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">
                  Super AI
                </h4>
                <p className="text-gray-400 text-sm">
                  Smarter than humans in every way (science fiction for now)
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'llm',
      title: 'Large Language Models',
      description: 'How AI understands and generates text',
      icon: '📝',
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              What is an LLM?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A Large Language Model (LLM) is like a super-smart autocomplete
              that has read most of the internet. It predicts what word should
              come next based on patterns it learned from millions of texts.
            </p>

            <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-pink-300 mb-4">
                How LLMs Work (Simplified)
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">Training Phase</p>
                    <p className="text-gray-400 text-sm">
                      AI reads billions of texts and learns patterns
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      Understanding Context
                    </p>
                    <p className="text-gray-400 text-sm">
                      AI analyzes your input and understands the topic
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      Generating Response
                    </p>
                    <p className="text-gray-400 text-sm">
                      AI predicts the most helpful words to say next
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">Popular LLMs</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">
                  GPT Family
                </h4>
                <p className="text-gray-400 text-sm mb-2">
                  By OpenAI (ChatGPT, GPT-4)
                </p>
                <p className="text-gray-300 text-sm">
                  Great at conversations and creative writing
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                  Claude
                </h4>
                <p className="text-gray-400 text-sm mb-2">By Anthropic</p>
                <p className="text-gray-300 text-sm">
                  Helpful, harmless, and honest AI assistant
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-green-300 mb-2">
                  Gemini
                </h4>
                <p className="text-gray-400 text-sm mb-2">By Google</p>
                <p className="text-gray-300 text-sm">
                  Multimodal AI that can understand images and text
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">
                  LLaMA
                </h4>
                <p className="text-gray-400 text-sm mb-2">By Meta</p>
                <p className="text-gray-300 text-sm">
                  Open-source model that runs on your computer
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'agents',
      title: 'AI Agents',
      description: 'AI that can take actions and use tools',
      icon: '🤖',
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              What are AI Agents?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Think of AI agents as digital assistants that can not only chat
              with you but also perform tasks. They can use tools, browse the
              web, write code, and even control other software!
            </p>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-orange-300 mb-4">
                Agent vs Regular AI
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-white font-medium mb-3">
                    Regular AI (LLM)
                  </h5>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">💬</span>
                      <span>Only talks/responds</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">🧠</span>
                      <span>Limited to its training</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">⏱️</span>
                      <span>One response per query</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-3">AI Agent</h5>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-400">🛠️</span>
                      <span>Can use tools and APIs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-400">🔄</span>
                      <span>Can take multiple actions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-400">🎯</span>
                      <span>Works toward goals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Types of AI Agents
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="text-2xl mb-3">🏃‍♂️</div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                  ReAct Agents
                </h4>
                <p className="text-gray-400 text-sm">
                  Think → Act → Observe → Repeat. They reason about what to do
                  next.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="text-2xl mb-3">📋</div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">
                  Plan & Execute
                </h4>
                <p className="text-gray-400 text-sm">
                  First make a plan, then execute each step systematically.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="text-2xl mb-3">👥</div>
                <h4 className="text-lg font-semibold text-green-300 mb-2">
                  Multi-Agent
                </h4>
                <p className="text-gray-400 text-sm">
                  Multiple AI agents working together, each with special skills.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="text-2xl mb-3">🎮</div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">
                  Autonomous
                </h4>
                <p className="text-gray-400 text-sm">
                  Run independently for long periods, making decisions on their
                  own.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'frameworks',
      title: 'AI Frameworks & Tools',
      description: 'Popular tools for building AI applications',
      icon: '🛠️',
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Development Frameworks
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-green-300 mb-3">
                  LangChain
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Like LEGO blocks for AI - connects different AI pieces
                  together
                </p>
                <div className="space-y-2 text-xs text-gray-300">
                  <div>• Chain multiple AI calls</div>
                  <div>• Memory for conversations</div>
                  <div>• Tool integration</div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-emerald-300 mb-3">
                  CrewAI
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Creates teams of AI agents that work together
                </p>
                <div className="space-y-2 text-xs text-gray-300">
                  <div>• Multi-agent workflows</div>
                  <div>• Role-based agents</div>
                  <div>• Task delegation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl p-8 border border-purple-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              AI APIs & Services
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-3">🔥</div>
                <h4 className="text-md font-semibold text-purple-300 mb-2">
                  OpenAI API
                </h4>
                <p className="text-gray-400 text-xs">Access to GPT models</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-3">🤖</div>
                <h4 className="text-md font-semibold text-indigo-300 mb-2">
                  Anthropic API
                </h4>
                <p className="text-gray-400 text-xs">Claude models</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-3">🏠</div>
                <h4 className="text-md font-semibold text-cyan-300 mb-2">
                  Local Models
                </h4>
                <p className="text-gray-400 text-xs">Run on your computer</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Getting Started Tips
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="text-white font-medium">Start Simple</p>
                  <p className="text-gray-400 text-sm">
                    Begin with basic API calls before building complex agents
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="text-white font-medium">Learn Prompting</p>
                  <p className="text-gray-400 text-sm">
                    Good prompts are the key to getting good AI responses
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="text-white font-medium">Experiment & Iterate</p>
                  <p className="text-gray-400 text-sm">
                    AI is still new - try things and see what works!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentSectionData = sections.find((s) => s.id === currentSection);
  const progressPercentage = Math.round(
    (completedSections.length / sections.length) * 100
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse delay-1200"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm mb-8">
              <span className="text-blue-300 text-sm font-medium">
                🎓 Learn AI
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              AI Basics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the fundamentals of Artificial Intelligence with
              interactive lessons and visual explanations
            </p>

            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Progress</span>
                <span className="text-sm text-cyan-400 font-semibold">
                  {progressPercentage}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-6">
                  Learning Sections
                </h3>
                <nav className="space-y-3">
                  {sections.map((section) => {
                    const isCompleted = completedSections.includes(section.id);
                    const isCurrent = currentSection === section.id;

                    return (
                      <button
                        key={section.id}
                        onClick={() => setCurrentSection(section.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                          isCurrent
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/50'
                            : 'bg-gray-700/30 hover:bg-gray-700/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{section.icon}</span>
                          <div className="flex-1">
                            <h4
                              className={`font-semibold ${isCurrent ? 'text-blue-300' : 'text-white'}`}
                            >
                              {section.title}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {section.description}
                            </p>
                          </div>
                          {isCompleted && (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">✓</span>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{currentSectionData?.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        {currentSectionData?.title}
                      </h2>
                      <p className="text-gray-400">
                        {currentSectionData?.description}
                      </p>
                    </div>
                  </div>

                  {!completedSections.includes(currentSection) && (
                    <button
                      onClick={() => markSectionComplete(currentSection)}
                      className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Mark Complete
                    </button>
                  )}

                  {completedSections.includes(currentSection) && (
                    <div className="flex items-center space-x-2 text-green-400">
                      <span className="text-xl">✅</span>
                      <span className="font-semibold">Completed</span>
                    </div>
                  )}
                </div>

                <div className="prose prose-invert max-w-none">
                  {currentSectionData?.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
