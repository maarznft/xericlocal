
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, CheckCircle, Droplets } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';

const WaterInfrastructure = () => {
  const solutions = [
    {
      title: "Trenchless Pipe Rehabilitation",
      description: "Advanced pipe rehabilitation techniques that minimize disruption to existing infrastructure while extending pipeline lifespan.",
      features: ["Cured-in-place pipe (CIPP)", "Pipe bursting technology", "Slip lining solutions", "Minimal excavation required"]
    },
    {
      title: "Water Purification Systems",
      description: "Comprehensive water treatment solutions ensuring clean, safe water for communities and industries.",
      features: ["Multi-stage filtration", "UV disinfection", "Reverse osmosis", "Chemical treatment processes"]
    },
    {
      title: "Wastewater Management",
      description: "Efficient wastewater treatment and management systems for sustainable water resource utilization.",
      features: ["Primary treatment", "Secondary biological treatment", "Tertiary treatment", "Sludge management"]
    },
    {
      title: "Zero Liquid Discharge Systems",
      description: "Innovative systems that eliminate liquid waste discharge, maximizing water recovery and minimizing environmental impact.",
      features: ["Complete water recovery", "Solid waste minimization", "Energy optimization", "Environmental compliance"]
    },
    {
      title: "Sewage Treatment Facilities",
      description: "Complete sewage treatment infrastructure for municipalities and industrial complexes.",
      features: ["Municipal sewage treatment", "Industrial wastewater processing", "Odor control systems", "Automated monitoring"]
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
                <Droplets className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Water Infrastructure Solutions</span>
              </div>
            </BlurFade>
            
            <div className="space-y-6">
              <BlurFade delay={0.2} inView>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Water Infrastructure{" "}
                  <span className="text-primary">Solutions</span>
                </h1>
              </BlurFade>
              
              <BlurFade delay={0.3} inView>
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                  Comprehensive water infrastructure solutions designed to address the growing water challenges 
                  in the MENA region through innovative technology and sustainable practices.
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
                      <Building className="w-6 h-6" />
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
                Ready to Transform Your Water Infrastructure?
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Partner with XERIC to implement cutting-edge water infrastructure solutions 
                that ensure sustainable water management for your community or industry.
              </p>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                  Get Consultation
                </button>
                <button className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-all font-medium">
                  View Case Studies
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

export default WaterInfrastructure;
