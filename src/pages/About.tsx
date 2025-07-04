
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, Lightbulb, ArrowDown, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [{
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation Driven",
    description: "We bring global, cutting-edge technologies to address regional challenges in the MENA market."
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Sustainability Focused",
    description: "We integrate eco-friendly solutions into every project for minimal environmental impact."
  }, {
    icon: <Target className="w-6 h-6" />,
    title: "Reliability & Efficiency",
    description: "Our long-term service approach ensures maximum system performance and operational excellence."
  }, {
    icon: <Award className="w-6 h-6" />,
    title: "Regional Expertise",
    description: "Deep market knowledge allows us to tailor solutions specifically for the Middle East and North Africa."
  }];

  const certifications = [{
    name: "ISO 9001:2015",
    description: "Quality Management System certification ensuring consistent quality in all our services and deliverables."
  }, {
    name: "ISO 14001:2015",
    description: "Environmental Management System certification demonstrating our commitment to environmental responsibility."
  }, {
    name: "OHSAS 18001",
    description: "Occupational Health and Safety certification ensuring safe working environments for all our projects."
  }];

  const milestones = [{
    year: "2018",
    event: "Company Founded",
    description: "XERIC Trading and Services L.L.C. established in Dubai, UAE with License No. 1469895"
  }, {
    year: "2019",
    event: "First Major Project",
    description: "Secured first large-scale water treatment project in the UAE"
  }, {
    year: "2020",
    event: "ISO Certifications",
    description: "Achieved ISO 9001, 14001, and OHSAS 18001 certifications"
  }, {
    year: "2021",
    event: "Solar Division Launch",
    description: "Expanded services to include comprehensive solar energy solutions"
  }, {
    year: "2022",
    event: "Regional Expansion",
    description: "Extended operations across MENA region with strategic partnerships"
  }, {
    year: "2023",
    event: "Environmental Innovation",
    description: "Launched advanced pollution control systems using Japanese technology"
  }, {
    year: "2024",
    event: "Sustainable Leadership",
    description: "Recognized as leading provider of sustainable infrastructure solutions"
  }];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Est. 2018 • Dubai, UAE</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                About{" "}
                <span className="text-primary">XERIC</span>
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                Pioneering sustainable infrastructure solutions across the MENA region with cutting-edge technology and environmental responsibility.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-foreground/60 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-foreground/60 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-foreground/60 font-medium">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-foreground/60 font-medium">ISO Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-foreground/70 leading-relaxed text-lg">
                To empower the MENA region by delivering sustainable solutions, efficient services, 
                and long-term operational excellence through technology-driven innovation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="text-foreground/70 leading-relaxed text-lg">
                To lead the MENA region in sustainable energy, water, and infrastructure solutions, 
                fostering a greener future through innovation and exceptional partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Core Values</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              Principles that guide our decisions and drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto text-primary">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Journey</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              Key milestones that shaped our commitment to sustainable solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start bg-white rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.event}</h3>
                    <p className="text-foreground/70 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              International quality and environmental management standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-8 text-center space-y-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{cert.name}</h3>
                <p className="text-foreground/60 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">Company Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 border border-border space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Legal Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Company Name</h4>
                    <p className="text-foreground/70">XERIC Trading and Services L.L.C.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">License Number</h4>
                    <p className="text-foreground/70">1469895</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Established</h4>
                    <p className="text-foreground/70">2018</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Industry Focus</h4>
                    <p className="text-foreground/70">Energy, Renewables, Water Treatment, Infrastructure</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Office Address</h3>
                <div className="text-foreground/70 space-y-2 leading-relaxed">
                  <p>OFF4-87, Building SMARK 2</p>
                  <p>Ras Al Khor Industrial Second</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
