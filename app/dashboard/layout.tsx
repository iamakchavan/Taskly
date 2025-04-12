"use client"

import type React from "react"
import {
  Bell,
  Database,
  FileText,
  Home,
  Lock,
  MessageSquare,
  Search,
  Settings,
  Award,
  FileArchive,
  Briefcase,
  ImageIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeProvider } from "@/lib/theme-provider"
import { ThemeToggle } from "@/components/ui/theme-toggle"

// Client component for active link detection
function SidebarNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="px-4 py-2">
        <h2 className="text-[#1f1f1f] dark:text-white text-sm font-medium mb-2">Dashboard</h2>
        <nav className="space-y-1 stagger-children">
          <Link
            href="/dashboard"
            className={`flex items-center px-2 py-1.5 rounded-md text-xs ${
              isActive("/dashboard") 
                ? "text-[#2f70f2] bg-[#f6f6f6] dark:bg-[#2a2a2a]" 
                : "text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            <Home className="h-4 w-4 mr-2.5" />
            <span>Home</span>
          </Link>
          <Link
            href="/dashboard/files"
            className={`flex items-center px-2 py-1.5 rounded-md text-xs ${
              isActive("/dashboard/files") 
                ? "text-[#2f70f2] bg-[#f6f6f6] dark:bg-[#2a2a2a]" 
                : "text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            <FileText className="h-4 w-4 mr-2.5" />
            <span>Files</span>
          </Link>
          <Link
            href="/dashboard/projects"
            className={`flex items-center px-2 py-1.5 rounded-md text-xs ${
              isActive("/dashboard/projects") 
                ? "text-[#2f70f2] bg-[#f6f6f6] dark:bg-[#2a2a2a]" 
                : "text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            <Briefcase className="h-4 w-4 mr-2.5" />
            <span>Deadline Project</span>
          </Link>
          <Link
            href="/dashboard/management"
            className={`flex items-center px-2 py-1.5 rounded-md text-xs ${
              isActive("/dashboard/management") 
                ? "text-[#2f70f2] bg-[#f6f6f6] dark:bg-[#2a2a2a]" 
                : "text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            <Lock className="h-4 w-4 mr-2.5" />
            <span>Management</span>
          </Link>
          <Link
            href="/dashboard/database"
            className={`flex items-center px-2 py-1.5 rounded-md text-xs ${
              isActive("/dashboard/database") 
                ? "text-[#2f70f2] bg-[#f6f6f6] dark:bg-[#2a2a2a]" 
                : "text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            <Database className="h-4 w-4 mr-2.5" />
            <span>Database</span>
          </Link>
        </nav>
      </div>

      <div className="mt-8 px-4 py-2">
        <h2 className="text-[#1f1f1f] dark:text-white text-sm font-medium mb-2">Customer Data</h2>
        <nav className="space-y-1 stagger-children">
          <Link
            href="/dashboard/team-award"
            className={`flex items-center px-2 py-1.5 rounded-md text-xs ${
              isActive("/dashboard/team-award") 
                ? "text-[#2f70f2] bg-[#f6f6f6] dark:bg-[#2a2a2a]" 
                : "text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            <Award className="h-4 w-4 mr-2.5" />
            <span>Team Award</span>
          </Link>
          <Link
            href="/dashboard/invoice"
            className={`flex items-center px-2 py-1.5 rounded-md text-xs ${
              isActive("/dashboard/invoice") 
                ? "text-[#2f70f2] bg-[#f6f6f6] dark:bg-[#2a2a2a]" 
                : "text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            <FileArchive className="h-4 w-4 mr-2.5" />
            <span>Invoice Data</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className={`flex items-center px-2 py-1.5 rounded-md text-xs ${
              isActive("/dashboard/settings") 
                ? "text-[#2f70f2] bg-[#f6f6f6] dark:bg-[#2a2a2a]" 
                : "text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            <Settings className="h-4 w-4 mr-2.5" />
            <span>Settings</span>
          </Link>
          <Link
            href="/dashboard/announcements"
            className={`flex items-center px-2 py-1.5 rounded-md text-xs ${
              isActive("/dashboard/announcements") 
                ? "text-[#2f70f2] bg-[#f6f6f6] dark:bg-[#2a2a2a]" 
                : "text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            <Bell className="h-4 w-4 mr-2.5" />
            <span>Announcement</span>
          </Link>
          <Link
            href="/dashboard/media"
            className={`flex items-center px-2 py-1.5 rounded-md text-xs ${
              isActive("/dashboard/media") 
                ? "text-[#2f70f2] bg-[#f6f6f6] dark:bg-[#2a2a2a]" 
                : "text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            <ImageIcon className="h-4 w-4 mr-2.5" />
            <span>Media Assets</span>
          </Link>
          <Link
            href="/dashboard/feedback"
            className={`flex items-center px-2 py-1.5 rounded-md text-xs ${
              isActive("/dashboard/feedback") 
                ? "text-[#2f70f2] bg-[#f6f6f6] dark:bg-[#2a2a2a]" 
                : "text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            <MessageSquare className="h-4 w-4 mr-2.5" />
            <span>Client Feedback</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <div className="flex h-screen bg-[#f7f7ff] dark:bg-[#121212]">
        {/* Sidebar */}
        <div className="w-[200px] bg-white dark:bg-[#1a1a1a] border-r border-[#e3e3e3] dark:border-[#2a2a2a] flex flex-col animate-slide-in">
          <div className="p-6">
            <Link href="/dashboard">
              <h1 className="text-[#2f70f2] text-xl font-bold hover-lift">Taskly</h1>
            </Link>
          </div>

          <SidebarNav />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white dark:bg-[#1a1a1a] p-4 border-b border-[#e3e3e3] dark:border-[#2a2a2a] flex items-center justify-between animate-fade-in">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Search className="h-5 w-5 text-[#a8a8a8]" />
              </div>
              <input
                type="text"
                placeholder="Search property..."
                className="pl-10 pr-4 py-2 w-full rounded-md border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2f70f2] transition-shadow duration-200"
                spellCheck="false"
              />
            </div>

            <div className="flex items-center space-x-4 stagger-children">
              <ThemeToggle />
              <button className="p-2 rounded-full hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] hover-lift">
                <MessageSquare className="h-5 w-5 text-[#a8a8a8]" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] hover-lift">
                <Settings className="h-5 w-5 text-[#a8a8a8]" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] hover-lift">
                <Bell className="h-5 w-5 text-[#a8a8a8]" />
              </button>
              <div className="flex items-center space-x-2 hover-lift">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <Image
                    src="/alex.jpeg"
                    alt="Alex Smith"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <span className="text-sm font-medium dark:text-white">Alex Smith</span>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-6">
            <div className="animate-scale-in stagger-children">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}
