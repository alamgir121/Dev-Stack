import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechnologyGrid from "./components/TechnologyGrid.jsx";
import YourStack from "./components/YourStack.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [stack, setStack] = useState([]);

  
  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack]);

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(id) {
    const tech = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <TechnologyGrid stackIds={stackIds} onAdd={handleAdd}>
          <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </TechnologyGrid>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2800} newestOnTop />
    </div>
  );
}
