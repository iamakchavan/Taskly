"use client"

import { Image, Film, Music, Upload, Grid, List, Filter, Search, MoreHorizontal } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function MediaPage() {
  const mediaFiles = [
    {
      name: "Product Launch Video",
      type: "video",
      size: "24.5 MB",
      modified: "2 hours ago",
      thumbnail: "/placeholder.svg",
    },
    {
      name: "Brand Guidelines",
      type: "image",
      size: "2.8 MB",
      modified: "1 day ago",
      thumbnail: "/placeholder.svg",
    },
    {
      name: "Podcast Episode 12",
      type: "audio",
      size: "18.2 MB",
      modified: "3 days ago",
      thumbnail: "/placeholder.svg",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Media Assets</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium flex items-center">
            <Upload className="h-4 w-4 mr-2" />
            Upload Media
          </button>
          <button className="p-2 hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] rounded-md">
            <Grid className="h-5 w-5 text-[#a8a8a8]" />
          </button>
          <button className="p-2 hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] rounded-md">
            <List className="h-5 w-5 text-[#a8a8a8]" />
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#a8a8a8]" />
          <input
            type="text"
            placeholder="Search media files..."
            className="w-full pl-10 pr-4 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2]"
          />
        </div>
        <button className="px-4 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:text-white rounded-md text-sm font-medium flex items-center hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </button>
      </div>

      {/* Media Categories */}
      <AnimatedCardGrid className="grid-cols-3">
        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image className="h-5 w-5 text-[#2f70f2] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Images</h3>
            </div>
            <span className="text-sm text-[#a8a8a8]">243 files</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#2f70f2] rounded-full" style={{ width: "65%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">15.4 GB used</p>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Film className="h-5 w-5 text-[#ffbc02] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Videos</h3>
            </div>
            <span className="text-sm text-[#a8a8a8]">52 files</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#ffbc02] rounded-full" style={{ width: "45%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">28.2 GB used</p>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Music className="h-5 w-5 text-[#4eea7a] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Audio</h3>
            </div>
            <span className="text-sm text-[#a8a8a8]">128 files</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#4eea7a] rounded-full" style={{ width: "30%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">8.7 GB used</p>
        </AnimatedCard>
      </AnimatedCardGrid>

      {/* Recent Media */}
      <AnimatedCard>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium dark:text-white">Recent Media</h2>
          <button className="text-sm text-[#2f70f2]">View all</button>
        </div>
        <div className="space-y-4">
          {mediaFiles.map((file) => (
            <div
              key={file.name}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a]"
            >
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-lg flex items-center justify-center">
                  {file.type === "video" && <Film className="h-6 w-6 text-[#ffbc02]" />}
                  {file.type === "image" && <Image className="h-6 w-6 text-[#2f70f2]" />}
                  {file.type === "audio" && <Music className="h-6 w-6 text-[#4eea7a]" />}
                </div>
                <div>
                  <h3 className="text-sm font-medium dark:text-white">{file.name}</h3>
                  <div className="flex items-center text-xs text-[#a8a8a8] mt-1">
                    <span>{file.size}</span>
                    <span className="mx-2">•</span>
                    <span>{file.modified}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] rounded-md">
                <MoreHorizontal className="h-5 w-5 text-[#a8a8a8]" />
              </button>
            </div>
          ))}
        </div>
      </AnimatedCard>
    </div>
  )
}
