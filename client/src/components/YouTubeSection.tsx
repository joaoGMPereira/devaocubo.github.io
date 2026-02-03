/*
 * DESIGN: Neon Cyber Gradient - YouTube Section
 * - Blue/Purple/Magenta gradient accents
 * - Tab navigation for Videos/Lives/Shorts
 * - Glass card video thumbnails with colorful glow
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, Radio, Smartphone } from "lucide-react";
import videosData from "../data/videos.json";

interface Video {
  videoId: string;
  title: string;
  publishedAt: string;
}

function VideoCard({ video, isShort = false }: { video: Video; isShort?: boolean }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
  const videoUrl = isShort 
    ? `https://www.youtube.com/shorts/${video.videoId}`
    : `https://www.youtube.com/watch?v=${video.videoId}`;

  return (
    <motion.a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block glass-card-hover overflow-hidden ${isShort ? 'rounded-2xl' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Thumbnail */}
      <div className={`relative overflow-hidden ${isShort ? 'aspect-[9/16]' : 'aspect-video'}`}>
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 glow-purple">
            <Play size={24} className="text-white ml-1" fill="currentColor" />
          </div>
        </div>
        {isShort && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1">
            <Smartphone size={12} className="text-white/80" />
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Short</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-white group-hover:text-purple-300 transition-colors line-clamp-2 text-sm md:text-base">
          {video.title}
        </h3>
      </div>
    </motion.a>
  );
}

export default function YouTubeSection() {
  const [activeTab, setActiveTab] = useState<"videos" | "lives" | "shorts">("videos");
  
  const getVideos = () => {
    switch(activeTab) {
      case "shorts": return videosData.shorts;
      case "lives": return videosData.live;
      default: return videosData.normal;
    }
  };

  const videos = getVideos();

  return (
    <section id="youtube" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4"
          >
            📺 YouTube
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4"
          >
            Conteúdo <span className="gradient-text">Recente</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto mb-8"
          >
            Desenvolvimento iOS, Swift, SwiftUI e as últimas novidades de tecnologia.
            Inscreva-se para acompanhar a jornada!
          </motion.p>

          {/* CTA */}
          <motion.a
            href="https://www.youtube.com/@devaocubo?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-500 transition-all duration-300 mb-8"
          >
            <ExternalLink size={18} />
            <span>Inscreva-se no Canal</span>
          </motion.a>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-purple-500/20 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === "videos"
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white glow-purple"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Play size={16} />
              Vídeos
            </button>
            <button
              onClick={() => setActiveTab("shorts")}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === "shorts"
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white glow-purple"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Smartphone size={16} />
              Shorts
            </button>
            <button
              onClick={() => setActiveTab("lives")}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === "lives"
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white glow-purple"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Radio size={16} />
              Ao Vivo
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-6 ${
              activeTab === "shorts" 
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" 
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {videos.map((video) => (
              <VideoCard 
                key={video.videoId} 
                video={video} 
                isShort={activeTab === "shorts"} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
