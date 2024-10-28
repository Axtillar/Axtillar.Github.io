import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import EmailLink from './components/EmailLink';

function App() {
  const nameVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navbar />
      
      <div className="px-6 md:px-12 lg:px-24 relative">
        <SocialLinks />
        <EmailLink />
        
        <main className="max-w-5xl mx-auto pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#64ffda] font-mono text-lg mb-5">Hi, my name is [ Axtillar.]</p>
            
            <motion.div
              variants={nameVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-slate-200 relative z-10 inline-block">
                LikHon Das
                <span className="text-[#64ffda]">.</span>
                <div className="absolute -bottom-2 left-0 w-full h-[0.2em] bg-[#64ffda]/20"></div>
              </h1>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-slate-400">
              I build things for the web.
            </h2>
             <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-2xl">
              I'm a software engineer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I'm focused on building accessible, 
              human-centered products at{' '}
              <a 
                href="#" 
                className="text-[#64ffda] hover:underline"
              >
                Upstatement
              </a>
              .
            </p>
            <button className="border border-[#64ffda] text-[#64ffda] px-7 py-4 rounded font-mono hover:bg-[#64ffda]/10 transition-colors">
              Check out my course!
            </button>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default App;