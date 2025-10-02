import * as React from "react"
import { cn } from "@/lib/utils"

const Separator = ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => {
  return (
    <hr
      className={cn("my-4 h-px border-0 bg-gray-200/80", className)}
      {...props}
    />
  )
}

export { Separator }
