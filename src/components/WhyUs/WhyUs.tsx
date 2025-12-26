import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const WhyUs = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  const differentiators = [
    {
      id: 1,
      title: 'Personalized Approach',
      description: 'Experienced professionals delivering tailored strategies for your unique needs.',
      icon: '👥'
    },
    {
      id: 2,
      title: 'Proven Track Record',
      description: 'Demonstrated success in driving measurable results for our clients.',
      icon: '🏆'
    },
    {
      id: 3,
      title: 'Market Understanding',
      description: 'Deep expertise in both Indian and global markets for comprehensive reach.',
      icon: '🌍'
    },
    {
      id: 4,
      title: 'Innovative Strategies',
      description: 'Creative, forward-thinking approaches tailored to achieve your goals.',
      icon: '💡'
    }
  ];

  return (
    <section
      id="why-us"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 bg-slate-950 scroll-mt-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Why Aaryavista?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={item.id}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-indigo-500/50 transition-all hover:-translate-y-1 hover:shadow-xl text-center group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-6 inline-block group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-xl font-semibold text-slate-100 mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
