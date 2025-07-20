import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { slideInLeft, slideInUp } from "@/lib/framer-variants";
import { Briefcase, GraduationCap, MapPin, Code, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { images } from "@/lib/images";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full border-2 border-primary overflow-hidden mr-4">
                <img 
                  src={images.profile} 
                  alt="Valaji Veera Venkata Karthik" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">ServiceNow Certified & Full-Stack Developer</h3>
                <div className="flex items-center mt-2">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white mr-2">ServiceNow-Certified</Badge>
                  <Badge variant="outline" className="text-xs">CSA & CAD</Badge>
                </div>
              </div>
            </div>
            <p className="mb-4 text-muted-foreground">
              I'm Valaji Veera Venkata Karthik, a final year Computer Science & Engineering student at Mohan Babu University with a strong academic record (CGPA: 9.41).
              I'm passionate about web development, AI, and creating innovative solutions to real-world problems.
            </p>
            <p className="mb-6 text-muted-foreground">
              With internship experience at Satish Dhawan Space Centre SHAR and Academor, I've developed practical skills in backend development, 
              secure file transfer systems, and full-stack applications using the MERN stack.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <GraduationCap className="text-primary mr-3 w-6 h-6" />
                <span>B.Tech in CSE (2024)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary mr-3 w-6 h-6" />
                <span>Mohan Babu University</span>
              </div>
              <div className="flex items-center">
                <Code className="text-primary mr-3 w-6 h-6" />
                <span>Full-Stack Development</span>
              </div>
              <div className="flex items-center">
                <Brain className="text-primary mr-3 w-6 h-6" />
                <span>AI & Machine Learning</span>
              </div>
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <a 
                href="#contact" 
                className="inline-flex items-center px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition"
              >
                Get In Touch 
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInUp}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <GraduationCap className="text-green-500 mr-3 h-5 w-5" />
                  Education
                </h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Briefcase className="text-3xl text-primary h-8 w-8" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">B.Tech in Computer Science & Engineering</h4>
                      <p className="text-muted-foreground">Mohan Babu University</p>
                      <p className="text-primary font-medium">2024-present • CGPA: 9.41</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-20 h-20 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v8L4.72 20.55a.94.94 0 0 0 1.11 1.3c1.65-.33 3.78-.33 5.17.1a.94.94 0 0 0 1.11-1.3L6.84 10h2.37"></path><path d="M14 14c.15.68.15 1.37 0 2"></path><path d="M13 18.7a3.55 3.55 0 0 0 2.15.3c.66-.1 2-.5 2.71-.7"></path><path d="M13 13.3a3.55 3.55 0 0 1 2.15-.3c.66.1 2 .5 2.71.7"></path><path d="M19 6.3a3.55 3.55 0 0 0 2.15.3c.66-.1 2-.5 2.71-.7"></path><path d="M19 3.7a3.55 3.55 0 0 1 2.15-.3c.66.1 2 .5 2.71.7"></path><path d="M14 10c.15-.68.15-1.37 0-2"></path></svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">HSC BIEAP</h4>
                      <p className="text-muted-foreground">Sri Gayatri College</p>
                      <p className="text-green-500 font-medium">2022 • Score: 84%</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-20 h-20 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-500 h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">SSC State Board</h4>
                      <p className="text-muted-foreground">Sri Sri School</p>
                      <p className="text-purple-500 font-medium">2020 • CGPA: 10.0</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
