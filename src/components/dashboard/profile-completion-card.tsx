"use client";
import { User } from "lucide-react";

export function ProfileCompletionCard() {
  const percentage = 60;
  const radius = 40;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = Math.PI * normalizedRadius;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full bg-white rounded-md border overflow-hidden">
      {/* Top bar */}
      <div className="w-full h-3 bg-emerald-600 rounded-t-md" />

      {/* Content */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 ">
        {/* Icon + Text */}
        <div className="flex items-start gap-4 p-6">
          <div className="flex-shrink-0 p-2 rounded-full bg-gray-100">
            <User className="h-6 w-6 text-gray-600" />
          </div>
          <div>
            <p className="text-base font-medium text-gray-800">
              Your profile is not yet complete. You need a complete profile to
              get full access to AutoGrant AI assistance.
            </p>
          </div>
        </div>

        {/* Semi-circle progress */}
        <div className="flex-shrink-0 w-full md:w-36 flex flex-col gap-2 items-center justify-center relative md:-bottom-3 md:right-4">
          <svg
            width="140"
            height="70"
            viewBox="0 0 100 50"
            className="overflow-hidden "
          >
            <path
              d="
                M 10,50
                A 40,40 0 0,1 90,50
              "
              fill="none"
              stroke="#e5e7eb"
              strokeWidth={stroke}
            />
            <path
              d="
                M 10,50
                A 40,40 0 0,1 90,50
              "
              fill="none"
              stroke="#059669"
              strokeWidth={stroke}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
            <text
              x="50"
              y="45"
              textAnchor="middle"
              fontSize="16"
              fontWeight="bold"
              fill="#111827"
            >
              {percentage}%
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
