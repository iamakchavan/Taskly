"use client"

import { Clock, MoreHorizontal, Plus, Users } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function ProjectsPage() {
  const projects = [
    {
      name: "Website Redesign",
      description: "Redesign the company website with new branding",
      progress: 75,
      deadline: "Aug 15, 2023",
      members: 5,
      status: "In Progress",
      priority: "High",
    },
    {
      name: "Mobile App Development",
      description: "Develop a new mobile app for iOS and Android",
      progress: 40,
      deadline: "Sep 30, 2023",
      members: 8,
      status: "In Progress",
      priority: "High",
    },
    {
      name: "Marketing Campaign",
      description: "Launch Q3 marketing campaign for new product",
      progress: 90,
      deadline: "Jul 31, 2023",
      members: 4,
      status: "Review",
      priority: "Medium",
    },
    {
      name: "Customer Portal",
      description: "Build a new customer portal for account management",
      progress: 20,
      deadline: "Oct 15, 2023",
      members: 6,
      status: "Planning",
      priority: "Medium",
    },
    {
      name: "Data Migration",
      description: "Migrate data from legacy system to new platform",
      progress: 60,
      deadline: "Aug 30, 2023",
      members: 3,
      status: "In Progress",
      priority: "High",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Projects</h1>
        <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </button>
      </div>

      {/* Project Stats */}
      <AnimatedCardGrid className="grid-cols-4">
        <AnimatedCard>
          <h3 className="text-[#a8a8a8] text-sm mb-2">Total Projects</h3>
          <p className="text-2xl font-bold dark:text-white">12</p>
        </AnimatedCard>
        <AnimatedCard>
          <h3 className="text-[#a8a8a8] text-sm mb-2">In Progress</h3>
          <p className="text-2xl font-bold dark:text-white">7</p>
        </AnimatedCard>
        <AnimatedCard>
          <h3 className="text-[#a8a8a8] text-sm mb-2">Completed</h3>
          <p className="text-2xl font-bold dark:text-white">3</p>
        </AnimatedCard>
        <AnimatedCard>
          <h3 className="text-[#a8a8a8] text-sm mb-2">On Hold</h3>
          <p className="text-2xl font-bold dark:text-white">2</p>
        </AnimatedCard>
      </AnimatedCardGrid>

      {/* Projects List */}
      <AnimatedCard>
        <h2 className="text-lg font-medium mb-4 dark:text-white">Active Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-lg p-4 hover:border-[#2f70f2] dark:hover:border-[#2f70f2] transition-colors bg-white dark:bg-[#1a1a1a]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="font-medium text-lg dark:text-white">{project.name}</h3>
                    <span
                      className={`ml-3 px-2 py-0.5 text-xs rounded-full ${
                        project.priority === "High"
                          ? "bg-[#ffebeb] dark:bg-[#2e1a1a] text-[#ff6b6b]"
                          : "bg-[#fff8eb] dark:bg-[#2e2a1a] text-[#ffbc02]"
                      }`}
                    >
                      {project.priority}
                    </span>
                    <span
                      className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                        project.status === "In Progress"
                          ? "bg-[#eef6ff] dark:bg-[#1a2e3e] text-[#2f70f2]"
                          : project.status === "Review"
                            ? "bg-[#f3efff] dark:bg-[#2e1a3e] text-[#9b6dff]"
                            : "bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#a8a8a8]"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-[#a8a8a8] mb-3">{project.description}</p>
                </div>
                <button className="text-[#a8a8a8] hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] p-2 rounded-md">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#a8a8a8]">Progress</span>
                  <span className="text-[#a8a8a8]">{project.progress}%</span>
                </div>
                <div className="w-full bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${
                      project.progress > 70
                        ? "bg-[#4eea7a]"
                        : project.progress > 30
                        ? "bg-[#2f70f2]"
                        : "bg-[#ffbc02]"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-[#a8a8a8]">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">Deadline: {project.deadline}</span>
                  <Users className="h-4 w-4 mr-1" />
                  <span>{project.members} members</span>
                </div>
                <button className="text-[#2f70f2] text-xs font-medium hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] px-2 py-1 rounded-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </AnimatedCard>
    </div>
  )
}
