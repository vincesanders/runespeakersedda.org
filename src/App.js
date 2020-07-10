import React from 'react';
import Menu from './components/Menu';
import CTA from './components/CTA';
import SideBar from './components/SideBar';
import RunesSection from './components/RunesSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <Menu />
      <SideBar />
      <CTA />
      <RunesSection />
      <ContactForm />
    </div>
  );
}

export default App;
