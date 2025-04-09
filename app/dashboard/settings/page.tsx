"use client"

import { Settings, User, Bell, Shield, Palette } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold dark:text-white">Settings</h1>

      <AnimatedCard>
        <div className="flex items-center mb-6">
          <User className="h-5 w-5 text-[#2f70f2] mr-2" />
          <h2 className="text-xl font-semibold dark:text-white">Profile Settings</h2>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1f1f1f] dark:text-white mb-1">First Name</label>
              <input
                type="text"
                defaultValue="Alex"
                className="w-full px-3 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1f1f1f] dark:text-white mb-1">Last Name</label>
              <input
                type="text"
                defaultValue="Smith"
                className="w-full px-3 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1f1f1f] dark:text-white mb-1">Email</label>
            <input
              type="email"
              defaultValue="alex.smith@example.com"
              className="w-full px-3 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1f1f1f] dark:text-white mb-1">Bio</label>
            <textarea
              rows={4}
              defaultValue="Product Manager with 5+ years of experience in SaaS products."
              className="w-full px-3 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2]"
            />
          </div>
        </div>
      </AnimatedCard>

      <AnimatedCardGrid className="grid-cols-2">
        <AnimatedCard>
          <div className="flex items-center mb-4">
            <Bell className="h-5 w-5 text-[#ffbc02] mr-2" />
            <h3 className="text-lg font-medium dark:text-white">Notifications</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                defaultChecked
                className="h-4 w-4 rounded border-[#e3e3e3] dark:border-[#2a2a2a] text-[#2f70f2] focus:ring-[#2f70f2]"
              />
              <label htmlFor="emailNotifications" className="ml-2 text-sm dark:text-white">
                Email Notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pushNotifications"
                defaultChecked
                className="h-4 w-4 rounded border-[#e3e3e3] dark:border-[#2a2a2a] text-[#2f70f2] focus:ring-[#2f70f2]"
              />
              <label htmlFor="pushNotifications" className="ml-2 text-sm dark:text-white">
                Push Notifications
              </label>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center mb-4">
            <Shield className="h-5 w-5 text-[#4eea7a] mr-2" />
            <h3 className="text-lg font-medium dark:text-white">Security</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="twoFactor"
                defaultChecked
                className="h-4 w-4 rounded border-[#e3e3e3] dark:border-[#2a2a2a] text-[#2f70f2] focus:ring-[#2f70f2]"
              />
              <label htmlFor="twoFactor" className="ml-2 text-sm dark:text-white">
                Two-factor Authentication
              </label>
            </div>
            <button className="text-sm text-[#2f70f2]">Change Password</button>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center mb-4">
            <Palette className="h-5 w-5 text-[#ff6b6b] mr-2" />
            <h3 className="text-lg font-medium dark:text-white">Appearance</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1f1f1f] dark:text-white mb-1">Theme</label>
              <select className="w-full px-3 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2]">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center mb-4">
            <Settings className="h-5 w-5 text-[#9c27b0] mr-2" />
            <h3 className="text-lg font-medium dark:text-white">Advanced</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="analytics"
                defaultChecked
                className="h-4 w-4 rounded border-[#e3e3e3] dark:border-[#2a2a2a] text-[#2f70f2] focus:ring-[#2f70f2]"
              />
              <label htmlFor="analytics" className="ml-2 text-sm dark:text-white">
                Usage Analytics
              </label>
            </div>
            <button className="text-sm text-[#2f70f2]">Export Data</button>
          </div>
        </AnimatedCard>
      </AnimatedCardGrid>

      <div className="flex justify-end">
        <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium">
          Save Changes
        </button>
      </div>
    </div>
  )
}
