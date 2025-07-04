
import { Building, Contact, Home, Info, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlurFade } from '@/components/magicui/blur-fade';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <BlurFade delay={0.1} inView>
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/lovable-uploads/e89d63d2-e31b-443a-bf94-ad8b75361320.png" 
                  alt="XERIC Logo" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    console.log('Footer logo failed to load:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={() => console.log('Footer logo loaded successfully')}
                />
                <div className="flex flex-col">
                  <span className="text-xl font-heading font-bold">
                    XERIC Trading and Services L.L.C.
                  </span>
                  <span className="text-sm text-white/80">
                    License No: 1469895
                  </span>
                </div>
              </div>
              <p className="text-white/90 mb-6 max-w-md leading-relaxed">
                Empowering the MENA region by delivering sustainable solutions, efficient services, 
                and long-term operational excellence in energy, water, and infrastructure development.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/xeric-trading" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white text-sm font-semibold">in</span>
                </a>
                <a 
                  href="https://twitter.com/XericTrading" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white text-sm font-semibold">@</span>
                </a>
                <a 
                  href="https://www.instagram.com/xerictrading" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white text-sm font-semibold">ig</span>
                </a>
              </div>
            </div>
          </BlurFade>

          {/* Quick Links */}
          <BlurFade delay={0.2} inView>
            <div>
              <h3 className="font-heading font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                    <Home size={16} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                    <Info size={16} />
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/verticals" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                    <Building size={16} />
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                    <Contact size={16} />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </BlurFade>

          {/* Contact Info */}
          <BlurFade delay={0.3} inView>
            <div>
              <h3 className="font-heading font-bold text-white mb-4">Contact Info</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <div>
                    <p>OFF4-87, Building SMARK 2</p>
                    <p>Ras Al Khor Industrial Second</p>
                    <p>Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <p>+971-4-123-4567</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <p>info@xerictrading.com</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.4} inView>
          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/80 text-sm">
                © 2024 XERIC Trading and Services L.L.C. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
};

export default Footer;
