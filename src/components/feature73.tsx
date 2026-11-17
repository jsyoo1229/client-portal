
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface FeatureCardListItem {
  title: string;
  description: string;
  image: FeatureImage;
}

interface FeatureImage {
  src: string;
  alt: string;
}

interface FeatureButton {
  text: string;
  url: string;
}

interface Feature73Props {
  heading: string;
  description?: string;
  features?: FeatureCardListItem[];
  button?: FeatureButton;
  className?: string;
}

type Props = Partial<Feature73Props>;

const defaultProps: Feature73Props = {
  heading: "Everything you need to manage clients",
  description:
    "Track projects, share files, and keep your clients updated—all in one simple workspace.",

  features: [
    {
      title: "Project Tracking",
      description:
        "Track project progress and keep clients informed at every stage.",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-1-4x3.svg",
        alt: "Document workflow interface preview",
      },
    },
    {
      title: "File Sharing",
      description:
        "Upload and share project files with clients in one secure place.",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-2-4x3.svg",
        alt: "AI assistant interface preview",
      },
    },
    {
      title: "Client Updates",
      description:
        "Share important updates and keep project communication organized.",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-3-4x3.svg",
        alt: "Budget management interface preview",
      },
    },
  ],

  button: {
    text: "Get Started",
    url: "/signup",
  },
};

const Feature73 = (props: Props) => {
  const { heading, description, button, features, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mb-9 lg:mb-14 lg:max-w-3xl">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-balance md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h2>

          {description && (
            <p className="mb-8 text-muted-foreground lg:text-lg">
              {description}
            </p>
          )}

          {button && (
            <Button variant="link" asChild>
              <a
                href={button.url}
                className="group flex items-center font-medium md:text-base lg:text-lg"
              >
                {button.text}
                <ArrowRight />
              </a>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features?.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col overflow-clip rounded-xl border border-border"
            >
              <div>
                <img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="aspect-4/3 h-full w-full object-cover object-top"
                />
              </div>

              <div className="px-5 pt-6 pb-6 md:px-6 md:pb-7 lg:px-8 lg:pb-8">
                <h3 className="mb-2 text-base font-semibold md:text-lg">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature73 };
