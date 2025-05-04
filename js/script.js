// Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Project Details Modal
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.getElementsByClassName('close')[0];
    const projectDetailsBtns = document.querySelectorAll('.project-details-btn');

    // Project data
    const projectData = {
        bo4zombie: {
            title: 'BO4 Zombie',
            description: `A survival experience in Fortnite where players face relentless waves of zombies. Set in eerie, post-apocalyptic environments, the goal is simple: survive as long as possible. Players can team up or go solo, using an arsenal of weapons to fend off increasingly difficult hordes of zombies.`,
            features: [
                'Endless waves of zombies that get progressively harder',
                'Point system for killing zombies',
                'Weapon shop to purchase better weapons',
                'Door system to unlock new areas',
                'Multiple players support for team play'
            ],
            videoPath: 'img/projects/BO4_Zombie_Gameplay.mp4',
            videoDescription: 'Gameplay video showcasing the zombie waves and Mystery Box',
            technologies: ['Fortnite UEFN', 'Verse Language', 'Game Design', 'Level Design'],
            challenges: `One of the main challenges was implementing the wave system that progressively increases the difficulty. I also had to carefully balance the point economy to make sure players could advance through the game at a satisfying pace without it being too easy or too difficult.`,
            screenshots: [
                {   description: 'SpawnersActivation function that handles zombie spawning in each round' , 
                    path: 'img/projects/Part_of_the_WaveSystemCode_SpawnersActivatiuonFunction.png', },
                {    description: 'OpenDoorButton implementation showing the door unlock mechanism' ,
                    path: 'img/projects/BO4_Zombie_OpenDoorButton.png', 
                },
                {   description: 'BuyWeaponFromWall system for weapon purchases',
                    path: 'img/projects/BO4_Zombie_BuyWeapon_From_Wall.png', 
                }
            ]
        },
        aimlap: {
            title: 'AimLap',
            description: `A minigame in Fortnite that helps players improve their aim by shooting objects that change position after each hit. The score depends on the delta time that the player hits the object. There is a scoreboard showing the order of the players with a maximum of 4 players.`,
            features: [
                'Target practice with moving objects',
                'Score system based on reaction time',
                'Real-time leaderboard',
                'Supports up to 4 players',
                'Different difficulty levels'
            ],
            videoPath: 'img/projects/AimLap_Gameplay.mp4',
            technologies: ['Fortnite UEFN', 'Verse Language', 'UI Design', 'Game Mechanics'],
            challenges: `Creating a fair scoring system based on reaction time was challenging. I also had to optimize the code to ensure the targets moved smoothly and that hit detection was accurate regardless of network conditions.`,
            screenshots: [
                {   description: 'Part of the AimLap Verse code showing the scoring system' ,
                    path: 'img/projects/Part_of_AimLap_Code.png', 
                }
            ]
        },
        scannon: {
            title: 'S Cannon',
            description: `An Android game developed using Unity and C# where the player controls a cannon and must shoot falling objects. If the player destroys the falling objects, they receive coins which can be used to buy extra cannons for more firepower.`,
            features: [
                'Simple tap control mechanism',
                'Progressive difficulty system',
                'In-game economy for purchasing upgrades',
                'Multiple levels with different challenges',
                'Boss battles at key stages'
            ],
            videoPath: 'img/projects/S_Cannon_Gameplay.mp4',
            technologies: ['Unity Engine', 'C#', 'Android SDK', 'Mobile Game Design'],
            challenges: `Balancing the game economy and difficulty curve was the biggest challenge. I wanted to make sure players felt rewarded for their progress without making the game too easy. Object pooling was also implemented to optimize performance on lower-end devices.`,
            screenshots: [
                {   description: 'RandomRespawnBoss C# code for the spawning system',
                    path: 'img/projects/RandomRespawnBoss_Code.png', 
                 },
                {   description: 'S Cannon level selection screen',
                    path: 'img/projects/S_Cannon_Levels.jpg', 
                 },
                {   description: 'S Cannon main menu',
                    path: 'img/projects/S_Cannon_Menu.jpg', 
                }
            ]
        },
        quizboy: {
            title: 'QuizBoy',
            description: `An Android application developed using Android Studio with Java and XML languages. It examines elementary school students in mathematics with various difficulty levels and problem types.`,
            features: [
                'Age-appropriate math problems',
                'Multiple difficulty levels',
                'Progress tracking',
                'Interactive UI designed for children',
                'Instant feedback on answers'
            ],
            videoPath: 'img/projects/QuizBoy_Using_Video.mp4',
            technologies: ['Android Studio', 'Java', 'XML', 'UI/UX Design', 'Educational Design'],
            challenges: `Creating an engaging interface that would appeal to young students while still being educational was the main challenge. I also focused on making sure the difficulty progression was appropriate for different age groups.`,
            screenshots: [],
            links: [
                { name: 'GitHub Repository', url: 'https://github.com/DmaarAK47/QuizBoy2' }
            ]
        }
    };

    // Open modal with project details
    projectDetailsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.dataset.project;
            const project = projectData[projectId];
            
            // Build modal content
            let content = `
                <h2>${project.title}</h2>
                <div class="project-modal-content">
                    <div class="project-modal-description">
                        <h3>Project Overview</h3>
                        <p>${project.description}</p>
                        
                        <h3>Key Features</h3>
                        <ul>
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        
                        <h3>Technologies Used</h3>
                        <div class="project-modal-tags">
                            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        
                        <h3>Development Challenges</h3>
                        <p>${project.challenges}</p>
                    </div>
                    
                    <div class="project-modal-gallery">
                        <h3>Screenshots & Code</h3>
                        <div class="screenshot-grid">
                            ${project.screenshots.map(screenshot => `
                                <div class="screenshot-item">
                                    <img src="${screenshot.path}" alt="${screenshot.description}" class="screenshot-img">
                                    <p>${screenshot.description}</p>
                                </div>
                            `).join('')}
                        </div>
                        
                        ${project.links ? `
                            <h3>Links</h3>
                            <div class="project-links">
                                ${project.links.map(link => `
                                    <a href="${link.url}" target="_blank" class="btn btn-primary">${link.name}</a>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
            
            modalContent.innerHTML = content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close modal when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would normally send the data to a server
            // For now, let's just show an alert
            alert(`Thank you for your message, ${name}! I will get back to you soon.`);
            
            // Clear form
            contactForm.reset();
        });
    }

    // Download CV button
    const downloadCVBtn = document.querySelector('.download-resume');
    if (downloadCVBtn) {
        // Remove the event listener or comment out the code block
        // Let the default link behavior handle the download
    }

    // Add extra styling to modal content
    const style = document.createElement('style');
    style.textContent = `
        .project-modal-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        
        .project-modal-tags {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 1.5rem;
        }
        
        .project-modal-tags span {
            font-size: 0.8rem;
            background-color: #f8f9fa;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            color: #4e54c8;
        }
        
        .screenshot-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .screenshot-item {
            text-align: center;
        }
        
        .screenshot-placeholder {
            background-color: #232323;
            height: 150px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 0.5rem;
            color: white;
            font-size: 2rem;
        }
        
        .project-links {
            display: flex;
            gap: 1rem;
        }
        
        @media (max-width: 768px) {
            .project-modal-content {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
});

document.querySelectorAll('.project-video').forEach(video => {
    const projectCard = video.closest('.project-card');
    
    projectCard.addEventListener('mouseenter', () => {
        video.play();
        video.muted = true; // Must be muted for autoplay to work on most browsers
    });
    
    projectCard.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});