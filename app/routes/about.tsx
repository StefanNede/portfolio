"use client"
import type { Route } from "./+types/home";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";
import "../styles/page.css";
import { StarsBackground } from "~/components/ui/stars-background";
import { ShootingStars } from "~/components/ui/shooting-stars";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stefan - About" },
    { name: "description", content: "about page" },
  ];
}


export default function About() {
  return (
    <>
      <div className="page-container">
        <Navbar currentPage="about"/>
        <div className="mainpage edupage p-8 md:p-16 relative">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            About Me
          </h2>
          {/* Bio Section */}
          <div className="z-10 mx-auto max-w-5xl relative space-y-8 text-md md:text-lg text-slate-300 leading-relaxed">
            <h3 className="text-xl md:text-2xl font-bold text-white">Hi, I'm Stefan! 👋</h3>
            
            <p>
              I am a second-year <span className="font-bold text-blue-200">Computer Science student at the University of Oxford</span>. 
              My journey into computing began with web development - I was initially captivated by the immediate feedback 
              of front-end code, but as I moved into full-stack development, I discovered a deep-seated love for the <span>algorithmic and mathematical</span> side of the field.
            </p>

            <p>
              This curiosity naturally led me toward <span className="font-bold text-blue-200">competitive programming</span> and logic-based 
              challenges, such as the National Cipher Challenge. I still thrive on competition today; 
              most recently, I completed the full <a href="https://adventofcode.com/" target="_blank" className="font-bold text-blue-200 hover:underline underline-offset-4">[Advent of Code]</a> and placed highly in <a href="https://www.gsacapital.com/join-us" target="_blank" className="font-bold text-blue-200 hover:underline underline-offset-4">[GSA’s SPARK competition]</a>.
            </p>

            <p>
              Currently, I am exploring the breadth of computer science while deepening my foundation in the theoretical 
              side of the discipline. Having originally intended to pursue a career as a doctor, I remain deeply motivated 
              by the complexities of human biology. I am now eager to merge these passions by exploring <span className="text-red-400">computational medicine and neural computation</span>, applying high-level computing 
              to solve intricate biological problems.
            </p>

            <p>
              Alongside this, I have developed a strong interest in <span className="text-red-400">quantum information and computation</span>. 
              I am currently evaluating whether to enter the industry or pursue specialized higher studies - specifically 
              the <a href="https://ethz.ch/en/studies/master/degree-programmes/engineering-sciences/neural-systems-and-computation.html" target="_blank" className="text-blue-400 hover:underline decoration-blue-400 underline-offset-4">[Neural Systems and Computation programme at ETH]</a>, or a <a href="https://gsas.harvard.edu/program/quantum-science-and-engineering" target="_blank" className="text-blue-400 hover:underline decoration-blue-400 underline-offset-4">[PhD in Quantum Science and Engineering at Harvard]</a>. If 
              I am to enter the industry it is high performance code that interests me the most right now so the field of quantitative development seems ideal.
            </p>

            <p className="text-center text-blue-200 py-5 hover:text-lg md:hover:text-xl transition-all duration-400">
              That said, I remain very open to new opportunities that could catch my interest!
            </p>

            <p>
              Feel free to explore my <a href="/work" className="text-blue-400 hover:underline decoration-blue-400 underline-offset-4">Work</a> and <a href="/projects" className="text-blue-400 hover:underline decoration-blue-400 underline-offset-4">Projects</a> pages 
              to see what I’ve been building. I’m always open to interesting conversations — please 
              don't hesitate to <a href="/contact" className="text-blue-400 hover:underline decoration-blue-400 underline-offset-4">reach out</a>!
            </p>
          </div>

          {/* Awards Section */}
          <div className="mt-24 relative z-10 ">
            <h2 className="xl:ml-10 text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Awards & Achievements
            </h2>
            
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {[
                { title: "College Scholarship Award", desc: "Achieving a distinction in first year public examinations and ranking 1st in college cohort", date: "2025" },
                { title: "College Examination Award", desc: "2-time winner for performing the best in my college cohort in Hilary and Trinity term examinations", date: "2024,2025" },
                { title: "British Informatics Olympiad", desc: "Achieved a score of 64/100 (top 50 nationally), setting the record for the highest score received at my high school", date: "2024" },
                { title: "British Mathematical Olympiad", desc: "Merit winner in the BMO (top 250 nationally). Achieved a gold award in the UKMT maths challenges every year from 2017-2023, regularly qualifying for the corresponding olympiad follow-on rounds", date: "2023" },
                { title: "National Cipher Challenge", desc: "Won a silver medal 2 years in a row", date: "2022,2023" },
                { title: "Oxford University Computing Challenge", desc: "Finished 16th place nationally, after achieving a perfect score in the first round in the 17-18 age range at 17 years old", date: "2023" },
                { title: "Cambridge Chemistry Challenge", desc: "Achieved a gold award (top 10% UK)", date: "2023" },
                { title: "Student Teacher at Mogonjet School", desc: "Led classes in Biology, Chemistry and Maths to students aged 6-18 in Kenya, whilst staying in an orphanage", date: "2023" },
                { title: "Student Teacher at the Royal Institute", desc: "Led Royal Institution mathematics masterclasses to year 5s, presenting on sequences, sequences in nature, and fractals", date: "2023" },
              ].map((award, index) => (
                <div key={index} className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white text-lg">{award.title}</h4>
                    <span className="text-xs text-blue-400 font-mono">{award.date}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{award.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <StarsBackground/>
          <ShootingStars/>
        </div>
      </div>
    </>
  );
}