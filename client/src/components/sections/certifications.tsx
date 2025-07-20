import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { slideInUp, staggerContainer, staggerItem } from "@/lib/framer-variants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Code, Target, Star } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Certifications & Achievements" 
          description="Professional certifications and notable achievements that demonstrate my expertise and commitment to continuous learning."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <Award className="text-green-500 mr-3 h-5 w-5" />
              ServiceNow Certifications
            </motion.h3>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">Certified System Administrator (CSA)</h4>
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">ServiceNow</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Comprehensive knowledge of ServiceNow platform administration, including user management, 
                    system configuration, and platform customization.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span>Advanced platform administration skills</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">Certified Application Developer (CAD)</h4>
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">ServiceNow</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Expertise in developing custom applications and workflows on the ServiceNow platform, 
                    including scripting, automation, and integration capabilities.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Code className="h-4 w-4 mr-1 text-blue-500" />
                    <span>Custom application development</span>
                  </div>
                </CardContent>
              </Card>
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
              <Trophy className="text-purple-500 mr-3 h-5 w-5" />
              Achievements & Recognition
            </motion.h3>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">2nd Place - Care-A-Thon 2024</h4>
                    <Badge className="bg-purple-500 hover:bg-purple-600 text-white">Racloop</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Secured second place among 150+ competing teams in the Care-A-Thon hackathon, 
                    demonstrating innovative problem-solving and technical excellence.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Target className="h-4 w-4 mr-1 text-purple-500" />
                    <span>150+ competing teams</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">Problem Solving Excellence</h4>
                    <Badge className="bg-blue-500 hover:bg-blue-600 text-white">LeetCode & HackerRank</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Successfully solved 150+ problems across LeetCode and HackerRank platforms, 
                    specializing in Java and SQL programming challenges.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Code className="h-4 w-4 mr-1 text-blue-500" />
                    <span>150+ problems solved</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">ISRO Internship Success</h4>
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white">SDSC SHAR</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Successfully completed internship at Satish Dhawan Space Centre SHAR, ISRO, 
                    contributing to critical backend systems and receiving appreciation for technical contributions.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-1 text-orange-500" />
                    <span>35% performance improvement achieved</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 