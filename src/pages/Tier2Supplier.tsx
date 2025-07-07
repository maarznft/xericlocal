
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, CheckCircle, Truck } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';

const Tier2Supplier = () => {
  const services = [
    {
      title: "Aerospace and Defense Support",
      description: "Specialized supply chain support for aerospace and defense contractors with critical component sourcing.",
      features: ["Certified suppliers", "Quality assurance", "Rapid response", "Documentation support", "Compliance management"]
    },
    {
      title: "Construction Equipment Support",
      description: "Comprehensive parts and service support for construction equipment manufacturers and operators.",
      features: ["Heavy equipment parts", "Maintenance support", "Emergency services", "Inventory management", "Technical expertise"]
    },
    {
      title: "Energy Sector Support",
      description: "Specialized supply chain solutions for oil & gas, renewable energy, and power generation industries.",
      features: ["Energy infrastructure", "Power generation support", "Oil & gas equipment", "Renewable energy components", "Emergency response"]
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
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Specialized Tier-2 Supply Chain</span>
              </div>
            </BlurFade>
            
            <div className="space-y-6">
              <BlurFade delay={0.2} inView>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Specialized Tier-2{" "}
                  <span className="text-primary">Supply Chain</span>
                </h1>
              </BlurFade>
              
              <BlurFade delay={0.3} inView>
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                  Comprehensive supply chain support services for aerospace, defense, construction, 
                  and energy sectors with specialized expertise and rapid response capabilities.
                </p>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                <div className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Building className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                      <p className="text-foreground/70 leading-relaxed mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
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
                Streamline Your Supply Chain Operations
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Partner with XERIC for specialized supply chain solutions that ensure 
                reliable, efficient, and compliant operations across critical industries.
              </p>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                  Partner With Us
                </button>
                <button className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-all font-medium">
                  Supply Chain Solutions
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

export default Tier2Supplier;
