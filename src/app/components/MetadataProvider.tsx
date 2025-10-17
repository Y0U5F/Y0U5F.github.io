"use client";

import { useEffect, createContext, useContext, useState, ReactNode } from "react";
import { SITE_CONFIG, type PageMetadata } from "@/lib/metadata";

interface MetadataContextType {
  setMetadata: (metadata: PageMetadata) => void;
  currentMetadata: PageMetadata | null;
}

const MetadataContext = createContext<MetadataContextType | undefined>(undefined);

export function useMetadata() {
  const context = useContext(MetadataContext);
  if (context === undefined) {
    throw new Error("useMetadata must be used within a MetadataProvider");
  }
  return context;
}

interface MetadataProviderProps {
  children: ReactNode;
}

export function MetadataProvider({ children }: MetadataProviderProps) {
  const [currentMetadata, setCurrentMetadata] = useState<PageMetadata | null>(null);

  const setMetadata = (metadata: PageMetadata) => {
    setCurrentMetadata(metadata);
  };

  useEffect(() => {
    // Update document title and meta tags
    if (currentMetadata) {
      document.title = currentMetadata.title;

      // Update description meta tag
      let descriptionMeta = document.querySelector('meta[name="description"]');
      if (!descriptionMeta) {
        descriptionMeta = document.createElement('meta');
        descriptionMeta.setAttribute('name', 'description');
        document.head.appendChild(descriptionMeta);
      }
      descriptionMeta.setAttribute('content', currentMetadata.description);

      // Update keywords meta tag
      if (currentMetadata.keywords) {
        let keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (!keywordsMeta) {
          keywordsMeta = document.createElement('meta');
          keywordsMeta.setAttribute('name', 'keywords');
          document.head.appendChild(keywordsMeta);
        }
        keywordsMeta.setAttribute('content', currentMetadata.keywords.join(", "));
      }

      // Update Open Graph tags
      if (currentMetadata.openGraph) {
        // Title
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
          ogTitle = document.createElement('meta');
          ogTitle.setAttribute('property', 'og:title');
          document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', currentMetadata.openGraph.title);

        // Description
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
          ogDescription = document.createElement('meta');
          ogDescription.setAttribute('property', 'og:description');
          document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', currentMetadata.openGraph.description);

        // Type
        let ogType = document.querySelector('meta[property="og:type"]');
        if (!ogType) {
          ogType = document.createElement('meta');
          ogType.setAttribute('property', 'og:type');
          document.head.appendChild(ogType);
        }
        ogType.setAttribute('content', currentMetadata.openGraph.type || 'website');

        // URL
        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (!ogUrl) {
          ogUrl = document.createElement('meta');
          ogUrl.setAttribute('property', 'og:url');
          document.head.appendChild(ogUrl);
        }
        ogUrl.setAttribute('content', SITE_CONFIG.url);

        // Site Name
        let ogSiteName = document.querySelector('meta[property="og:site_name"]');
        if (!ogSiteName) {
          ogSiteName = document.createElement('meta');
          ogSiteName.setAttribute('property', 'og:site_name');
          document.head.appendChild(ogSiteName);
        }
        ogSiteName.setAttribute('content', SITE_CONFIG.title);

        // Images
        if (currentMetadata.openGraph.images) {
          currentMetadata.openGraph.images.forEach((image, index) => {
            let ogImage = document.querySelector(`meta[property="og:image:${index}"]`) || document.querySelector('meta[property="og:image"]');
            if (!ogImage) {
              ogImage = document.createElement('meta');
              ogImage.setAttribute('property', index === 0 ? 'og:image' : `og:image:${index}`);
              document.head.appendChild(ogImage);
            }
            ogImage.setAttribute('content', image.url.startsWith('http') ? image.url : `${SITE_CONFIG.url}${image.url}`);

            if (image.width) {
              let ogImageWidth = document.querySelector(`meta[property="og:image:width:${index}"]`) || document.querySelector('meta[property="og:image:width"]');
              if (!ogImageWidth) {
                ogImageWidth = document.createElement('meta');
                ogImageWidth.setAttribute('property', index === 0 ? 'og:image:width' : `og:image:width:${index}`);
                document.head.appendChild(ogImageWidth);
              }
              ogImageWidth.setAttribute('content', image.width.toString());
            }

            if (image.height) {
              let ogImageHeight = document.querySelector(`meta[property="og:image:height:${index}"]`) || document.querySelector('meta[property="og:image:height"]');
              if (!ogImageHeight) {
                ogImageHeight = document.createElement('meta');
                ogImageHeight.setAttribute('property', index === 0 ? 'og:image:height' : `og:image:height:${index}`);
                document.head.appendChild(ogImageHeight);
              }
              ogImageHeight.setAttribute('content', image.height.toString());
            }

            if (image.alt) {
              let ogImageAlt = document.querySelector(`meta[property="og:image:alt:${index}"]`) || document.querySelector('meta[property="og:image:alt"]');
              if (!ogImageAlt) {
                ogImageAlt = document.createElement('meta');
                ogImageAlt.setAttribute('property', index === 0 ? 'og:image:alt' : `og:image:alt:${index}`);
                document.head.appendChild(ogImageAlt);
              }
              ogImageAlt.setAttribute('content', image.alt);
            }
          });
        }
      }

      // Update Twitter Card tags
      if (currentMetadata.twitter) {
        // Title
        let twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (!twitterTitle) {
          twitterTitle = document.createElement('meta');
          twitterTitle.setAttribute('name', 'twitter:title');
          document.head.appendChild(twitterTitle);
        }
        twitterTitle.setAttribute('content', currentMetadata.twitter.title);

        // Description
        let twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (!twitterDescription) {
          twitterDescription = document.createElement('meta');
          twitterDescription.setAttribute('name', 'twitter:description');
          document.head.appendChild(twitterDescription);
        }
        twitterDescription.setAttribute('content', currentMetadata.twitter.description);

        // Card type
        let twitterCard = document.querySelector('meta[name="twitter:card"]');
        if (!twitterCard) {
          twitterCard = document.createElement('meta');
          twitterCard.setAttribute('name', 'twitter:card');
          document.head.appendChild(twitterCard);
        }
        twitterCard.setAttribute('content', currentMetadata.twitter.card);

        // Creator
        let twitterCreator = document.querySelector('meta[name="twitter:creator"]');
        if (!twitterCreator) {
          twitterCreator = document.createElement('meta');
          twitterCreator.setAttribute('name', 'twitter:creator');
          document.head.appendChild(twitterCreator);
        }
        twitterCreator.setAttribute('content', SITE_CONFIG.twitterHandle);

        // Images
        if (currentMetadata.twitter.images) {
          currentMetadata.twitter.images.forEach((image, index) => {
            let twitterImage = document.querySelector(`meta[name="twitter:image:${index}"]`) || document.querySelector('meta[name="twitter:image"]');
            if (!twitterImage) {
              twitterImage = document.createElement('meta');
              twitterImage.setAttribute('name', index === 0 ? 'twitter:image' : `twitter:image:${index}`);
              document.head.appendChild(twitterImage);
            }
            twitterImage.setAttribute('content', image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`);
          });
        }
      }
    }
  }, [currentMetadata]);

  return (
    <MetadataContext.Provider value={{ setMetadata, currentMetadata }}>
      {children}
    </MetadataContext.Provider>
  );
}