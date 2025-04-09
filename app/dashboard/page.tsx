"use client"

import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  ChevronDown,
  DollarSign,
  Download,
  FileText,
  MoreHorizontal,
  Share2,
  Users,
} from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  ReferenceDot,
} from "recharts"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function Dashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      isIncrease: true,
      icon: DollarSign,
      color: "#2f70f2",
    },
    {
      title: "Active Users",
      value: "2,345",
      change: "+15.2%",
      isIncrease: true,
      icon: Users,
      color: "#4eea7a",
    },
    {
      title: "Pending Tasks",
      value: "12",
      change: "-2.3%",
      isIncrease: false,
      icon: FileText,
      color: "#ffbc02",
    },
    {
      title: "Projects",
      value: "24",
      change: "+8.4%",
      isIncrease: true,
      icon: BarChart3,
      color: "#ff6b6b",
    },
  ]

  const recentFiles = [
    {
      name: "Q4 Financial Report.pdf",
      size: "2.4 MB",
      modified: "2 days ago",
      icon: FileText,
    },
    {
      name: "Marketing Strategy.docx",
      size: "1.8 MB",
      modified: "1 week ago",
      icon: FileText,
    },
    {
      name: "Product Roadmap.xlsx",
      size: "3.2 MB",
      modified: "3 days ago",
      icon: FileText,
    },
  ]

  const revenueData = [
    { month: "Jan", revenue: 35000, target: 32000 },
    { month: "Feb", revenue: 42000, target: 35000 },
    { month: "Mar", revenue: 38000, target: 37000 },
    { month: "Apr", revenue: 45000, target: 40000 },
    { month: "May", revenue: 43000, target: 42000 },
    { month: "Jun", revenue: 48000, target: 45000 },
    { month: "Jul", revenue: 52000, target: 48000 },
    { month: "Aug", revenue: 49000, target: 50000 },
    { month: "Sep", revenue: 55000, target: 52000 },
    { month: "Oct", revenue: 58000, target: 55000 },
    { month: "Nov", revenue: 62000, target: 58000 },
    { month: "Dec", revenue: 65000, target: 60000 },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold dark:text-white">Dashboard Overview</h1>

      {/* Stats Grid */}
      <AnimatedCardGrid className="grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <AnimatedCard key={stat.title}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-md bg-[${stat.color}]/10`}>
                  <Icon className={`h-5 w-5 text-[${stat.color}]`} />
                </div>
                <button className="text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] p-1.5 rounded-md">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-[#a8a8a8]">{stat.title}</p>
                <h3 className="text-2xl font-semibold dark:text-white">{stat.value}</h3>
                <div className="flex items-center text-xs">
                  {stat.isIncrease ? (
                    <ArrowUp className="h-3 w-3 text-[#4eea7a] mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 text-[#ff6b6b] mr-1" />
                  )}
                  <span
                    className={
                      stat.isIncrease ? "text-[#4eea7a]" : "text-[#ff6b6b]"
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="text-[#a8a8a8] ml-1">vs last month</span>
                </div>
              </div>
            </AnimatedCard>
          )
        })}
      </AnimatedCardGrid>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="col-span-2 bg-white dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm dark:shadow-none dark:border dark:border-[#2a2a2a]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium dark:text-white">Revenue Overview</h2>
            <select className="text-sm border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md px-2 py-1 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2f70f2]">
              <option value="yearly">Yearly</option>
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis 
                  dataKey="month" 
                  stroke="#a8a8a8"
                  tick={{ fill: '#a8a8a8' }}
                />
                <YAxis 
                  stroke="#a8a8a8"
                  tick={{ fill: '#a8a8a8' }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #2a2a2a',
                    borderRadius: '8px',
                    color: '#ffffff',
                  }}
                  itemStyle={{ color: '#ffffff' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2f70f2"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, fill: '#2f70f2' }}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#4eea7a"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Files */}
        <div className="bg-white dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm dark:shadow-none dark:border dark:border-[#2a2a2a]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium dark:text-white">Recent Files</h2>
            <button className="text-sm text-[#2f70f2]">View all</button>
          </div>
          <div className="space-y-4">
            {recentFiles.map((file) => (
              <div
                key={file.name}
                className="flex items-start justify-between p-3 rounded-md hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="flex items-start">
                  <div className="bg-[#f7f7ff] dark:bg-[#2a2a2a] p-2 rounded-md mr-3">
                    <file.icon className="h-4 w-4 text-[#2f70f2]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium dark:text-white">{file.name}</p>
                    <div className="flex items-center text-xs text-[#a8a8a8] mt-1">
                      <span>{file.size}</span>
                      <span className="mx-2">•</span>
                      <span>{file.modified}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity and Tasks Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm dark:shadow-none dark:border dark:border-[#2a2a2a]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium dark:text-white">Recent Activity</h2>
            <button className="text-sm text-[#2f70f2]">View all</button>
          </div>
          <div className="space-y-4">
            {/* Activity items */}
            <div className="flex items-center justify-between p-3 rounded-md hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a]">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-[#f7f7ff] dark:bg-[#2a2a2a] flex items-center justify-center mr-3">
                  <Users className="h-4 w-4 text-[#2f70f2]" />
                </div>
                <div>
                  <p className="text-sm font-medium dark:text-white">New team members added</p>
                  <p className="text-xs text-[#a8a8a8]">2 hours ago</p>
                </div>
              </div>
              <button className="p-1.5 rounded-md hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a]">
                <MoreHorizontal className="h-4 w-4 text-[#a8a8a8]" />
              </button>
            </div>
            {/* More activity items... */}
          </div>
        </div>

        {/* Tasks */}
        <div className="bg-white dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm dark:shadow-none dark:border dark:border-[#2a2a2a]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium dark:text-white">Tasks</h2>
            <button className="text-sm text-[#2f70f2]">View all</button>
          </div>
          <div className="space-y-4">
            {/* Task items */}
            <div className="flex items-center justify-between p-3 rounded-md hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a]">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#e3e3e3] dark:border-[#2a2a2a] text-[#2f70f2] focus:ring-[#2f70f2]"
                />
                <span className="ml-3 text-sm dark:text-white">Update project documentation</span>
              </div>
              <span className="text-xs text-[#a8a8a8]">Due today</span>
            </div>
            {/* More task items... */}
          </div>
        </div>
      </div>
    </div>
  )
}
