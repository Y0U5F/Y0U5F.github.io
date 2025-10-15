'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Database, GitBranch, Zap, Shield, TrendingUp, Clock, DollarSign,
         Github, ExternalLink, Award, TestTube, BarChart3, Activity, Workflow, Container } from 'lucide-react'

export default function OlistETLProject() {
  const [activeTab, setActiveTab] = useState('overview')

  const projectMetrics = [
    { icon: Database, label: 'Data Sources', value: '8+ Datasets', color: 'text-blue-600' },
    { icon: Clock, label: 'Pipeline Runtime', value: '< 15 min', color: 'text-green-600' },
    { icon: Award, label: 'Data Quality Tests', value: '26+ Tests', color: 'text-orange-600' }
  ]

  const challenges = [
    {
      title: 'Complex Data Integration',
      problem: 'Integrating 8+ heterogeneous datasets with different schemas from Brazilian e-commerce',
      solution: 'Implemented comprehensive data mapping strategy with staging area validation',
      result: '99.9% data consistency with zero data loss'
    },
    {
      title: 'Performance Optimization',
      problem: 'Pipeline degradation when processing 100K+ records',
      solution: 'Implemented Snowflake clustering keys and materialized views',
      result: '75% improvement in query performance'
    },
    {
      title: 'Data Quality Assurance',
      problem: 'Ensuring accuracy across transformation layers',
      solution: 'Developed 26+ automated dbt tests',
      result: '100% test coverage for critical business logic'
    }
  ]

  const businessInsights = [
    {
      icon: TrendingUp,
      title: 'Revenue Distribution',
      insight: '70% of revenue from Southeast Brazil',
      impact: 'Targeted marketing campaigns',
      iconColor: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Delivery Performance',
      insight: 'Orders < 7 days = 85% higher satisfaction',
      impact: 'Optimized logistics strategy',
      iconColor: 'text-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Customer Lifetime Value',
      insight: 'Top 20% = 60% of revenue',
      impact: 'Customer segmentation strategies',
      iconColor: 'text-purple-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center text-gray-900 hover:text-gray-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Olist E-commerce Pipeline</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">Featured Project</span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">Data Engineering</span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">Production Ready</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              End-to-End Data Pipeline: Olist E-commerce
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Enterprise-grade ELT pipeline with Medallion Architecture, processing Brazilian e-commerce data
              through Snowflake, orchestrated by Airflow, with automated quality testing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Y0U5F/Olist_ETL_Project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <button className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                  <Icon className={`w-10 h-10 ${metric.color}`} />
                  <div>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Pipeline Architecture</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Database className="w-12 h-12 text-amber-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Bronze Layer</h4>
              <p className="text-gray-600">Raw data ingestion from PostgreSQL and CSV sources</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <GitBranch className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Silver Layer</h4>
              <p className="text-gray-600">Cleaned and validated with dbt transformations</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Zap className="w-12 h-12 text-yellow-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Gold Layer</h4>
              <p className="text-gray-600">Star Schema optimized for analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Challenges Solved</h3>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-red-600">Problem:</span>
                    <p className="text-gray-700 mt-1">{challenge.problem}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-600">Solution:</span>
                    <p className="text-gray-700 mt-1">{challenge.solution}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-green-600">Result:</span>
                    <p className="text-gray-700 mt-1">{challenge.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Business Insights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {businessInsights.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <Icon className={`w-10 h-10 ${item.iconColor} mb-4`} />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700 font-semibold mb-2">{item.insight}</p>
                  <p className="text-sm text-gray-600">{item.impact}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tech Stack</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Workflow className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <p className="font-semibold">Apache Airflow</p>
            </div>
            <div className="text-center">
              <Activity className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <p className="font-semibold">dbt</p>
            </div>
            <div className="text-center">
              <Database className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
              <p className="font-semibold">Snowflake</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <p className="font-semibold">Power BI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Explore the Full Project</h3>
          <p className="text-xl mb-8 text-blue-100">Check out the complete repository and documentation</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Y0U5F/Olist_ETL_Project"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View on GitHub
            </a>
            <Link
              href="/"
              className="px-8 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
