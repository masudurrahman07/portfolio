# Portfolio Website - React Version

A professional and responsive portfolio website built with React and Tailwind CSS.

## 🚀 Quick Start

### Option 1: Easy Installation (Windows)
1. Double-click `install.bat`
2. Wait for installation to complete
3. Your browser will open automatically at `http://localhost:3000`

### Option 2: Manual Installation
```bash
# Install dependencies
npm install

# Start development server
npm start
```

## ✅ All Requirements Implemented

1. **Responsive Navigation Bar** ✅
   - Mobile hamburger menu
   - Smooth scrolling to sections

2. **Professional Introduction** ✅
   - Designation display (Software Developer)
   - Professional photo included

3. **Resume Download Button** ✅
   - Prominent button in hero section
   - Ready for resume file integration

4. **Social Media Links** ✅
   - GitHub, LinkedIn, Twitter, Facebook
   - Multiple placement locations

5. **Detailed About Section** ✅
   - Programming journey story
   - Work preferences and hobbies
   - Personality showcase

6. **Visual Skills Display** ✅
   - Progress bars with percentages
   - Categorized by Frontend/Backend/Tools

7. **Projects Showcase (3+ Projects)** ✅
   - 3 featured projects with full details
   - Each project includes:
     - Technology stack
     - Live demo links
     - GitHub repository links
     - Development challenges
     - Future improvements
     - Detailed project pages

8. **Contact Information** ✅
   - Email: hello@jensenomega.com
   - Phone: +1 (234) 567-8900
   - Working contact form

9. **Fully Responsive Design** ✅
   - Works on all screen sizes
   - Professional color scheme
   - Dark/light theme toggle

## 🎨 Features

- **Theme Toggle**: Switch between dark and light modes
- **Smooth Animations**: Professional hover effects
- **Interactive Project Details**: Click to view full project information
- **Mobile Optimized**: Perfect on all devices
- **Modern Design**: Clean, professional appearance

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Skills.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── ProjectDetail.js
│   │   ├── Contact.js
│   │   └── ThemeToggle.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── install.bat
```

## 🛠 Customization

### Update Personal Information
- Edit `Hero.js` for name and title
- Modify `About.js` for personal story
- Update `Contact.js` for contact details

### Add Your Projects
- Edit the projects array in `Projects.js`
- Include your actual project details
- Update links to your repositories

### Resume Integration
Replace the alert in `Hero.js`:
```javascript
const handleResumeDownload = () => {
  const link = document.createElement('a');
  link.href = '/path-to-your-resume.pdf';
  link.download = 'Your_Name_Resume.pdf';
  link.click();
};
```

## 🌐 Deployment

Deploy to any platform:
- **Netlify**: Drag and drop build folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use gh-pages package

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Next Steps

1. Replace placeholder content with your information
2. Add your actual projects and links
3. Upload your resume file
4. Deploy to your preferred hosting platform

Your professional portfolio is ready to showcase your skills! 🚀