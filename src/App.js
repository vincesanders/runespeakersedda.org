import React from 'react';
import Menu from './components/Menu';
import CTA from './components/CTA';
import SideBar from './components/SideBar';
import RunesSection from './components/RunesSection';

function App() {
  return (
    <div>
      <Menu />
      <SideBar />
      <CTA />
      <RunesSection />
    </div>
  );
}

export default App;
