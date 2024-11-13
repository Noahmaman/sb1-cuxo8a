"use client"

import * as React from "react"

export function useToast() {
  return {
    toast: ({ title, description }: { title: string; description: string }) => {
      console.log(title, description)
    }
  }
}