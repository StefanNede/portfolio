export const educationData = [
  {
    id: "university",
    level: "University of Oxford",
    subtitle: "MCompSci Computer Science (2024 - 2028)",
    // groups used to distinguish between years of uni
    groups: [
       {
        year: "Year 1 (Achieved 1st)",
        modules: [
          {
            id: "func-prog",
            title: "Functional Programming",
            description: "Programming with mathematical functions using Haskell. Focuses on immutability, recursion, and higher-order functions.",
            topics: ["Haskell", "Monads", "Recursion", "Folds", "ADTs"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2024-2025/fp/"
          },
          {
            id: "disc-math",
            title: "Discrete Mathematics",
            description: "Fundamental mathematical structures for CS, covering counting, relations, and modular arithmetic.",
            topics: ["Set Theory", "Combinatorics", "Graph Theory", "Pigeonhole"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2024-2025/discretemaths/"
          },
          {
            id: "cont-math",
            title: "Continuous Mathematics",
            description: "Calculus and mathematical analysis applied to computing and optimisation problems.",
            topics: ["Multivariate Calculus", "Numerical Integration", "Taylor Series", "Lagrangian", "Optimisation", "Gradient Descent"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2024-2025/ContMath/"
          },
          {
            id: "lin-alg",
            title: "Linear Algebra",
            description: "The study of vectors and matrices, essential for graphics, machine learning, and quantum computing.",
            topics: ["Vectors", "Matrices", "Eigenvalues", "Gaussian Elimination"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2024-2025/linearalgebra/"
          },
          {
            id: "dig-sys",
            title: "Digital Systems",
            description: "Understanding how computers work at the hardware level, from transistors to CPU architecture.",
            topics: ["Logic Gates", "Boolean Algebra", "Flip-Flops", "Circuit Design"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2024-2025/digitalsystems/"
          },
          {
            id: "algo-design",
            title: "Design & Analysis of Algorithms",
            description: "Techniques for efficient algorithm design and analysing computational complexity.",
            topics: ["Big O Notation", "Sorting", "Divide & Conquer", "Dynamic Programming", "Graphs"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2024-2025/algdesign/"
          },
          {
            id: "imp-prog",
            title: "Imperative Programming",
            description: "Software development using the imperative paradigm, focusing on state, control flow, object-oriented design, and testing.",
            topics: ["Scala", "OOP", "Control Flow", "Unit Tests", "Invariants"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2024-2025/imperativeprogramming1/"
          },
          {
            id: "prob",
            title: "Probability",
            description: "Mathematical frameworks for quantifying uncertainty and random processes.",
            topics: ["Random Variables", "Distributions", "Expectation", "Bayes' Theorem", "Random Walks"],
            link: "https://courses.maths.ox.ac.uk/course/view.php?id=5473"
          },
          {
            id: "proof-sys",
            title: "Introduction to Proof Systems",
            description: "Formal logic and reasoning, teaching how to construct rigorous mathematical proofs.",
            topics: ["Propositional Logic", "Predicate Logic", "Natural Deduction", "Truth Tables"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2024-2025/IPS/"
          }
        ]
      },
      {
        year: "Year 2",
        modules: [
          {
            id: "models-comp",
            title: "Models of Computation",
            description: "The theoretical limits of what can be computed, exploring automata and Turing machines.",
            topics: ["Turing Machines", "Automata Theory", "Context-Free Grammars", "Decidability"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2025-2026/modelsofcomputation/"
          },
          {
            id: "conc-prog",
            title: "Concurrent Programming",
            description: "Building systems where multiple processes execute simultaneously, handling synchronisation and safety.",
            topics: ["Threads", "Locks & Semaphores", "Deadlock Prevention", "Scala"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2025-2026/concurrentprogramming/"
          },
          {
            id: "ml",
            title: "Machine Learning*",
            description: "Algorithms that allow computers to learn from data, covering both supervised and unsupervised learning.",
            topics: ["Neural Networks", "Regression", "Clustering", "Backpropogation"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2025-2026/ml/"
          },
          {
            id: "quantum",
            title: "Quantum Information*",
            description: "Introduction to quantum mechanics and information, then focusing on computing paradigms and quantum algorithms.",
            topics: ["Qubits", "Entanglement", "Quantum Teleportation", "Shor's", "Grover's", "Deutsch-Jozsa"],
            link: "https://www.cs.ox.ac.uk/teaching/courses/2025-2026/qi/"
          }
        ]
      } 
    ]
  },
  {
    id: "pre-uni",
    level: "Pre-University",
    subtitle: "A-Levels",
    modules: [
      {
        id: "maths",
        title: "Maths",
        description: "Achieved an A*",
        topics: ["Calculus", "Mechanics", "Statistics"],
        link: "#",
      },
      {
        id: "fm",
        title: "Further Maths",
        description: "Achieved an A*",
        topics: ["Further Mechanics", "Further Statistics"],
        link: "#",
      },{
        id: "cs",
        title: "Computer Science",
        description: "Achieved an A*",
        topics: [],
        link: "#",
      },{
        id: "bio",
        title: "Biology",
        description: "Achieved an A*",
        topics: [],
        link: "#",
      },{
        id: "chem",
        title: "Chemistry",
        description: "Achieved an A*",
        topics: [],
        link: "#",
      },{
        id: "fr",
        title: "AS French",
        description: "Achieved an A (highest grade)",
        topics: ["Au Revoir Les Enfants"],
        link: "#",
      },
    ],
  },
  {
    id: "other",
    level: "Other Courses",
    subtitle: "Certifications & Self-Taught",
    modules: [
      {
        id: "cuda",
        title: "CUDA Programming NVIDIA GPUs",
        description: "An intensive one-week programme taught by Prof. Wes Armour and Prof. Mike Giles FRS, blending foundational GPU theory with 20 hours of hands-on practical work.",
        topics: ["GPU Architecture", "Warp Shuffles", "CUDA Streams", "C/C++"],
        link: "https://people.maths.ox.ac.uk/~gilesm/cuda/",
      },
    ],
  },
];