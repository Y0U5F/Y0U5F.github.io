'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Database, GitBranch, Zap, Shield, TrendingUp, Clock, DollarSign,
         Github, ExternalLink, Award, TestTube, BarChart3, Activity, Workflow, Container } from 'lucide-react'

export default function NewProjectPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const projectMetrics = [
    { icon: Database, label: 'Data Sources', value: 'X+ Datasets', color: 'text-blue-600' },
    { icon: Clock, label: 'Pipeline Runtime', value: '< XX min', color: 'text-green-600' },
    { icon: Award, label: 'Data Quality Tests', value: 'XX+ Tests', color: 'text-orange-600' }
  ]

  const challenges = [
    {
      challenge: "Challenge 1 - Describe the main technical challenge",
      solution: "Describe how you solved this challenge with specific technologies",
      result: "Quantify the improvement or outcome achieved"
    },
    {
      challenge: "Challenge 2 - Describe another significant challenge",
      solution: "Explain the technical approach and tools used",
      result: "Show the measurable impact or results"
    },
    {
      challenge: "Challenge 3 - Describe the third major challenge",
      solution: "Detail the implementation strategy and methodology",
      result: "Highlight the business value or technical achievement"
    }
  ]

  const businessInsights = [
    {
      icon: TrendingUp,
      title: "Business Impact 1",
      insight: "Describe the key business insight discovered",
      impact: "Explain how this insight drove business decisions",
      iconColor: "text-green-600"
    },
    {
      icon: Clock,
      title: "Performance Metric",
      insight: "Highlight an important performance improvement",
      impact: "Show how this affected operations or efficiency",
      iconColor: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      insight: "Describe cost savings or efficiency gains",
      impact: "Quantify the financial or operational benefits",
      iconColor: "text-purple-600"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center text-black hover:text-gray-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Link>
            <div className="text-2xl font-bold text-black">New Project Title</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-800/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Project Badges */}
            <div className="flex justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-semibold shadow-lg">
                ⭐ Featured Project
              </span>
              <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold shadow-lg">
                🚀 Production Ready
              </span>
              <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
                🏢 Enterprise Grade
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Project Title - Brief Description
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive description of what this project accomplishes, the technologies used,
              and the business value delivered. Keep it concise but informative.
            </p>

            {/* Project Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {projectMetrics.map((metric, index) => {
                const IconComponent = metric.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center justify-center mb-4">
                      <IconComponent className={`w-8 h-8 ${metric.color}`} />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{metric.value}</div>
                      <div className="text-blue-100">{metric.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
            {['overview', 'architecture', 'implementation', 'results'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Detailed description of the project, its objectives, scope, and key achievements.
                    Explain the business problem that was solved and the approach taken.
                  </p>
                </div>

                {/* Challenges Section */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Challenges & Solutions</h3>
                  <div className="grid gap-6">
                    {challenges.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                            <span className="text-red-600 font-semibold text-sm">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">{item.challenge}</h4>
                            <p className="text-gray-600 mb-2"><strong>Solution:</strong> {item.solution}</p>
                            <p className="text-green-600 font-medium"><strong>Result:</strong> {item.result}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Architecture</h2>
                <p className="text-lg text-gray-600">
                  Describe the technical architecture, data flow, and system design.
                  Include information about technologies, frameworks, and infrastructure used.
                </p>
                {/* Add architecture diagram or detailed technical description here */}
              </div>
            )}

            {activeTab === 'implementation' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Details</h2>
                <p className="text-lg text-gray-600">
                  Provide detailed information about the implementation process,
                  key technical decisions, and lessons learned.
                </p>
                {/* Add code snippets, configuration examples, or detailed implementation steps */}
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Impact & Results</h2>

                {/* Business Insights */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Business Insights</h3>
                  <div className="grid gap-6">
                    {businessInsights.map((insight, index) => {
                      const IconComponent = insight.icon
                      return (
                        <div key={index} className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-start space-x-4">
                            <IconComponent className={`w-8 h-8 ${insight.iconColor} mt-1`} />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-2">{insight.title}</h4>
                              <p className="text-gray-600 mb-1"><strong>Insight:</strong> {insight.insight}</p>
                              <p className="text-green-600"><strong>Impact:</strong> {insight.impact}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Results Summary */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Outcomes</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technical Achievements</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Achievement 1 with quantifiable metric</li>
                        <li>• Achievement 2 with measurable outcome</li>
                        <li>• Achievement 3 demonstrating expertise</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Business Value</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Business benefit 1 with ROI</li>
                        <li>• Operational improvement 2</li>
                        <li>• Strategic advantage 3</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to discuss this project?</h3>
            <p className="text-gray-300 mb-6">
              Interested in learning more about the implementation details or similar projects?
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </a>
              <a
                href="https://linkedin.com/in/YOUR_PROFILE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}