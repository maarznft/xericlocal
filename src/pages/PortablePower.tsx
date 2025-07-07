
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Zap, CheckCircle, Building } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';

const PortablePower = () => {
  const solutions = [
    {
      title: "Mobile Power Generation",
      description: "Portable power solutions for remote locations, emergency situations, and temporary power requirements.",
      features: ["Diesel generators", "Solar power systems", "Battery storage", "Hybrid solutions", "Remote monitoring"]
    },
    {
      title: "Emergency Power Systems",
      description: "Reliable backup power solutions for critical infrastructure and emergency response operations.",
      features: ["Uninterruptible power supply", "Automatic transfer switches", "Load management", "24/7 monitoring", "Rapid deployment"]
    },
    {
      title: "Industrial Portable Power",
      description: "Heavy-duty portable power systems designed for industrial applications and construction sites.",
      features: ["High-capacity units", "Weather-resistant design", "Multi-outlet configurations", "Fuel efficiency", "Maintenance support"]
    },
    {
      title: "Renewable Portable Solutions",
      description: "Eco-friendly portable power systems utilizing solar, wind, and hybrid renewable technologies.",
      features: ["Solar panel systems", "Wind power integration", "Battery storage", "Clean energy", "Environmental compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <BlurFade delay={0.1} inView>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Portable Power Systems</span>
              </div>
            </BlurFade>
            
            <div className="space-y-6">
              <BlurFade delay={0.2} inView>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Portable Power{" "}
                  <span className="text-primary">Systems</span>
                </h1>
              </BlurFade>
              
              <BlurFade delay={0.3} inView>
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                  Reliable, efficient, and versatile portable power solutions for emergency response, 
                  remote operations, and temporary power requirements across various industries.
                </p>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                <div className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {index % 2 === 0 ? <Zap className="w-6 h-6" /> : <Building className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{solution.title}</h3>
                      <p className="text-foreground/70 leading-relaxed mb-4">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/70 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <BlurFade delay={0.1} inView>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Power Solutions for Every Need
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Choose XERIC for reliable portable power systems that deliver consistent, 
                efficient power wherever and whenever you need it most.
              </p>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                  Find Your Solution
                </button>
                <button className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-all font-medium">
                  Power Calculator
                </button>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortablePower;
