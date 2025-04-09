"use client"

import { Trophy, Search, Filter, Plus, Star, Calendar, MoreHorizontal, Medal, Target, Award } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function AwardsPage() {
  const awards = [
    {
      id: 1,
      title: "Employee of the Month",
      recipient: "David Miller",
      department: "Engineering",
      date: "March 2024",
      description: "Outstanding contribution to the new product launch and team leadership.",
      category: "Individual Excellence",
      badge: "🏆",
    },
    {
      id: 2,
      title: "Innovation Award",
      recipient: "Cloud Infrastructure Team",
      department: "DevOps",
      date: "Q1 2024",
      description: "Successfully implemented new cloud architecture reducing costs by 40%.",
      category: "Team Achievement",
      badge: "💡",
    },
    {
      id: 3,
      title: "Customer Success Star",
      recipient: "Sarah Chen",
      department: "Customer Support",
      date: "February 2024",
      description: "Exceptional customer satisfaction scores and problem resolution rate.",
      category: "Individual Excellence",
      badge: "⭐",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Team Awards</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Award
          </button>
          <button className="px-4 py-2 bg-white dark:bg-[#1a1a1a] dark:text-white border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm font-medium flex items-center">
            <Trophy className="h-4 w-4 mr-2" />
            Manage Awards
          </button>
        </div>
      </div>

      {/* Award Stats */}
      <AnimatedCardGrid className="grid-cols-3">
        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Trophy className="h-5 w-5 text-[#2f70f2] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Total Awards</h3>
            </div>
            <span className="text-2xl font-bold text-[#2f70f2]">156</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#2f70f2] rounded-full" style={{ width: "75%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">+8 this quarter</p>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Medal className="h-5 w-5 text-[#ffbc02] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Departments</h3>
            </div>
            <span className="text-2xl font-bold text-[#ffbc02]">12</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#ffbc02] rounded-full" style={{ width: "90%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">Active in program</p>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Target className="h-5 w-5 text-[#4eea7a] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Achievement Rate</h3>
            </div>
            <span className="text-2xl font-bold text-[#4eea7a]">92%</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#4eea7a] rounded-full" style={{ width: "92%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">Target completion</p>
        </AnimatedCard>
      </AnimatedCardGrid>

      {/* Search and Filter */}
      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#a8a8a8]" />
          <input
            type="text"
            placeholder="Search awards..."
            className="w-full pl-10 pr-4 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2]"
          />
        </div>
        <button className="px-4 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:text-white rounded-md text-sm font-medium flex items-center hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </button>
      </div>

      {/* Recent Awards */}
      <AnimatedCard>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium dark:text-white">Recent Awards</h2>
          <button className="text-sm text-[#2f70f2]">View all</button>
        </div>
        <div className="space-y-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="p-4 rounded-lg hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-[#f7f7ff] dark:bg-[#2a2a2a] flex items-center justify-center text-xl">
                    {award.badge}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-sm font-medium dark:text-white">{award.title}</h3>
                      <span className="mx-2 text-[#a8a8a8]">•</span>
                      <span className="text-sm text-[#a8a8a8]">{award.department}</span>
                    </div>
                    <p className="mt-2 text-sm dark:text-white">{award.description}</p>
                    <div className="mt-2 flex items-center space-x-4">
                      <span className="text-sm font-medium dark:text-white">{award.recipient}</span>
                      <span className="text-xs text-[#a8a8a8]">{award.date}</span>
                      <span className="text-xs px-2 py-1 bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#2f70f2] rounded-full">
                        {award.category}
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