"use client"
import type { Route } from "./+types/home";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react'; // Icons

import Navbar from "~/components/Navbar";
import CourseModal from "~/components/CourseModal";
import ModuleGrid from "~/components/ModuleGrid";
import { educationData } from "~/lib/educationData";
import { StarsBackground } from "~/components/ui/stars-background";
import { ShootingStars } from "~/components/ui/shooting-stars";

import "../styles/page.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stefan - Education" },
    { name: "description", content: "my education" },
  ];
}


export default function Education() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  return (
    <div className="page-container">
      <Navbar currentPage="education"/>

      <div className="mainpage edupage p-8 md:p-16 relative">

        <StarsBackground/>
        <ShootingStars/>
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
          Education
        </h2>

        <div className="max-w-4xl mx-auto ">
          {educationData.map((section, index) => (
            <div key={section.id} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
              
              {/* 1. The Vertical Constellation Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />
              
              {/* 2. The Main "Planet" Node (Section Header) */}
              <div className="absolute left-[-5px] top-0 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,1)]" />

              {/* Section Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">{section.level}</h3>
                <p className="text-gray-400">{section.subtitle}</p>
              </div>

              {/* 3. The Grid of Course "Stars" */}
              {section.groups ? (
                // CASE A: The section has years (like University)
                <div className="space-y-8"> 
                  {section.groups.map((group) => (
                      <div key={group.year}>
                        {/* The Separator Title */}
                        <h4 className="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-3 border-b border-gray-800 pb-1 w-fit">
                          {group.year}
                        </h4>
                        {/* The Grid for this specific year */}
                        <ModuleGrid modules={group.modules} setSelectedCourse={setSelectedCourse} />
                      </div>
                    ))}
                  </div>
                ) : (
                  // CASE B: Flat list (like Pre-Uni)
                  <ModuleGrid modules={section.modules} setSelectedCourse={setSelectedCourse} />
                )}
            </div>
          ))}
        </div>

        {/* --- RENDER MODAL OUTSIDE THE LOOP --- */}
        <AnimatePresence>
          {selectedCourse && (
            <CourseModal 
              data={selectedCourse} 
              onClose={() => setSelectedCourse(null)} 
            />
          )}
        </AnimatePresence>

        {/* footnote */}
        <div className="z-10 relative mt-10 text-md">
          <p>* These are <a href="https://www.ox.ac.uk/admissions/graduate/courses/msc-advanced-computer-science" target="_blank">[master's]</a> level courses that I have taken during my undergrad.</p>
        </div>

      </div>
    </div>
  )
}