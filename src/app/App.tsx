import { Menu, X, ChevronDown, Drill, Factory, Shield, Users, Award, Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ContactForm } from './components/ContactForm';
import logo from '../imports/ChatGPT_Image_May_25__2026__12_14_28_PM.png';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src={logo} alt="McDaniel Energy LLC" className="h-12" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1776196463688-5f21c9632c75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBkcmlsbGluZyUyMHJpZyUyMGluZHVzdHJpYWwlMjBlbmVyZ3l8ZW58MXx8fHwxNzc5NzI2MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Drilling rig operating at night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Powering America's Energy Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Leading oil drilling and extraction solutions with cutting-edge technology and unmatched expertise
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Future of Energy Production
              </h2>
              <p className="text-muted-foreground mb-4">
                McDaniel Energy LLC is a dynamic new force in oil drilling and extraction. Founded on principles of excellence, safety, and environmental responsibility, we're bringing fresh innovation to America's energy sector.
              </p>
              <p className="text-muted-foreground mb-4">
                We leverage cutting-edge drilling techniques and maintain the highest safety standards to ensure efficient and sustainable energy production. Our commitment is to combine modern technology with proven industry practices to deliver exceptional results.
              </p>
              <p className="text-muted-foreground">
                As we establish our presence across key energy regions, we're dedicated to becoming a trusted partner in powering America's energy future through reliable, responsible operations.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1778124691381-ee0ef169500c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvaWwlMjBkcmlsbGluZyUyMHJpZyUyMGluZHVzdHJpYWwlMjBlbmVyZ3l8ZW58MXx8fHwxNzc5NzI2MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Oil pump jack at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive oil drilling and extraction solutions tailored to meet your energy production needs
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-card p-8 rounded-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Drill className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Directional Drilling
              </h3>
              <p className="text-muted-foreground">
                Advanced directional drilling techniques to access hard-to-reach reserves and maximize well productivity.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card p-8 rounded-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Production Optimization
              </h3>
              <p className="text-muted-foreground">
                Cutting-edge extraction methods and continuous monitoring to ensure optimal production rates and efficiency.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card p-8 rounded-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Safety & Compliance
              </h3>
              <p className="text-muted-foreground">
                Rigorous safety protocols and full regulatory compliance to protect our team and the environment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-primary-foreground/90 text-lg">
                To deliver innovative, safe, and environmentally responsible oil drilling and extraction solutions that power America's energy independence while maintaining the highest standards of operational excellence.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-primary-foreground/90 text-lg">
                To become a leading force in the energy sector by combining cutting-edge technology with sustainable practices, creating value for our clients while protecting the environment for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Service Coverage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            McDaniel Energy LLC is positioned to serve key energy-producing regions across the United States, with a focus on delivering exceptional drilling and extraction services where they're needed most.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-card border border-border rounded-lg">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Southwest Region</h3>
              <p className="text-muted-foreground">Texas, Oklahoma, New Mexico</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Midwest Region</h3>
              <p className="text-muted-foreground">Ohio, Pennsylvania, West Virginia</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Rocky Mountain</h3>
              <p className="text-muted-foreground">Wyoming, Colorado, North Dakota</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Credentials & Compliance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            McDaniel Energy LLC maintains all necessary certifications and adheres to the highest industry standards for safety, environmental protection, and operational excellence.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">OSHA Certified</h3>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">EPA Compliant</h3>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">State Licensed</h3>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Insured & Bonded</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose McDaniel Energy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Experienced Team
              </h3>
              <p className="text-muted-foreground">
                Over 20 years of combined expertise in oil drilling and extraction operations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Industry Leading
              </h3>
              <p className="text-muted-foreground">
                Recognized for excellence and innovation in energy production solutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Safety First
              </h3>
              <p className="text-muted-foreground">
                Unwavering commitment to safety standards and environmental protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your energy production needs? Contact us today for a consultation.
            </p>
          </div>

          <div className="mb-12">
            <ContactForm />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a href="tel:937-798-3465" className="text-muted-foreground hover:text-primary transition-colors">
                937-798-3465
              </a>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a href="mailto:chadmcdaniel138@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                chadmcdaniel138@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Houston, TX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="McDaniel Energy LLC" className="h-10" />
            </div>

            <div className="flex gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div className="text-center">
              <p className="text-primary-foreground/80 mb-2">
                © 2026 McDaniel Energy LLC. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-sm">
                Energy Today. Powering Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}