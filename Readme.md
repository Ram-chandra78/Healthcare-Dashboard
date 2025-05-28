#  Healthcare Dashboard

A modern, responsive healthcare dashboard built with, React, and static CSS. This project demonstrates a clean, professional interface for managing patient data, appointments, and health metrics.

![Healthcare Dashboard Preview](https://healthcare-dashboard-eta-gilt.vercel.app/)

##  Preview

The dashboard features a clean, minimalist design with:
- Interactive sidebar navigation
- Human anatomy visualization with health indicators
- Calendar view with appointment scheduling
- Progress tracking for health metrics
- Activity charts and upcoming schedule management

##  Features

###  Core Functionality
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, professional healthcare interface
- **Component-Based**: Modular React architecture


### 📱 Responsive Layout
- **Mobile (320px-640px)**: Single column, touch-optimized
- **Tablet (640px-1024px)**: Two-column adaptive layout
- **Desktop (1024px+)**: Full three-column dashboard view

###  Components
- **Header**: Logo, search, notifications, user profile
- **Sidebar**: Navigation menu with active states
- **Anatomy Section**: Human figure with health indicators
- **Health Status Cards**: Progress bars for Lungs, Teeth, Bone
- **Calendar View**: Monthly calendar with appointment times
- **Upcoming Schedule**: Organized appointments by day
- **Activity Feed**: Weekly appointment statistics with charts

##  Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager
- Modern web browser

### Installation

1. **Clone or Download the Project**
   \`\`\`bash
   # If using Git
   git clone 
   cd healthcare-dashboard

2. **Install Dependencies**
   \`\`\`bash
   # Using npm 
   npm install 
   
   # Or using yarn
   yarn install
   \`\`\`

3. **Start Development Server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open in Browser**
   Navigate to [http://localhost:3000]

##  Development

### Available Scripts

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
\`\`\`


## 📱 Responsive Breakpoints

\`\`\`css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
\`\`\`

##  Customization

### Adding New Components
1. Create component in \`src/components/dashboard\`
2. Export from component file
3. Import in parent component
4. Add to mock data if needed

### Modifying Data
Edit \`src/data/\` to customize:
- Navigation items
- Health status data
- Calendar appointments


### Styling Changes
-  styles: \`app.css\`
-  styles:\`src/style\`
customize the css base on requerment .all the  css file are there with name

##  Troubleshooting

### Common Issues

**Dependency Conflicts**
\`\`\`bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
\`\`\`

**Port Already in Use**
\`\`\`bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
\`\`\`

**TypeScript Errors**
\`\`\`bash
# Check types
npm run type-check
# Build to see all errors
npm run build
\`\`\`


##  Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

##  Dependencies

### Core Dependencies
- **React 18.0**: UI library
- **TypeScript 5.0**: Type safety

### UI Dependencies
- ** font awesome**: Icon library
- **React DOM**: React rendering

##  Deployment



### Netlify
1. Build the project: \`npm run build\`
2. Deploy \`out\` folder to Netlify

### Docker
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`



### Development Guidelines
- Use static CSS for styling
- Maintain responsive design
- Add proper accessibility attributes
- Write meaningful commit messages


## Acknowledgments

- Design inspiration from modern healthcare applications
- Icons provided by [font awesome](https://fontawesome.com/)

## Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing issues on GitHub
3. Create a new issue with detailed description
4. Include browser version and error messages

## 🔄 Version History

- **v1.0.0** - Initial release with core dashboard functionality
- **v1.1.0** - Added responsive design improvements
- **v1.2.0** - Enhanced accessibility and performance

---

**Built with  for modern healthcare management**
\`\`\`
