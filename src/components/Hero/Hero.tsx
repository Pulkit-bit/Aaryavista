import { TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 -z-10"></div>

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <TrendingUp size={16} />
            #1 PR & Branding Agency
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Elevate Your Brand With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
              Strategic PR
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We help brands and visionaries tell their impactful stories through strategic public relations, media coverage, and premium styling.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
              Book a Strategy Call
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-white/10 pt-12">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-white mb-1">500+</h4>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Media Placements</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-white mb-1">98%</h4>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Client Satisfaction</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <h4 className="text-3xl font-bold text-white mb-1">24/7</h4>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Crisis Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
