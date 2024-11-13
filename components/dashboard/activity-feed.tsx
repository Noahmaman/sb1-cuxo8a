"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=70",
    },
    action: "uploaded",
    target: "Project Presentation.pptx",
    time: "2 hours ago",
  },
  {
    user: {
      name: "Sarah Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=70",
    },
    action: "shared",
    target: "Team Photos",
    time: "4 hours ago",
  },
  {
    user: {
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&q=70",
    },
    action: "commented on",
    target: "Product Design",
    time: "6 hours ago",
  },
]

export function ActivityFeed() {
  return (
    <div className="space-y-4">
      {activities.map((activity, i) => (
        <div key={i} className="flex items-start space-x-3">
          <Avatar>
            <AvatarImage src={activity.user.avatar} />
            <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm">
              <span className="font-semibold">{activity.user.name}</span>{" "}
              {activity.action}{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}