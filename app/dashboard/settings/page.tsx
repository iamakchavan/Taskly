"use client"

import { Settings, User, Bell, Shield, Palette, Key } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Settings</h1>
        <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium hover:bg-[#2861d4] transition-colors">
          Save Changes
        </button>
      </div>

      <AnimatedCardGrid>
        <AnimatedCard className="col-span-2">
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
                  className="w-full px-3 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2] dark:text-white transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1f1f1f] dark:text-white mb-1">Last Name</label>
                <input
                  type="text"
                  defaultValue="Smith"
                  className="w-full px-3 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2] dark:text-white transition-shadow"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1f1f1f] dark:text-white mb-1">Email</label>
              <input
                type="email"
                defaultValue="alex.smith@example.com"
                className="w-full px-3 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2] dark:text-white transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1f1f1f] dark:text-white mb-1">Bio</label>
              <textarea
                rows={4}
                defaultValue="Product Manager with 5+ years of experience in SaaS products."
                className="w-full px-3 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2] dark:text-white transition-shadow resize-none"
              />
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center mb-4">
            <Bell className="h-5 w-5 text-[#ffbc02] mr-2" />
            <h3 className="text-lg font-medium dark:text-white">Notifications</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
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
              <span className="text-xs text-[#a8a8a8]">All activity</span>
            </div>
            <div className="flex items-center justify-between">
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
              <span className="text-xs text-[#a8a8a8]">Important only</span>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center mb-4">
            <Shield className="h-5 w-5 text-[#4eea7a] mr-2" />
            <h3 className="text-lg font-medium dark:text-white">Security</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
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
              <span className="text-xs text-[#4eea7a]">Enabled</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Key className="h-4 w-4 text-[#2f70f2] mr-2" />
                <span className="text-sm dark:text-white">Password</span>
              </div>
              <button className="text-sm text-[#2f70f2] hover:underline">Change</button>
            </div>
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
              <select className="w-full px-3 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2] dark:text-white transition-shadow">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="animations"
                  defaultChecked
                  className="h-4 w-4 rounded border-[#e3e3e3] dark:border-[#2a2a2a] text-[#2f70f2] focus:ring-[#2f70f2]"
                />
                <label htmlFor="animations" className="ml-2 text-sm dark:text-white">
                  Enable Animations
                </label>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </AnimatedCardGrid>
    </div>
  )
}
