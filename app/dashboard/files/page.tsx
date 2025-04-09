"use client"

import { FileText, FolderOpen, Download, Share2, MoreHorizontal } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function FilesPage() {
  const files = [
    { name: "Financial Report Q2 2023", type: "PDF", size: "2.4 MB", modified: "2 days ago", owner: "Alex Smith" },
    { name: "Marketing Strategy 2023", type: "DOCX", size: "1.8 MB", modified: "1 week ago", owner: "Sarah Johnson" },
    { name: "Product Roadmap", type: "XLSX", size: "3.2 MB", modified: "3 days ago", owner: "Mike Wilson" },
    { name: "Client Presentation", type: "PPTX", size: "5.7 MB", modified: "Yesterday", owner: "Emily Davis" },
    { name: "Budget Planning 2023", type: "XLSX", size: "1.5 MB", modified: "4 days ago", owner: "Alex Smith" },
    { name: "Team Performance Review", type: "PDF", size: "2.1 MB", modified: "1 day ago", owner: "Sarah Johnson" },
  ]

  const folders = [
    { name: "Financial Documents", files: 24, size: "45 MB" },
    { name: "Marketing Materials", files: 18, size: "32 MB" },
    { name: "Client Projects", files: 36, size: "78 MB" },
    { name: "Team Resources", files: 12, size: "28 MB" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Files</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium flex items-center">
            <FileText className="h-4 w-4 mr-2" />
            Upload File
          </button>
          <button className="px-4 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm font-medium flex items-center dark:text-white">
            <FolderOpen className="h-4 w-4 mr-2" />
            New Folder
          </button>
        </div>
      </div>

      {/* Folders Section */}
      <div className="bg-white dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm dark:shadow-none dark:border dark:border-[#2a2a2a]">
        <h2 className="text-lg font-medium mb-4 dark:text-white">Folders</h2>
        <div className="grid grid-cols-4 gap-4">
          {folders.map((folder) => (
            <div
              key={folder.name}
              className="border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-lg p-4 hover:border-[#2f70f2] transition-colors dark:bg-[#1a1a1a]"
            >
              <div className="flex items-start justify-between">
                <div className="bg-[#f7f7ff] dark:bg-[#2a2a2a] p-2 rounded-md">
                  <FolderOpen className="h-6 w-6 text-[#2f70f2]" />
                </div>
                <button className="text-[#a8a8a8]">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
              <h3 className="font-medium mt-3 mb-1 dark:text-white">{folder.name}</h3>
              <div className="flex items-center text-xs text-[#a8a8a8]">
                <span>{folder.files} files</span>
                <span className="mx-2">•</span>
                <span>{folder.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Files Section */}
      <div className="bg-white dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm dark:shadow-none dark:border dark:border-[#2a2a2a]">
        <h2 className="text-lg font-medium mb-4 dark:text-white">Recent Files</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-[#e3e3e3] dark:border-[#2a2a2a]">
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Name</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Type</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Size</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Modified</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Owner</th>
                <th className="text-right py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.name} className="border-b border-[#e3e3e3] dark:border-[#2a2a2a] hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a]">
                  <td className="py-3 px-4 text-sm dark:text-white">
                    <div className="flex items-center">
                      <div className="bg-[#f7f7ff] dark:bg-[#2a2a2a] p-1.5 rounded-md mr-3">
                        <FileText className="h-4 w-4 text-[#2f70f2]" />
                      </div>
                      {file.name}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm dark:text-white">{file.type}</td>
                  <td className="py-3 px-4 text-sm dark:text-white">{file.size}</td>
                  <td className="py-3 px-4 text-sm dark:text-white">{file.modified}</td>
                  <td className="py-3 px-4 text-sm dark:text-white">{file.owner}</td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1.5 rounded-md hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a]">
                        <Download className="h-4 w-4 text-[#a8a8a8]" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a]">
                        <Share2 className="h-4 w-4 text-[#a8a8a8]" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a]">
                        <MoreHorizontal className="h-4 w-4 text-[#a8a8a8]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatedCardGrid className="grid-cols-3">
        <AnimatedCard>
          <div className="flex items-center mb-4">
            <FileText className="h-5 w-5 text-[#2f70f2] mr-2" />
            <span className="text-[#1f1f1f] dark:text-white font-medium">Documents</span>
          </div>
          {/* Card content */}
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center mb-4">
            <FileText className="h-5 w-5 text-[#ffbc02] mr-2" />
            <span className="text-[#1f1f1f] dark:text-white font-medium">Media Files</span>
          </div>
          {/* Card content */}
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center mb-4">
            <FileText className="h-5 w-5 text-[#4eea7a] mr-2" />
            <span className="text-[#1f1f1f] dark:text-white font-medium">Downloads</span>
          </div>
          {/* Card content */}
        </AnimatedCard>
      </AnimatedCardGrid>
    </div>
  )
}
