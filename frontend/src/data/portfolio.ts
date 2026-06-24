export const experiences = [
  {
    period: 'Jan 2026 – Present',
    company: 'Leap91 Technologies Pvt. Ltd.',
    role: 'Software Development Engineer — Full Stack AI Engineer',
    location: 'Pune, Maharashtra (Remote)',
    current: true,
    bullets: [
      'Built core backend for Crewgle AI with modular REST APIs (Python + FastAPI)',
      'Engineered production real-time conversational AI voice pipeline achieving sub-500ms latency',
      'Designed RAG-powered voice assistant using LangChain + FAISS for intelligent document retrieval',
      'Shipped fully local Speech-to-Speech stack for offline enterprise deployments using Ollama + Whisper',
      'Integrated WebRTC video infra for concurrent AI–human interview sessions with lifecycle management and Docker-based horizontal scaling',
    ],
  },
  {
    period: 'Jul 2025 – Dec 2025',
    company: 'SigiloTech',
    role: 'Software Engineer Intern — Backend Developer',
    location: 'Kolkata, West Bengal (On-site)',
    current: false,
    bullets: [
      'Designed and scaled 50+ controller-based RESTful APIs in .NET Core (C#) for the IMPKT Project covering auth, data, and third-party integrations',
      'Architected SQL schema and a Dapper Micro-ORM data layer with parameterized queries optimized for concurrent, high-volume workloads',
      'Built an intelligent file management system on Azure Blob Storage + GPT-4 Vision for auto-description generation — cutting review time by ~70%',
      'Implemented .NET Core middleware for structured logging, centralized exception handling, and JWT-based stateless auth with role-based authorization',
    ],
  },
]

export const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  specialization: 'Specialization: AI & Machine Learning',
  university: 'Brainware University, Kolkata',
  location: 'Kolkata, India',
  period: 'Aug 2021 – Jun 2025',
  cgpa: '9.50 / 10.00',
  achievements: [
    { icon: '💡', text: 'Specialization in Artificial Intelligence & Machine Learning' },
    { icon: '🏆', text: 'CODESPIRE 2023 — Ranked 7th All-India hackathon finalist' },
    { icon: '📖', text: 'Published research at Springer ICIDA conference' },
    { icon: '🏅', text: '2× Patent Co-Applicant for AI-based innovations' },
  ],
}

export const patents = [
  {
    title: 'Kanoon Mitra',
    applicationNo: '202331049760A',
    description: 'AI Legal Chatbot — An intelligent system providing legal assistance through natural language processing',
  },
  {
    title: 'Chakravyuh',
    applicationNo: '202331049753A',
    description: 'AI Theft Detection System — Advanced video surveillance using computer vision for real-time threat detection',
  },
]

export const publication = {
  title: 'An AI Based Integrated Framework for Motion Activated Facial Recognition',
  venue: 'Published in International Conference on Innovative Data Analysis (ICIDA) - Springer',
  link: 'https://link.springer.com/chapter/10.1007/978-981-97-4928-7_30',
  linkLabel: 'Springer ICIDA',
}

export const projects = [
  {
    name: 'GitaVerse: Voice of Krishna AI',
    description:
      'Production cross-platform voice AI mobile app (live on Google Play) delivering real-time spiritual guidance via a Krishna-inspired AI persona. Low-latency, Deepgram-powered STT → GPT-4 → ElevenLabs TTS pipeline.',
    tech: ['Flutter', 'FastAPI', 'Pipecat', 'WebRTC', 'Deepgram', 'OpenAI', 'ElevenLabs'],
    github: '',
    live: 'https://play.google.com/store/apps/details?id=com.gitaverse.mobile_app&pcampaignid=web_share',
  },
  {
    name: 'Fashion-Saathi — AI Wedding Organizer',
    description:
      'NLP-driven recommendation engine for personalized wedding styling — attire, makeover and hairstyle. Processing multi-attribute user profiles to deliver ranked outfit and styling recommendations.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'NLP'],
    github: '',
    live: 'https://fashion-sathi.vercel.app/',
  },
  {
    name: 'Local Speech-to-Speech Inference Stack',
    description:
      'Fully offline S2S pipeline combining Ollama LLMs, Whisper STT and Kokoro-82M TTS. Eliminates third-party API costs and enables privacy-sensitive enterprise deployments.',
    tech: ['Ollama', 'Whisper', 'Kokoro TTS', 'Python', 'Docker'],
    github: 'https://github.com/Romit-18/',
    live: '',
  },
]

// Spotify track IDs — copy from open.spotify.com/track/<ID>
export const music = [
  { title: 'Yellow',                  artist: 'Coldplay',     spotifyId: '3AJwUDP919kvQ9QcozQPxg' },
  { title: 'Lose Yourself',           artist: 'Eminem',       spotifyId: '5Z01UMMf7V1o0MzF86s6WJ' },
  { title: 'Creep',                   artist: 'Radiohead',    spotifyId: '70LcF31zb1H0PyJoS1Sx1r' },
  { title: 'Flashing Lights',          artist: 'Kanye West, Dwele',         spotifyId: '3TBeBzkd19wXVdFqgv8ddN' },
  { title: 'Nights',                  artist: 'Frank Ocean',               spotifyId: '7eqoqGkKwgOaWNNHx90uEZ' },
  { title: 'Money Trees',             artist: 'Kendrick Lamar, Jay Rock',  spotifyId: '0AOvNRgl0SMfOibWA5bP8o' },
  { title: "There's Nothing Holdin' Me Back", artist: 'Shawn Mendes',     spotifyId: '7JJmb5XwzOO8jgpou264Ml' },
  { title: 'Push Ups',                artist: 'Drake',                     spotifyId: '3eh51r6rFWAlGQRlHx9QnQ' },
  { title: "That's What I Like",      artist: 'Bruno Mars',                spotifyId: '0KKkJNfGyhkQ5aFogxQAPU' },
  { title: 'Careless Whisper',        artist: 'George Michael',            spotifyId: '5WDLRQ3VCdVrKw0njWe5E5' },
  { title: 'Smells Like Teen Spirit', artist: 'Nirvana',      spotifyId: '5ghIJDpPoe3CfHMGu71E6T' },
]

export const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '9.5', label: 'CGPA' },
  { value: '2', label: 'Patents Filed' },
  { value: '1', label: 'Springer Publication' },
]

export const contactEmail = 'reach2romit.cs@gmail.com'
export const resumeUrl = 'https://drive.google.com/file/d/1LuRmyqOGWS2Mq0PIFmqeS3ZL7dKvgtp8/view?usp=drive_link'

export const socials = [
  { label: 'GitHub',   url: 'https://github.com/Romit-18/',                  icon: 'github'   },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/romit-pal-3001a4217/',  icon: 'linkedin' },
  { label: 'LeetCode', url: 'https://leetcode.com/u/CodeWIthRio/',            icon: 'code'     },
]
