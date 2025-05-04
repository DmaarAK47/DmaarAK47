# Hussain Alshaqaqiq - Portfolio Website

A personal portfolio website showcasing my game development projects, skills, and experience.

## Project Structure

```
portfolio-website/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # JavaScript functionality
├── img/                    # Image directory for icons, logos, etc.
│   ├── projects/           # Project screenshots/videos
│   └── favicon.ico         # Website favicon
├── assets/                 # Other assets
│   └── resume.pdf          # Downloadable resume file
└── README.md               # Project information
```

## Setup Instructions

1. Clone or download this repository to your local machine
2. Open the folder in Visual Studio Code
3. Create the necessary directory structure as shown above
4. Add your project videos and screenshots to the `img/projects/` directory
5. Update your resume PDF in the `assets/` directory
6. Customize the website content to reflect your latest projects and information

## Customization Guide

### Adding Profile Picture

1. Add your profile picture to the `img/` directory and update the path in the HTML
2. Replace the image placeholder in the About section:
   ```html
   <div class="img-placeholder">
       <i class="fas fa-user"></i>
   </div>
   ```
   with your actual image:
   ```html
   <div class="about-img">
       <img src="img/profile.jpg" alt="Hussain Alshaqaqiq">
   </div>
   ```

### Adding Project Videos and Screenshots

1. For each project, update the video placeholders in the HTML:
   ```html
   <div class="video-placeholder">
       <i class="fas fa-play"></i>
       <p>Project Name</p>
   </div>
   ```
   with your actual video elements:
   ```html
   <video controls>
       <source src="path/to/your-video.mp4" type="video/mp4">
       Your browser does not support the video tag.
   </video>
   ```

2. For screenshot placeholders in the project modal:
   ```html
   <div class="screenshot-placeholder">
       <i class="fas fa-code"></i>
   </div>
   ```
   replace with actual images:
   ```html
   <img src="img/projects/project-screenshot.jpg" alt="Screenshot description">
   ```

### Updating Project Details

1. Edit the project data in the `script.js` file to update project descriptions, features, technologies, and challenges
2. Add or modify projects in the HTML structure as needed

### Customizing Colors

To change the color scheme, modify the CSS variables in the `:root` section of `style.css`:

```css
:root {
    --primary-color: #4e54c8;
    --secondary-color: #8f94fb;
    /* Other color variables */
}
```

### Adding Your Resume

1. Add your PDF resume to the `assets/` directory
2. Update the download button in the resume section to link to your file:
   ```html
   <a href="assets/resume.pdf" class="btn btn-primary download-resume" download>Download CV</a>
   ```

## Features

- Responsive design that works on mobile, tablet, and desktop
- Interactive project showcase with detailed modal views
- Skills visualization with progress bars
- Clean and modern UI with smooth animations
- Contact form for potential clients or employers
- Easy to customize and extend

## Dependencies

- Font Awesome (via CDN) for icons
- Google Fonts for typography
- No jQuery or other JavaScript frameworks required

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Future Enhancements

Consider adding these features to further improve your portfolio:
- Blog section to share your development insights
- Dark/light theme toggle
- More interactive elements and animations
- Project filtering by technology or category
- Testimonials section
- Google Analytics integration