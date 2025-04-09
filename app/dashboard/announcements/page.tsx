"use client"

import { Bell, Calendar, ChevronDown, Filter, Plus, Search, Pin, MoreHorizontal } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"

export default function AnnouncementsPage() {
  const announcements = [
    {
      title: "New Feature Release",
      content: "We're excited to announce the launch of our new dashboard features...",
      date: "2 hours ago",
      isPinned: true,
      author: "Alex Smith",
      category: "Product Update",
    },
    {
      title: "System Maintenance",
      content: "Scheduled maintenance will be performed on Saturday at 2 AM EST...",
      date: "1 day ago",
      isPinned: true,
      author: "Tech Team",
      category: "Maintenance",
    },
    {
      title: "Team Meeting",
      content: "Monthly all-hands meeting scheduled for next Friday at 10 AM...",
      date: "2 days ago",
      isPinned: false,
      author: "Sarah Johnson",
      category: "Team",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Announcements</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Announcement
          </button>
          <button className="px-4 py-2 bg-white dark:bg-[#1a1a1a] dark:text-white border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm font-medium flex items-center">
            <Bell className="h-4 w-4 mr-2" />
            Manage Notifications
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm dark:shadow-none border border-[#e3e3e3] dark:border-[#2a2a2a]">
        <div className="flex justify-between mb-4">
          <div className="relative w-[400px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#a8a8a8]" />
            </div>
            <input
              type="text"
              placeholder="Search announcements..."
              className="pl-10 pr-4 py-2 w-full rounded-md border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2f70f2]"
            />
          </div>
          <div className="flex space-x-3">
            <button className="px-3 py-2 bg-white dark:bg-[#1a1a1a] dark:text-white border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm flex items-center hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <button className="px-3 py-2 bg-white dark:bg-[#1a1a1a] dark:text-white border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm flex items-center hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </button>
            <button className="px-3 py-2 bg-white dark:bg-[#1a1a1a] dark:text-white border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm flex items-center hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]">
              <ChevronDown className="h-4 w-4 mr-2" />
              Category
            </button>
          </div>
        </div>

        {/* Announcements List */}
        <div className="grid gap-6">
          {announcements.map((announcement) => (
            <AnimatedCard key={announcement.title}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {announcement.isPinned && (
                      <Pin className="h-4 w-4 text-[#ff6b6b]" />
                    )}
                    <h3 className="text-lg font-medium dark:text-white">
                      {announcement.title}
                    </h3>
                    <span className="px-2 py-1 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-md text-xs text-[#2f70f2]">
                      {announcement.category}
                    </span>
                  </div>
                  <p className="text-[#1f1f1f] dark:text-gray-300 mb-4">
                    {announcement.content}
                  </p>
                  <div className="flex items-center text-sm text-[#a8a8a8]">
                    <span>{announcement.author}</span>
                    <span className="mx-2">•</span>
                    <span>{announcement.date}</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] rounded-md">
                  <MoreHorizontal className="h-5 w-5 text-[#a8a8a8]" />
                </button>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Announcement Categories */}
      <div className="bg-white dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm dark:shadow-none border border-[#e3e3e3] dark:border-[#2a2a2a]">
        <h2 className="text-lg font-medium mb-4 dark:text-white">Categories</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-lg p-4 hover:border-[#2f70f2] transition-colors">
            <h3 className="font-medium mb-2 dark:text-white">Company Events</h3>
            <p className="text-sm text-[#a8a8a8] mb-2">5 announcements</p>
            <div className="w-full bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full h-1.5">
              <div className="bg-[#2f70f2] h-1.5 rounded-full" style={{ width: "40%" }}></div>
            </div>
          </div>
          <div className="border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-lg p-4 hover:border-[#2f70f2] transition-colors">
            <h3 className="font-medium mb-2 dark:text-white">Product Updates</h3>
            <p className="text-sm text-[#a8a8a8] mb-2">8 announcements</p>
            <div className="w-full bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full h-1.5">
              <div className="bg-[#4eea7a] h-1.5 rounded-full" style={{ width: "65%" }}></div>
            </div>
          </div>
          <div className="border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-lg p-4 hover:border-[#2f70f2] transition-colors">
            <h3 className="font-medium mb-2 dark:text-white">Meetings</h3>
            <p className="text-sm text-[#a8a8a8] mb-2">3 announcements</p>
            <div className="w-full bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full h-1.5">
              <div className="bg-[#ffbc02] h-1.5 rounded-full" style={{ width: "25%" }}></div>
            </div>
          </div>
          <div className="border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-lg p-4 hover:border-[#2f70f2] transition-colors">
            <h3 className="font-medium mb-2 dark:text-white">Facilities</h3>
            <p className="text-sm text-[#a8a8a8] mb-2">2 announcements</p>
            <div className="w-full bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full h-1.5">
              <div className="bg-[#d62c2c] h-1.5 rounded-full" style={{ width: "15%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
