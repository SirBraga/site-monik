import { Hero } from './components/Hero';
import { Method } from './components/Method';
import { Results } from './components/Results';
import { Mentor } from './components/Mentor';
import { Content } from './components/Content';
import { Bonuses } from './components/Bonuses';
import { Faq } from './components/Faq';
import { FinalCTA } from './components/FinalCTA';
import { Diagnostics } from './components/Diagnostics';
import { Routine } from './components/Routine';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mentor />
      <Method />
      <Results />
      <Diagnostics />
      <Routine />
      <Content />
      <Bonuses />
      <Faq />
      <FinalCTA />
    </main>
  );
}
