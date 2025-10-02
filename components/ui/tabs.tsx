"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

type TabsContextType = {
  value: string
  setValue: (v: string) => void
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined)

export function Tabs({ defaultValue, children }: { defaultValue?: string; children: React.ReactNode }) {
  const [value, setValue] = React.useState(defaultValue ?? "tab-1")
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex gap-3 flex-wrap", className)}>{children}</div>
}

export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error("TabsTrigger must be used inside Tabs")
  const active = ctx.value === value
  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={cn(
        "px-6 py-3 rounded-sm border transition-colors",
        active ? "bg-white border-primary text-primary font-semibold" : "bg-transparent border-[#e5e7eb] text-gray-700"
      )}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error("TabsContent must be used inside Tabs")
  return <div style={{ display: ctx.value === value ? undefined : "none" }}>{children}</div>
}

export default Tabs
