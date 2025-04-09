"use client"

import { ChevronDown, Filter, MessageSquare, Plus, Search, Star, ThumbsUp, Users, MoreHorizontal, UserCircle2 } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function FeedbackPage() {
  const feedbackItems = [
    {
      id: 1,
      client: "Sarah Johnson",
      company: "TechCorp Inc.",
      message: "The new dashboard design is incredibly intuitive. Our team has seen a 30% increase in productivity since implementation.",
      rating: 5,
      date: "2 hours ago",
      type: "Positive",
      avatar: "/avatars/sarah.jpg",
    },
    {
      id: 2,
      client: "Michael Chen",
      company: "InnovateLabs",
      message: "While the overall functionality is good, we'd like to see more customization options for the reporting features.",
      rating: 4,
      date: "1 day ago",
      type: "Suggestion",
      avatar: "/avatars/michael.jpg",
    },
    {
      id: 3,
      client: "Emma Davis",
      company: "CreativeWorks",
      message: "The latest update has significantly improved load times. Great work on optimization!",
      rating: 5,
      date: "3 days ago",
      type: "Positive",
      avatar: "/avatars/emma.jpg",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Client Feedback</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Feedback
          </button>
          <button className="px-4 py-2 bg-white border border-[#e3e3e3] rounded-md text-sm font-medium flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            Request Feedback
          </button>
        </div>
      </div>

      {/* Feedback Stats */}
      <AnimatedCardGrid className="grid-cols-3">
        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <ThumbsUp className="h-5 w-5 text-[#2f70f2] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Total Feedback</h3>
            </div>
            <span className="text-2xl font-bold text-[#2f70f2]">324</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#2f70f2] rounded-full" style={{ width: "75%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">+12% this month</p>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-[#ffbc02] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Average Rating</h3>
            </div>
            <span className="text-2xl font-bold text-[#ffbc02]">4.8</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#ffbc02] rounded-full" style={{ width: "90%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">Based on 324 reviews</p>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 text-[#4eea7a] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Response Rate</h3>
            </div>
            <span className="text-2xl font-bold text-[#4eea7a]">98%</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#4eea7a] rounded-full" style={{ width: "98%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">Average response time: 2h</p>
        </AnimatedCard>
      </AnimatedCardGrid>

      {/* Search and Filter */}
      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#a8a8a8]" />
          <input
            type="text"
            placeholder="Search feedback..."
            className="w-full pl-10 pr-4 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2]"
          />
        </div>
        <button className="px-4 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:text-white rounded-md text-sm font-medium flex items-center hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </button>
      </div>

      {/* Recent Feedback */}
      <AnimatedCard>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium dark:text-white">Recent Feedback</h2>
          <button className="text-sm text-[#2f70f2]">View all</button>
        </div>
        <div className="space-y-6">
          {feedbackItems.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-lg hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-[#f7f7ff] dark:bg-[#2a2a2a] flex items-center justify-center">
                    <UserCircle2 className="h-6 w-6 text-[#a8a8a8]" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-sm font-medium dark:text-white">{item.client}</h3>
                      <span className="mx-2 text-[#a8a8a8]">•</span>
                      <span className="text-sm text-[#a8a8a8]">{item.company}</span>
                    </div>
                    <p className="mt-2 text-sm dark:text-white">{item.message}</p>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-[#ffbc02] fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-[#a8a8a8]">{item.date}</span>
                      <span className="text-xs px-2 py-1 bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#2f70f2] rounded-full">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="p-2 hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] rounded-md">
                  <MoreHorizontal className="h-5 w-5 text-[#a8a8a8]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </AnimatedCard>
    </div>
  )
}
