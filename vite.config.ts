import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"],
          animation: ["lottie-react"],
          confetti: ["react-confetti"],
          typewriter: ["typewriter-effect"],
          radix: ["radix-ui", "@base-ui/react"],
          carousel: ["embla-carousel-react", "embla-carousel-autoplay"],
          icons: ["lucide-react"],
          utils: ["class-variance-authority", "clsx", "tailwind-merge"]
        },
      }
    },
    chunkSizeWarningLimit: 500,
  },
})
