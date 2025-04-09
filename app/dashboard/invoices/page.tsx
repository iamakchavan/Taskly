"use client"

import { FileText, Search, Filter, Plus, Download, MoreHorizontal, DollarSign, TrendingUp, Clock } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function InvoicesPage() {
  const invoices = [
    {
      id: "INV-2024-001",
      client: "TechCorp Solutions",
      amount: "$12,500.00",
      status: "Paid",
      dueDate: "March 15, 2024",
      issueDate: "March 1, 2024",
    },
    {
      id: "INV-2024-002",
      client: "Global Innovations",
      amount: "$8,750.00",
      status: "Pending",
      dueDate: "March 30, 2024",
      issueDate: "March 5, 2024",
    },
    {
      id: "INV-2024-003",
      client: "Digital Dynamics",
      amount: "$15,200.00",
      status: "Overdue",
      dueDate: "February 28, 2024",
      issueDate: "February 14, 2024",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Invoices</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </button>
          <button className="px-4 py-2 bg-white dark:bg-[#1a1a1a] dark:text-white border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm font-medium flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Invoice Stats */}
      <AnimatedCardGrid className="grid-cols-3">
        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-[#2f70f2] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Total Revenue</h3>
            </div>
            <span className="text-2xl font-bold text-[#2f70f2]">$145.5k</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#2f70f2] rounded-full" style={{ width: "75%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">+12.5% from last month</p>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-[#4eea7a] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Payment Rate</h3>
            </div>
            <span className="text-2xl font-bold text-[#4eea7a]">95%</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#4eea7a] rounded-full" style={{ width: "95%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">On-time payments</p>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-[#ffbc02] mr-2" />
              <h3 className="text-lg font-medium dark:text-white">Pending</h3>
            </div>
            <span className="text-2xl font-bold text-[#ffbc02]">$28.4k</span>
          </div>
          <div className="h-2 bg-[#f7f7ff] dark:bg-[#2a2a2a] rounded-full">
            <div className="h-2 bg-[#ffbc02] rounded-full" style={{ width: "35%" }}></div>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2">5 invoices pending</p>
        </AnimatedCard>
      </AnimatedCardGrid>

      {/* Search and Filter */}
      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#a8a8a8]" />
          <input
            type="text"
            placeholder="Search invoices..."
            className="w-full pl-10 pr-4 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f70f2]"
          />
        </div>
        <button className="px-4 py-2 border border-[#e3e3e3] dark:border-[#2a2a2a] dark:text-white rounded-md text-sm font-medium flex items-center hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a]">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </button>
      </div>

      {/* Recent Invoices */}
      <AnimatedCard>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium dark:text-white">Recent Invoices</h2>
          <button className="text-sm text-[#2f70f2]">View all</button>
        </div>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="p-4 rounded-lg hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-[#f7f7ff] dark:bg-[#2a2a2a] flex items-center justify-center">
                    <FileText className="h-5 w-5 text-[#2f70f2]" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-sm font-medium dark:text-white">{invoice.client}</h3>
                      <span className="mx-2 text-[#a8a8a8]">•</span>
                      <span className="text-sm text-[#a8a8a8]">{invoice.id}</span>
                    </div>
                    <div className="mt-1 flex items-center space-x-4">
                      <span className="text-sm font-medium dark:text-white">{invoice.amount}</span>
                      <span className="text-xs text-[#a8a8a8]">Due {invoice.dueDate}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          invoice.status === "Paid"
                            ? "bg-[#eefbf3] dark:bg-[#1a2e22] text-[#4eea7a]"
                            : invoice.status === "Pending"
                            ? "bg-[#fff8eb] dark:bg-[#2e2a1a] text-[#ffbc02]"
                            : "bg-[#ffebeb] dark:bg-[#2e1a1a] text-[#ff6b6b]"
                        }`}
                      >
                        {invoice.status}
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