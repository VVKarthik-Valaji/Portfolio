import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideInRight } from "@/lib/framer-variants";
import { images } from "@/lib/images";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-gradient-home relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 opacity-10 dark:opacity-20 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="text-primary/10">
          <pattern id="pattern-circles" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="2" fill="currentColor"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mt-20 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans mb-6">
              Hi, I'm <span className="text-primary">Valaji Veera Venkata Karthik</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium mb-6 text-foreground/80">
              ServiceNow Certified & Web Developer
            </h2>
            <p className="text-lg mb-8 max-w-xl text-muted-foreground">
            Final-year B.Tech CSE student at Mohan Babu University, passionate about
             full-stack development, Java, and building real-world applications. Eager to explore innovative technologies and solve challenging problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/30">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="mt-8 flex space-x-4">
              <a 
                href="https://linkedin.com/in/valajivvvkarthik" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:bg-[#0077b5]/90 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333] text-white hover:bg-[#333]/90 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a 
                href="mailto:valajivvvkarthik@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-500 text-white hover:bg-rose-500/90 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </a>
              <a 
                href="tel:+919392999645"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-500/90 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center mt-12 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-accent to-green-500 blur-lg opacity-70 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-background overflow-hidden">
                <img 
                  src={images.profile} 
                  alt="Valaji Veera Venkata Karthik" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-primary">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
