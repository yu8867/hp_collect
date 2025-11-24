import React, { useState, useRef } from 'react';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Lineup } from './components/Lineup';
import { Ritual } from './components/Ritual';
import { Subscription } from './components/Subscription';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { SubscriptionForm } from './components/SubscriptionForm';
import { Journal } from './components/Journal';

export default function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubscriptionFormVisible, setIsSubscriptionFormVisible] = useState(false);
  const subscriptionFormRef = useRef<HTMLDivElement>(null);

  const handleStartSubscription = () => {
    setIsSubscriptionFormVisible(true);
    // Slight delay to ensure the element is rendered and can be scrolled to
    setTimeout(() => {
      subscriptionFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <Hero />
      <Philosophy />
      <Lineup />
      <Ritual />
      <Journal />
      <Subscription onStartClick={handleStartSubscription} />
      
      <SubscriptionForm 
        isVisible={isSubscriptionFormVisible} 
        formRef={subscriptionFormRef} 
      />

      <Testimonial />
      
      <Footer 
        onAboutClick={() => setIsAboutOpen(true)}
        onContactClick={() => setIsContactOpen(true)} 
      />

      <AboutModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
