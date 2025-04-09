"use client"

import { ChevronDown, Lock, Shield, Users, UserPlus, Key, Settings, AlertTriangle } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function ManagementPage() {
  const users = [
    { name: "Alex Smith", email: "alex@example.com", role: "Admin", status: "Active", lastActive: "Just now" },
    { name: "Sarah Johnson", email: "sarah@example.com", role: "Manager", status: "Active", lastActive: "5 min ago" },
    { name: "Mike Wilson", email: "mike@example.com", role: "Editor", status: "Active", lastActive: "1 hour ago" },
    { name: "Emily Davis", email: "emily@example.com", role: "Viewer", status: "Inactive", lastActive: "2 days ago" },
    { name: "Chris Taylor", email: "chris@example.com", role: "Manager", status: "Active", lastActive: "30 min ago" },
  ]

  const securityLogs = [
    { event: "Login attempt", user: "alex@example.com", status: "Success", ip: "192.168.1.1", time: "Today, 10:45 AM" },
    {
      event: "Password change",
      user: "sarah@example.com",
      status: "Success",
      ip: "192.168.1.2",
      time: "Today, 09:30 AM",
    },
    {
      event: "Login attempt",
      user: "unknown@example.com",
      status: "Failed",
      ip: "45.67.89.10",
      time: "Today, 08:15 AM",
    },
    {
      event: "Role change",
      user: "mike@example.com",
      status: "Success",
      ip: "192.168.1.3",
      time: "Yesterday, 04:20 PM",
    },
    {
      event: "Login attempt",
      user: "emily@example.com",
      status: "Success",
      ip: "192.168.1.4",
      time: "Yesterday, 02:10 PM",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Management</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium flex items-center">
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </button>
          <button className="px-4 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm font-medium flex items-center dark:text-white">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </button>
        </div>
      </div>

      {/* Management Stats */}
      <AnimatedCardGrid className="grid-cols-4">
        <AnimatedCard>
          <div className="flex items-center mb-2">
            <Users className="h-5 w-5 text-[#2f70f2] mr-2" />
            <h3 className="text-[#a8a8a8] text-sm">Total Users</h3>
          </div>
          <p className="text-2xl font-bold dark:text-white">24</p>
        </AnimatedCard>
        <AnimatedCard>
          <div className="flex items-center mb-2">
            <Shield className="h-5 w-5 text-[#4eea7a] mr-2" />
            <h3 className="text-[#a8a8a8] text-sm">Active Users</h3>
          </div>
          <p className="text-2xl font-bold dark:text-white">21</p>
        </AnimatedCard>
        <AnimatedCard>
          <div className="flex items-center mb-2">
            <Lock className="h-5 w-5 text-[#ffbc02] mr-2" />
            <h3 className="text-[#a8a8a8] text-sm">Pending Invites</h3>
          </div>
          <p className="text-2xl font-bold dark:text-white">3</p>
        </AnimatedCard>
        <AnimatedCard>
          <div className="flex items-center mb-2">
            <AlertTriangle className="h-5 w-5 text-[#d62c2c] mr-2" />
            <h3 className="text-[#a8a8a8] text-sm">Security Alerts</h3>
          </div>
          <p className="text-2xl font-bold dark:text-white">2</p>
        </AnimatedCard>
      </AnimatedCardGrid>

      {/* User Management */}
      <AnimatedCard>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium dark:text-white">User Management</h2>
          <div className="flex items-center">
            <span className="text-sm text-[#a8a8a8] mr-2">Filter by:</span>
            <button className="inline-flex items-center px-3 py-1 border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md dark:text-white dark:hover:bg-[#2a2a2a] transition-colors">
              <span className="text-sm">All Users</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-[#e3e3e3] dark:border-[#2a2a2a]">
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">User</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Role</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Status</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Last Active</th>
                <th className="text-right py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email} className="border-b border-[#e3e3e3] dark:border-[#2a2a2a] hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a] transition-colors">
                  <td className="py-3 px-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#f7f7ff] dark:bg-[#2a2a2a] flex items-center justify-center mr-3">
                        <span className="text-[#2f70f2] font-medium">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium dark:text-white">{user.name}</p>
                        <p className="text-xs text-[#a8a8a8]">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm dark:text-white">{user.role}</td>
                  <td className="py-3 px-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "Active" 
                          ? "bg-[#eef6ff] dark:bg-[#1a2e3e] text-[#2f70f2]" 
                          : "bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#a8a8a8]"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm dark:text-[#a8a8a8]">{user.lastActive}</td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="px-3 py-1 text-xs bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#2f70f2] rounded-md hover:bg-[#eef6ff] dark:hover:bg-[#1a2e3e] transition-colors">Edit</button>
                      <button className="px-3 py-1 text-xs bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#2f70f2] rounded-md hover:bg-[#eef6ff] dark:hover:bg-[#1a2e3e] transition-colors">Permissions</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedCard>

      {/* Security Logs */}
      <AnimatedCard>
        <h2 className="text-lg font-medium mb-4 dark:text-white">Security Logs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-[#e3e3e3] dark:border-[#2a2a2a]">
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Event</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">User</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Status</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">IP Address</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Time</th>
              </tr>
            </thead>
            <tbody>
              {securityLogs.map((log, index) => (
                <tr key={index} className="border-b border-[#e3e3e3] dark:border-[#2a2a2a] hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a] transition-colors">
                  <td className="py-3 px-4 text-sm dark:text-white">
                    <div className="flex items-center">
                      <div className="bg-[#f7f7ff] dark:bg-[#2a2a2a] p-1.5 rounded-md mr-3">
                        <Key className="h-4 w-4 text-[#2f70f2]" />
                      </div>
                      {log.event}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm dark:text-white">{log.user}</td>
                  <td className="py-3 px-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        log.status === "Success"
                          ? "bg-[#eef6ff] dark:bg-[#1a2e3e] text-[#2f70f2]"
                          : "bg-[#ffebeb] dark:bg-[#2e1a1a] text-[#ff6b6b]"
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm dark:text-[#a8a8a8]">{log.ip}</td>
                  <td className="py-3 px-4 text-sm dark:text-[#a8a8a8]">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedCard>
    </div>
  )
}
