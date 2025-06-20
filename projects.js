// Project data (simulated)
const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A modern e-commerce platform built with React and Node.js.",
        category: "web-development",
        status: "active",
        technologies: ["react", "node.js", "mongodb"],
        contributors: 5,
        lead: {
            name: "Jane Smith",
            avatar: "https://via.placeholder.com/40"
        },
        thumbnail: "https://via.placeholder.com/400x225",
        github: "https://github.com/username/project",
        documentation: "https://docs.example.com",
        issues: "https://github.com/username/project/issues"
    },
    {
        id: 2,
        title: "AI Image Recognition System",
        description: "Deep learning-based image recognition system using TensorFlow and Python.",
        category: "machine-learning",
        status: "active",
        technologies: ["python", "tensorflow", "opencv"],
        contributors: 8,
        lead: {
            name: "Dr. Michael Chen",
            avatar: "https://via.placeholder.com/40"
        },
        thumbnail: "https://via.placeholder.com/400x225",
        github: "https://github.com/username/ai-project",
        documentation: "https://docs.example.com/ai",
        issues: "https://github.com/username/ai-project/issues"
    },
    {
        id: 3,
        title: "Mobile Fitness App",
        description: "Cross-platform fitness tracking application built with Flutter.",
        category: "mobile-development",
        status: "completed",
        technologies: ["flutter", "dart", "firebase"],
        contributors: 4,
        lead: {
            name: "Alex Rodriguez",
            avatar: "https://via.placeholder.com/40"
        },
        thumbnail: "https://via.placeholder.com/400x225",
        github: "https://github.com/username/fitness-app",
        documentation: "https://docs.example.com/fitness",
        issues: "https://github.com/username/fitness-app/issues"
    },
    {
        id: 4,
        title: "Data Analytics Dashboard",
        description: "Real-time data visualization dashboard using React and D3.js.",
        category: "data-science",
        status: "active",
        technologies: ["react", "d3.js", "python"],
        contributors: 6,
        lead: {
            name: "Sarah Johnson",
            avatar: "https://via.placeholder.com/40"
        },
        thumbnail: "https://via.placeholder.com/400x225",
        github: "https://github.com/username/dashboard",
        documentation: "https://docs.example.com/dashboard",
        issues: "https://github.com/username/dashboard/issues"
    },
    {
        id: 5,
        title: "Blockchain Voting System",
        description: "Secure voting system using blockchain technology and smart contracts.",
        category: "blockchain",
        status: "upcoming",
        technologies: ["solidity", "web3.js", "ethereum"],
        contributors: 7,
        lead: {
            name: "David Wilson",
            avatar: "https://via.placeholder.com/40"
        },
        thumbnail: "https://via.placeholder.com/400x225",
        github: "https://github.com/username/voting-system",
        documentation: "https://docs.example.com/voting",
        issues: "https://github.com/username/voting-system/issues"
    },
    {
        id: 6,
        title: "DevOps Automation Platform",
        description: "Automated CI/CD pipeline and infrastructure management system.",
        category: "devops",
        status: "active",
        technologies: ["docker", "kubernetes", "jenkins"],
        contributors: 9,
        lead: {
            name: "Lisa Thompson",
            avatar: "https://via.placeholder.com/40"
        },
        thumbnail: "https://via.placeholder.com/400x225",
        github: "https://github.com/username/devops-platform",
        documentation: "https://docs.example.com/devops",
        issues: "https://github.com/username/devops-platform/issues"
    },
    {
        id: 7,
        title: "Cybersecurity Monitoring Tool",
        description: "Real-time network security monitoring and threat detection system.",
        category: "security",
        status: "active",
        technologies: ["python", "elasticsearch", "react"],
        contributors: 5,
        lead: {
            name: "James Anderson",
            avatar: "https://via.placeholder.com/40"
        },
        thumbnail: "https://via.placeholder.com/400x225",
        github: "https://github.com/username/security-tool",
        documentation: "https://docs.example.com/security",
        issues: "https://github.com/username/security-tool/issues"
    },
    {
        id: 8,
        title: "AR Educational Platform",
        description: "Augmented reality platform for interactive learning experiences.",
        category: "mobile-development",
        status: "upcoming",
        technologies: ["unity", "c#", "ar foundation"],
        contributors: 6,
        lead: {
            name: "Emily Brown",
            avatar: "https://via.placeholder.com/40"
        },
        thumbnail: "https://via.placeholder.com/400x225",
        github: "https://github.com/username/ar-platform",
        documentation: "https://docs.example.com/ar",
        issues: "https://github.com/username/ar-platform/issues"
    }
];

// DOM Elements
const sortBtn = document.getElementById('sort-btn');
const projectViewer = document.getElementById('project-viewer');
const closeProject = document.getElementById('close-project');

// Sort functionality
sortBtn.addEventListener('click', () => {
    const sortOptions = [
        { label: "Newest First", value: "newest" },
        { label: "Oldest First", value: "oldest" },
        { label: "Most Contributors", value: "contributors-desc" },
        { label: "Least Contributors", value: "contributors-asc" },
        { label: "A-Z", value: "name-asc" },
        { label: "Z-A", value: "name-desc" }
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
            sortProjects(sortValue);
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

// Sort projects
function sortProjects(sortValue) {
    const sortedProjects = [...projects];
    
    switch (sortValue) {
        case 'newest':
            sortedProjects.sort((a, b) => b.id - a.id);
            break;
        case 'oldest':
            sortedProjects.sort((a, b) => a.id - b.id);
            break;
        case 'contributors-desc':
            sortedProjects.sort((a, b) => b.contributors - a.contributors);
            break;
        case 'contributors-asc':
            sortedProjects.sort((a, b) => a.contributors - b.contributors);
            break;
        case 'name-asc':
            sortedProjects.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'name-desc':
            sortedProjects.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }

    updateProjectGrid(sortedProjects);
}

// Update project grid
function updateProjectGrid(projects) {
    const grid = document.querySelector('.grid');
    grid.innerHTML = projects.map(project => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <div class="relative">
                <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="absolute top-4 right-4 bg-${project.status === 'active' ? 'green' : project.status === 'completed' ? 'blue' : 'yellow'}-500 text-white px-3 py-1 rounded-full text-sm">
                    ${project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        ${project.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                    <span class="ml-auto text-gray-500 text-sm">${project.contributors} contributors</span>
                </div>
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `
                        <span class="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
                            ${tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </span>
                    `).join('')}
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="${project.lead.avatar}" alt="${project.lead.name}" class="w-8 h-8 rounded-full">
                        <span class="ml-2 text-sm text-gray-600">${project.lead.name}</span>
                    </div>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            onclick="openProject(${project.id})">
                        View Project
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Open project viewer
function openProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const viewer = document.getElementById('project-viewer');
    const title = viewer.querySelector('h2');
    const content = viewer.querySelector('.prose');
    const status = viewer.querySelector('.bg-green-500');
    const contributors = viewer.querySelector('.space-y-2');
    const links = viewer.querySelector('.space-y-2:last-of-type');

    title.textContent = project.title;
    
    // Update status badge
    status.className = `bg-${project.status === 'active' ? 'green' : project.status === 'completed' ? 'blue' : 'yellow'}-500 text-white px-3 py-1 rounded-full text-sm`;
    status.textContent = project.status.charAt(0).toUpperCase() + project.status.slice(1);

    // Update content
    content.innerHTML = `
        <h3>Project Overview</h3>
        <p>${project.description}</p>
        
        <h3>Technologies Used</h3>
        <div class="flex flex-wrap gap-2 mb-4">
            ${project.technologies.map(tech => `
                <span class="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
                    ${tech.charAt(0).toUpperCase() + tech.slice(1)}
                </span>
            `).join('')}
        </div>

        <h3>Getting Started</h3>
        <pre class="bg-gray-100 p-4 rounded-lg">
            <code>
# Clone the repository
git clone ${project.github}.git

# Install dependencies
npm install

# Start the development server
npm run dev
            </code>
        </pre>

        <h3>Contributing</h3>
        <p>We welcome contributions! Please read our contributing guidelines before submitting a pull request.</p>
    `;

    // Update contributors
    contributors.innerHTML = `
        <div class="flex items-center">
            <img src="${project.lead.avatar}" alt="${project.lead.name}" class="w-8 h-8 rounded-full">
            <span class="ml-2">${project.lead.name} (Lead)</span>
        </div>
    `;

    // Update quick links
    links.innerHTML = `
        <a href="${project.github}" target="_blank" class="block text-blue-600 hover:underline">
            <i class="fab fa-github mr-2"></i>GitHub Repository
        </a>
        <a href="${project.documentation}" target="_blank" class="block text-blue-600 hover:underline">
            <i class="fas fa-book mr-2"></i>Documentation
        </a>
        <a href="${project.issues}" target="_blank" class="block text-blue-600 hover:underline">
            <i class="fas fa-bug mr-2"></i>Issue Tracker
        </a>
    `;

    viewer.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

// Close project viewer
closeProject.addEventListener('click', () => {
    projectViewer.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
});

// Initialize the project grid
updateProjectGrid(projects);

// Add keyboard navigation for project viewer
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !projectViewer.classList.contains('hidden')) {
        projectViewer.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
});