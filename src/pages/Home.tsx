import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Trust } from '../components/Trust';
import { Process } from '../components/Process';

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Trust />
      <Process />
    </main>
  );
}
