"use client"

import { Database, Search, Filter, Plus, MoreHorizontal, HardDrive, Cpu, Activity } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function DatabasePage() {
  const databases = [
    {
      name: "Production DB",
      type: "PostgreSQL",
      status: "Healthy",
      size: "1.2 TB",
      connections: "156",
      lastBackup: "2 hours ago",
    },
    {
      name: "Analytics DB",
      type: "MongoDB",
      status: "Warning",
      size: "850 GB",
      connections: "89",
      lastBackup: "6 hours ago",
    },
    {
      name: "User Data",
      type: "MySQL",
      status: "Healthy",
      size: "450 GB",
      connections: "234",
      lastBackup: "1 hour ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Database Management</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Database
          </button>
          <button className="px-4 py-2 bg-white dark:bg-[#1a1a1a] dark:text-white border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm font-medium flex items-center">
            <Database className="h-4 w-4 mr-2" />
            Manage Backups
          </button>
        </div>
      </div>

      {/* Database Stats */}
      <AnimatedCardGrid className="grid-cols-3">
        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <HardDrive className="h-5 w-5 text-[#2f70f2] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Total Storage</h3>
            </div>
            <span className="text-2xl font-bold text-[#2f70f2]">2.5 TB</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#2f70f2] rounded-full" style={{ width: "75%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">75% utilized</p>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Cpu className="h-5 w-5 text-[#4eea7a] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Performance</h3>
            </div>
            <span className="text-2xl font-bold text-[#4eea7a]">98%</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#4eea7a] rounded-full" style={{ width: "98%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">Optimal performance</p>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-[#ffbc02] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Active Connections</h3>
            </div>
            <span className="text-2xl font-bold text-[#ffbc02]">479</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#ffbc02] rounded-full" style={{ width: "65%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">Current sessions</p>
        </AnimatedCard>
      </AnimatedCardGrid>

      {/* Search and Filter */}
      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#a8a8a8]" />
          <input
            type="text"
            placeholder="Search databases..."
            className="w-full pl-10 pr-4 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2]"
          />
        </div>
        <button className="px-4 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:text-white rounded-md text-sm font-medium flex items-center hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </button>
      </div>

      {/* Database List */}
      <AnimatedCard>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium dark:text-white">Active Databases</h2>
          <button className="text-sm text-[#2f70f2]">View all</button>
        </div>
        <div className="space-y-4">
          {databases.map((db) => (
            <div
              key={db.name}
              className="p-4 rounded-lg hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-[#f7f7ff] dark:bg-[#2a2a2a] flex items-center justify-center">
                    <Database className="h-5 w-5 text-[#2f70f2]" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-sm font-medium dark:text-white">{db.name}</h3>
                      <span className="mx-2 text-[#a8a8a8]">•</span>
                      <span className="text-sm text-[#a8a8a8]">{db.type}</span>
                    </div>
                    <div className="mt-1 flex items-center space-x-4">
                      <span className="text-sm font-medium dark:text-white">{db.size}</span>
                      <span className="text-xs text-[#a8a8a8]">{db.connections} connections</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          db.status === "Healthy"
                            ? "bg-[#eefbf3] dark:bg-[#1a2e22] text-[#4eea7a]"
                            : "bg-[#fff8eb] dark:bg-[#2e2a1a] text-[#ffbc02]"
                        }`}
                      >
                        {db.status}
                      </span>
                      <span className="text-xs text-[#a8a8a8]">Last backup: {db.lastBackup}</span>
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
