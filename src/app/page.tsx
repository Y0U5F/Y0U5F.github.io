"use client"
// Trigger deployment - testing workflow
import { useState } from "react"
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-black">YOUSEF MAHMOUD</div>

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
                <p className="text-lg md:text-xl text-gray-600">Data Engineer & AI Enthusiast</p>
                <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0">
                  A recent Computer Science and Artificial Intelligence graduate, currently training as a Data Engineer at ITI. Eager to apply my skills in a professional environment to contribute to the development and optimization of AI-driven solutions.
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
                <Link href="mailto:y0usfma7m0d@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-black rounded-full blur-3xl opacity-10"></div>
                <Image
                  src="/Me.jpeg"
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
              I am a passionate and driven data professional with a strong foundation in computer science and artificial intelligence. I am currently enhancing my skills in data engineering at the Information Technology Institute (ITI), focusing on building robust and scalable data pipelines.
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
                <CardDescription>A mobile app using machine learning to analyze skin images for early cancer detection.</CardDescription>
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

            <Card className="group hover:shadow-xl transition-all duration-300 border-black">
              <CardHeader>
                <CardTitle>Python Library Management System</CardTitle>
                <CardDescription>A comprehensive library management system with a user-friendly GUI.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-black text-black">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Tkinter
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    SQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-black">
              <CardHeader>
                <CardTitle>Power BI Dashboard for Data Insights</CardTitle>
                <CardDescription>Detailed reports and dashboards to analyze trends and drive decision-making.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-black text-black">
                    Power BI
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Data Analysis
                  </Badge>
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
            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-black" />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">Python</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">C/C++</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Java</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-black" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">Mongo DB</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">SQL</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Oracle</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">SQLite</Badge>
                </div>
              </CardContent>
            </Card>

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
                      Bachelor's in Computer Science and AI
                    </CardTitle>
                    <CardDescription className="mt-2">Beni Suef University</CardDescription>
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
                      Data Engineer Training
                    </CardTitle>
                    <CardDescription className="mt-2">Information Technology Institute (ITI)</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

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
                      <p className="text-gray-600">y0usfma7m0d@gmail.com</p>
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
                      <p className="text-gray-600">Beni Suef City, Egypt</p>
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
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Your Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white">Send Message</Button>
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
              <p className="text-gray-300">© 2024 YOUSEF MAHMOUD. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}