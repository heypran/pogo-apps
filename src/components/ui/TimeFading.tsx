'use client';

// TimeFallingAway.tsx - Main React Component
import { useState, useEffect, useRef } from 'react';
import {
  t,
  WaterDroplet,
  TimeParticle,
  calculateTodayStats,
  calculateStats,
  getFormattedNumber,
  formatTimeRemaining,
  type TankBounds,
  type LifeStats
} from './timeutils';

export default function TimeFallingAway() {
  const [step, setStep] = useState(1);
  const [birthdate, setBirthdate] = useState('');
  const [stats, setStats] = useState<LifeStats | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [viewMode, setViewMode] = useState<'progress' | 'water'>('progress');
  const [dayMode, setDayMode] = useState<'lifetime' | 'today'>('today');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<TimeParticle[]>([]);
  const waterDropletsRef = useRef<WaterDroplet[]>([]);
  const animationRef = useRef<number | null>(null);
  const lastParticleTime = useRef(0);
  const lastDropletTime = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step !== 2 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (timestamp - lastParticleTime.current > 100) {
        for (let i = 0; i < 3; i++) {
          const x = Math.random() * canvas.width;
          const type = Math.random() < 0.7 ? 'past' : (Math.random() < 0.1 ? 'present' : 'future');
          particlesRef.current.push(new TimeParticle(x, -10, type));
        }
        lastParticleTime.current = timestamp;
      }

      if (viewMode === 'water' && timestamp - lastDropletTime.current > 150) {
        const tankBounds: TankBounds = {
          left: canvas.width * 0.2,
          right: canvas.width * 0.8,
          top: canvas.height * 0.1,
          bottom: canvas.height * 0.7
        };
        
        const drainX = tankBounds.left + (tankBounds.right - tankBounds.left) * 0.5;
        const drainY = tankBounds.bottom;
        
        const dropletCount = dayMode === 'today' ? 8 : 4;
        const dropletColor = dayMode === 'today' ? 'orange' : 'blue';
        
        for (let i = 0; i < dropletCount; i++) {
          const dropletX = drainX + (Math.random() - 0.5) * 40;
          const droplet = new WaterDroplet(dropletX, drainY, tankBounds);
          droplet.color = dropletColor;
          waterDropletsRef.current.push(droplet);
        }
        lastDropletTime.current = timestamp;
      }
      
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.update();
        particle.draw(ctx);
        return !particle.isDead();
      });

      waterDropletsRef.current = waterDropletsRef.current.filter(droplet => {
        droplet.update();
        droplet.draw(ctx);
        return !droplet.isDead();
      });
      
      if (particlesRef.current.length > 200) {
        particlesRef.current = particlesRef.current.slice(-200);
      }
      if (waterDropletsRef.current.length > 50) {
        waterDropletsRef.current = waterDropletsRef.current.slice(-50);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [step, viewMode, dayMode]);

  const handleSubmit = () => {
    setStats(calculateStats(birthdate, currentTime));
    setStep(2);
  };

  const renderWaterTankVisualization = (updatedStats: LifeStats) => {
    const todayStats = calculateTodayStats();
    const isShowingToday = dayMode === 'today';
    const percentage = isShowingToday ? todayStats.percentagePassedToday : updatedStats.percentageLived;
    const remaining = isShowingToday ? todayStats.secondsRemainingToday : updatedStats.secondsRemaining;
    
    return (
      <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-12">
        <div className="flex justify-between items-center mb-4 lg:mb-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Life as Water</h2>
          <div className="text-sm lg:text-base text-gray-400">
            {isShowingToday 
              ? `${percentage}% of today gone`
              : `${percentage}% drained away`
            }
          </div>
        </div>

        <div className="flex justify-center mb-4 lg:mb-8">
          <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-1 flex">
            <button
              onClick={() => setDayMode('lifetime')}
              className={`px-2 sm:px-3 lg:px-4 py-1 lg:py-2 rounded-md text-xs lg:text-sm font-medium transition-all ${
                dayMode === 'lifetime'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('lifetimeView')}
            </button>
            <button
              onClick={() => setDayMode('today')}
              className={`px-2 sm:px-3 lg:px-4 py-1 lg:py-2 rounded-md text-xs lg:text-sm font-medium transition-all ${
                dayMode === 'today'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('todayView')}
            </button>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-sm lg:max-w-md xl:max-w-lg">
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-gray-600 rounded-lg h-64 sm:h-80 lg:h-96 xl:h-[28rem] overflow-hidden">
            <div 
              className={`absolute bottom-0 left-0 right-0 transition-all duration-1000 ease-out ${
                isShowingToday 
                  ? 'bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400'
                  : 'bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400'
              }`}
              style={{ 
                height: `${100 - percentage}%`,
                background: isShowingToday
                  ? 'linear-gradient(180deg, rgba(251, 146, 60, 0.9) 0%, rgba(234, 88, 12, 0.95) 100%)'
                  : 'linear-gradient(180deg, rgba(59, 130, 246, 0.9) 0%, rgba(29, 78, 216, 0.95) 100%)'
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1.5 h-1.5 ${
                    isShowingToday ? 'bg-yellow-200/60' : 'bg-white/60'
                  } rounded-full animate-bounce`}
                  style={{
                    left: `${15 + i * 10}%`,
                    bottom: `${5 + (i * 15) % 70}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${1.5 + i * 0.2}s`
                  }}
                ></div>
              ))}
              
              {/* Dripping effect indicators */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`drip-${i}`}
                  className={`absolute w-0.5 ${
                    isShowingToday ? 'bg-orange-300' : 'bg-blue-300'
                  } opacity-60 animate-pulse`}
                  style={{
                    left: `${45 + i * 5}%`,
                    bottom: '0%',
                    height: '8px',
                    animationDelay: `${i * 0.4}s`,
                    animationDuration: `1.5s`
                  }}
                ></div>
              ))}
            </div>
            
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-2 right-2 border-t border-gray-500/30"
                style={{ top: `${(i + 1) * 10}%` }}
              >
                <span className="absolute -left-8 text-xs text-gray-500">
                  {90 - i * 10}%
                </span>
              </div>
            ))}
            
            {/* Enhanced drain with visual indicators */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-gray-900 rounded-t-full border-t-2 border-gray-600">
              <div className={`absolute inset-0 ${
                isShowingToday ? 'bg-orange-400/20' : 'bg-blue-400/20'
              } rounded-t-full animate-pulse`}></div>
            </div>
            
            {/* Drain flow indicators */}
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={`drain-${i}`}
                className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-2 ${
                  isShowingToday ? 'bg-orange-400/40' : 'bg-blue-400/40'
                } animate-pulse`}
                style={{
                  marginLeft: `${(i - 0.5) * 3}px`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '1s'
                }}
              ></div>
            ))}
          </div>
          
          <div className="flex justify-between mt-3 lg:mt-6 text-sm lg:text-base">
            <div className={isShowingToday ? "text-orange-400" : "text-red-400"}>
              <span className="block font-semibold">
                {percentage}%
              </span>
              <span className="text-gray-400">
                {isShowingToday ? 'Day Gone' : 'Time Gone'}
              </span>
            </div>
            <div className="text-center text-gray-300">
              <span className="block text-xs">
                {isShowingToday ? 'Today Tank' : 'Life Tank'}
              </span>
              <span className="text-xs">Watch it drain...</span>
            </div>
            <div className={isShowingToday ? "text-yellow-400" : "text-blue-400"}>
              <span className="block font-semibold">
                {100 - percentage}%
              </span>
              <span className="text-gray-400">Remaining</span>
            </div>
          </div>
          
          {isShowingToday && (
            <div className="mt-3 lg:mt-6 p-3 lg:p-4 bg-gray-800/50 rounded-lg border border-orange-500/30">
              <div className="text-center text-sm lg:text-base">
                <div className="text-orange-400 font-mono mb-1 lg:mb-2">
                  {getFormattedNumber(remaining)} seconds left today
                </div>
                <div className="text-xs text-gray-400">
                  {Math.floor(remaining / 3600)}h {Math.floor((remaining % 3600) / 60)}m {remaining % 60}s remaining
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center mt-3 lg:mt-6 text-xs lg:text-sm text-gray-500">
            💧 {isShowingToday 
              ? 'Each droplet represents seconds of today flowing away'
              : 'Each droplet represents seconds flowing away forever'
            }
          </div>
        </div>
      </div>
    );
  };

  const renderProgressBarVisualization = (updatedStats: LifeStats) => {
    return (
      <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-12">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6">Life Progress</h2>
        <div className="relative">
          <div className="w-full bg-gray-800 rounded-full h-3 sm:h-4 lg:h-6 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-1000 relative"
              style={{ width: `${updatedStats.percentageLived}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 lg:mt-4 text-sm lg:text-base">
            <span className="text-red-400">{updatedStats.percentageLived}% lived</span>
            <span className="text-gray-400">{100 - updatedStats.percentageLived}% remaining</span>
          </div>
        </div>
      </div>
    );
  };

  const renderVisualization = () => {
    if (!stats) return null;

    const updatedStats = calculateStats(birthdate, currentTime);
    
    return (
      <div className="relative min-h-screen">
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
          style={{ background: 'linear-gradient(180deg, rgba(17,24,39,0.95) 0%, rgba(31,41,55,0.98) 100%)' }}
        />
        
        <div className="relative z-10 p-4 sm:p-6 lg:p-8 pt-16">
          <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            <div className="text-center mb-8 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 lg:mb-6 tracking-tight">
                {getFormattedNumber(updatedStats.secondsRemaining)}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-red-400 mb-2 lg:mb-4">{t('timeRemainingMessage')}</p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
                {t('urgencyMessage')}
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-mono text-red-400 mb-2 lg:mb-4">
                  {formatTimeRemaining(updatedStats.secondsRemaining)}
                </div>
                <div className="text-sm lg:text-base text-gray-400">Time remaining (estimated)</div>
              </div>
            </div>

            <div className="flex justify-center mb-6 lg:mb-12">
              <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-1 flex">
                <button
                  onClick={() => setViewMode('progress')}
                  className={`px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-md text-sm lg:text-base font-medium transition-all ${
                    viewMode === 'progress'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t('progressBarView')}
                </button>
                <button
                  onClick={() => setViewMode('water')}
                  className={`px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-md text-sm lg:text-base font-medium transition-all ${
                    viewMode === 'water'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t('waterTankView')}
                </button>
              </div>
            </div>

            {viewMode === 'progress' 
              ? renderProgressBarVisualization(updatedStats)
              : renderWaterTankVisualization(updatedStats)
            }

            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 lg:mb-12">
              <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 sm:p-6 lg:p-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-6 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></span>
                  {t('timePassedTitle')}
                </h3>
                <div className="space-y-2 lg:space-y-4 text-gray-300">
                  <p>
                    <span className="text-red-400 font-mono text-base sm:text-lg lg:text-xl">{getFormattedNumber(updatedStats.secondsLived)}</span> seconds lived
                  </p>
                  <p>
                    <span className="text-red-400 font-mono text-base sm:text-lg lg:text-xl">{getFormattedNumber(updatedStats.heartbeats)}</span> heartbeats
                  </p>
                  <p>
                    <span className="text-red-400 font-mono text-base sm:text-lg lg:text-xl">{getFormattedNumber(updatedStats.breaths)}</span> breaths taken
                  </p>
                  <p>
                    <span className="text-red-400 font-mono text-base sm:text-lg lg:text-xl">{getFormattedNumber(updatedStats.weekendsLived)}</span> weekends experienced
                  </p>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-blue-700 rounded-lg p-4 sm:p-6 lg:p-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-6 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
                  {t('timeRemainingTitle')}
                </h3>
                <div className="space-y-2 lg:space-y-4 text-gray-300">
                  <p>
                    <span className="text-blue-400 font-mono text-base sm:text-lg lg:text-xl">{getFormattedNumber(updatedStats.secondsRemaining)}</span> seconds left
                  </p>
                  <p>
                    <span className="text-blue-400 font-mono text-base sm:text-lg lg:text-xl">{getFormattedNumber(Math.floor(updatedStats.secondsRemaining * 70 / 60))}</span> heartbeats remaining
                  </p>
                  <p>
                    <span className="text-blue-400 font-mono text-base sm:text-lg lg:text-xl">{getFormattedNumber(Math.floor(updatedStats.secondsRemaining * 16 / 60))}</span> breaths to take
                  </p>
                  <p>
                    <span className="text-blue-400 font-mono text-base sm:text-lg lg:text-xl">{getFormattedNumber(updatedStats.weekendsRemaining)}</span> weekends ahead
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-12">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-6">What You&apos;re Seeing</h3>
              <div className="grid sm:grid-cols-3 gap-3 lg:gap-6 text-sm lg:text-base">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded mr-3 animate-pulse"></div>
                  <span className="text-gray-300">Your past seconds falling away</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded mr-3 animate-pulse"></div>
                  <span className="text-gray-300">This precious moment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-400 rounded mr-3 opacity-50"></div>
                  <span className="text-gray-300">Potential future seconds</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => {
                  setBirthdate('');
                  setStats(null);
                  setStep(1);
                  setViewMode('progress');
                  setDayMode('today');
                  particlesRef.current = [];
                  waterDropletsRef.current = [];
                }}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                {t('startOverButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          <div className="text-center mb-6 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 lg:mb-6">{t('pageTitle')}</h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">{t('pageSubtitle')}</p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 lg:mb-6 text-white">{t('birthDateQuestion')}</h2>
            <input
              type="date"
              className="w-full p-3 lg:p-4 bg-gray-800 border border-gray-600 rounded-md mb-4 lg:mb-6 text-white text-sm lg:text-base focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-3 lg:py-4 rounded-md font-semibold text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={!birthdate}
            >
              {t('visualizeButton')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return renderVisualization();
}