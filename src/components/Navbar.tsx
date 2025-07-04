
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      name: 'Home', 
      path: '/',
      dropdown: [
        { name: 'Overview', path: '/', description: 'Company overview and mission' },
        { name: 'Why Choose Us', path: '/#why-choose', description: 'Our competitive advantages' },
        { name: 'Our Impact', path: '/#impact', description: 'Environmental impact metrics' }
      ]
    },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'Our Story', path: '/about', description: 'Company history and vision' },
        { name: 'Leadership Team', path: '/about#team', description: 'Meet our executives' },
        { name: 'Certifications', path: '/about#certifications', description: 'Quality standards and awards' },
        { name: 'Careers', path: '/about#careers', description: 'Join our team' }
      ]
    },
    { 
      name: 'Services', 
      path: '/verticals',
      dropdown: [
        { name: 'Water Treatment', path: '/verticals#water', description: 'Desalination and purification' },
        { name: 'Solar Energy', path: '/verticals#solar', description: 'Renewable energy solutions' },
        { name: 'Industrial Equipment', path: '/verticals#industrial', description: 'Pumps, valves, and spare parts' },
        { name: 'Environmental Protection', path: '/verticals#environment', description: 'Pollution control systems' },
        { name: 'Power Generation', path: '/verticals#power', description: 'Energy infrastructure' }
      ]
    },
    { 
      name: 'Contact', 
      path: '/contact',
      dropdown: [
        { name: 'Get in Touch', path: '/contact', description: 'Send us a message' },
        { name: 'Office Locations', path: '/contact#locations', description: 'Find our offices' },
        { name: 'Support', path: '/contact#support', description: '24/7 customer support' },
        { name: 'Request Quote', path: '/contact#quote', description: 'Get project pricing' }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30 shadow-lg backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with the new XERIC logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative flex-shrink-0">
              <img 
                src="/lovable-uploads/e89d63d2-e31b-443a-bf94-ad8b75361320.png" 
                alt="XERIC Logo" 
                className="h-14 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                style={{ maxHeight: '56px' }}
                onError={(e) => {
                  console.log('Logo failed to load:', e);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => console.log('Logo loaded successfully')}
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl lg:text-2xl font-heading font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                XERIC
              </span>
              <span className="text-xs lg:text-sm text-muted-foreground -mt-1 font-medium group-hover:text-accent transition-colors duration-300">
                Trading and Services L.L.C.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger 
                      className={`text-base font-semibold transition-all duration-300 hover:text-primary hover:scale-105 bg-transparent hover:bg-primary/5 px-4 py-2 rounded-lg ${
                        isActive(item.path) 
                          ? 'text-primary bg-primary/10 shadow-sm' 
                          : 'text-foreground'
                      }`}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-card/95 backdrop-blur-xl border border-border/50 shadow-xl rounded-xl p-4 min-w-[400px]">
                      <div className="grid gap-3">
                        <h4 className="text-lg font-semibold text-primary mb-2">{item.name}</h4>
                        {item.dropdown.map((dropItem) => (
                          <NavigationMenuLink key={dropItem.name} asChild>
                            <Link
                              to={dropItem.path}
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:shadow-sm transition-all duration-200 group border border-transparent hover:border-primary/20"
                            >
                              <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                                {dropItem.name}
                              </div>
                              <div className="text-sm text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors duration-200">
                                {dropItem.description}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link 
              to="/contact"
              className="ml-6 gradient-primary text-white px-8 py-3 rounded-xl hover:opacity-90 hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold shadow-lg border border-primary/20 hover:border-primary/40"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/80 transition-all duration-200 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X size={28} className="text-foreground hover:text-primary transition-colors duration-200" /> : 
              <Menu size={28} className="text-foreground hover:text-primary transition-colors duration-200" />
            }
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-card/95 backdrop-blur-xl rounded-b-xl border-t border-border/30 shadow-xl">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                      isActive(item.path) 
                        ? 'text-primary bg-primary/10 shadow-sm' 
                        : 'text-foreground hover:bg-muted/80 hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <ChevronDown size={16} className="text-muted-foreground" />
                  </Link>
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.path}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link 
                to="/contact"
                className="block w-full mt-6 gradient-primary text-white text-center px-6 py-4 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300 font-semibold shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
