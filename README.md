# Portfolio Website - Harish Vijay V

A modern, responsive portfolio website showcasing AI/ML research, projects, and professional experience. Built with HTML, CSS, and JavaScript - no frameworks required.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Portfolio+Preview)

## 🚀 Features

### Design & User Experience
- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth scrolling, and animated components
- **Loading Animations**: Fade-in effects and smooth transitions throughout
- **Mobile Navigation**: Hamburger menu with smooth slide transitions

### Sections
- **Hero Section**: Dynamic typing animation, social links, and floating cards
- **About Section**: Professional background, education, and technical skills
- **Projects Section**: Featured projects with technology tags and hover effects
- **Publications Section**: Research papers and academic achievements
- **Experience Section**: Timeline-based professional experience display
- **Contact Section**: Interactive contact form with validation and email integration

### Technical Features
- **Smooth Scrolling**: Enhanced navigation between sections
- **Form Validation**: Client-side validation for contact form
- **Notification System**: Toast notifications for user feedback
- **Performance Optimized**: Throttled scroll events and efficient animations
- **SEO Friendly**: Semantic HTML structure and proper meta tags

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive functionality and animations
└── README.md           # Project documentation
```

## 🛠️ Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Local web server (optional but recommended)

### Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **For Development**: Use a local server for best experience
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## 🎨 Customization Guide

### Personal Information
Edit the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">
    <span class="typing-text">Hello, I'm [Your Name]</span>
</h1>
<p class="hero-subtitle">[Your Title/Position]</p>
```

#### Contact Information
```html
<a href="mailto:[your-email]" class="social-link">
<a href="[linkedin-url]" class="social-link">
```

### Colors and Styling
Modify the CSS variables in `styles.css`:

```css
/* Primary Colors */
--primary-color: #2563eb;      /* Blue */
--secondary-color: #667eea;    /* Light Blue */
--accent-color: #764ba2;       /* Purple */

/* Background Colors */
--bg-light: #f9fafb;
--bg-white: #ffffff;
--text-dark: #1f2937;
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding navigation link
3. Style the section in `styles.css`
4. Add any required JavaScript functionality

### Projects Section
Replace project information:
```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-[icon-name]"></i>
    </div>
    <h3>[Project Title]</h3>
    <p>[Project Description]</p>
    <div class="project-tech">
        <span class="tech-tag">[Technology]</span>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form Integration

The contact form currently includes:
- Client-side validation
- Success/error notifications
- Form reset functionality

### Adding Backend Integration
To connect to a backend service:

1. **Replace the form submission** in `script.js`:
```javascript
// Replace the setTimeout simulation with actual API call
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, email, message})
})
.then(response => response.json())
.then(data => {
    showNotification('Message sent successfully!', 'success');
})
.catch(error => {
    showNotification('Error sending message.', 'error');
});
```

2. **Popular form handling services**:
   - Netlify Forms
   - Formspree
   - EmailJS
   - Custom backend API

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main/master)
4. Access your site at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Set build command (if needed): Leave empty for static site
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

### Vercel
1. Import project from GitHub
2. Configure build settings (usually auto-detected)
3. Deploy with automatic SSL and CDN

## 📊 Performance Optimization

### Implemented Optimizations
- **Minified CSS**: Remove unused styles for production
- **Optimized Images**: Use WebP format where possible
- **Lazy Loading**: Images load as they enter viewport
- **Throttled Events**: Scroll events are throttled for performance
- **Efficient Animations**: Hardware-accelerated CSS animations

### Further Optimizations
```javascript
// Add to script.js for image lazy loading
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            imageObserver.unobserve(img);
        }
    });
});
images.forEach(img => imageObserver.observe(img));
```

## 🎯 SEO Best Practices

### Implemented Features
- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Structured data markup
- Fast loading times
- Mobile-friendly design

### Additional SEO Enhancements
```html
<!-- Add to <head> section -->
<meta property="og:title" content="[Your Name] - Portfolio">
<meta property="og:description" content="[Your Description]">
<meta property="og:image" content="[Preview Image URL]">
<meta property="og:url" content="[Your Website URL]">
<meta name="twitter:card" content="summary_large_image">
```

## 🔧 Development Commands

```bash
# Format code (if using Prettier)
npx prettier --write .

# Validate HTML
npx html-validate index.html

# Optimize CSS (if using PostCSS)
npx postcss styles.css -o styles.min.css

# Check accessibility
npx lighthouse-ci autorun
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support:
- Email: harishvijay0204@gmail.com
- LinkedIn: [Harish Vijay V](https://www.linkedin.com/in/harish-vijay-9132a126a/)

---

**Made with ❤️ by Harish Vijay V**