import * as React from "react"
import { Card } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

type InfoItem = {
  title: string
  subtitle?: string
  icon?: React.ReactNode
}

export default function InfoGrid({ items, className }: { items: InfoItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
      {items.map((it, idx) => (
        <Card key={idx} className="p-8">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="text-primary">{it.icon ?? <BookOpen className="w-8 h-8" />}</div>
            <div className="font-semibold text-lg text-secondary">{it.title}</div>
            {it.subtitle && <div className="text-sm text-gray-600">{it.subtitle}</div>}
          </div>
        </Card>
      ))}
    </div>
  )
}
