// timeUtils.ts - Utility functions and particle classes

export const TRANSLATIONS = {
    "en-US": {
      "pageTitle": "Time Falling Away",
      "pageSubtitle": "Watch your precious moments drift by... each second that passes is gone forever",
      "birthDateQuestion": "When did your journey begin?",
      "visualizeButton": "Watch time flow",
      "startOverButton": "Reset the clock",
      "toggleView": "Switch View",
      "progressBarView": "Progress Bar",
      "waterTankView": "Water Tank",
      "lifetimeView": "Lifetime",
      "todayView": "Today",
      "lifeInSecondsTitle": "Your seconds are falling...",
      "timePassedTitle": "Time Already Gone",
      "timeRemainingTitle": "Time Still Yours",
      "legendPast": "Seconds lived",
      "legendPresent": "Current moment",
      "legendFuture": "Potential seconds",
      "lifeHighlightsTitle": "The Weight of Time",
      "lifeHighlightsSeconds": "You've experienced",
      "lifeHighlightsSecondsEnd": "seconds of existence.",
      "lifeHighlightsPercent": "That's",
      "lifeHighlightsPercentEnd": "of your estimated lifetime.",
      "lifeHighlightsHeartbeats": "Your heart has beaten",
      "lifeHighlightsHeartbeatsEnd": "times, each beat a moment closer to the end.",
      "lifeHighlightsBreaths": "You've drawn",
      "lifeHighlightsBreathsEnd": "breaths. Each one precious.",
      "timeRemainingMessage": "seconds remain in your estimated lifetime",
      "urgencyMessage": "Every second counts. What will you do with the time you have left?"
    }
  };
  
  export const t = (key: string): string => {
    return (TRANSLATIONS['en-US'] as Record<string, string>)[key] || key;
  };
  
  export interface TankBounds {
    left: number;
    right: number;
    top: number;
    bottom: number;
  }
  
  // Water droplet particle system
  export class WaterDroplet {
    public x: number;
    public y: number;
    public vx: number;
    public vy: number;
    public size: number;
    public life: number;
    public decay: number;
    public gravity: number;
    public tank: TankBounds;
    public trail: Array<{ x: number; y: number; life: number }>;
    public maxTrailLength: number;
    public color: string;
  
    constructor(x: number, y: number, tank: TankBounds) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = Math.random() * 2 + 1;
      this.size = Math.random() * 4 + 3;
      this.life = 1.0;
      this.decay = Math.random() * 0.008 + 0.003;
      this.gravity = 0.08;
      this.tank = tank;
      this.trail = [];
      this.maxTrailLength = 8;
      this.color = 'blue';
    }
  
    update(): void {
      this.trail.push({ x: this.x, y: this.y, life: this.life });
      if (this.trail.length > this.maxTrailLength) {
        this.trail.shift();
      }
  
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.life -= this.decay;
      
      this.vx += (Math.random() - 0.5) * 0.02;
      this.vx *= 0.99;
    }
  
    draw(ctx: CanvasRenderingContext2D): void {
      if (this.life <= 0) return;
      
      ctx.save();
      
      const isOrange = this.color === 'orange';
      const baseColor = isOrange 
        ? { r: 255, g: 165, b: 0 }
        : { r: 30, g: 144, b: 255 };
      
      this.trail.forEach((point, index) => {
        const trailAlpha = (index / this.trail.length) * point.life * 0.6;
        const trailSize = this.size * (index / this.trail.length) * 0.8;
        
        ctx.globalAlpha = trailAlpha;
        ctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${trailAlpha})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.globalAlpha = this.life;
      
      const gradient = ctx.createRadialGradient(
        this.x - this.size * 0.3, 
        this.y - this.size * 0.3, 
        0,
        this.x, 
        this.y, 
        this.size
      );
      
      if (isOrange) {
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.life * 0.9})`);
        gradient.addColorStop(0.3, `rgba(255, 215, 0, ${this.life})`);
        gradient.addColorStop(0.7, `rgba(255, 165, 0, ${this.life})`);
        gradient.addColorStop(1, `rgba(255, 140, 0, ${this.life * 0.8})`);
      } else {
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.life * 0.9})`);
        gradient.addColorStop(0.3, `rgba(135, 206, 250, ${this.life})`);
        gradient.addColorStop(0.7, `rgba(30, 144, 255, ${this.life})`);
        gradient.addColorStop(1, `rgba(0, 100, 200, ${this.life * 0.8})`);
      }
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y + this.size * 0.2, this.size * 0.8, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.globalAlpha = this.life * 0.8;
      ctx.fillStyle = `rgba(255, 255, 255, ${this.life * 0.8})`;
      ctx.beginPath();
      ctx.arc(this.x - this.size * 0.3, this.y - this.size * 0.2, this.size * 0.4, 0, Math.PI * 2);
      ctx.fill();
      
      // Add a glow effect
      ctx.shadowColor = isOrange ? 'rgba(255, 165, 0, 0.8)' : 'rgba(30, 144, 255, 0.8)';
      ctx.shadowBlur = this.size * 2;
      ctx.fill();
      ctx.shadowBlur = 0;
      
      ctx.restore();
    }
  
    isDead(): boolean {
      return this.life <= 0 || this.y > this.tank.bottom + 50;
    }
  }
  
  export class TimeParticle {
    public x: number;
    public y: number;
    public initialY: number;
    public vx: number;
    public vy: number;
    public size: number;
    public life: number;
    public decay: number;
    public type: string;
    public spin: number;
    public rotation: number;
    public gravity: number;
  
    constructor(x: number, y: number, type: string = 'past') {
      this.x = x;
      this.y = y;
      this.initialY = y;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = Math.random() * 2 + 1;
      this.size = Math.random() * 4 + 2;
      this.life = 1.0;
      this.decay = Math.random() * 0.02 + 0.005;
      this.type = type;
      this.spin = Math.random() * 0.2 - 0.1;
      this.rotation = 0;
      this.gravity = 0.1;
    }
  
    update(): void {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.rotation += this.spin;
      this.life -= this.decay;
      
      this.vx += (Math.random() - 0.5) * 0.1;
    }
  
    draw(ctx: CanvasRenderingContext2D): void {
      if (this.life <= 0) return;
      
      ctx.save();
      ctx.globalAlpha = this.life;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      
      if (this.type === 'past') {
        ctx.fillStyle = `rgba(239, 68, 68, ${this.life})`;
      } else if (this.type === 'present') {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.life})`;
      } else {
        ctx.fillStyle = `rgba(156, 163, 175, ${this.life * 0.3})`;
      }
      
      const radius = this.size * 0.3;
      ctx.beginPath();
      ctx.roundRect(-this.size/2, -this.size/2, this.size, this.size, radius);
      ctx.fill();
      
      if (this.type === 'present') {
        ctx.shadowColor = 'rgba(59, 130, 246, 0.5)';
        ctx.shadowBlur = 10;
        ctx.fill();
      }
      
      ctx.restore();
    }
  
    isDead(): boolean {
      return this.life <= 0 || this.y > window.innerHeight + 50;
    }
  }
  
  export interface TodayStats {
    secondsPassedToday: number;
    secondsRemainingToday: number;
    percentagePassedToday: number;
    totalSecondsInDay: number;
    currentTime: Date;
  }
  
  export interface LifeStats {
    secondsLived: number;
    totalSeconds: number;
    secondsRemaining: number;
    percentageLived: number;
    heartbeats: number;
    breaths: number;
    weekendsLived: number;
    weekendsRemaining: number;
    daysLived: number;
  }
  
  export const calculateTodayStats = (): TodayStats => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    const totalSecondsInDay = 24 * 60 * 60;
    const secondsPassedToday = Math.floor((now.getTime() - startOfDay.getTime()) / 1000);
    const secondsRemainingToday = totalSecondsInDay - secondsPassedToday;
    const percentagePassedToday = Math.round((secondsPassedToday / totalSecondsInDay) * 100);
    
    return {
      secondsPassedToday,
      secondsRemainingToday,
      percentagePassedToday,
      totalSecondsInDay,
      currentTime: now
    };
  };
  
  export const calculateStats = (date: string, currentTime: Date): LifeStats => {
    const birthDate = new Date(date);
    const now = currentTime;
    
    const msLived = now.getTime() - birthDate.getTime();
    const secondsLived = Math.floor(msLived / 1000);
    const daysLived = Math.floor(msLived / (1000 * 60 * 60 * 24));
    const weeksLived = Math.floor(daysLived / 7);
    
    const weekendsLived = weeksLived;
    
    const totalSeconds = 80 * 365.25 * 24 * 60 * 60;
    const totalDays = 80 * 365.25;
    const totalWeeks = Math.floor(totalDays / 7);
    const totalWeekends = totalWeeks;
    
    const secondsRemaining = Math.max(0, Math.floor(totalSeconds - secondsLived));
    const weekendsRemaining = Math.max(0, totalWeekends - weekendsLived);
    const percentageLived = Math.min(100, Math.round((secondsLived / totalSeconds) * 100));
    
    const heartbeats = Math.floor(secondsLived * 70 / 60);
    const breaths = Math.floor(secondsLived * 16 / 60);
    
    return {
      secondsLived,
      totalSeconds,
      secondsRemaining,
      percentageLived,
      heartbeats,
      breaths,
      weekendsLived,
      weekendsRemaining,
      daysLived
    };
  };
  
  export const getFormattedNumber = (num: number): string => {
    return new Intl.NumberFormat().format(num);
  };
  
  export const formatTimeRemaining = (seconds: number): string => {
    const years = Math.floor(seconds / (365.25 * 24 * 60 * 60));
    const days = Math.floor((seconds % (365.25 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const mins = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    
    return `${years}y ${days}d ${hours}h ${mins}m ${secs}s`;
  };