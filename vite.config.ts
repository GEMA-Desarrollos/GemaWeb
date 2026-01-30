import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL || "http://localhost:3000",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
          headers: {
            "X-Api-Key": env.VITE_API_KEY || "",
          },
        },
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
            utils: ["class-variance-authority", "clsx", "tailwind-merge"],
          },
        },
      },
      chunkSizeWarningLimit: 500,
    },
  };
});
