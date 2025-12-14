"use client"
import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useState } from "react";
import Navbar from "~/components/Navbar";
import "../styles/page.css";
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronRight } from 'lucide-react'; // Icons
import { educationData } from "~/lib/educationData";
import { StarsBackground } from "~/components/ui/stars-background";
import { ShootingStars } from "~/components/ui/shooting-stars";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stefan - Education" },
    { name: "description", content: "my education" },
  ];
}


// --- COMPONENT 1: THE MODAL (The Pop-Up) ---
const CourseModal = ({ data , onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 1. Dark Backdrop with Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* 2. The Glassmorphic Modal Content */}
      <motion.div
        layoutId={`card-${data.id}`} // Magic layout transition
        className="relative w-full max-w-lg bg-gray-900/90 border border-blue-500/30 rounded-2xl p-6 shadow-2xl shadow-blue-500/20 overflow-hidden"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-7 right-5 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={20}/>
        </button>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{data.title}</h3>
            <p className="text-blue-400 text-sm">{data.subtitle}</p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            {data.description}
          </p>

          {/* Topics Tags */}
          <div className="flex flex-wrap gap-2">
            {data.topics.map((topic, i) => (
              <span 
                key={i} 
                className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-500/20 rounded-full border border-blue-500/20"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="pt-4">
            <a 
              href={data.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
            >
              View Course Page <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- COMPONENT 2: THE MAIN PAGE ---
export default function Education() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="page-container">
      <Navbar currentPage="education"/>

      <div className="mainpage edupage p-8 md:p-16 relative">
        <StarsBackground />
        <ShootingStars/>
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
          Education
        </h2>

        <div className="max-w-3xl mx-auto ">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {section.modules.map((module) => (
                  <motion.div
                    key={module.id}
                    layoutId={`card-${module.id}`}
                    onClick={() => setSelectedCourse(module)}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    className="group cursor-pointer p-4 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-blue-500/50 transition-all backdrop-blur-sm"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-gray-200 group-hover:text-blue-200 transition-colors">
                        {module.title}
                      </h4>
                      <ChevronRight size={16} className="text-gray-600 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>
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

      </div>
    </div>
  );
};