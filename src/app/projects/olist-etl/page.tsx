'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Database, GitBranch, Zap, Shield, TrendingUp, Clock, DollarSign, Layers, Workflow, Server, BarChart3, AlertCircle, Download, CheckCircle, BookOpen, Brain, Cloud, Users, Github, FileText, Filter, Star, TestTube, Calendar, RefreshCw, Quote } from 'lucide-react'
import { PAGE_METADATA } from '@/lib/metadata'

function OlistETLPageContent() {
  const [activeCodeTab, setActiveCodeTab] = useState<'gold_model' | 'airflow_dag' | 'data_tests'>('gold_model')

  const codeFiles: Array<{ id: 'gold_model' | 'airflow_dag' | 'data_tests', name: string, language: string, color: string }> = [
    { id: 'gold_model', name: 'gold_customer_analytics.sql', language: 'SQL', color: 'green' },
    { id: 'airflow_dag', name: 'olist_etl_dag.py', language: 'Python', color: 'blue' },
    { id: 'data_tests', name: 'gold_layer_tests.yml', language: 'YAML', color: 'purple' }
  ]

  const codeContent = {
    gold_model: {
      title: 'dbt Gold Layer Model',
      language: 'SQL',
      content: `-- Gold Layer: Customer Analytics Fact Table
WITH customer_orders AS (
    SELECT
        c.customer_id,
        c.customer_unique_id,
        c.customer_zip_code_prefix,
        c.customer_city,
        c.customer_state,
        COUNT(o.order_id) as total_orders,
        SUM(o.order_purchase_timestamp) as first_purchase,
        SUM(o.payment_value) as total_spent,
        AVG(o.payment_value) as avg_order_value,
        MAX(o.order_purchase_timestamp) as last_purchase,
        DATEDIFF(MAX(o.order_purchase_timestamp),
                MIN(o.order_purchase_timestamp)) as customer_lifespan_days
    FROM silver_customers c
    LEFT JOIN silver_orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id, c.customer_unique_id,
             c.customer_zip_code_prefix, c.customer_city, c.customer_state
)

SELECT
    customer_id,
    customer_unique_id,
    customer_zip_code_prefix,
    customer_city,
    customer_state,
    total_orders,
    first_purchase,
    total_spent,
    avg_order_value,
    last_purchase,
    customer_lifespan_days,
    CASE
        WHEN total_orders >= 3 AND total_spent >= 500 THEN 'High Value'
        WHEN total_orders >= 2 THEN 'Regular'
        ELSE 'New'
    END as customer_segment
FROM customer_orders
QUALIFY ROW_NUMBER() OVER (ORDER BY total_spent DESC) <= 100000`
    },
    airflow_dag: {
      title: 'Apache Airflow DAG',
      language: 'Python',
      content: `from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.providers.snowflake.operators.snowflake import SnowflakeOperator
from datetime import datetime, timedelta

default_args = {
    'owner': 'data-engineering-team',
    'depends_on_past': False,
    'start_date': datetime(2024, 1, 1),
    'email_on_failure': True,
    'retries': 3,
    'retry_delay': timedelta(minutes=5)
}

dag = DAG(
    'olist_etl_pipeline',
    default_args=default_args,
    description='Complete ELT pipeline for Olist e-commerce data',
    schedule_interval='@daily',
    catchup=False,
    max_active_runs=1,
    tags=['olist', 'etl', 'medallion']
)

def validate_source_data():
    """Validate source data quality before ingestion"""
    import pandas as pd
    from sqlalchemy import create_engine

    # Connection and validation logic
    pass

def run_dbt_models():
    """Execute dbt models and tests"""
    import subprocess
    result = subprocess.run(['dbt', 'run', '--models', 'gold'],
                          capture_output=True, text=True)
    return result.returncode == 0

# Task definitions
validate_task = PythonOperator(
    task_id='validate_source_data',
    python_callable=validate_source_data,
    dag=dag
)

bronze_ingestion = SnowflakeOperator(
    task_id='bronze_layer_ingestion',
    sql='./sql/bronze_ingestion.sql',
    snowflake_conn_id='snowflake_default',
    dag=dag
)

silver_transform = SnowflakeOperator(
    task_id='silver_layer_transform',
    sql='./sql/silver_transform.sql',
    snowflake_conn_id='snowflake_default',
    dag=dag
)

gold_analytics = PythonOperator(
    task_id='gold_layer_analytics',
    python_callable=run_dbt_models,
    dag=dag
)

# Dependencies
validate_task >> bronze_ingestion >> silver_transform >> gold_analytics`
    },
    data_tests: {
      title: 'dbt Data Quality Tests',
      language: 'YAML',
      content: `version: 2
models:
  - name: gold_customer_analytics
    tests:
      - unique:
          column_name: customer_id
      - not_null:
          column_name: customer_unique_id
      - accepted_values:
          column_name: customer_state
          values: ['SP', 'RJ', 'MG', 'RS', 'PR', 'SC', 'BA', 'DF', 'GO', 'ES', 'PE', 'CE', 'PA', 'MT', 'MS', 'PB', 'PI', 'AL', 'SE', 'TO', 'RO', 'AC', 'AP', 'AM', 'RR']
      - dbt_utils.expression_is_true:
          expression: "total_spent >= 0"
          condition: "total_spent IS NOT NULL"
    columns:
      - name: customer_segment
        tests:
          - accepted_values:
              values: ['High Value', 'Regular', 'New']
          - not_null

  - name: gold_order_facts
    tests:
      - dbt_utils.equal_rowcount:
          compare_model: ref(\`silver_orders\`)
      - dbt_utils.at_least_one
      - relationships:
          to: ref(\`gold_customer_analytics\`)
          field: customer_id
      `
    }
  }

const colorClasses = {
    gold_model: {
      button: 'bg-green-600 text-white shadow-lg transform scale-105',
      span: 'bg-green-100 text-green-800'
    },
    airflow_dag: {
      button: 'bg-blue-600 text-white shadow-lg transform scale-105',
      span: 'bg-blue-100 text-blue-800'
    },
    data_tests: {
      button: 'bg-purple-600 text-white shadow-lg transform scale-105',
      span: 'bg-purple-100 text-purple-800'
    }
  };

const challenges = [
 {
   title: "Data Integration Complexity",
   problem: "Multiple source systems with different schemas",
   solution: "Medallion Architecture with incremental loading",
   result: "99.9% successful data integration rate",
   icon: Database,
 },
 {
   title: "Performance Optimization",
   problem: "Large datasets causing slow query performance",
   solution: "Columnar storage with partitioning strategy",
   result: "15-minute pipeline execution time",
   icon: Zap,
 },
 {
   title: "Data Quality Assurance",
   problem: "Inconsistent data formats across sources",
   solution: "26 automated quality tests and validation rules",
   result: "99.5% data accuracy achievement",
   icon: Shield,
  },
];

 return (
   <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center text-black hover:text-gray-600 transition-colors text-lg font-medium">
              <ArrowLeft className="w-6 h-6 mr-3" />
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
            <div className="flex items-center justify-center mb-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Olist E-commerce
                  <span className="block text-4xl md:text-5xl text-blue-200 mt-2">
                    Data Pipeline
                  </span>
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transforming 100K+ Brazilian marketplace orders into actionable business intelligence through automated ELT pipelines, advanced analytics, and enterprise-grade data warehousing
            </p>


            {/* Technology Stack Logos */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
              {/* Python */}
              <div className="group relative bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python 3.9+ - Core programming language for data processing and automation"
                  className="w-8 h-8 filter brightness-0 invert"
                  title="Python 3.9+"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Python 3.9+
                </div>
              </div>

              {/* Apache Airflow */}
              <div className="group relative bg-red-500/80 backdrop-blur-sm rounded-xl p-3 border border-red-400/50 hover:bg-red-400/90 transition-all duration-300 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apacheairflow.svg"
                  alt="Apache Airflow 2.7 - Workflow orchestration and pipeline scheduling"
                  className="w-8 h-8 filter brightness-0 invert"
                  title="Apache Airflow 2.7"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Airflow 2.7
                </div>
              </div>

              {/* dbt */}
              <div className="group relative bg-orange-500/80 backdrop-blur-sm rounded-xl p-3 border border-orange-400/50 hover:bg-orange-400/90 transition-all duration-300 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dbt.svg"
                  alt="dbt 1.7.4 - Data transformation and testing framework"
                  className="w-8 h-8 filter brightness-0 invert"
                  title="dbt 1.7.4"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  dbt 1.7.4
                </div>
              </div>

              {/* Snowflake */}
              <div className="group relative bg-cyan-500/80 backdrop-blur-sm rounded-xl p-3 border border-cyan-400/50 hover:bg-cyan-400/90 transition-all duration-300 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/snowflake.svg"
                  alt="Snowflake - Cloud data warehouse platform"
                  className="w-8 h-8 filter brightness-0 invert"
                  title="Snowflake"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Snowflake
                </div>
              </div>

              {/* Power BI */}
              <div className="group relative bg-yellow-500/80 backdrop-blur-sm rounded-xl p-3 border border-yellow-400/50 hover:bg-yellow-400/90 transition-all duration-300 hover:scale-110">
                <img
                  src="https://powerbi.microsoft.com/pictures/application-logos/svg/powerbi.svg"
                  alt="Power BI - Business intelligence and data visualization"
                  className="w-8 h-8 filter brightness-0 invert"
                  title="Power BI"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Power BI
                </div>
              </div>

              {/* Docker */}
              <div className="group relative bg-green-500/80 backdrop-blur-sm rounded-xl p-3 border border-green-400/50 hover:bg-green-400/90 transition-all duration-300 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  alt="Docker - Containerization platform for deployment"
                  className="w-8 h-8 filter brightness-0 invert"
                  title="Docker"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Docker
                </div>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="mt-12 mb-8">
              <div className="relative max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl blur-xl"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="/Olist_workflow.png"
                    alt="Olist Data Pipeline Architecture - Current workflow diagram (Note: olist-architecture-diagram.png not found)"
                    className="w-full h-auto"
                  />
                </div>
              </div>
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
                onClick={() => {
                  const element = document.getElementById('how-it-works-section')
                  if (element) {
                    const headerOffset = 80 // Account for sticky navigation
                    const elementPosition = element.offsetTop
                    const offsetPosition = elementPosition - headerOffset

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    })
                  }
                }}
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

      {/* Problem & Motivation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Problem & Motivation</h2>
            </div>
            <div className="space-y-4 text-xl text-gray-700 leading-relaxed">
              <p>
                Olist, Brazil's largest e-commerce marketplace, processes <strong>100K+ orders monthly</strong> across 9 interconnected data tables. Raw transactional data alone cannot answer critical business questions: Which regions drive revenue? How does delivery time impact customer satisfaction? What factors influence repeat purchases?
              </p>
              <p>
                This project builds a <strong>production-grade analytics pipeline</strong> that transforms Olist's fragmented order data into actionable insights. By implementing Medallion Architecture, automated quality testing, and dimensional modeling, this solution enables business stakeholders to make data-driven decisions about logistics, marketing, and customer retention strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Architecture */}
      <section id="how-it-works-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pipeline Architecture</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Complete data pipeline transforming raw Olist e-commerce data into actionable business intelligence through automated ELT processes.
            </p>
          </div>

          {/* Pipeline Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Step 1: Data Ingestion */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-100/60 rounded-2xl p-8 shadow-lg border border-blue-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full font-bold text-2xl mr-5 shadow-lg group-hover:bg-blue-700 transition-colors">
                  01
                </div>
                <div className="flex items-center">
                  <FileText className="w-10 h-10 text-blue-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Data Ingestion</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Extract and load raw data from PostgreSQL database and CSV files into Snowflake.
              </p>
              <div className="space-y-5">
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Sources:</span>
                    <p className="text-gray-600">Extract and load from PostgreSQL (9 tables) and CSVs (product categories, geolocation) using Python + SQLAlchemy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-yellow-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Performance:</span>
                    <p className="text-gray-600">&lt;5 minute latency, handling 100K+ records daily for reliable data availability.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Bronze Layer */}
            <div className="group bg-gradient-to-br from-amber-50 to-orange-100/60 rounded-2xl p-8 shadow-lg border border-amber-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-full font-bold text-2xl mr-5 shadow-lg group-hover:bg-amber-700 transition-colors">
                  02
                </div>
                <div className="flex items-center">
                  <Layers className="w-10 h-10 text-amber-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Bronze Layer</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Store raw data in an immutable format in Snowflake with a full audit trail.
              </p>
              <div className="space-y-5">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Immutability:</span>
                    <p className="text-gray-600">Store raw data with a one-to-one mapping to source systems, enabling full data lineage and version control.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Reliability:</span>
                    <p className="text-gray-600">100% data preservation guarantee, providing a complete and reliable audit trail.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Silver Layer */}
            <div className="group bg-gradient-to-br from-emerald-50 to-green-100/60 rounded-2xl p-8 shadow-lg border border-emerald-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full font-bold text-2xl mr-5 shadow-lg group-hover:bg-emerald-700 transition-colors">
                  03
                </div>
                <div className="flex items-center">
                  <Filter className="w-10 h-10 text-emerald-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Silver Layer</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Clean and standardize data with dbt transformations and quality rules.
              </p>
              <div className="space-y-5">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Transformation:</span>
                    <p className="text-gray-600">Clean and standardize using dbt, including deduplication, schema validation, and type checking.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Accuracy & Performance:</span>
                    <p className="text-gray-600">Achieve 99.5% data accuracy with optimized queries and proper indexing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Gold Layer */}
            <div className="group bg-gradient-to-br from-yellow-50 to-amber-100/60 rounded-2xl p-8 shadow-lg border border-yellow-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-600 text-white rounded-full font-bold text-2xl mr-5 shadow-lg group-hover:bg-yellow-700 transition-colors">
                  04
                </div>
                <div className="flex items-center">
                  <Star className="w-10 h-10 text-yellow-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Gold Layer</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Transform into a star schema dimensional model optimized for analytics.
              </p>
              <div className="space-y-5">
                <div className="flex items-start">
                  <BarChart3 className="w-6 h-6 text-yellow-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Modeling:</span>
                    <p className="text-gray-600">Star Schema model centered on FACT_ORDERS, ready for business analysis.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Analytics-Ready:</span>
                    <p className="text-gray-600">Enables customer analytics, revenue analysis, and KPI reporting for Power BI.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Data Quality Testing */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-100/60 rounded-2xl p-8 shadow-lg border border-green-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full font-bold text-2xl mr-5 shadow-lg group-hover:bg-green-700 transition-colors">
                  05
                </div>
                <div className="flex items-center">
                  <TestTube className="w-10 h-10 text-green-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Data Quality</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Ensure data reliability with 26 comprehensive automated dbt tests.
              </p>
              <div className="space-y-5">
                <div className="flex items-start">
                  <TestTube className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Test Coverage:</span>
                    <p className="text-gray-600">26 automated dbt tests for uniqueness, not-null, accepted values, and relationships.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Reliability:</span>
                    <p className="text-gray-600">Enforce a 99.5% quality threshold with anomaly detection and integrated alerting.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6: Orchestration */}
            <div className="group bg-gradient-to-br from-purple-50 to-indigo-100/60 rounded-2xl p-8 shadow-lg border border-purple-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full font-bold text-2xl mr-5 shadow-lg group-hover:bg-purple-700 transition-colors">
                  06
                </div>
                <div className="flex items-center">
                  <Calendar className="w-10 h-10 text-purple-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Orchestration</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Automate scheduling and monitoring with a robust Apache Airflow DAG.
              </p>
              <div className="space-y-5">
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Automation:</span>
                    <p className="text-gray-600">Schedule daily pipeline execution at 2 AM UTC using Apache Airflow 2.7 with retry logic.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RefreshCw className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Dependability:</span>
                    <p className="text-gray-600">Maintain a 99.9% pipeline success rate with a &lt;15 minute end-to-end runtime.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Pipeline Summary */}
          <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pipeline Impact Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                  <div className="text-3xl font-bold text-blue-600 mb-2">9</div>
                  <div className="text-gray-700 text-sm uppercase tracking-wide">Source Tables</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                  <div className="text-3xl font-bold text-green-600 mb-2">26</div>
                  <div className="text-gray-700 text-sm uppercase tracking-wide">Quality Tests</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                  <div className="text-3xl font-bold text-purple-600 mb-2">&lt;15min</div>
                  <div className="text-gray-700 text-sm uppercase tracking-wide">Runtime</div>
                </div>
              </div>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                This comprehensive pipeline processes <strong>100K+ monthly orders</strong> from raw ingestion to business-ready analytics,
                enabling Olist to make data-driven decisions about logistics optimization, customer segmentation, and market expansion strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
       {/* Data Model Architecture */}
       <section id="architecture-section" className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Data Model Architecture</h2>
             <p className="text-xl text-gray-700">
               Star Schema optimized for analytical queries
             </p>
           </div>

           <div className="flex justify-center mb-8">
             <div className="relative max-w-7xl mx-auto">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl blur-xl"></div>
               <Image
                 src="/Star schema.png"
                 alt="Olist E-commerce Star Schema Diagram"
                 width={1200}
                 height={900}
                 className="relative z-10 mx-auto rounded-xl shadow-2xl border border-gray-200"
                 priority
               />
             </div>
           </div>

           <div className="text-center">
             <p className="text-gray-600 max-w-3xl mx-auto">
               Dimensional model with Fct_Order_Items at the center, surrounded by dimension tables for customers, products, geography, and time-based analytics
             </p>
           </div>
         </div>
       </section>
       {/* Challenges & Solutions */}
       <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Challenges & Solutions</h2>
             <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
               Key challenges overcome during the development process and their strategic solutions
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {challenges.map((challenge, index) => (
               <div key={index} className="group bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                 <div className="flex items-center mb-6">
                   <div className="p-3 bg-blue-100 rounded-xl shadow-lg group-hover:bg-blue-600 transition-colors">
                     <challenge.icon className="w-10 h-10 text-blue-600 group-hover:text-white" />
                   </div>
                   <div className="ml-4">
                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                       {challenge.title}
                     </h3>
                   </div>
                 </div>

                 <div className="space-y-4">
                   <div className="flex items-start">
                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                     <div>
                       <p className="text-sm font-semibold text-gray-900 mb-1">Problem</p>
                       <p className="text-gray-700 text-sm leading-relaxed">
                         {challenge.problem}
                       </p>
                     </div>
                   </div>

                   <div className="flex items-start">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                     <div>
                       <p className="text-sm font-semibold text-gray-900 mb-1">Solution</p>
                       <p className="text-gray-700 text-sm leading-relaxed">
                         {challenge.solution}
                       </p>
                     </div>
                   </div>

                   <div className="flex items-start">
                     <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                     <div>
                       <p className="text-sm font-semibold text-gray-900 mb-1">Result</p>
                       <p className="text-green-600 font-semibold text-sm leading-relaxed">
                         {challenge.result}
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* Business Insights */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Business Insights</h2>
             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
               Key discoveries that transformed raw data into strategic business advantages
             </p>
           </div>

           <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
             {/* Revenue Distribution Card */}
             <div className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
               <div className="flex items-center mb-6">
                 <div className="p-3 bg-emerald-500 rounded-xl shadow-lg group-hover:bg-emerald-600 transition-colors">
                   <TrendingUp className="w-8 h-8 text-white" />
                 </div>
                 <div className="ml-4">
                   <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                     Revenue Distribution
                   </h3>
                 </div>
               </div>

{/* START: IDEAL Revenue Distribution Chart */}
<div className="h-40 flex justify-around items-end gap-2">
  {/* Bar 1: Southeast - 70% */}
  <div className="flex-1 flex flex-col items-center group">
    <div className="w-full flex flex-col items-center h-full justify-end">
      <div className="w-12 rounded-t-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg" style={{
        height: '112px',  // 70% of 160px
        background: 'linear-gradient(to top, #10b981, #34d399)'
      }}></div>
    </div>
    <div className="mt-2 text-sm font-bold text-gray-800">70%</div>
    <div className="text-xs font-semibold text-gray-600">Southeast</div>
  </div>

  {/* Bar 2: Northeast - 15% */}
  <div className="flex-1 flex flex-col items-center group">
    <div className="w-full flex flex-col items-center h-full justify-end">
      <div className="w-12 rounded-t-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg" style={{
        height: '24px',  // 15% of 160px
        background: 'linear-gradient(to top, #34d399, #6ee7b7)'
      }}></div>
    </div>
    <div className="mt-2 text-sm font-bold text-gray-800">15%</div>
    <div className="text-xs font-semibold text-gray-600">Northeast</div>
  </div>

  {/* Bar 3: South - 10% */}
  <div className="flex-1 flex flex-col items-center group">
    <div className="w-full flex flex-col items-center h-full justify-end">
      <div className="w-12 rounded-t-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg" style={{
        height: '16px',  // 10% of 160px
        background: 'linear-gradient(to top, #6ee7b7, #a7f3d0)'
      }}></div>
    </div>
    <div className="mt-2 text-sm font-bold text-gray-800">10%</div>
    <div className="text-xs font-semibold text-gray-600">South</div>
  </div>

  {/* Bar 4: North - 5% */}
  <div className="flex-1 flex flex-col items-center group">
    <div className="w-full flex flex-col items-center h-full justify-end">
      <div className="w-12 rounded-t-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg" style={{
        height: '8px',  // 5% of 160px
        background: 'linear-gradient(to top, #a7f3d0, #d1fae5)'
      }}></div>
    </div>
    <div className="mt-2 text-sm font-bold text-gray-800">5%</div>
    <div className="text-xs font-semibold text-gray-600">North</div>
  </div>
</div>
{/* END: IDEAL Revenue Distribution Chart */}

               <div className="space-y-3">
                 <div className="flex items-start">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <p className="text-gray-700 font-medium">
                     <span className="text-emerald-600 font-bold">70%</span> of total revenue originates from Southeast Brazil
                   </p>
                 </div>
                 <div className="flex items-start">
                   <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <p className="text-green-600 font-semibold">
                     🎯 Identified key geographic markets for targeted marketing campaigns
                   </p>
                 </div>
               </div>
             </div>

             {/* Delivery Performance Card */}
             <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
               <div className="flex items-center mb-6">
                 <div className="p-3 bg-blue-500 rounded-xl shadow-lg group-hover:bg-blue-600 transition-colors">
                   <Clock className="w-8 h-8 text-white" />
                 </div>
                 <div className="ml-4">
                   <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                     Delivery Performance
                   </h3>
                 </div>
               </div>

               {/* Delivery Performance Chart */}
               <div className="mb-6 flex items-center justify-center">
                 <svg viewBox="0 0 300 200" className="w-full h-48">
                   {/* Chart Area */}
                   <polyline
                     points="50,180 100,170 150,140 200,120 250,100"
                     stroke="#3b82f6"
                     strokeWidth="4"
                     fill="none"
                     className="drop-shadow-sm"
                   >
                     <animate attributeName="points" values="50,180 50,180 50,180 50,180 50,180;50,180 100,170 150,140 200,120 250,100" dur="1.5s" fill="freeze" />
                   </polyline>

                   {/* Data Points */}
                   <circle cx="50" cy="180" r="4" fill="#3b82f6" className="animate-pulse">
                     <animate attributeName="cy" values="180;180" dur="1s" fill="freeze" />
                   </circle>
                   <circle cx="100" cy="170" r="4" fill="#3b82f6" className="animate-pulse">
                     <animate attributeName="cy" values="180;170" dur="1s" fill="freeze" begin="0.3s" />
                   </circle>
                   <circle cx="150" cy="140" r="4" fill="#3b82f6" className="animate-pulse">
                     <animate attributeName="cy" values="180;140" dur="1s" fill="freeze" begin="0.6s" />
                   </circle>
                   <circle cx="200" cy="120" r="4" fill="#3b82f6" className="animate-pulse">
                     <animate attributeName="cy" values="180;120" dur="1s" fill="freeze" begin="0.9s" />
                   </circle>
                   <circle cx="250" cy="100" r="4" fill="#3b82f6" className="animate-pulse">
                     <animate attributeName="cy" values="180;100" dur="1s" fill="freeze" begin="1.2s" />
                   </circle>

                   {/* X-axis Labels */}
                   <text x="50" y="195" textAnchor="middle" className="text-xs fill-gray-600">1-3 days</text>
                   <text x="100" y="195" textAnchor="middle" className="text-xs fill-gray-600">4-6 days</text>
                   <text x="150" y="195" textAnchor="middle" className="text-xs fill-gray-600">7-9 days</text>
                   <text x="200" y="195" textAnchor="middle" className="text-xs fill-gray-600">10-12 days</text>
                   <text x="250" y="195" textAnchor="middle" className="text-xs fill-gray-600">13+ days</text>

                   {/* Y-axis Labels */}
                   <text x="30" y="180" textAnchor="middle" className="text-xs fill-gray-600">60%</text>
                   <text x="30" y="140" textAnchor="middle" className="text-xs fill-gray-600">80%</text>
                   <text x="30" y="100" textAnchor="middle" className="text-xs fill-gray-600">95%</text>

                   {/* Satisfaction Labels */}
                   <text x="125" y="115" textAnchor="middle" className="text-sm font-bold fill-blue-700">85% Satisfaction</text>
                   <text x="125" y="130" textAnchor="middle" className="text-xs fill-blue-600">at 7-day delivery</text>
                 </svg>
               </div>

               <div className="space-y-3">
                 <div className="flex items-start">
                   <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <p className="text-gray-700 font-medium">
                     Orders with less than 7 day delivery have 85% higher customer satisfaction
                   </p>
                 </div>
                 <div className="flex items-start">
                   <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <p className="text-blue-600 font-semibold">
                     ⚡ Optimized logistics strategy focusing on delivery speed improvements
                   </p>
                 </div>
               </div>
             </div>

             {/* Customer Lifetime Value Card */}
             <div className="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
               <div className="flex items-center mb-6">
                 <div className="p-3 bg-purple-500 rounded-xl shadow-lg group-hover:bg-purple-600 transition-colors">
                   <DollarSign className="w-8 h-8 text-white" />
                 </div>
                 <div className="ml-4">
                   <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                     Customer Lifetime Value
                   </h3>
                 </div>
               </div>

{/* START: IDEAL Customer Lifetime Value Chart */}
<div className="text-center mb-3">
  <div className="text-sm font-bold text-purple-600">80/20 Rule</div>
  <div className="text-xs text-gray-500">Top 20% = 60% Revenue</div>
</div>

<div className="h-44 flex justify-around items-end gap-2">
  {/* Bar 1: Top 20% - 100% height */}
  <div className="flex-1 flex flex-col items-center group">
    <div className="w-full flex flex-col items-center h-full justify-end">
      <div className="w-16 rounded-t-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg" style={{
        height: '140px',  // Full height
        background: 'linear-gradient(to top, #9333ea, #a855f7)'
      }}></div>
    </div>
    <div className="mt-2 text-xs font-bold text-purple-600">Top 20%</div>
    <div className="text-xs text-gray-600">60% Rev</div>
  </div>

  {/* Bar 2: Mid 30% - 50% height */}
  <div className="flex-1 flex flex-col items-center group">
    <div className="w-full flex flex-col items-center h-full justify-end">
      <div className="w-16 rounded-t-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg" style={{
        height: '70px',  // 50% of full
        background: 'linear-gradient(to top, #a855f7, #c084fc)'
      }}></div>
    </div>
    <div className="mt-2 text-xs font-bold text-purple-500">Mid 30%</div>
    <div className="text-xs text-gray-600">30% Rev</div>
  </div>

  {/* Bar 3: Low 50% - 17% height */}
  <div className="flex-1 flex flex-col items-center group">
    <div className="w-full flex flex-col items-center h-full justify-end">
      <div className="w-16 rounded-t-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg" style={{
        height: '24px',  // 17% of full
        background: 'linear-gradient(to top, #c084fc, #e9d5ff)'
      }}></div>
    </div>
    <div className="mt-2 text-xs font-bold text-purple-400">Low 50%</div>
    <div className="text-xs text-gray-600">10% Rev</div>
  </div>
</div>
{/* END: IDEAL Customer Lifetime Value Chart */}

               <div className="space-y-3">
                 <div className="flex items-start">
                   <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <p className="text-gray-700 font-medium">
                     <span className="text-purple-600 font-bold">Top 20%</span> of customers contribute to <span className="text-purple-600 font-bold">60%</span> of total revenue
                   </p>
                 </div>
                 <div className="flex items-start">
                   <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <p className="text-purple-600 font-semibold">
                     👑 Implemented customer segmentation for personalized retention strategies
                   </p>
                 </div>
               </div>
             </div>
           </div>

           {/* Summary Insight */}
           <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
             <div className="text-center">
               <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Impact</h3>
               <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                 These insights demonstrate how data-driven decisions can transform operational efficiency and customer satisfaction.
                 By understanding regional performance patterns, delivery optimization opportunities, and customer value distribution,
                 Olist can now make strategic investments that maximize ROI and enhance competitive advantage.
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* Code Showcase */}
       <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Code Showcase</h2>
             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
               Interactive code browser - click on any file tab to explore the implementation
             </p>
           </div>

           {/* File Tabs */}
           <div className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-white rounded-xl shadow-lg border border-gray-200">
             {codeFiles.map((file) => (
               <button
                 key={file.id}
                 onClick={() => setActiveCodeTab(file.id)}
                 className={
                   activeCodeTab === file.id
                     ? `px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${colorClasses[file.id].button}`
                     : 'px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 text-gray-700 hover:bg-gray-200'
                 }
               >
                 <span className="text-xs">📄</span>
                 {file.name}
                 <span className={'text-xs px-2 py-1 rounded ' + colorClasses[file.id].span}>
                   {file.language}
                 </span>
               </button>
             ))}
           </div>

           {/* Code Content */}
           <div className="bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
             <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
               <div className="flex items-center gap-3">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                 </div>
                 <h3 className="text-white font-semibold">{codeContent[activeCodeTab].title}</h3>
               </div>
               <div className="flex items-center gap-2">
                 <span className={'text-xs px-2 py-1 rounded ' + colorClasses[activeCodeTab].button.split(' ').filter(c => c.startsWith('bg-') || c === 'text-white').join(' ')}>
                   {codeContent[activeCodeTab].language}
                 </span>
               </div>
             </div>

             <div className="p-6 overflow-x-auto max-h-96">
               <pre className="text-sm text-gray-300 leading-relaxed">
                 <code>{codeContent[activeCodeTab].content}</code>
               </pre>
             </div>

             {/* Code Actions */}
             <div className="px-6 py-4 bg-gray-800 border-t border-gray-700">
               <div className="flex items-center justify-between text-sm">
                 <div className="flex items-center gap-4 text-gray-400">
                   <span>📊 {activeCodeTab === 'gold_model' ? 'SQL Model' : activeCodeTab === 'airflow_dag' ? 'Python DAG' : 'YAML Tests'}</span>
                   <span>🔧 {activeCodeTab === 'gold_model' ? 'Data Transformation' : activeCodeTab === 'airflow_dag' ? 'Orchestration' : 'Quality Assurance'}</span>
                 </div>
                 <button className="text-blue-400 hover:text-blue-300 transition-colors">
                   📋 Copy Code
                 </button>
               </div>
             </div>
           </div>

         </div>
       </section>

       {/* Key Learnings & Future Vision */}
       <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Key Learnings & Future Vision</h2>
             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
               Key learnings from implementation and strategic vision for evolving data capabilities
             </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
             {/* Key Learnings */}
             <div>
               <h3 className="text-2xl font-bold text-gray-900 mb-8">💡 Key Learnings</h3>
               <div className="space-y-6">
                 <div className="group flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                   <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                     <GitBranch className="w-6 h-6 text-blue-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-2 text-lg">Idempotent pipeline design</h4>
                     <p className="text-gray-700 leading-relaxed">Prevents duplicate processing and ensures data consistency across failures</p>
                   </div>
                 </div>

                 <div className="group flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300">
                   <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg mr-4 group-hover:bg-green-200 transition-colors">
                     <CheckCircle className="w-6 h-6 text-green-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-2 text-lg">Early testing saves time</h4>
                     <p className="text-gray-700 leading-relaxed">Implementing quality checks during development reduces debugging time by 60%</p>
                   </div>
                 </div>

                 <div className="group flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                   <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg mr-4 group-hover:bg-purple-200 transition-colors">
                     <BookOpen className="w-6 h-6 text-purple-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-2 text-lg">Documentation is crucial</h4>
                     <p className="text-gray-700 leading-relaxed">Clear documentation enables team collaboration and reduces onboarding time</p>
                   </div>
                 </div>

                 <div className="group flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                   <div className="flex-shrink-0 p-2 bg-orange-100 rounded-lg mr-4 group-hover:bg-orange-200 transition-colors">
                     <TrendingUp className="w-6 h-6 text-orange-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-2 text-lg">Business context matters</h4>
                     <p className="text-gray-700 leading-relaxed">Understanding business requirements leads to more impactful technical solutions</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Future Enhancements */}
             <div>
               <h3 className="text-2xl font-bold text-gray-900 mb-8">🚀 Future Enhancements</h3>
               <div className="space-y-6">
                 <div className="group flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                   <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                     <Zap className="w-6 h-6 text-blue-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-2 text-lg">Real-time Kafka streaming</h4>
                     <p className="text-gray-700 leading-relaxed">Implement streaming data processing for real-time analytics capabilities</p>
                   </div>
                 </div>

                 <div className="group flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                   <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg mr-4 group-hover:bg-purple-200 transition-colors">
                     <Brain className="w-6 h-6 text-purple-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-2 text-lg">ML delivery predictions</h4>
                     <p className="text-gray-700 leading-relaxed">Build machine learning models to predict delivery times and optimize logistics</p>
                   </div>
                 </div>

                 <div className="group flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300">
                   <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg mr-4 group-hover:bg-green-200 transition-colors">
                     <Cloud className="w-6 h-6 text-green-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-2 text-lg">Multi-cloud support</h4>
                     <p className="text-gray-700 leading-relaxed">Extend infrastructure to support AWS and Google Cloud for better reliability</p>
                   </div>
                 </div>

                 <div className="group flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                   <div className="flex-shrink-0 p-2 bg-orange-100 rounded-lg mr-4 group-hover:bg-orange-200 transition-colors">
                     <Users className="w-6 h-6 text-orange-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-2 text-lg">Advanced customer analytics</h4>
                     <p className="text-gray-700 leading-relaxed">Develop deeper customer segmentation and lifetime value prediction models</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Enhanced Blue Gradient Footer */}
       <section className="relative py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-indigo-700/90 to-purple-800/90"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>

         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

           {/* Philosophy Quote Section */}
           <div className="max-w-4xl mx-auto mb-16">
             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
               <div className="flex items-start gap-4">
                 <div className="flex-shrink-0 p-3 bg-white/20 rounded-xl">
                   <Quote className="w-8 h-8 text-white" />
                 </div>
                 <div>
                   <blockquote className="text-xl md:text-2xl italic text-white mb-4 leading-relaxed">
                     "Great data engineering combines technical excellence with deep business understanding to deliver measurable impact while maintaining flexibility for future growth."
                   </blockquote>
                   <footer className="text-blue-200 font-medium">— Engineering Philosophy</footer>
                 </div>
               </div>
             </div>
           </div>

           {/* CTA Buttons */}
           <div className="text-center mb-16">
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a
                 href="https://github.com/Y0U5F/Olist_ETL_Project"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl transform"
               >
                 <Github className="w-6 h-6 mr-3" />
                 Explore Repository
               </a>
               <Link
                 href="/"
                 className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300"
               >
                 <ArrowLeft className="w-6 h-6 mr-3" />
                 View More Projects
               </Link>
             </div>
           </div>

           {/* Copyright Section */}
           <div className="text-center pt-8 border-t border-white/20">
             <div className="mb-4">
               <p className="text-2xl italic text-blue-100 mb-2">"تَعَبُ كُلّها الحَياةُ."</p>
             </div>
             <p className="text-blue-200 text-sm">
               © 2025 Yousef Mahmoud | Data Engineering Portfolio
             </p>
           </div>
         </div>
       </section>
   </div>
 );
}

export default function OlistETLPage() {
 return <OlistETLPageContent />;
}
