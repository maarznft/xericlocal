
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Plane, CheckCircle, Cpu } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';

const Aerospace = () => {
  const technologies = [
    {
      title: "Amphibious Aircraft",
      description: "Versatile aircraft designed for both land and water operations, perfect for diverse operational requirements.",
      features: ["Land and water takeoff/landing", "Search and rescue operations", "Remote area access", "Maritime patrol capabilities"]
    },
    {
      title: "Vertical Take-off and Landing (VTOL) Aircraft",
      description: "Advanced VTOL aircraft technology for urban mobility and specialized mission requirements.",
      features: ["Urban air mobility", "Emergency medical services", "Cargo transport", "Surveillance missions"]
    },
    {
      title: "Drones for Oil & Gas and Agriculture",
      description: "Specialized unmanned aerial vehicles designed for industrial and agricultural applications.",
      features: ["Pipeline inspection", "Crop monitoring", "Precision agriculture", "Environmental monitoring"]
    },
    {
      title: "AI-based Aircrew Training Simulators",
      description: "Advanced simulation systems using artificial intelligence to enhance pilot training and safety.",
      features: ["Realistic flight simulation", "AI-powered scenarios", "Performance analytics", "Cost-effective training"]
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
                <Plane className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Aerospace Technologies</span>
              </div>
            </BlurFade>
            
            <div className="space-y-6">
              <BlurFade delay={0.2} inView>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Aerospace{" "}
                  <span className="text-primary">Technologies</span>
                </h1>
              </BlurFade>
              
              <BlurFade delay={0.3} inView>
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                  Cutting-edge aerospace solutions including advanced aircraft technologies, 
                  unmanned systems, and AI-powered training simulators for the future of aviation.
                </p>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                <div className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{tech.title}</h3>
                      <p className="text-foreground/70 leading-relaxed mb-4">{tech.description}</p>
                      <ul className="space-y-2">
                        {tech.features.map((feature, idx) => (
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
                Ready to Explore Aerospace Innovation?
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Discover how our aerospace technologies can transform your operations 
                with advanced aircraft solutions and cutting-edge training systems.
              </p>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                  Schedule Demo
                </button>
                <button className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-all font-medium">
                  Technical Specs
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

export default Aerospace;
