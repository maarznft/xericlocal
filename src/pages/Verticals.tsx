
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, Cpu, Smartphone, Zap, Shield, Cloud, Database, Globe, CheckCircle } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';

const Verticals = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Water Treatment & Desalination Solutions",
      description: "Designing and implementing seawater desalination and wastewater treatment systems, including zero liquid discharge, for sustainable water management.",
      features: [
        "Seawater Desalination Plants",
        "Wastewater Treatment Systems",
        "Zero Liquid Discharge Solutions",
        "Water Quality Management",
        "Membrane Technology"
      ],
      technologies: ["RO Technology", "Membrane Bioreactors", "UV Disinfection", "Advanced Oxidation"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Environmental Protection & Pollution Control",
      description: "Providing advanced pollution control systems, sewage treatment, and trenchless sewer rehabilitation using cutting-edge Japanese technology.",
      features: [
        "Advanced Pollution Control Systems",
        "Sewage Treatment Plants",
        "Trenchless Sewer Rehabilitation",
        "Air Quality Management",
        "Environmental Monitoring"
      ],
      technologies: ["Japanese Technology", "Biofilters", "Scrubber Systems", "CCTV Inspection"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Industrial Pumps, Engines, Valves & Spare Parts",
      description: "Supplying high-quality mechanical solutions for maritime, transportation, and industrial sectors.",
      features: [
        "Industrial Pump Systems",
        "Marine Engines & Parts",
        "Control Valves",
        "Transportation Equipment",
        "Emergency Spare Parts"
      ],
      technologies: ["Centrifugal Pumps", "Marine Propulsion", "Smart Valves", "Predictive Maintenance"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Power Generation, Transmission & Distribution",
      description: "Offering turbines, generators, energy storage, and waste-to-energy solutions with comprehensive maintenance services.",
      features: [
        "Gas & Steam Turbines",
        "Generator Systems",
        "Energy Storage Solutions",
        "Waste-to-Energy Plants",
        "Grid Integration"
      ],
      technologies: ["Combined Cycle", "Battery Storage", "Smart Grid", "Energy Management"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Solar Energy Solutions",
      description: "Designing and installing solar PV systems for residential, commercial, and industrial use with robotic panel cleaning.",
      features: [
        "Solar PV System Design",
        "Residential Solar Installations",
        "Commercial Solar Projects",
        "Industrial Solar Solutions",
        "Robotic Panel Cleaning"
      ],
      technologies: ["Monocrystalline Panels", "Inverter Technology", "Monitoring Systems", "Cleaning Robots"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Alternative Transportation Technologies",
      description: "Introducing eco-friendly, high-speed transportation solutions for the Middle East.",
      features: [
        "Electric Vehicle Infrastructure",
        "High-Speed Rail Systems",
        "Sustainable Logistics",
        "Smart Mobility Solutions",
        "Charging Networks"
      ],
      technologies: ["EV Charging", "Maglev Technology", "IoT Integration", "Smart Traffic"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Local Warehousing & Logistics",
      description: "Providing local inventory and logistics for quick access to critical and AOG spare parts.",
      features: [
        "Strategic Inventory Management",
        "AOG Parts Availability",
        "Supply Chain Optimization",
        "Emergency Response",
        "Digital Tracking Systems"
      ],
      technologies: ["Inventory Management", "RFID Tracking", "Automated Systems", "Real-time Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Badge */}
            <BlurFade delay={0.1} inView>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Comprehensive Solutions Portfolio</span>
              </div>
            </BlurFade>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <BlurFade delay={0.2} inView>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Our{" "}
                  <span className="text-primary">Services</span>
                </h1>
              </BlurFade>
              
              <BlurFade delay={0.3} inView>
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                  Comprehensive sustainable solutions tailored for the MENA region, delivering cutting-edge 
                  technology services that drive environmental responsibility and operational excellence.
                </p>
              </BlurFade>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {[
                { value: "7+", label: "Service Areas" },
                { value: "500+", label: "Projects" },
                { value: "ISO", label: "Certified" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <BlurFade key={stat.label} delay={0.4 + index * 0.1} inView>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                <div className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Solutions:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-primary/5 text-primary rounded-md text-xs font-medium border border-primary/10"
                        >
                          {tech}
                        </span>
                      ))}
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
                Ready to Transform Your Operations?
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Partner with XERIC to leverage cutting-edge sustainable technology solutions 
                tailored to your industry's unique needs across the MENA region.
              </p>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                  Schedule Consultation
                </button>
                <button className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-all font-medium">
                  Download Brochure
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

export default Verticals;
