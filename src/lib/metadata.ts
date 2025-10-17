import type { Metadata } from "next";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    type?: "website" | "article";
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    card: "summary" | "summary_large_image";
    title: string;
    description: string;
    images?: string[];
  };
}

export const SITE_CONFIG = {
  name: "YOUSEF MAHMOUD",
  title: "YOUSEF MAHMOUD | Data Engineer Portfolio",
  description: "Portfolio of Yousef Mahmoud, a data engineer specializing in building scalable data solutions.",
  url: "https://y0u5f.github.io",
  ogImage: "/My logo.png",
  twitterHandle: "@y0usefma7m0ud",
} as const;

export function generateMetadata(overrides: Partial<PageMetadata> = {}): Metadata {
  const defaultMetadata: PageMetadata = {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    keywords: [
      "data engineer",
      "data engineering",
      "portfolio",
      "yousef mahmoud",
      "python",
      "sql",
      "etl",
      "data warehouse",
      "big data",
      "analytics"
    ],
    openGraph: {
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      type: "website",
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: "Yousef Mahmoud - Data Engineer Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      images: [SITE_CONFIG.ogImage],
    },
  };

  const metadata = { ...defaultMetadata, ...overrides };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords?.join(", "),
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    robots: "index, follow",
    openGraph: metadata.openGraph ? {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.title,
      type: metadata.openGraph.type || "website",
      images: metadata.openGraph.images?.map(img => ({
        url: img.url.startsWith("http") ? img.url : `${SITE_CONFIG.url}${img.url}`,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
    } : undefined,
    twitter: metadata.twitter ? {
      card: metadata.twitter.card,
      title: metadata.twitter.title,
      description: metadata.twitter.description,
      images: metadata.twitter.images?.map(img =>
        img.startsWith("http") ? img : `${SITE_CONFIG.url}${img}`
      ),
      creator: SITE_CONFIG.twitterHandle,
    } : undefined,
    alternates: {
      canonical: SITE_CONFIG.url,
    },
  };
}

export const PAGE_METADATA = {
  home: (): PageMetadata => ({
    title: `${SITE_CONFIG.name} | Data Engineer Portfolio`,
    description: "Portfolio showcasing expertise in data engineering, ETL pipelines, data warehousing, and analytics. Recent graduate from Information Technology Institute (ITI) with a passion for building scalable data solutions.",
    keywords: [
      "data engineer portfolio",
      "data engineering projects",
      "ETL developer",
      "data warehouse",
      "python developer",
      "sql developer",
      "big data",
      "data analytics",
      "iti graduate",
      "computer science graduate"
    ],
    openGraph: {
      title: `${SITE_CONFIG.name} | Data Engineer Portfolio`,
      description: "Portfolio showcasing expertise in data engineering, ETL pipelines, data warehousing, and analytics.",
      type: "website",
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: "Yousef Mahmoud - Data Engineer Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_CONFIG.name} | Data Engineer Portfolio`,
      description: "Portfolio showcasing expertise in data engineering, ETL pipelines, data warehousing, and analytics.",
      images: [SITE_CONFIG.ogImage],
    },
  }),

  olistProject: (): PageMetadata => ({
    title: `${SITE_CONFIG.name} | Olist E-commerce Data Pipeline`,
    description: "Enterprise-grade ELT pipeline implementing Medallion Architecture for Brazilian e-commerce analytics. Features Snowflake data warehousing, Apache Airflow orchestration, dbt transformations, and 26+ automated quality tests.",
    keywords: [
      "olist etl pipeline",
      "medallion architecture",
      "snowflake data warehouse",
      "apache airflow",
      "dbt data transformation",
      "e-commerce analytics",
      "enterprise data warehouse",
      "data quality testing",
      "elt pipeline",
      "brazilian e-commerce"
    ],
    openGraph: {
      title: `${SITE_CONFIG.name} | Olist E-commerce Data Pipeline`,
      description: "Enterprise-grade ELT pipeline implementing Medallion Architecture for Brazilian e-commerce analytics.",
      type: "article",
      images: [
        {
          url: "/Olist_workflow.png",
          width: 1200,
          height: 800,
          alt: "Olist E-commerce Data Pipeline Architecture",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_CONFIG.name} | Olist E-commerce Data Pipeline`,
      description: "Enterprise-grade ELT pipeline implementing Medallion Architecture for Brazilian e-commerce analytics.",
      images: ["/Olist_workflow.png"],
    },
  }),

  libraryProject: (): PageMetadata => ({
    title: `${SITE_CONFIG.name} | Library Management System`,
    description: "Comprehensive desktop application for efficient library record management featuring Python, Tkinter GUI, SQLite database, and advanced search functionality. Built with MVC architecture and cross-platform compatibility.",
    keywords: [
      "library management system",
      "python desktop application",
      "tkinter gui",
      "sqlite database",
      "mvc architecture",
      "crud operations",
      "desktop software",
      "python project",
      "database application",
      "cross-platform app"
    ],
    openGraph: {
      title: `${SITE_CONFIG.name} | Library Management System`,
      description: "Comprehensive desktop application for efficient library record management featuring Python, Tkinter GUI, and SQLite database.",
      type: "article",
      images: [
        {
          url: "/My logo.png",
          width: 1200,
          height: 630,
          alt: "Library Management System - Python Desktop Application",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_CONFIG.name} | Library Management System`,
      description: "Comprehensive desktop application for efficient library record management featuring Python, Tkinter GUI, and SQLite database.",
      images: ["/My logo.png"],
    },
  }),
} as const;