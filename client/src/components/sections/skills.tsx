import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { staggerContainer, staggerItem, skillBarAnimation } from "@/lib/framer-variants";
import { Code, Database, Laptop, Wrench, Brain } from "lucide-react";

type SkillBarProps = {
  name: string;
  level: string;
  percentage: string;
  color: string;
};

const SkillBar = ({ name, level, percentage, color }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{level}</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: "0%" }}
          animate={isVisible ? { width: percentage } : { width: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Skills" 
          description="I've developed a diverse set of technical skills throughout my education and project work. Here's an overview of my technical proficiencies:"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h3 
              className="text-xl font-semibold mb-6 flex items-center"
              variants={staggerItem}
            >
              <Code className="text-green-500 mr-3 h-5 w-5" />
              ServiceNow & Enterprise Skills
            </motion.h3>
            
            <div className="space-y-5">
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="ServiceNow CSA" 
                  level="Certified" 
                  percentage="95%" 
                  color="bg-green-500" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="ServiceNow CAD" 
                  level="Certified" 
                  percentage="90%" 
                  color="bg-green-500" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="Agile/Scrum" 
                  level="Intermediate" 
                  percentage="80%" 
                  color="bg-green-500" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="System Administration" 
                  level="Intermediate" 
                  percentage="75%" 
                  color="bg-green-500" 
                />
              </motion.div>
            </div>
            
            <motion.h3 
              className="text-xl font-semibold mt-10 mb-6 flex items-center"
              variants={staggerItem}
            >
              <Code className="text-primary mr-3 h-5 w-5" />
              Programming Languages
            </motion.h3>
            
            <div className="space-y-5">
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="C" 
                  level="Intermediate" 
                  percentage="75%" 
                  color="bg-primary" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="Java" 
                  level="Intermediate" 
                  percentage="80%" 
                  color="bg-primary" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="Python" 
                  level="Basics" 
                  percentage="50%" 
                  color="bg-primary" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="JavaScript" 
                  level="Intermediate" 
                  percentage="75%" 
                  color="bg-primary" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="SQL" 
                  level="Basics" 
                  percentage="50%" 
                  color="bg-primary" 
                />
              </motion.div>
            </div>
            
            <motion.h3 
              className="text-xl font-semibold mt-10 mb-6 flex items-center"
              variants={staggerItem}
            >
              <Database className="text-green-500 mr-3 h-5 w-5" />
              Databases
            </motion.h3>
            
            <div className="space-y-5">
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="MySQL" 
                  level="Intermediate" 
                  percentage="65%" 
                  color="bg-green-500" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="MongoDB" 
                  level="Basics" 
                  percentage="50%" 
                  color="bg-green-500" 
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h3 
              className="text-xl font-semibold mb-6 flex items-center"
              variants={staggerItem}
            >
              <Laptop className="text-purple-500 mr-3 h-5 w-5" />
              Web Development
            </motion.h3>
            
            <div className="space-y-5">
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="HTML" 
                  level="Intermediate" 
                  percentage="75%" 
                  color="bg-purple-500" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="CSS" 
                  level="Intermediate" 
                  percentage="70%" 
                  color="bg-purple-500" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="React.js" 
                  level="Intermediate" 
                  percentage="75%" 
                  color="bg-purple-500" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="Node.js" 
                  level="Basics" 
                  percentage="50%" 
                  color="bg-purple-500" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="Express.js" 
                  level="Basics" 
                  percentage="45%" 
                  color="bg-purple-500" 
                />
              </motion.div>
            </div>
            
            <motion.h3 
              className="text-xl font-semibold mt-10 mb-6 flex items-center"
              variants={staggerItem}
            >
              <Wrench className="text-rose-500 mr-3 h-5 w-5" />
              Tools & Technologies
            </motion.h3>
            
            <div className="space-y-5">
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="Git" 
                  level="Intermediate" 
                  percentage="65%" 
                  color="bg-rose-500" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="VS Code" 
                  level="Intermediate" 
                  percentage="70%" 
                  color="bg-rose-500" 
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <SkillBar 
                  name="Android Studio" 
                  level="Beginner" 
                  percentage="35%" 
                  color="bg-rose-500" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h3 
            className="text-xl font-semibold mb-6 flex items-center justify-center"
            variants={staggerItem}
          >
            <Brain className="text-primary mr-3 h-5 w-5" />
            Core Subjects & Machine Learning
          </motion.h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <motion.div 
              className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center justify-center hover:shadow-lg transition text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <Database className="text-3xl text-primary mb-3 h-8 w-8" />
              <span className="font-medium">DBMS</span>
            </motion.div>
            
            <motion.div 
              className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center justify-center hover:shadow-lg transition text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-3xl text-purple-500 mb-3 h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="2" x2="9" y2="4"></line><line x1="15" y1="2" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="22"></line><line x1="15" y1="20" x2="15" y2="22"></line><line x1="20" y1="9" x2="22" y2="9"></line><line x1="20" y1="14" x2="22" y2="14"></line><line x1="2" y1="9" x2="4" y2="9"></line><line x1="2" y1="14" x2="4" y2="14"></line></svg>
              <span className="font-medium">Operating Systems</span>
            </motion.div>
            
            <motion.div 
              className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center justify-center hover:shadow-lg transition text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-3xl text-green-500 mb-3 h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></path></svg>
              <span className="font-medium">Computer Networks</span>
            </motion.div>
            
            <motion.div 
              className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center justify-center hover:shadow-lg transition text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-3xl text-rose-500 mb-3 h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z"></path><path d="M12 8a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Z"></path><path d="M12 14a6 6 0 0 0 6-6H6a6 6 0 0 0 6 6Z"></path><path d="M20 9v.5"></path><path d="M4 9v.5"></path><path d="M11.5 4h.5"></path><path d="M11.5 20h.5"></path><path d="M18 11.5v.5"></path><path d="M6 11.5v.5"></path><path d="m14 8-2 2-2-2"></path></svg>
              <span className="font-medium">Machine Learning</span>
            </motion.div>
            
            <motion.div 
              className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center justify-center hover:shadow-lg transition text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-3xl text-primary mb-3 h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m18 17-3-3-4 4-5-5"></path><path d="m18 9-3 3-4-4-5 5"></path></svg>
              <span className="font-medium">Data Science</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
