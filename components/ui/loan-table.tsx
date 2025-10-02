import * as React from "react"
import { cn } from "@/lib/utils"

type Row = {
  col1: React.ReactNode
  col2: React.ReactNode
  col3?: React.ReactNode
}

export default function LoanTable({
  headers,
  rows,
  className,
}: {
  headers: string[]
  rows: Row[]
  className?: string
}) {
  return (
    <div className={cn("w-full overflow-hidden rounded-md", className)}>
      <div className="bg-black text-white p-4 font-semibold grid grid-cols-3 gap-4">
        {headers.map((h, idx) => (
          <div key={idx} className="px-2">{h}</div>
        ))}
      </div>

      <div>
        {rows.map((r, idx) => (
          <div
            key={idx}
            className={cn(
              "grid grid-cols-3 gap-4 items-center px-6 py-6",
              idx % 2 === 1 ? "bg-gray-100" : "bg-white"
            )}
          >
            <div className="text-gray-700">{r.col1}</div>
            <div className="text-center text-gray-700">{r.col2}</div>
            <div className="text-right text-gray-700">{r.col3}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
