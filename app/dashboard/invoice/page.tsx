"use client"

import { Calendar, ChevronDown, Download, FileText, Filter, Plus, Printer, Search } from "lucide-react"
import { AnimatedCard, AnimatedCardGrid } from "@/components/ui/animated-card"

export default function InvoicePage() {
  const invoices = [
    {
      id: "INV-2023-001",
      client: "Acme Inc.",
      amount: "$2,450.00",
      date: "Jul 15, 2023",
      dueDate: "Aug 15, 2023",
      status: "Paid",
    },
    {
      id: "INV-2023-002",
      client: "Globex Corp",
      amount: "$1,850.75",
      date: "Jul 10, 2023",
      dueDate: "Aug 10, 2023",
      status: "Paid",
    },
    {
      id: "INV-2023-003",
      client: "Initech",
      amount: "$3,200.00",
      date: "Jul 05, 2023",
      dueDate: "Aug 05, 2023",
      status: "Pending",
    },
    {
      id: "INV-2023-004",
      client: "Umbrella Corp",
      amount: "$5,750.50",
      date: "Jun 28, 2023",
      dueDate: "Jul 28, 2023",
      status: "Overdue",
    },
    {
      id: "INV-2023-005",
      client: "Stark Industries",
      amount: "$4,320.25",
      date: "Jun 20, 2023",
      dueDate: "Jul 20, 2023",
      status: "Paid",
    },
    {
      id: "INV-2023-006",
      client: "Wayne Enterprises",
      amount: "$2,100.00",
      date: "Jun 15, 2023",
      dueDate: "Jul 15, 2023",
      status: "Pending",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Invoice Data</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-[#2f70f2] text-white rounded-md text-sm font-medium flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </button>
          <button className="px-4 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm font-medium flex items-center dark:text-white">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Invoice Stats */}
      <AnimatedCardGrid className="grid-cols-4">
        <AnimatedCard>
          <h3 className="text-[#a8a8a8] text-sm mb-2">Total Invoices</h3>
          <p className="text-2xl font-bold dark:text-white">24</p>
        </AnimatedCard>
        <AnimatedCard>
          <h3 className="text-[#a8a8a8] text-sm mb-2">Paid</h3>
          <p className="text-2xl font-bold text-[#4eea7a]">18</p>
        </AnimatedCard>
        <AnimatedCard>
          <h3 className="text-[#a8a8a8] text-sm mb-2">Pending</h3>
          <p className="text-2xl font-bold text-[#ffbc02]">4</p>
        </AnimatedCard>
        <AnimatedCard>
          <h3 className="text-[#a8a8a8] text-sm mb-2">Overdue</h3>
          <p className="text-2xl font-bold text-[#d62c2c]">2</p>
        </AnimatedCard>
      </AnimatedCardGrid>

      {/* Search and Filter */}
      <AnimatedCard>
        <div className="flex justify-between mb-4">
          <div className="relative w-[400px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#a8a8a8]" />
            </div>
            <input
              type="text"
              placeholder="Search invoices..."
              className="pl-10 pr-4 py-2 w-full rounded-md border border-[#e3e3e3] dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2f70f2] dark:placeholder-[#a8a8a8]"
            />
          </div>
          <div className="flex space-x-3">
            <button className="px-3 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm flex items-center dark:text-white hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a] transition-colors">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <button className="px-3 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm flex items-center dark:text-white hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a] transition-colors">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </button>
            <button className="px-3 py-2 bg-white dark:bg-[#1a1a1a] border border-[#e3e3e3] dark:border-[#2a2a2a] rounded-md text-sm flex items-center dark:text-white hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a] transition-colors">
              <ChevronDown className="h-4 w-4 mr-2" />
              Status
            </button>
          </div>
        </div>

        {/* Invoices List */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-[#e3e3e3] dark:border-[#2a2a2a]">
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Invoice ID</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Client</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Date</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Due Date</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Status</th>
                <th className="text-right py-3 px-4 font-medium text-sm text-[#1f1f1f] dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-[#e3e3e3] dark:border-[#2a2a2a] hover:bg-[#f7f7ff] dark:hover:bg-[#2a2a2a] transition-colors">
                  <td className="py-3 px-4 text-sm dark:text-white">
                    <div className="flex items-center">
                      <div className="bg-[#f7f7ff] dark:bg-[#2a2a2a] p-1.5 rounded-md mr-3">
                        <FileText className="h-4 w-4 text-[#2f70f2]" />
                      </div>
                      {invoice.id}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm dark:text-white">{invoice.client}</td>
                  <td className="py-3 px-4 text-sm font-medium dark:text-white">{invoice.amount}</td>
                  <td className="py-3 px-4 text-sm dark:text-[#a8a8a8]">{invoice.date}</td>
                  <td className="py-3 px-4 text-sm dark:text-[#a8a8a8]">{invoice.dueDate}</td>
                  <td className="py-3 px-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        invoice.status === "Paid"
                          ? "bg-[#eef6ff] dark:bg-[#1a2e3e] text-[#2f70f2]"
                          : invoice.status === "Pending"
                            ? "bg-[#fff8eb] dark:bg-[#2e2a1a] text-[#ffbc02]"
                            : "bg-[#ffebeb] dark:bg-[#2e1a1a] text-[#ff6b6b]"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1.5 rounded-md hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a] transition-colors">
                        <Printer className="h-4 w-4 text-[#a8a8a8]" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a] transition-colors">
                        <Download className="h-4 w-4 text-[#a8a8a8]" />
                      </button>
                      <button className="px-3 py-1 text-xs bg-[#f7f7ff] dark:bg-[#2a2a2a] text-[#2f70f2] rounded-md hover:bg-[#eef6ff] dark:hover:bg-[#1a2e3e] transition-colors">View</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedCard>
    </div>
  )
}
