/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Students from './sections/Students';
import Exhibition from './sections/Exhibition';
import Reservation from './sections/Reservation';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Students />
        <Exhibition />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
