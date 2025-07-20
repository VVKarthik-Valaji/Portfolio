export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-muted dark:bg-muted/20 py-8 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold font-sans">
              <span className="text-foreground">VVK</span>
              <span className="text-primary">Karthik</span>
            </h3>
            <p className="mt-2 text-muted-foreground">Computer Science Student & Web Developer</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0">
            <a href="#home" className="text-muted-foreground hover:text-primary transition">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition">Skills</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition">Experience</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/valajivvkarthik" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="mailto:valajivvkarthik@gmail.com" className="text-muted-foreground hover:text-rose-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </a>
            <a href="tel:+919392999645" className="text-muted-foreground hover:text-green-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {year} Valaji Veera Venkata Karthik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
