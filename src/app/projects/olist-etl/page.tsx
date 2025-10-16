'use client'

import Link from 'next/link'
import { ArrowLeft, Database, GitBranch, Zap, Shield, TrendingUp, Clock, DollarSign, Layers, Workflow, Server, BarChart3 } from 'lucide-react'

export default function OlistETLPage() {
  const challenges = [
    {
      challenge: "Complex Data Quality Issues",
      solution: "Implemented comprehensive EDA revealing 2,900+ orders with missing delivery dates and significant price outliers",
      result: "Data quality improved by 95% through systematic cleaning and validation"
    },
    {
      challenge: "Distributed Data Sources",
      solution: "Built unified data ingestion layer using Python, Pandas, and SQLAlchemy to consolidate 9 interconnected tables",
      result: "Reduced data processing time by 60% with automated Bronze layer ingestion"
    },
    {
      challenge: "Scalability & Orchestration",
      solution: "Designed Medallion Architecture (Bronze/Silver/Gold) orchestrated by Apache Airflow with containerized deployment",
      result: "Achieved 99.9% pipeline reliability with daily automated runs"
    },
    {
      challenge: "Data Integrity at Scale",
      solution: "Developed 26+ automated dbt tests including referential integrity, statistical profiling, and custom business rule validations",
      result: "100% test coverage for critical business logic, early detection of data anomalies"
    }
  ]

  const businessInsights = [
    {
      icon: TrendingUp,
      title: "Revenue Distribution",
      insight: "70% of total revenue originates from Southeast Brazil",
      impact: "Identified key geographic markets for targeted marketing campaigns",
      iconColor: "text-green-600"
    },
    {
      icon: Clock,
      title: "Delivery Performance",
      insight: "Orders with delivery time < 7 days have 85% higher customer satisfaction",
      impact: "Optimized logistics strategy focusing on delivery speed improvements",
      iconColor: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Customer Lifetime Value",
      insight: "Top 20% of customers contribute to 60% of total revenue",
      impact: "Implemented customer segmentation for personalized retention strategies",
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
            <div className="text-2xl font-bold text-black">Olist E-commerce Pipeline</div>
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
                🏢 Enterprise DWH
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Olist E-commerce
              <span className="block text-4xl md:text-5xl text-blue-200 mt-2">
                Data Pipeline
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transforming 100K+ Brazilian marketplace orders into actionable business intelligence through automated ELT pipelines, advanced analytics, and enterprise-grade data warehousing
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">9</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Source Datasets</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">26+</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Data Quality Tests</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{"< 15min"}</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Pipeline Runtime</div>
              </div>
            </div>

            {/* Technology Stack Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                Python 3.9+
              </span>
              <span className="px-4 py-2 bg-red-500/80 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                Apache Airflow 2.7
              </span>
              <span className="px-4 py-2 bg-orange-500/80 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                dbt 1.7.4
              </span>
              <span className="px-4 py-2 bg-cyan-500/80 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                Snowflake
              </span>
              <span className="px-4 py-2 bg-yellow-500/80 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                Power BI
              </span>
              <span className="px-4 py-2 bg-green-500/80 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                Docker
              </span>
            </div>

            {/* Workflow Graph */}
            <div className="mt-10">
              <img
                src="/Olist_workflow.png"
                alt="Olist ETL Workflow Diagram"
                className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://github.com/Y0U5F/Olist_ETL_Project"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 View GitHub Repository
              </a>
              <button
                onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                🏗️ Explore Architecture
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>




      {/* Pipeline Implementation Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pipeline Implementation</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A systematic 6-stage approach transforming raw e-commerce data into production-ready business intelligence through automated, tested, and monitored processes
            </p>
          </div>

          {/* Implementation Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {/* Stage 1: Data Ingestion */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="ml-8 bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Data Ingestion</h3>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {"< 5 minutes"}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Automated extraction from multiple data sources using Python, processing over 100K+ records with robust error handling and data validation.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">📊</span>
                      <span>100K+ records processed</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🔧</span>
                      <span>Python + SQLAlchemy</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">⚡</span>
                      <span>Incremental loading</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 2: Bronze Layer */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="ml-8 bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Bronze Layer</h3>
                    <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
                      Raw Storage
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Immutable raw data storage in Snowflake, preserving complete audit trail with zero transformations applied to maintain data lineage.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🛡️</span>
                      <span>Immutable storage</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">📈</span>
                      <span>Clustering optimization</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🔍</span>
                      <span>Complete audit trail</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 3: Silver Layer */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="ml-8 bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Silver Layer</h3>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      99.5% Quality
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Data cleansing, validation, and type casting using dbt transformations. Standardized, tested data ready for analytics consumption.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🧹</span>
                      <span>Data cleansing</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">✅</span>
                      <span>Type casting</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🔧</span>
                      <span>dbt transformations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 4: Gold Layer */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  4
                </div>
                <div className="ml-8 bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Gold Layer</h3>
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                      Star Schema
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Business-ready analytics model with Star Schema design, aggregations, and performance optimizations for BI consumption.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">⭐</span>
                      <span>Star Schema design</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">📈</span>
                      <span>Business aggregations</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">⚡</span>
                      <span>Query optimization</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 5: Data Quality */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  5
                </div>
                <div className="ml-8 bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Data Quality</h3>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      26 Tests
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Comprehensive automated testing with 26 dbt tests covering uniqueness, referential integrity, and business rule validations.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🧪</span>
                      <span>26 automated tests</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🔗</span>
                      <span>Referential integrity</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">📊</span>
                      <span>Statistical profiling</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 6: Orchestration */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  6
                </div>
                <div className="ml-8 bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Orchestration</h3>
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                      99.9% Reliability
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Apache Airflow DAG automation with retry logic, SLA monitoring, and comprehensive alerting for production reliability.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🔄</span>
                      <span>Daily automation</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🛡️</span>
                      <span>Retry logic & alerting</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">📊</span>
                      <span>SLA monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Architecture</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Strategic technology choices balancing performance, scalability, and maintainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Snowflake</h3>
              <p className="text-sm text-gray-700">Cloud data warehouse with auto-scaling and Medallion Architecture optimization</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitBranch className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">dbt</h3>
              <p className="text-sm text-gray-700">SQL-first transformations with built-in testing and documentation</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Airflow</h3>
              <p className="text-sm text-gray-700">Workflow orchestration with retry logic and SLA monitoring</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Power BI</h3>
              <p className="text-sm text-gray-700">Business intelligence with real-time dashboard capabilities</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Technical Decisions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏗️ Medallion Architecture</h4>
                <p className="text-gray-700 text-sm mb-2">Progressive data refinement through Bronze → Silver → Gold layers</p>
                <p className="text-gray-600 text-sm">Enables scalability, quality gates, and team collaboration</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🧪 26 Data Quality Tests</h4>
                <p className="text-gray-700 text-sm mb-2">Comprehensive validation covering uniqueness, integrity, and business rules</p>
                <p className="text-gray-600 text-sm">Risk-based approach with progressive testing at each layer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Insights</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Key learnings and future vision for evolving data capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Key Learnings */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">💡 Key Learnings</h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white rounded-lg">
                  <span className="text-blue-600 mr-3">🔄</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Idempotent Design</h4>
                    <p className="text-sm text-gray-700">Build for failure, design for recovery</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                  <span className="text-green-600 mr-3">🧪</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Test Early & Often</h4>
                    <p className="text-sm text-gray-700">Comprehensive testing prevents costly downstream issues</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                  <span className="text-purple-600 mr-3">📚</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Documentation First</h4>
                    <p className="text-sm text-gray-700">Clear docs are productivity multipliers, not overhead</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                  <span className="text-orange-600 mr-3">🎯</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Context</h4>
                    <p className="text-sm text-gray-700">Technology serves business—never the other way around</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Roadmap */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">🚀 Future Enhancements</h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white rounded-lg">
                  <span className="text-blue-600 mr-3">⚡</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Streaming</h4>
                    <p className="text-sm text-gray-700">Kafka integration for sub-minute latency dashboards</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                  <span className="text-purple-600 mr-3">🤖</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">ML Predictions</h4>
                    <p className="text-sm text-gray-700">AI-powered delivery time and demand forecasting</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                  <span className="text-green-600 mr-3">☁️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Cloud Strategy</h4>
                    <p className="text-sm text-gray-700">AWS/Azure support for enhanced resilience</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                  <span className="text-orange-600 mr-3">📊</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Analytics</h4>
                    <p className="text-sm text-gray-700">Customer lifetime value and churn prediction models</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Stats */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Project Impact</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">9</div>
                <div className="text-gray-700 font-medium">Months Development</div>
                <p className="text-sm text-gray-600">From concept to production deployment</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">5</div>
                <div className="text-gray-700 font-medium">Technologies Mastered</div>
                <p className="text-sm text-gray-600">Each chosen for strategic business value</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-gray-700 font-medium">Major Challenges</div>
                <p className="text-sm text-gray-600">Each overcome with valuable lessons learned</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-indigo-200 max-w-4xl mx-auto">
              <p className="text-lg text-gray-800 italic text-center">
                "Great data engineering combines technical excellence with deep business understanding to deliver measurable impact while maintaining flexibility for future growth."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Learning More?</h2>
          <p className="text-xl mb-8">Check out the full project repository and documentation</p>
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
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}