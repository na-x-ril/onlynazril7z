"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { AnimatedElement } from "@/components/animations/animated-element";
import { skills } from "@/data/portfolio-data";
import useIsMobile from "@/hooks/useIsMobile";

// Helper untuk map iconKey ke komponen
const iconMap: Record<string, JSX.Element> = {
  SiJavascript: <SiJavascript color="yellow" size="40" />,
  SiTypescript: <SiTypescript size="40" />,
  SiReact: <SiReact color="#61DBFB" size="40" />,
  SiNodedotjs: <SiNodedotjs size="40" />,
  SiExpress: <SiExpress size="40" />,
  SiTailwindcss: <SiTailwindcss color="#38BDF8" size="40" />,
  SiGit: <SiGit color="#F1502F" size="40" />,
  AI: <div className="font-bold text-3xl text-[#4285F4]">AI</div>,
};

export const SkillsSection = () => {
  const { isMobile, isLoading } = useIsMobile();
  if (isLoading) {
    return <div>Detecting device...</div>;
  }

  return (
    <section id="skills" className="py-10 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedElement>
            <h2 className="text-4xl font-bold mb-4">Featured Skills</h2>
          </AnimatedElement>
          <AnimatedElement delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <AnimatedElement
              key={index}
              delay={index * (isMobile ? 70 : 20)}
              direction="up"
            >
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center p-6 rounded-xl bg-background hover:bg-muted/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-muted group-hover:bg-background transition-colors duration-300 text-3xl mb-4">
                  <span className={skill.color}>{iconMap[skill.iconKey]}</span>
                </div>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  {skill.name}
                </p>
              </a>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};
