"use client"
// Final deployment to Y0U5F.github.io
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  GraduationCap,
  Award,
  Code,
  Palette,
  Database,
  Globe,
  Menu,
  X,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function PortfolioContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    closeMenu()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/mzzjwzak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email
        })
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setFormStatus(''), 3000)
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-black">YOUSEF MAHMOUD</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => window.open('/Yousef_CV.pdf', '_blank')}
                className="text-gray-600 hover:text-black transition-colors"
              >
                CV
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-600 hover:text-black transition-colors py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-gray-600 hover:text-black transition-colors py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left text-gray-600 hover:text-black transition-colors py-2"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className="text-left text-gray-600 hover:text-black transition-colors py-2"
                >
                  Education
                </button>
                <button
                  onClick={() => window.open('/Yousef%20CV.pdf', '_blank')}
                  className="text-left text-gray-600 hover:text-black transition-colors py-2"
                >
                  CV
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-600 hover:text-black transition-colors py-2"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Hi, I'm <span className="underline decoration-4 decoration-black">YOUSEF MAHMOUD</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600">Data Engineer</p>
                <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0">
                Building scalable ETL pipelines and modern Data Warehouses. I leverage a strong CS & AI foundation to optimize data architectures using Apache Airflow, Spark, and Snowflake.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Yousef_CV.pdf';
                    link.download = 'Yousef Mahmoud CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex space-x-6 justify-center lg:justify-start">
                <Link href="https://github.com/Y0U5F" className="text-gray-600 hover:text-black transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="https://linkedin.com/in/y0usefma7m0ud" className="text-gray-600 hover:text-black transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="mailto:yousef.soliman.de@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-black rounded-full blur-3xl opacity-10"></div>
                <Image
                  src="Me.jpeg"
                  alt="Yousef Mahmoud - Data Engineer"
                  width={320}
                  height={320}
                  className="relative z-10 rounded-full border-4 border-black shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">About Me</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            I am a Computer Science graduate passionate about data engineering and automation. Recently completed an intensive training at ITI, where I gained rigorous hands-on experience in designing robust data solutions. My expertise lies in bridging the gap between software engineering and data infrastructure, utilizing tools like Docker and Linux to build efficient, automated workflows. I am driven by the challenge of transforming raw data into actionable business insights.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Featured Projects</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-black">
              <CardHeader>
                <CardTitle>SkinCa</CardTitle>
                <CardDescription>Spearheaded an integrated healthcare platform for early skin cancer detection using Deep Learning (CNNs). Built comprehensive patient ecosystem with drug reminder system and doctor-patient chat modules.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-black text-black">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Image Processing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Link href="/projects/library-system" className="block group">
              <Card className="group hover:shadow-xl transition-all duration-300 border-black cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-gray-600 transition-colors">
                        Python Library Management System
                      </CardTitle>
                      <CardDescription className="mt-2">
                        A comprehensive desktop application for efficient library record management, featuring an intuitive graphical interface built with Python and Tkinter.
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors flex-shrink-0 ml-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-black text-black">
                        Python
                      </Badge>
                      <Badge variant="outline" className="border-black text-black">
                        Tkinter
                      </Badge>
                      <Badge variant="outline" className="border-black text-black">
                        SQLite
                      </Badge>
                      <Badge variant="outline" className="border-black text-black">
                        Desktop App
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        CRUD Operations
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Search & Filter
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Data Export
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Cross-Platform
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-sm font-medium text-black group-hover:text-gray-600 transition-colors">
                        View Project Details →
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/olist-etl" className="block group">
              <Card className="group hover:shadow-xl transition-all duration-300 border-black cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-gray-600 transition-colors">
                        Olist E-commerce Data Warehouse
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Architected a scalable ELT pipeline processing 100K+ records of Brazilian e-commerce data using Medallion Architecture. Orchestrated daily workflows using Apache Airflow and implemented dbt with 26+ automated tests.
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors flex-shrink-0 ml-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-black text-black">
                        Snowflake
                      </Badge>
                      <Badge variant="outline" className="border-black text-black">
                        Apache Airflow
                      </Badge>
                      <Badge variant="outline" className="border-black text-black">
                        dbt
                      </Badge>
                      <Badge variant="outline" className="border-black text-black">
                        Power BI
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Medallion Architecture
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        26+ Data Quality Tests
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Star Schema Design
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Business Intelligence
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-sm font-medium text-black">
                        Repo: github.com/YOU5F/Olist ETL Project
                      </p>
                      <p className="text-sm font-medium text-black group-hover:text-gray-600 transition-colors">
                        View Enterprise DWH Project →
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Card className="group hover:shadow-xl transition-all duration-300 border-black cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="group-hover:text-gray-600 transition-colors">
                      ITI Examination System
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Engineered a normalized relational database using SQL Server (T-SQL) to manage students, courses, and exams with automated processes.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-black text-black">
                      SQL Server
                    </Badge>
                    <Badge variant="outline" className="border-black text-black">
                      T-SQL
                    </Badge>
                    <Badge variant="outline" className="border-black text-black">
                      SSMS
                    </Badge>
                    <Badge variant="outline" className="border-black text-black">
                      Docker
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Stored Procedures
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      RBAC System
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Audit Triggers
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      90% Work Reduction
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-sm font-medium text-black">
                      Repo: github.com/YOU5F/CTRL-EXAM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Skills & Technologies</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Languages */}
            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-black" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">Python</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">TypeScript</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Bash Script</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">C/C++</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Java</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Big Data & Streaming */}
            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-black" />
                  Big Data & Streaming
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">Apache Spark</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Apache Hadoop</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Apache Kafka</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">dbt</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Orchestration & CI/CD */}
            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-black" />
                  Orchestration & CI/CD
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">Apache Airflow</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">GitHub Actions</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Cloud & Infrastructure */}
            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-black" />
                  Cloud & Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">AWS (S3)</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Linux</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Docker</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Git & GitHub</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Jenkins (CI/CD)</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-black" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">Snowflake</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">PostgreSQL</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">MySQL</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">MongoDB</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Cassandra</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">SQL Server</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Oracle</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">SQLite</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">SSMS</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Data Science & Visualization */}
            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-black" />
                  Data Science & Visualization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">Pandas</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">NumPy</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Matplotlib</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Power BI</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Frameworks & Tools */}
            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-black" />
                  Frameworks & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">Anaconda</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Flask</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Streamlit</Badge>
                </div>
              </CardContent>
            </Card>

            {/* ML & NLP */}
            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-black" />
                  ML & NLP
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">Fine-tuning LLMs</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">TensorFlow</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">PyTorch</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Hugging Face</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="border-black">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-black" />
                      Bachelor's in Computer Science & AI
                    </CardTitle>
                    <CardDescription className="mt-2">Beni-Suef University</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-black text-white self-start">
                    2020 - 2024
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 mr-2 text-black" />
                      Data Engineering Training Program
                    </CardTitle>
                    <CardDescription className="mt-2">Information Technology Institute (ITI)</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-black text-white self-start">
                    June 2025 – Nov 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Completed an intensive 4-month Data Engineering specialization. Developed end-to-end data pipelines using Apache Airflow & Spark, and designed optimized Data Warehouses with Snowflake & dbt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
{/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Let's Work Together</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Email</p>
                      <p className="text-gray-600">yousef.soliman.de@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Phone</p>
                      <p className="text-gray-600">0100-438-9030</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Location</p>
                      <p className="text-gray-600">Cairo, Egypt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-black">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    ></textarea>
                  </div>
                  
                  {formStatus === 'success' && (
                    <div className="p-3 bg-green-50 border border-green-500 text-green-700 rounded-md text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-500 text-red-700 rounded-md text-sm">
                      Failed to send message. Please email me directly at yousef.soliman.de@gmail.com
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    disabled={formStatus === 'sending'}
                    className="w-full bg-black hover:bg-gray-800 text-white disabled:opacity-50"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300">© 2025 YOUSEF MAHMOUD. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Portfolio() {
  return <PortfolioContent />;
}