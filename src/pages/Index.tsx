import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Zap, Droplets, Sun, Building, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { BlurFade } from '@/components/magicui/blur-fade';

const Index = () => {
  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Sustainability Focused",
      description: "We integrate eco-friendly solutions into every project for minimal environmental impact and maximum efficiency."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Innovation Driven",
      description: "We bring global, cutting-edge technologies to address regional challenges with proven results."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Reliability & Efficiency",
      description: "Our long-term service approach ensures maximum system performance and operational excellence."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Regional Expertise",
      description: "Deep market knowledge allows us to tailor solutions specifically for the Middle East climate and needs."
    }
  ];

  const services = [
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Water Treatment & Desalination Solutions",
      description: "Designing and implementing seawater desalination and wastewater treatment systems, including zero liquid discharge, for sustainable water management.",
      benefits: ["Seawater Desalination", "Wastewater Treatment", "Zero Liquid Discharge", "Water Quality Management"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Environmental Protection & Pollution Control",
      description: "Providing advanced pollution control systems, sewage treatment, and trenchless sewer rehabilitation using cutting-edge Japanese technology.",
      benefits: ["Advanced Pollution Control", "Sewage Treatment", "Trenchless Rehabilitation", "Japanese Technology"]
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Solar Energy Solutions",
      description: "Designing and installing solar PV systems for residential, commercial, and industrial use with robotic panel cleaning technology.",
      benefits: ["Solar PV Systems", "Residential Solutions", "Commercial Projects", "Robotic Cleaning"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Power Generation, Transmission & Distribution",
      description: "Offering turbines, generators, energy storage, and waste-to-energy solutions with comprehensive maintenance services.",
      benefits: ["Turbines & Generators", "Energy Storage", "Waste-to-Energy", "Maintenance Services"]
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      role: "Project Director",
      company: "Dubai Municipality",
      content: "XERIC's water treatment solutions have been instrumental in our sustainability initiatives. Their expertise in desalination technology is exceptional and has exceeded our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Hassan",
      role: "Environmental Manager",
      company: "ADNOC",
      content: "Their pollution control systems exceeded our expectations. Professional team with deep understanding of regional environmental challenges and innovative solutions.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. Omar Khalil",
      role: "Chief Engineer",
      company: "Masdar City",
      content: "The solar energy solutions provided by XERIC are cutting-edge. Their maintenance services ensure optimal performance year-round with measurable results.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Fatima Al-Zahra",
      role: "Operations Director",
      company: "Emirates Water",
      content: "Outstanding water treatment technology implementation. The zero liquid discharge system has transformed our operational efficiency and environmental compliance.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Hassan Al-Mahmoud",
      role: "Sustainability Manager",
      company: "Qatar Energy",
      content: "XERIC's comprehensive approach to energy solutions is remarkable. Their team delivered beyond expectations with innovative sustainable technologies.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Layla Abdulla",
      role: "Project Manager",
      company: "DEWA",
      content: "Exceptional service quality and technical expertise. The solar installations have exceeded performance targets while maintaining the highest safety standards.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  const TestimonialCard = ({
    avatar,
    name,
    role,
    company,
    content,
    rating,
  }: {
    avatar: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 mx-2",
          "border-slate-200 bg-white hover:bg-slate-50/80 transition-all duration-300",
          "hover:shadow-xl hover:-translate-y-1"
        )}
      >
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-orange text-orange" />
          ))}
        </div>
        
        <blockquote className="text-slate-600 mb-6 text-base leading-relaxed italic">
          "{content}"
        </blockquote>
        
        <div className="flex items-center gap-4">
          <img 
            className="rounded-full border-2 border-slate-200" 
            width="48" 
            height="48" 
            alt={`${name} avatar`} 
            src={avatar} 
          />
          <div>
            <figcaption className="text-lg font-bold text-primary">
              {name}
            </figcaption>
            <p className="text-secondary font-medium">{role}</p>
            <p className="text-slate-500 text-sm">{company}</p>
          </div>
        </div>
      </figure>
    );
  };

  const stats = [
    { number: "7+", label: "Service Areas", description: "Comprehensive solutions portfolio" },
    { number: "6", label: "Years Experience", description: "Since 2018 in MENA region" },
    { number: "ISO", label: "Certified Quality", description: "9001, 14001, OHSAS 18001" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock technical assistance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <BlurFade delay={0.1} inView>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-primary">Why Choose XERIC?</h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We combine industry expertise with cutting-edge technology to deliver sustainable solutions 
                that drive real business results across the MENA region.
              </p>
            </BlurFade>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <BlurFade key={index} delay={0.3 + index * 0.1} inView>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-primary">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <BlurFade delay={0.1} inView>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-primary">Our Services</h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive sustainable solutions tailored for the MENA region, delivering innovation 
                in energy, water, and infrastructure development.
              </p>
            </BlurFade>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <BlurFade key={index} delay={0.3 + index * 0.2} inView>
                <div className="bg-white border border-slate-200 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4 text-primary">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="inline-flex items-center text-primary hover:text-secondary font-semibold text-lg group"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                <div className="space-y-4">
                  <div className="text-5xl lg:text-6xl font-heading font-bold">{stat.number}</div>
                  <div className="text-2xl font-semibold">{stat.label}</div>
                  <div className="text-white/80 text-lg">{stat.description}</div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Smooth Marquee */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <BlurFade delay={0.1} inView>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-primary">What Our Clients Say</h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what industry leaders across the MENA region 
                say about working with XERIC.
              </p>
            </BlurFade>
          </div>
          
          <BlurFade delay={0.3} inView>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl">
              <Marquee pauseOnHover className="[--duration:40s] py-4">
                {firstRow.map((testimonial) => (
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:40s] py-4">
                {secondRow.map((testimonial) => (
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-slate-50"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-slate-50"></div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8 text-primary">
                Ready to Start Your Sustainable Future?
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed">
                Let's discuss how XERIC can help your business leverage sustainable technology 
                for competitive advantage and environmental responsibility.
              </p>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 gradient-primary text-white rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-xl"
                >
                  Get Your Quote
                  <ArrowRight className="ml-3" size={24} />
                </Link>
                <Link 
                  to="/verticals"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-lg"
                >
                  Explore Services
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
