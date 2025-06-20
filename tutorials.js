// Tutorial data (simulated)
const tutorials = [
    {
        id: 1,
        title: "Introduction to Web Development",
        description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript basics.",
        category: "Web Development",
        difficulty: "Beginner",
        duration: "2 hours",
        author: "John Doe",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "HTML Basics", duration: "30 mins", content: "Content for HTML Basics. This chapter covers the very first steps in creating a web page using HTML. You'll learn about tags, elements, and document structure." },
            { title: "CSS Styling", duration: "45 mins", content: "Content for CSS Styling. Dive into cascading style sheets to make your web pages visually appealing. Topics include selectors, properties, and responsive design." },
            { title: "JavaScript Fundamentals", duration: "45 mins", content: "Content for JavaScript Fundamentals. Explore the basics of JavaScript programming, including variables, data types, functions, and DOM manipulation for interactive web pages." }
        ]
    },
    {
        id: 2,
        title: "Advanced React Patterns",
        description: "Master advanced React concepts including hooks, context, and performance optimization.",
        category: "Web Development",
        difficulty: "Advanced",
        duration: "4 hours",
        author: "Sarah Johnson",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "Custom Hooks", duration: "1 hour", content: "Content for Custom Hooks. Learn to create reusable logic with custom React hooks to simplify your components and improve code organization." },
            { title: "Context API Deep Dive", duration: "1 hour", content: "Content for Context API Deep Dive. Understand how to use React's Context API for state management, avoiding prop drilling in complex applications." },
            { title: "Performance Optimization", duration: "2 hours", content: "Content for Performance Optimization. Discover techniques to make your React applications faster, including memoization, lazy loading, and code splitting." }
        ]
    },
    {
        id: 3,
        title: "Python for Data Science",
        description: "Comprehensive guide to data analysis and visualization using Python.",
        category: "Data Science",
        difficulty: "Intermediate",
        duration: "6 hours",
        author: "Dr. Michael Chen",
        thumbnail: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "NumPy Basics", duration: "1.5 hours", content: "Content for NumPy Basics. Get started with NumPy, the fundamental package for numerical computing in Python, covering arrays and basic operations." },
            { title: "Pandas DataFrames", duration: "2 hours", content: "Content for Pandas DataFrames. Learn to manipulate and analyze data efficiently using Pandas DataFrames, a powerful data structure for tabular data." },
            { title: "Data Visualization", duration: "2.5 hours", content: "Content for Data Visualization. Create compelling data visualizations with Matplotlib and Seaborn, essential libraries for presenting insights from your data." }
        ]
    },
    {
        id: 4,
        title: "Machine Learning Fundamentals",
        description: "Learn the core concepts of machine learning and implement basic algorithms.",
        category: "Machine Learning",
        difficulty: "Intermediate",
        duration: "8 hours",
        author: "Dr. Emily Brown",
        thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "Introduction to ML", duration: "1 hour", content: "Content for Introduction to ML. Understand the foundational concepts of machine learning, including types of learning and common terminology." },
            { title: "Supervised Learning", duration: "3 hours", content: "Content for Supervised Learning. Explore algorithms like linear regression, logistic regression, and decision trees, and learn how to train models with labeled data." },
            { title: "Unsupervised Learning", duration: "4 hours", content: "Content for Unsupervised Learning. Dive into clustering and dimensionality reduction techniques, learning how to find patterns in unlabeled data." }
        ]
    },
    {
        id: 5,
        title: "Mobile App Development with Flutter",
        description: "Build beautiful cross-platform mobile applications using Flutter framework.",
        category: "Mobile Development",
        difficulty: "Intermediate",
        duration: "5 hours",
        author: "Alex Rodriguez",
        thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "Flutter Basics", duration: "1 hour", content: "Content for Flutter Basics. Get started with Flutter, Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase." },
            { title: "UI Development", duration: "2 hours", content: "Content for UI Development. Learn to design and implement stunning user interfaces using Flutter's rich set of customizable widgets." },
            { title: "State Management", duration: "2 hours", content: "Content for State Management. Explore various state management solutions in Flutter, such as Provider, BLoC, and Riverpod, to handle application data flow efficiently." }
        ]
    },
    {
        id: 6,
        title: "Full Stack Development with MERN",
        description: "Master the MERN stack to build modern web applications from front to back.",
        category: "Web Development",
        difficulty: "Advanced",
        duration: "10 hours",
        author: "David Wilson",
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "MongoDB & Express", duration: "3 hours", content: "Content for MongoDB & Express. Learn to set up a NoSQL database with MongoDB and build robust APIs using the Express.js framework." },
            { title: "React Frontend", duration: "4 hours", content: "Content for React Frontend. Develop dynamic and interactive user interfaces using React.js, covering components, state, and routing." },
            { title: "Node.js Backend", duration: "3 hours", content: "Content for Node.js Backend. Build scalable server-side applications with Node.js, focusing on server creation, routing, and database integration." }
        ]
    },
    {
        id: 7,
        title: "DevOps and CI/CD",
        description: "Learn modern DevOps practices and implement continuous integration/deployment.",
        category: "DevOps",
        difficulty: "Advanced",
        duration: "6 hours",
        author: "Lisa Thompson",
        thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "Docker & Containers", duration: "2 hours", content: "Content for Docker & Containers. Understand how to use Docker to containerize your applications for consistent deployment across different environments." },
            { title: "CI/CD Pipelines", duration: "2 hours", content: "Content for CI/CD Pipelines. Learn to automate your software delivery process using Continuous Integration and Continuous Deployment pipelines." },
            { title: "Cloud Deployment", duration: "2 hours", content: "Content for Cloud Deployment. Explore deploying your applications to cloud platforms like AWS, Azure, or Google Cloud, and managing infrastructure as code." }
        ]
    },
    {
        id: 8,
        title: "Cybersecurity Essentials",
        description: "Understand fundamental cybersecurity concepts and best practices.",
        category: "Security",
        difficulty: "Intermediate",
        duration: "4 hours",
        author: "James Anderson",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "Security Basics", duration: "1 hour", content: "Content for Security Basics. Get an overview of common cybersecurity threats, vulnerabilities, and the importance of secure practices." },
            { title: "Network Security", duration: "1.5 hours", content: "Content for Network Security. Learn about firewalls, intrusion detection systems, and secure network configurations to protect data in transit." },
            { title: "Application Security", duration: "1.5 hours", content: "Content for Application Security. Discover common web application vulnerabilities like XSS and SQL injection, and how to prevent them." }
        ]
    },
    {
        id: 9,
        title: "Blockchain Development",
        description: "Learn to build decentralized applications using blockchain technology.",
        category: "Blockchain",
        difficulty: "Advanced",
        duration: "7 hours",
        author: "Rachel Martinez",
        thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "Blockchain Basics", duration: "2 hours", content: "Content for Blockchain Basics. Understand the core principles behind blockchain technology, including distributed ledgers, immutability, and cryptography." },
            { title: "Smart Contracts", duration: "3 hours", content: "Content for Smart Contracts. Learn to develop and deploy self-executing contracts on blockchain platforms like Ethereum, using languages like Solidity." },
            { title: "DApp Development", duration: "2 hours", content: "Content for DApp Development. Build decentralized applications (DApps) that run on a peer-to-peer network, offering censorship resistance and transparency." }
        ]
    },
    {
        id: 10,
        title: "UI/UX Design Principles",
        description: "Master the art of creating beautiful and user-friendly interfaces.",
        category: "Design",
        difficulty: "Intermediate",
        duration: "5 hours",
        author: "Sophie Chen",
        thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "Design Fundamentals", duration: "1.5 hours", content: "Content for Design Fundamentals. Explore the essential elements and principles of design, including color theory, typography, and layout." },
            { title: "User Research", duration: "1.5 hours", content: "Content for User Research. Learn various methods for conducting user research to understand user needs, behaviors, and motivations." },
            { title: "Prototyping", duration: "2 hours", content: "Content for Prototyping. Create interactive prototypes of your designs to test user flows and gather feedback before development." }
        ]
    },
    {
        id: 11,
        title: "Introduction to Cloud Computing",
        description: "Explore the fundamentals of cloud computing, including service models (IaaS, PaaS, SaaS) and deployment models.",
        category: "Cloud Computing",
        difficulty: "Beginner",
        duration: "3 hours",
        author: "Maria Garcia",
        thumbnail: "https://images.unsplash.com/photo-1593642531955-b62e17b3bd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "Cloud Concepts", duration: "1 hour", content: "Content for Cloud Concepts. Understand what cloud computing is, its essential characteristics, and its benefits." },
            { title: "Service Models", duration: "1 hour", content: "Content for Service Models. Dive into Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)." },
            { title: "Deployment Models", duration: "1 hour", content: "Content for Deployment Models. Learn about public, private, hybrid, and community cloud deployment models." }
        ]
    },
    {
        id: 12,
        title: "Data Structures & Algorithms",
        description: "A comprehensive course on fundamental data structures and algorithms, essential for competitive programming and software development.",
        category: "Computer Science",
        difficulty: "Advanced",
        duration: "12 hours",
        author: "Dr. Alan Turing",
        thumbnail: "https://images.unsplash.com/photo-1510519138101-570d1dca3d6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "Arrays and Linked Lists", duration: "3 hours", content: "Content for Arrays and Linked Lists. Explore the basics of linear data structures and their applications." },
            { title: "Trees and Graphs", duration: "4 hours", content: "Content for Trees and Graphs. Understand non-linear data structures and their traversal algorithms." },
            { title: "Sorting and Searching", duration: "5 hours", content: "Content for Sorting and Searching. Learn efficient algorithms for organizing and finding data." }
        ]
    },
    {
        id: 13,
        title: "Introduction to Artificial Intelligence",
        description: "An overview of AI concepts, including machine learning, deep learning, natural language processing, and computer vision.",
        category: "Artificial Intelligence",
        difficulty: "Beginner",
        duration: "7 hours",
        author: "Sophia Lee",
        thumbnail: "https://images.unsplash.com/photo-1620712943407-e16091411516?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "What is AI?", duration: "1 hour", content: "Content for What is AI? Define artificial intelligence, its history, and its various subfields." },
            { title: "Machine Learning Basics", duration: "3 hours", content: "Content for Machine Learning Basics. Get an introduction to supervised, unsupervised, and reinforcement learning." },
            { title: "AI Applications", duration: "3 hours", content: "Content for AI Applications. Explore real-world applications of AI in different industries." }
        ]
    },
    {
        id: 14,
        title: "Web Security Fundamentals",
        description: "Learn essential web security concepts and common vulnerabilities like XSS, SQL Injection, and CSRF.",
        category: "Security",
        difficulty: "Intermediate",
        duration: "4 hours",
        author: "Chris Evans",
        thumbnail: "https://images.unsplash.com/photo-1544376722-e4e7e72d2e19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "Web Vulnerabilities", duration: "1.5 hours", content: "Content for Web Vulnerabilities. Understand common web application vulnerabilities and their impact." },
            { title: "Secure Coding Practices", duration: "1.5 hours", content: "Content for Secure Coding Practices. Learn how to write secure code to prevent common attacks." },
            { title: "Security Best Practices", duration: "1 hour", content: "Content for Security Best Practices. Implement best practices for securing web applications and servers." }
        ]
    },
    {
        id: 15,
        title: "Mobile Game Development with Unity",
        description: "Create engaging mobile games using the Unity game engine and C# scripting.",
        category: "Mobile Development",
        difficulty: "Intermediate",
        duration: "9 hours",
        author: "Liam Walker",
        thumbnail: "https://images.unsplash.com/photo-1542831371-d10b78ca653d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        chapters: [
            { title: "Unity Interface", duration: "2 hours", content: "Content for Unity Interface. Get familiar with the Unity editor and its essential features." },
            { title: "C# Scripting", duration: "3 hours", content: "Content for C# Scripting. Learn the basics of C# programming for game logic and interactivity." },
            { title: "Game Mechanics", duration: "4 hours", content: "Content for Game Mechanics. Implement core game mechanics, including character control, physics, and UI." }
        ]
    }
];

// DOM Elements
const sortBtn = document.getElementById('sort-btn');
const tutorialViewer = document.getElementById('tutorial-viewer');
const closeTutorial = document.getElementById('close-tutorial');

// Handle selected tutorial when page loads and initialize grid
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the grid on load with all tutorials first
    console.log("Initializing tutorial grid with data:", tutorials);
    updateTutorialGrid(tutorials);
    console.log("Tutorial grid HTML after update:", document.getElementById('tutorials-grid-container').innerHTML);

    const selectedTutorialTitle = localStorage.getItem('selectedTutorial');
    if (selectedTutorialTitle) {
        const tutorialToDisplay = tutorials.find(tutorial => tutorial.title === selectedTutorialTitle);
        if (tutorialToDisplay) {
            renderTutorialInViewer(tutorialToDisplay);
        }
        localStorage.removeItem('selectedTutorial'); // Clean up localStorage
    }
});

// Function to save tutorial progress
function saveTutorialProgress(tutorialId, chapterIndex) {
    const progress = JSON.parse(localStorage.getItem('tutorialProgress') || '{}');
    progress[tutorialId] = chapterIndex;
    localStorage.setItem('tutorialProgress', JSON.stringify(progress));
}

// Function to get tutorial progress
function getTutorialProgress(tutorialId) {
    const progress = JSON.parse(localStorage.getItem('tutorialProgress') || '{}');
    return progress[tutorialId] || 0;
}

// Function to save tutorial completion status
function saveTutorialCompletion(tutorialId, isCompleted) {
    const completedTutorials = JSON.parse(localStorage.getItem('completedTutorials') || '[]');
    if (isCompleted && !completedTutorials.includes(tutorialId)) {
        completedTutorials.push(tutorialId);
    } else if (!isCompleted) {
        const index = completedTutorials.indexOf(tutorialId);
        if (index > -1) {
            completedTutorials.splice(index, 1);
        }
    }
    localStorage.setItem('completedTutorials', JSON.stringify(completedTutorials));
}

// Function to check if a tutorial is completed
function isTutorialCompleted(tutorialId) {
    const completedTutorials = JSON.parse(localStorage.getItem('completedTutorials') || '[]');
    return completedTutorials.includes(tutorialId);
}

// Function to render tutorial details in the viewer, including chapters and progress
function renderTutorialInViewer(tutorial) {
    if (!tutorialViewer) return;

    // Set viewer title and description
    tutorialViewer.querySelector('h2').textContent = tutorial.title;
    // Update the image in the viewer if you have an img tag inside tutorial-viewer for it
    // tutorialViewer.querySelector('img').src = tutorial.thumbnail; // Uncomment if you have an img tag for tutorial thumbnail in the viewer
    tutorialViewer.querySelector('p').textContent = tutorial.description;

    const chapterList = document.getElementById('chapter-list');
    chapterList.innerHTML = '';

    const savedChapterIndex = getTutorialProgress(tutorial.id);
    let currentChapterIndex = savedChapterIndex; // Keep track of the currently viewed chapter

    // Function to load and display a specific chapter
    function loadChapter(index) {
        const chapter = tutorial.chapters[index];
        if (chapter) {
            document.getElementById('tutorial-content').innerHTML = `<h3 class="text-2xl font-bold mb-4">${chapter.title}</h3><p>${chapter.content || 'Chapter content not available.'}</p>`;
            
            // Update active chapter style
            chapterList.querySelectorAll('li').forEach(item => item.classList.remove('bg-blue-100', 'dark:bg-blue-900'));
            if (chapterList.children[index]) {
                chapterList.children[index].classList.add('bg-blue-100', 'dark:bg-blue-900');
            }
            saveTutorialProgress(tutorial.id, index);
            currentChapterIndex = index; // Update current chapter index

            // Update navigation button states
            updateChapterNavButtons();
        }
    }

    tutorial.chapters.forEach((chapter, index) => {
        const chapterItem = document.createElement('li');
        chapterItem.className = `p-3 rounded-lg cursor-pointer transition-colors duration-200 ${index === savedChapterIndex ? 'bg-blue-100 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`;
        chapterItem.innerHTML = `
            <span class="font-semibold text-gray-800 dark:text-gray-200">${index + 1}. ${chapter.title}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400">${chapter.duration}</span>
        `;
        chapterItem.addEventListener('click', () => {
            loadChapter(index);

            // Check if all chapters are completed and mark tutorial as complete
            if (index === tutorial.chapters.length - 1) {
                saveTutorialCompletion(tutorial.id, true);
                updateTutorialGrid(tutorials); // Re-render grid to show completion status
            }
        });
        chapterList.appendChild(chapterItem);
    });

    // Add Mark as Complete button
    const markCompleteButton = document.createElement('button');
    const completed = isTutorialCompleted(tutorial.id);
    markCompleteButton.className = `mt-4 w-full py-2 rounded-lg text-white font-semibold transition-colors ${completed ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`;
    markCompleteButton.textContent = completed ? 'Completed' : 'Mark as Complete';
    markCompleteButton.addEventListener('click', () => {
        saveTutorialCompletion(tutorial.id, !completed);
        renderTutorialInViewer(tutorial); // Re-render viewer to update button
        updateTutorialGrid(tutorials); // Re-render grid to update status
    });
    tutorialViewer.querySelector('.tutorial-viewer-content').appendChild(markCompleteButton);

    // Add Next/Previous Chapter Buttons
    const chapterNav = document.createElement('div');
    chapterNav.className = 'flex justify-between mt-4';
    chapterNav.innerHTML = `
        <button id="prev-chapter" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <i class="fas fa-arrow-left mr-2"></i>Previous
        </button>
        <button id="next-chapter" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            Next <i class="fas fa-arrow-right ml-2"></i>
        </button>
    `;
    tutorialViewer.querySelector('.tutorial-viewer-content').appendChild(chapterNav);

    const prevChapterButton = document.getElementById('prev-chapter');
    const nextChapterButton = document.getElementById('next-chapter');

    function updateChapterNavButtons() {
        prevChapterButton.disabled = currentChapterIndex === 0;
        nextChapterButton.disabled = currentChapterIndex === tutorial.chapters.length - 1;
    }

    prevChapterButton.addEventListener('click', () => {
        if (currentChapterIndex > 0) {
            loadChapter(currentChapterIndex - 1);
        }
    });

    nextChapterButton.addEventListener('click', () => {
        if (currentChapterIndex < tutorial.chapters.length - 1) {
            loadChapter(currentChapterIndex + 1);
        }
    });

    // Load the saved chapter content or the first chapter
    if (tutorial.chapters.length > 0) {
        const initialChapterIndex = savedChapterIndex < tutorial.chapters.length ? savedChapterIndex : 0;
        loadChapter(initialChapterIndex);
    } else {
        document.getElementById('tutorial-content').innerHTML = '<p class="text-gray-600 dark:text-gray-400">No chapters available for this tutorial.</p>';
    }

    tutorialViewer.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

// Sort functionality
sortBtn.addEventListener('click', () => {
    const sortOptions = [
        { label: "Newest First", value: "newest" },
        { label: "Oldest First", value: "oldest" },
        { label: "Duration (Short to Long)", value: "duration-asc" },
        { label: "Duration (Long to Short)", value: "duration-desc" },
        { label: "Difficulty (Easy to Hard)", value: "difficulty-asc" },
        { label: "Difficulty (Hard to Easy)", value: "difficulty-desc" }
    ];

    // Create and show sort menu
    const sortMenu = document.createElement('div');
    sortMenu.className = 'absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50';
    sortMenu.innerHTML = sortOptions.map(option => `
        <button class="w-full text-left px-4 py-2 hover:bg-gray-100" data-sort="${option.value}">
            ${option.label}
        </button>
    `).join('');

    // Position the menu
    const rect = sortBtn.getBoundingClientRect();
    sortMenu.style.top = `${rect.bottom + window.scrollY}px`;
    sortMenu.style.left = `${rect.left + window.scrollX}px`;

    // Add click handlers
    sortMenu.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (button) {
            const sortValue = button.dataset.sort;
            sortTutorials(sortValue);
            sortMenu.remove();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function closeMenu(e) {
        if (!sortMenu.contains(e.target) && e.target !== sortBtn) {
            sortMenu.remove();
            document.removeEventListener('click', closeMenu);
        }
    });

    document.body.appendChild(sortMenu);
});

// Sort tutorials
function sortTutorials(sortValue) {
    const sortedTutorials = [...tutorials];
    
    switch (sortValue) {
        case 'newest':
            sortedTutorials.sort((a, b) => b.id - a.id);
            break;
        case 'oldest':
            sortedTutorials.sort((a, b) => a.id - b.id);
            break;
        case 'duration-asc':
            sortedTutorials.sort((a, b) => parseFloat(a.duration.split(' ')[0]) - parseFloat(b.duration.split(' ')[0]));
            break;
        case 'duration-desc':
            sortedTutorials.sort((a, b) => parseFloat(b.duration.split(' ')[0]) - parseFloat(a.duration.split(' ')[0]));
            break;
        case 'difficulty-asc':
            sortedTutorials.sort((a, b) => {
                const difficulties = { beginner: 0, intermediate: 1, advanced: 2 };
                return difficulties[a.difficulty.toLowerCase()] - difficulties[b.difficulty.toLowerCase()];
            });
            break;
        case 'difficulty-desc':
            sortedTutorials.sort((a, b) => {
                const difficulties = { beginner: 0, intermediate: 1, advanced: 2 };
                return difficulties[b.difficulty.toLowerCase()] - difficulties[a.difficulty.toLowerCase()];
            });
            break;
    }

    updateTutorialGrid(sortedTutorials);
}

// Update tutorial grid
function updateTutorialGrid(tutorialsToDisplay) {
    const grid = document.getElementById('tutorials-grid-container');
    grid.innerHTML = tutorialsToDisplay.map(tutorial => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <div class="relative">
                <img src="${tutorial.thumbnail}" alt="${tutorial.title}" class="w-full h-48 object-cover">
                <div class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    ${tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        ${tutorial.category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                    <span class="ml-auto text-gray-500 text-sm">${tutorial.duration}</span>
                </div>
                <h3 class="text-xl font-bold mb-2">${tutorial.title}</h3>
                <p class="text-gray-600 mb-4">${tutorial.description}</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <span class="ml-2 text-sm text-gray-600">By ${tutorial.author}</span>
                    </div>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            onclick="openTutorial(${tutorial.id})">
                        Start Learning
                    </button>
                </div>
                <!-- Progress Bar -->
                <div class="mt-4 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-600 h-2.5 rounded-full tutorial-progress-bar" style="width: ${((getTutorialProgress(tutorial.id) + 1) / tutorial.chapters.length * 100) || 0}%;"></div>
                </div>
                <div class="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Chapter ${getTutorialProgress(tutorial.id) + 1} of ${tutorial.chapters.length} completed
                </div>
                ${isTutorialCompleted(tutorial.id) ? '<div class="mt-2 text-center text-green-600 font-semibold"><i class="fas fa-check-circle mr-1"></i>Completed</div>' : ''}
            </div>
        </div>
    `).join('');
    console.log("Finished updating tutorial grid."); // Added for more granular debugging
}

// Open tutorial viewer (This function is called from onclick in HTML)
function openTutorial(tutorialId) {
    const tutorial = tutorials.find(t => t.id === tutorialId);
    if (!tutorial) {
        console.error('Tutorial not found with ID:', tutorialId);
        return;
    }
    renderTutorialInViewer(tutorial); // Use the new comprehensive function
}

// Close tutorial viewer
closeTutorial.addEventListener('click', () => {
    tutorialViewer.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
});

// Add keyboard navigation for tutorial viewer
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !tutorialViewer.classList.contains('hidden')) {
        tutorialViewer.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
}); 