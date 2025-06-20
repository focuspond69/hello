# MITS Educational Website

A responsive, accessible, and interactive educational website for MITS that introduces the organization, provides tutorials and projects for students, and allows internship-related interactions.

## Features

- 🎨 Modern and responsive design using Tailwind CSS
- 🔍 Interactive search functionality
- 🎭 Auto-playing carousel with manual controls
- 📱 Mobile-first approach with responsive sidebar
- 🌓 Dark mode support
- ♿ Accessibility features (keyboard navigation, ARIA labels)
- 🚀 Sticky internship banner
- ⚡ Smooth animations and transitions
- 🎯 Interactive UI elements with loading states

## Tech Stack

- HTML5
- CSS3 (with Tailwind CSS)
- JavaScript (Vanilla)
- Font Awesome Icons
- Google Fonts

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mits-website.git
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Visit `http://localhost:8000` in your browser

## Project Structure

```
mits-website/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── scripts.js          # JavaScript functionality
├── images/            # Image assets
│   ├── universities/  # University logos
│   └── icons/        # Custom icons
└── README.md         # Project documentation
```

## Features Implementation

### Navigation
- Fixed top navbar with responsive design
- Mobile hamburger menu with slide-out sidebar
- Search bar with real-time filtering

### Carousel
- Auto-playing slideshow with manual controls
- Pause on hover
- Smooth transitions between slides

### Internship Features
- Sticky banner for internship applications
- Quick access sidebar for internship-related actions
- Form validation and submission handling

### Accessibility
- Keyboard navigation support
- ARIA labels and roles
- Focus management
- Screen reader compatibility

### Performance
- Lazy loading for images
- Optimized animations
- Minimal dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- Font Awesome for the icons
- Google Fonts for typography 