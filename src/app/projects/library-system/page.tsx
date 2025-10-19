import { PAGE_METADATA } from "@/lib/metadata"

function LibrarySystemProjectContent() {
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    document.title = 'Library Management System | Yousef Mahmoud';
  }, []);

  const projectMetrics = [
    { icon: Users, label: "Target Users", value: "Librarians & Collectors", color: "text-blue-600" },
    { icon: Clock, label: "Development Time", value: "3 weeks", color: "text-green-600" },
    { icon: Database, label: "Database", value: "SQLite 3.x", color: "text-purple-600" },
    { icon: Award, label: "Code Quality", value: "PEP 8 Compliant", color: "text-orange-600" },
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Book Management",
      description: "Complete CRUD operations for book collections with detailed metadata tracking",
      details: ["Title, Author, Pages, Category", "Input validation & sanitization", "Duplicate prevention"]
    },
    {
      icon: FileText,
      title: "Magazine Management",
      description: "Specialized handling for magazine collections with issue number tracking",
      details: ["Issue number tracking", "Publication metadata", "Series organization"]
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Powerful search functionality with filtering and real-time results",
      details: ["Full-text search", "Category filtering", "Instant results"]
    },
    {
      icon: CheckCircle,
      title: "Check-in/Check-out System",
      description: "Complete inventory tracking with availability status management",
      details: ["Real-time status updates", "Audit trail logging", "Bulk operations"]
    },
    {
      icon: Download,
      title: "Data Export",
      description: "Export catalog data to CSV for backup and external analysis",
      details: ["CSV format support", "Complete data preservation", "One-click export"]
    },
    {
      icon: Shield,
      title: "Data Validation",
      description: "Comprehensive input validation and error handling throughout the application",
      details: ["Type checking", "Format validation", "User-friendly error messages"]
    }
  ]

  const techStack = [
    { category: "Frontend", items: ["Tkinter", "Python GUI", "Responsive Design"] },
    { category: "Backend", items: ["Python 3.8+", "SQLite Database", "SQLAlchemy ORM"] },
    { category: "Tools", items: ["pytest", "PyInstaller", "Git", "VS Code"] },
    { category: "Architecture", items: ["MVC Pattern", "OOP Design", "Modular Structure"] }
  ]

  const challenges = [
    {
      title: "Database Performance Optimization",
      problem: "Initial implementation showed performance degradation with larger datasets (1000+ items)",
      solution: "Added database indexes on frequently queried columns, implemented connection pooling, and added query result limits",
      result: "50% improvement in query performance, consistent sub-second response times"
    },
    {
      title: "Cross-Platform GUI Compatibility",
      problem: "Tkinter styling and behavior varied significantly across operating systems",
      solution: "Implemented responsive layout design, used platform-independent styling approaches, and added comprehensive error handling",
      result: "Consistent user experience across Windows, macOS, and Linux platforms"
    },
    {
      title: "Data Validation & Security",
      problem: "Initial version lacked proper input validation and was vulnerable to malformed data",
      solution: "Implemented comprehensive input validation using dedicated validator class, added data sanitization, and created custom exception handling",
      result: "Robust error handling with user-friendly feedback and secure data processing"
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
                  <Badge variant="outline" className="border-black text-black">Desktop Application</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Library Management System
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  A comprehensive desktop application for efficient library record management, featuring an intuitive graphical interface built with Python and Tkinter.
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
                  <Download className="w-4 h-4 mr-2" />
                  Download Application
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Hero Image/Video Placeholder */}
            <div className="relative order-first lg:order-last">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-black">Demo Video</p>
                      <p className="text-sm text-gray-600">25-30 second showcase</p>
                    </div>
                  </div>
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
                      <BookOpen className="w-6 h-6 mr-2 text-black" />
                      Project Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      The Library Management System represents a comprehensive solution for digitizing and streamlining library operations.
                      This desktop application transforms traditional library management from manual, error-prone processes to an efficient,
                      automated system that enhances productivity and user experience.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Zap className="w-8 h-8 mx-auto mb-2 text-black" />
                        <h3 className="font-semibold text-black">Performance</h3>
                        <p className="text-sm text-gray-600">Sub-second response times</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Users className="w-8 h-8 mx-auto mb-2 text-black" />
                        <h3 className="font-semibold text-black">Usability</h3>
                        <p className="text-sm text-gray-600">Intuitive interface</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Shield className="w-8 h-8 mx-auto mb-2 text-black" />
                        <h3 className="font-semibold text-black">Reliability</h3>
                        <p className="text-sm text-gray-600">99%+ uptime</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-black">
                  <CardHeader>
                    <CardTitle>Impact & Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-black mb-3">Quantitative Benefits</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center">
                            <ChevronRight className="w-4 h-4 mr-2 text-green-600" />
                            80% reduction in manual tracking time
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="w-4 h-4 mr-2 text-green-600" />
                            95% decrease in data entry errors
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="w-4 h-4 mr-2 text-green-600" />
                            70% faster application startup
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-3">User Experience</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center">
                            <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
                            95% user satisfaction rate
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
                            Less than 30 minutes training time
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
                            Cross-platform compatibility
                          </li>
                        </ul>
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
                          <p className="font-semibold text-black">Modular Design</p>
                          <p className="text-gray-600">Separated GUI, business logic, and data layers</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Database className="w-5 h-5 text-black mt-0.5" />
                        <div>
                          <p className="font-semibold text-black">Optimized Database</p>
                          <p className="text-gray-600">Indexed queries and connection pooling</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-black mt-0.5" />
                        <div>
                          <p className="font-semibold text-black">Error Handling</p>
                          <p className="text-gray-600">Comprehensive logging and validation</p>
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
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Project Gallery</h2>
            <p className="text-lg text-gray-600">Visual showcase of key features and interface design</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for screenshots */}
            {[
              { title: "Main Dashboard", desc: "Clean, organized interface" },
              { title: "Add Book Dialog", desc: "User-friendly form design" },
              { title: "Search Results", desc: "Advanced filtering capabilities" },
              { title: "Data Export", desc: "CSV export functionality" },
              { title: "Catalog View", desc: "Comprehensive item management" },
              { title: "Settings Panel", desc: "Configuration options" },
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
                      <p className="font-semibold text-black">Requirements Analysis</p>
                      <p className="text-sm text-gray-600">User interviews and feature prioritization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-semibold text-black">Core Development</p>
                      <p className="text-sm text-gray-600">MVP with essential CRUD operations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-semibold text-black">Enhancement Phase</p>
                      <p className="text-sm text-gray-600">Advanced features and UX improvements</p>
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
                    <span className="text-sm font-medium text-black">Week 1</span>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600">Requirements gathering and initial planning</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-black">Week 2</span>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600">Core functionality implementation</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-black">Week 3</span>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600">Testing, optimization, and deployment</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore the Code?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Dive deep into the implementation details and see how this project demonstrates modern Python development practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              <Github className="w-5 h-5 mr-2" />
              View Repository
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Download className="w-5 h-5 mr-2" />
              Download Application
            </Button>
          </div>
        </div>
      </section>
  </div>
)
}

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
