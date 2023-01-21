import './App.scss';
import { HeaderNavigation } from './components/common/HeaderNavigation';
import { AboutUsSection } from './components/pages/home/AboutUsSction';
import { CloudServiceSection } from './components/pages/home/CloudServicesSection';
import { ContactUsSection } from './components/pages/home/ContactUsSection';
import { HeaderSection } from './components/pages/home/HeaderSection';
import { MoreSolutionSection } from './components/pages/home/MoreServicesSection';
import { SecuritySolutionSection } from './components/pages/home/SecuritySolutionSection';
import { SoftwareServicesSection } from './components/pages/home/SoftwareServicesSection';

function App() {
  return (
    <div className="App">
      <HeaderNavigation />
      <HeaderSection />
      <CloudServiceSection />
      <SoftwareServicesSection />
      <SecuritySolutionSection />
      <MoreSolutionSection />
      <AboutUsSection />
      <ContactUsSection />
    </div>
  );
}

export default App;
