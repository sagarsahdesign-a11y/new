import { Analytics } from '@vercel/analytics/react';
import { SagarNav } from './components/sagar/SagarNav';
import { SagarHero } from './components/sagar/SagarHero';
import { SagarProjects } from './components/sagar/SagarProjects';
import { SagarExperience } from './components/sagar/SagarExperience';
import { SagarLifeOutside } from './components/sagar/SagarLifeOutside';
import { SagarPlayground } from './components/sagar/SagarPlayground';
import { SagarConstellation } from './components/sagar/SagarConstellation';
import { SagarFigMint } from './components/sagar/SagarFigMint';
import { SagarAbout } from './components/sagar/SagarAbout';
import { SagarTestimonials } from './components/sagar/SagarTestimonials';
import { SagarFooter } from './components/sagar/SagarFooter';

export default function App() {
  return (
    <>
      <SagarNav />
      <SagarHero />
      <SagarProjects />
      <SagarExperience />
      <SagarLifeOutside />
      <SagarPlayground />
      <SagarConstellation />
      <SagarFigMint />
      <SagarAbout />
      <SagarTestimonials />
      <SagarFooter />
      <Analytics />
    </>
  );
}