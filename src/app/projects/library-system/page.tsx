import { PAGE_METADATA } from "@/lib/metadata"

export const metadata = PAGE_METADATA.libraryProject()

export default function LibrarySystemProject() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Library Management System
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive desktop application for efficient library record management featuring Python, Tkinter GUI, SQLite database, and advanced search functionality.
          </p>
          <div className="mt-8">
            <p className="text-gray-600">Content coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}