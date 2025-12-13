# Quiz Application

A beautiful, interactive quiz application with smooth animations and a modern design.

## 👨‍💻 Developer

**Ranveer**

## ✨ Features

- **Interactive Quiz Interface** - Clean and intuitive question-answer flow
- **Animated Mascot** - Cute cat paw mascot with "Best of Luck!" message
- **Progress Tracking** - Visual progress bar showing quiz completion
- **Responsive Design** - Works seamlessly on all devices
- **Beautiful Gradients** - Harmonious blue color palette with smooth transitions
- **Smooth Animations** - Engaging micro-animations throughout the interface

## 🛠️ Technologies Used

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Playfair Display & Inter** - Premium typography

## 🚀 Getting Started

### Prerequisites

- Node.js & npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd pixel-perfect-interface-main

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 📦 Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The production files will be generated in the `dist` folder.

## 🌐 Deployment

### Deploy to Netlify

1. **Drag & Drop Method:**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `dist` folder onto the page
   - Your site will be live instantly!

2. **CLI Method:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## 📁 Project Structure

```
pixel-perfect-interface-main/
├── src/
│   ├── components/
│   │   ├── quiz/
│   │   │   ├── QuizContainer.tsx    # Main quiz component
│   │   │   ├── QuestionCard.tsx     # Question display
│   │   │   ├── Mascot.tsx           # Animated cat paw
│   │   │   ├── ProgressBar.tsx      # Progress indicator
│   │   │   ├── NavigationButtons.tsx # Quiz navigation
│   │   │   └── ResultsScreen.tsx    # Results display
│   │   └── ui/                      # shadcn/ui components
│   ├── data/
│   │   └── quizData.ts              # Quiz questions
│   ├── index.css                    # Global styles
│   └── App.tsx                      # Root component
├── public/                          # Static assets
└── dist/                            # Production build (generated)
```

## 🎨 Design Features

- **Harmonious Color Palette** - Carefully selected blue gradients (HSL 190°-195°)
- **Modern Typography** - Playfair Display for headings, Inter for body text
- **Smooth Transitions** - CSS animations with cubic-bezier easing
- **Glassmorphism Effects** - Subtle shadows and borders
- **Responsive Layout** - Mobile-first design approach

## 📝 License

This project is open source and available for personal and commercial use.

---

**Built with ❤️ by Ranveer**
