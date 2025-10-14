"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  ExternalLink,
  Download,
  ArrowLeft,
  Play,
  Search,
  Database,
  Code,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Award,
  ChevronRight,
  Star,
  GitBranch,
  Calendar,
  Zap,
  Shield,
  Layers,
  Cpu,
  HardDrive,
  Globe,
  FileText,
  Image as ImageIcon,
  Video,
  Workflow,
  Snowflake,
  BarChart3,
  Activity,
  Server,
  Container,
  TestTube,
  GitMerge,
  Settings,
  Eye,
  Target,
  TrendingDown,
  DollarSign,
  MapPin,
  Package,
  ShoppingCart,
  Truck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OlistETLProject() {
  const [activeTab, setActiveTab] = useState("overview")

  const projectMetrics = [
    { icon: Database, label: "Data Sources", value: "8+ Datasets", color: "text-blue-600" },
    { icon: Clock, label: "Pipeline Runtime", value: "< 15 min", color: "text-green-600" },
    { icon: Snowflake, label: "Data Warehouse", value: "Snowflake", color: "text-purple-600" },
    { icon: Award, label: "Data Quality Tests", value: "26+ Tests", color: "text-orange-600" },
  ]

  const features = [
    {
      icon: Workflow,
      title: "Medallion Architecture",
      description: "Complete Bronze → Silver → Gold layer implementation with data quality validation",
      details: ["Bronze: Raw ingestion", "Silver: Cleansed data", "Gold: Business-ready analytics"]
    },
    {
      icon: Snowflake,
      title: "Cloud Data Warehouse",
      description: "Enterprise-grade Snowflake implementation with optimized performance and cost efficiency",
      details: ["Multi-cluster warehouses", "Time travel & cloning", "Automatic scaling"]
    },
    {
      icon: GitBranch,
      title: "Star Schema Design",
      description: "Optimized dimensional modeling with fact and dimension tables for analytical queries",
      details: ["Fact tables with measures", "SCD Type 2 dimensions", "Hierarchical dimensions"]
    },
    {
      icon: Activity,
      title: "Real-time Orchestration",
      description: "Apache Airflow DAGs with complex dependencies, error handling, and monitoring",
      details: ["Dynamic task generation", "SLA monitoring", "Retry mechanisms"]
    },
    {
      icon: TestTube,
      title: "Comprehensive Testing",
      description: "26+ automated dbt tests ensuring data quality and integrity throughout the pipeline",
      details: ["Schema validation", "Business rule checks", "Statistical profiling"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Power BI dashboards with key e-commerce metrics and actionable insights",
      details: ["Revenue analytics", "Customer segmentation", "Geographic analysis"]
    }
  ]

  const techStack = [
    {
      category: "Orchestration & Processing",
      items: ["Apache Airflow 2.7.1", "Python 3.9+", "Docker & Docker Compose", "Apache Spark (Future)"]
    },
    {
      category: "Data Transformation",
      items: ["dbt 1.7.4", "SQL", "Jinja Templating", "Advanced Analytics Functions"]
    },
    {
      category: "Data Warehouse",
      items: ["Snowflake", "Star Schema", "SCD Type 2", "Materialized Views"]
    },
    {
      category: "Business Intelligence",
      items: ["Power BI", "DAX", "Interactive Dashboards", "Automated Reporting"]
    }
  ]

  const challenges = [
    {
      title: "Complex Data Integration",
      problem: "Integrating 8+ heterogeneous datasets with different schemas and data types from Brazilian e-commerce platform",
      solution: "Implemented comprehensive data mapping strategy with staging area validation, custom data type conversion functions, and automated schema evolution handling",
      result: "Seamless integration with 99.9% data consistency and zero data loss during transformation"
    },
    {
      title: "Performance Optimization at Scale",
      problem: "Initial pipeline showed performance degradation when processing large datasets (100K+ records) with complex joins",
      solution: "Implemented Snowflake clustering keys, materialized views for common aggregations, and optimized warehouse sizing with query result caching",
      result: "75% improvement in query performance, sub-15 minute pipeline execution time"
    },
    {
      title: "Data Quality Assurance",
      problem: "Ensuring data accuracy and consistency across multiple transformation layers with business rule validation",
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
            <div className="text-2xl font-bold text-black">Project Showcase</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-black text-white">Featured Project</Badge>
                  <Badge variant="outline" className="border-black text-black">Enterprise DWH</Badge>
                  <Badge variant="outline" className="border-black text-black">Production Ready</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Olist E-commerce Data Warehouse
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Enterprise-grade ELT pipeline implementing Medallion Architecture for Brazilian e-commerce analytics, featuring Snowflake data warehousing, automated quality testing, and Power BI visualization.
                </p>
              </div>

              {/* Project Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {projectMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    <div>
                      <p className="text-sm text-gray-600">{metric.label}</p>
                      <p className="font-semibold text-black">{metric.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Dashboard
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Architecture Docs
                </Button>
              </div>
            </div>

            {/* Hero Image/Video Placeholder */}
            <div className="relative order-first lg:order-last">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/olist-etl-demo.gif"
                    alt="Olist ETL Pipeline Demo"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
            {[
              { id: "overview", label: "Overview", icon: Star },
              { id: "features", label: "Features", icon: Layers },
              { id: "tech", label: "Tech Stack", icon: Cpu },
              { id: "challenges", label: "Challenges", icon: TrendingUp },
              { id: "insights", label: "Business Insights", icon: Target },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <Card className="border-black">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Database className="w-6 h-6 mr-2 text-black" />
                      Project Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      This enterprise data warehouse project demonstrates advanced data engineering capabilities through the implementation of a complete ELT pipeline for Olist, Brazil's leading e-commerce platform. The solution transforms raw transactional data into actionable business insights using industry-leading technologies and best practices.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Zap className="w-8 h-8 mx-auto mb-2 text-black" />
                        <h3 className="font-semibold text-black">Performance</h3>
                        <p className="text-sm text-gray-600">Sub-15 minute pipeline execution</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Shield className="w-8 h-8 mx-auto mb-2 text-black" />
                        <h3 className="font-semibold text-black">Reliability</h3>
                        <p className="text-sm text-gray-600">99.9% data consistency</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Award className="w-8 h-8 mx-auto mb-2 text-black" />
                        <h3 className="font-semibold text-black">Quality</h3>
                        <p className="text-sm text-gray-600">26+ automated tests</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-black">
                  <CardHeader>
                    <CardTitle>Technical Architecture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <p className="font-semibold text-black">Bronze Layer (Raw Data)</p>
                          <p className="text-sm text-gray-600">Direct ingestion from PostgreSQL and CSV sources</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <p className="font-semibold text-black">Silver Layer (Cleansed)</p>
                          <p className="text-sm text-gray-600">Data validation, deduplication, and standardization</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <p className="font-semibold text-black">Gold Layer (Analytics)</p>
                          <p className="text-sm text-gray-600">Star schema with business-ready aggregations</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-6">
                <div className="grid gap-6">
                  {features.map((feature, index) => (
                    <Card key={index} className="border-black">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <feature.icon className="w-6 h-6 mr-2 text-black" />
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid md:grid-cols-3 gap-2">
                          {feature.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "tech" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {techStack.map((category, index) => (
                    <Card key={index} className="border-black">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Code className="w-5 h-5 mr-2 text-black" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((item, itemIndex) => (
                            <Badge key={itemIndex} className="bg-black text-white hover:bg-gray-800">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-black">
                  <CardHeader>
                    <CardTitle>Architecture Highlights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-start space-x-3">
                        <Layers className="w-5 h-5 text-black mt-0.5" />
                        <div>
                          <p className="font-semibold text-black">Medallion Architecture</p>
                          <p className="text-gray-600">Industry-standard layered approach for data quality</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Snowflake className="w-5 h-5 text-black mt-0.5" />
                        <div>
                          <p className="font-semibold text-black">Snowflake Optimization</p>
                          <p className="text-gray-600">Clustered tables and materialized views</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-black mt-0.5" />
                        <div>
                          <p className="font-semibold text-black">Enterprise Security</p>
                          <p className="text-gray-600">Role-based access and data encryption</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "challenges" && (
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="border-black">
                    <CardHeader>
                      <CardTitle className="text-xl text-black">{challenge.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Problem</h4>
                        <p className="text-gray-700">{challenge.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">Solution</h4>
                        <p className="text-gray-700">{challenge.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Result</h4>
                        <p className="text-gray-700">{challenge.result}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "insights" && (
              <div className="space-y-6">
                <Card className="border-black">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Target className="w-6 h-6 mr-2 text-black" />
                      Key Business Insights
                    </CardTitle>
                    <CardDescription>
                      Strategic insights derived from the e-commerce data warehouse that drive business decision-making
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      {businessInsights.map((insight, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                          <insight.icon className={`w-8 h-8 ${insight.iconColor} mt-1`} />
                          <div className="flex-1">
                            <h3 className="font-semibold text-black mb-2">{insight.title}</h3>
                            <p className="text-gray-700 mb-2">{insight.insight}</p>
                            <p className="text-sm text-green-600 font-medium">{insight.impact}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-black">
                  <CardHeader>
                    <CardTitle>Business Impact Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        <p className="text-2xl font-bold text-black">70%</p>
                        <p className="text-sm text-gray-600">Revenue from Southeast Brazil</p>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Clock className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                        <p className="text-2xl font-bold text-black">85%</p>
                        <p className="text-sm text-gray-600">Higher satisfaction with fast delivery</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                        <p className="text-2xl font-bold text-black">60%</p>
                        <p className="text-sm text-gray-600">Revenue from top 20% customers</p>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <Zap className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                        <p className="text-2xl font-bold text-black"><15min</p>
                        <p className="text-sm text-gray-600">Pipeline execution time</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Project Gallery</h2>
            <p className="text-lg text-gray-600">Visual showcase of architecture, dashboards, and pipeline components</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Medallion Architecture", desc: "Bronze → Silver → Gold data layers" },
              { title: "Star Schema Design", desc: "Optimized dimensional modeling" },
              { title: "Power BI Dashboard", desc: "Interactive business intelligence" },
              { title: "Airflow DAG", desc: "Orchestration workflow visualization" },
              { title: "Data Quality Tests", desc: "26+ automated validation checks" },
              { title: "Performance Metrics", desc: "Pipeline execution analytics" },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-black">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-100 rounded-t-lg border-b border-gray-200 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <ImageIcon className="w-12 h-12 mx-auto text-gray-400" />
                      <p className="text-sm font-medium text-gray-600">{item.title}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitBranch className="w-5 h-5 mr-2 text-black" />
                  Development Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-semibold text-black">Data Architecture Design</p>
                      <p className="text-sm text-gray-600">Medallion architecture planning and schema design</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-semibold text-black">Pipeline Development</p>
                      <p className="text-sm text-gray-600">Airflow DAGs and dbt models implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-semibold text-black">Testing & Validation</p>
                      <p className="text-sm text-gray-600">26+ automated tests and performance optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <p className="font-semibold text-black">BI Integration</p>
                      <p className="text-sm text-gray-600">Power BI dashboards and business insights</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-black" />
                  Project Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-black">Week 1-2</span>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600">Architecture design and data modeling</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-black">Week 3-4</span>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600">Pipeline development and testing</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-black">Week 5-6</span>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600">BI integration and optimization</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Enterprise Data Engineering?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Dive deep into this production-ready data warehouse implementation showcasing modern data engineering best practices and scalable architecture patterns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              <Github className="w-5 h-5 mr-2" />
              View Repository
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Download className="w-5 h-5 mr-2" />
              Download Documentation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Architecture
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}