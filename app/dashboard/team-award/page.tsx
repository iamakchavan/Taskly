"use client"

import { Award, Calendar, ChevronDown, Download, Medal, Trophy, Users } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function TeamAwardPage() {
  const awards = [
    {
      title: "Employee of the Month",
      recipient: "Sarah Johnson",
      department: "Marketing",
      date: "July 2023",
      description: "Recognized for exceptional performance in the Q2 marketing campaign.",
    },
    {
      title: "Innovation Award",
      recipient: "Mike Wilson",
      department: "Engineering",
      date: "June 2023",
      description: "Developed a new feature that increased user engagement by 25%.",
    },
    {
      title: "Team Excellence",
      recipient: "Product Team",
      department: "Product",
      date: "Q2 2023",
      description: "Successfully launched the new product version ahead of schedule.",
    },
    {
      title: "Customer Service Award",
      recipient: "Emily Davis",
      department: "Support",
      date: "May 2023",
      description: "Maintained a 98% customer satisfaction rating for three consecutive months.",
    },
  ]

  const upcomingAwards = [
    { title: "Quarterly Excellence Award", date: "September 30, 2023", nominations: 12 },
    { title: "Innovation Challenge Winner", date: "August 15, 2023", nominations: 8 },
    { title: "Leadership Recognition", date: "October 5, 2023", nominations: 5 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Team Awards</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium flex items-center">
            <Trophy className="h-4 w-4 mr-2" />
            Nominate
          </button>
          <button className="px-4 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm font-medium flex items-center dark:text-white">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Award Stats */}
      <AnimatedCardGrid className="grid-cols-4">
        <AnimatedCard>
          <div className="flex items-center mb-2">
            <Trophy className="h-5 w-5 text-[#2f70f2] mr-2" />
            <h3 className="text-[#a8a8a8] text-sm">Total Awards</h3>
          </div>
          <p className="text-2xl font-bold dark:text-white">24</p>
        </AnimatedCard>
        <AnimatedCard>
          <div className="flex items-center mb-2">
            <Medal className="h-5 w-5 text-[#4eea7a] mr-2" />
            <h3 className="text-[#a8a8a8] text-sm">This Month</h3>
          </div>
          <p className="text-2xl font-bold dark:text-white">3</p>
        </AnimatedCard>
        <AnimatedCard>
          <div className="flex items-center mb-2">
            <Users className="h-5 w-5 text-[#ffbc02] mr-2" />
            <h3 className="text-[#a8a8a8] text-sm">Nominations</h3>
          </div>
          <p className="text-2xl font-bold dark:text-white">18</p>
        </AnimatedCard>
        <AnimatedCard>
          <div className="flex items-center mb-2">
            <Calendar className="h-5 w-5 text-[#d62c2c] mr-2" />
            <h3 className="text-[#a8a8a8] text-sm">Upcoming</h3>
          </div>
          <p className="text-2xl font-bold dark:text-white">3</p>
        </AnimatedCard>
      </AnimatedCardGrid>

      <div className="grid grid-cols-3 gap-6">
        {/* Recent Awards */}
        <AnimatedCard className="col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium dark:text-white">Recent Awards</h2>
            <div className="flex items-center">
              <span className="text-sm text-[#a8a8a8] mr-2">Filter by:</span>
              <button className="inline-flex items-center px-3 py-1 border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md dark:text-white dark:hover:bg-[#2a2a2a] transition-colors">
                <span className="text-sm">All Departments</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className="border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-lg p-4 hover:border-[#2f70f2] dark:hover:border-[#2f70f2] transition-colors bg-white dark:bg-[#1a1a1a]"
              >
                <div className="flex items-start">
                  <div className="bg-[#f7f7ff] dark:bg-[#2a2a2a] p-2 rounded-md mr-4">
                    <Award className="h-6 w-6 text-[#2f70f2]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg dark:text-white">{award.title}</h3>
                        <p className="text-sm text-[#a8a8a8]">{award.date}</p>
                      </div>
                      <span className="px-2 py-1 bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#2f70f2] rounded-md text-xs">
                        {award.department}
                      </span>
                    </div>
                    <p className="text-sm mt-2 dark:text-[#a8a8a8]">{award.description}</p>
                    <div className="mt-3 pt-3 border-t border-[#e3e3e3] dark:border-[#2a2a2a] flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#f7f7ff] dark:bg-[#2a2a2a] flex items-center justify-center mr-3">
                        <span className="text-[#2f70f2] font-medium">{award.recipient.charAt(0)}</span>
                      </div>
                      <span className="font-medium dark:text-white">{award.recipient}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>

        {/* Upcoming Awards */}
        <AnimatedCard className="col-span-1">
          <h2 className="text-lg font-medium mb-4 dark:text-white">Upcoming Awards</h2>
          <div className="space-y-4">
            {upcomingAwards.map((award, index) => (
              <div key={index} className="border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-lg p-4 bg-white dark:bg-[#1a1a1a]">
                <h3 className="font-medium dark:text-white">{award.title}</h3>
                <div className="flex items-center text-xs text-[#a8a8a8] mt-1 mb-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{award.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#a8a8a8]">Nominations</span>
                  <span className="text-xs font-medium dark:text-white">{award.nominations}</span>
                </div>
                <div className="w-full bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full h-1.5 mt-1">
                  <div
                    className="bg-[#2f70f2] h-1.5 rounded-full"
                    style={{ width: `${(award.nominations / 15) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#e3e3e3] dark:border-[#2a2a2a]">
            <h3 className="font-medium mb-3 dark:text-white">Award Categories</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="dark:text-white">Leadership Excellence</span>
                <span className="text-xs bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#2f70f2] px-2 py-0.5 rounded-full">5 awards</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="dark:text-white">Innovation & Creativity</span>
                <span className="text-xs bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#2f70f2] px-2 py-0.5 rounded-full">8 awards</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="dark:text-white">Customer Service</span>
                <span className="text-xs bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#2f70f2] px-2 py-0.5 rounded-full">6 awards</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="dark:text-white">Team Collaboration</span>
                <span className="text-xs bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#2f70f2] px-2 py-0.5 rounded-full">5 awards</span>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  )
}
