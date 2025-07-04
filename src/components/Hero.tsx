
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlurFade } from '@/components/magicui/blur-fade';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <BlurFade delay={0.1} inView>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Sustainable Solutions for MENA</span>
              </div>
            </BlurFade>

            {/* Main Heading */}
            <div className="space-y-6">
              <BlurFade delay={0.2} inView>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Empowering the</span>
                  <br />
                  <span className="text-foreground">Middle East with</span>
                  <br />
                  <span className="text-primary">
                    Sustainable Solutions
                  </span>
                </h1>
              </BlurFade>
              
              <BlurFade delay={0.3} inView>
                <p className="text-lg md:text-xl text-foreground/70 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
                  Innovative technologies in energy, water, and infrastructure for a greener tomorrow. 
                  XERIC delivers cutting-edge solutions across the MENA region with environmental 
                  responsibility and operational excellence.
                </p>
              </BlurFade>
            </div>

            {/* Call to Action */}
            <BlurFade delay={0.4} inView>
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 pt-4">
                <Link 
                  to="/verticals"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium shadow-sm"
                >
                  Discover Our Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                
                <button className="inline-flex items-center justify-center px-8 py-3 bg-white border border-border text-foreground rounded-lg hover:bg-muted/50 transition-all duration-200 font-medium">
                  <Play className="mr-2 w-4 h-4 text-primary" />
                  Watch Video
                </button>
              </div>
            </BlurFade>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-2xl lg:mx-0 mx-auto">
              {[
                { value: "7+", label: "Service Areas" },
                { value: "2018", label: "Established" },
                { value: "ISO", label: "Certified" },
                { value: "MENA", label: "Region Focus" }
              ].map((stat, index) => (
                <BlurFade key={stat.label} delay={0.5 + index * 0.1} inView>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative order-first lg:order-last">
            <BlurFade delay={0.6} inView>
              <div className="relative">
                {/* Main Hero Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Advanced technology and sustainable solutions"
                    className="w-full h-[500px] lg:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>
                
                {/* Floating Secondary Image */}
                <BlurFade delay={0.8} inView>
                  <div className="absolute -bottom-6 -left-6 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Sustainable energy solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </BlurFade>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 gradient-primary rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute top-1/2 -left-8 w-16 h-16 bg-accent/30 rounded-full opacity-60 blur-xl"></div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
