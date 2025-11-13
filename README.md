# Rainbow 🌈

**AI-Powered Content Generation Studio**

Rainbow is an all-in-one platform that makes it incredibly easy to create professional videos, ads, and multimedia content using AI. Simply describe what you want, and Rainbow generates stunning visuals, animations, narration, and music—all in one seamless workflow.

## 🎯 Vision

Just like how Lovable revolutionized web development by making it accessible to everyone, Rainbow aims to democratize video and content creation. No complex editing software, no technical expertise required—just describe your vision and watch it come to life.

## ✨ Features

- **🎨 Image Generation**: Create stunning initial frames from text prompts
- **🎬 Video Animation**: Transform images into dynamic videos with camera movements and animations
- **🎤 AI Narration**: Generate natural-sounding voiceovers with multiple voice options
- **🎵 Background Music**: Create custom music tracks that match your content
- **📽️ Multi-Scene Projects**: Build complex videos with multiple scenes
- **💬 AI Chat Assistant**: Get guidance and refine your ideas through natural conversation
- **📦 Asset Management**: Organize and reuse your generated content

## 🏗️ Project Structure

This is a monorepo containing:

```
Rainbow/
├── frontend/          # React + TypeScript + Vite frontend
├── backend/           # FastAPI backend (coming soon)
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Python 3.11+ (for backend, coming soon)

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Building for Production

```bash
# Build the frontend
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technologies

### Frontend
- **Vite** - Fast build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type safety
- **shadcn/ui** - Beautiful component library
- **Tailwind CSS** - Styling
- **React Query** - Data fetching and caching
- **React Router** - Navigation

### Backend (Planned)
- **FastAPI** - Modern Python web framework
- **PostgreSQL** - Database
- **Redis** - Caching and job queues
- **Celery** - Async task processing
- **AWS S3** - Media storage

## 📖 Usage

1. **Start Creating**: Enter a video idea on the landing page
2. **Chat with AI**: Refine your concept through conversation
3. **Generate Content**: 
   - Create initial frames from prompts
   - Animate frames into videos
   - Add narration and background music
4. **Manage Scenes**: Build multi-scene projects
5. **Export**: Download your finished video

## 🎨 Workflow

Rainbow follows a simple, intuitive workflow:

1. **Describe** → Enter your video idea
2. **Generate** → AI creates images, videos, and audio
3. **Refine** → Edit and adjust through the chat interface
4. **Compose** → Build multi-scene projects
5. **Export** → Download your professional content

## 🤝 Contributing

This project is currently in active development. Contributions and feedback are welcome!

## 📝 License

[Add your license here]

## 🔮 Roadmap

- [ ] Backend API implementation
- [ ] Image generation integration (DALL-E, Stable Diffusion)
- [ ] Video generation integration (Runway ML, Stable Video Diffusion)
- [ ] Audio generation (TTS, music)
- [ ] User authentication and project management
- [ ] Real-time generation progress tracking
- [ ] Advanced editing capabilities
- [ ] Export in multiple formats and resolutions

---

**Made with ❤️ for creators who want to bring their ideas to life**
