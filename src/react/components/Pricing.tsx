import React from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "../utils/cn";
import { Highlight } from "./HeroHighlight";
import { useNavigate } from "react-router-dom";

export function Pricing() {
  const router = useNavigate();

  const tiers = [
    {
      name: "Existing Components",
      id: "tier-free",
      href: "#",
      priceMonthly: "Free",
      description:
        "All the components that are freely available on the website are free to use.",
      features: [
        "A growing library of awesome components",
        "React / Next.js / Tailwind CSS code",
        "Serves a wide variety of audience.",
        "MIT Licence. Personal or commercial projects.",
        "Contact over chat for support",
      ],
      featured: false,
      badge: " ",
      cta: "Browse Components",
      onClick: () => {
        router("/components");
      },
    },
    {
      name: "Custom Components",
      id: "tier-components-page",
      href: "#",
      priceMonthly: "$3499/mo",
      description:
        "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
      features: [
        "One component at a time",
        "React / Next.js / Tailwind CSS code",
        "Design + Development",
        "Unlimited Revisions",
        "24-hour support response time",
        "Private communication channel",
        "4-7 days turnaround time",
        "Pause or cancel anytime",
      ],
      featured: false,
      badge: "pause or cancel anytime",
      cta: "Buy Now",
      onClick: () => {
        console.log("put logic here");
      },
    },
    {
      name: "Pages",
      id: "tier-pages-page",
      href: "#",
      priceMonthly: "$4995/mo",
      description:
        "Best for early-stage startups and businesses that need a marketing site and ongoing developmental work.",
      features: [
        "One request / page at a time",
        "React / Next.js / Tailwind CSS code",
        "Design + Development",
        "Unlimited Revisions",
        "CMS integration",
        "Search Engine Optimization",
        "24-hour support response time",
        "Private communication channel",
        "7-10 days turnaround time",
        "Pause or cancel anytime",
      ],
      featured: true,
      badge: "pause or cancel anytime",
      cta: "Buy Now",
      onClick: () => {
        // OLD
        // router.push("https://buy.stripe.com/8wM6qG4RC19n16U8wx");
        // router.push("https://buy.stripe.com/aEUcP4ck4aJX6re7sx");
        console.log("put logic here");
      },
    },
    // {
    //   name: "Single Page Website",
    //   id: "tier-single-page",
    //   href: "#",
    //   priceMonthly: "$4995",
    //   description:
    //     "Best for early-stage startups and personal websites that need a landing page. Comes with a CMS integration.",
    //   features: [
    //     "One-page landing page website",
    //     "Design + Development",
    //     "CMS integration",
    //     "Search Engine Optimization",
    //     "24-hour support response time",
    //     "Private communication channel",
    //     "Unlimited Revisions",
    //     "2-3 weeks delivery time",
    //   ],
    //   featured: false,
    //   badge: "starts at",
    //   cta: "Get started today",
    //   onClick: () => {
    // console.log('put logic here');
    //   },
    // },
    {
      name: "Multi Page Website",
      id: "tier-multi-page",
      href: "#",
      priceMonthly: "$12,499",
      description:
        "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
      features: [
        "Multi-page landing page website",
        "Web Apps and SaaS Development",
        "AI Apps development",
        "Design + Development",
        "24-hour support response time",
        "Private communication channel",
        "Unlimited Revisions",
        "Negotiable delivery time",
      ],
      featured: false,
      badge: "starts at",
      cta: "Contact Us",
      onClick: () => {
        console.log("put logic here");
      },
    },
  ];
  return (
    <div className="relative isolate bg-transparent px-6 py-0 sm:py-10 lg:px-8">
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h1
          className={cn(
            "mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          )}
        >
          Need custom components or websites? <br />
          <Highlight className="dark:text-white">
            We&apos;ve got you covered
          </Highlight>
        </h1>
      </div>
      <p className="mx-auto mt-6 mb-20 max-w-lg text-center text-lg leading-8 text-gray-600 dark:text-gray-200">
        From custom components to complete website tailored to your needs.
        Simple pricing, no hidden fees.
      </p>

      <div className="mx-auto  grid max-w-[83rem] grid-cols-1 gap-4 items-center  md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={cn(
              tier.featured
                ? "relative bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]  shadow-2xl"
                : "dark:bg-black dark:border-white/[0.2] bg-white/60 ",
              "rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between"
            )}
          >
            <div className="">
              <h3
                id={tier.id}
                className={cn(
                  tier.featured ? "text-emerald-400" : "text-emerald-600",
                  "text-base font-semibold leading-7"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 gap-x-2">
                <span
                  className={cn(
                    tier.featured
                      ? "text-gray-400 dark:text-white"
                      : "dark:text-white text-gray-400",
                    "text-sm block h-6 dark:text-white"
                  )}
                >
                  {tier.badge ? tier.badge : "starts at"}
                </span>
                <span
                  className={cn(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-4xl font-bold tracking-tight dark:text-white"
                  )}
                >
                  {tier.priceMonthly}
                </span>
              </p>
              <p
                className={cn(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={cn(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <IconCircleCheckFilled
                      className={cn(
                        tier.featured ? "text-emerald-400" : "text-emerald-600",
                        "h-6 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button
                onClick={tier.onClick}
                aria-describedby={tier.id}
                className={cn(
                  tier.featured
                    ? "bg-emerald-500 text-white shadow-sm hover:bg-emerald-400 focus-visible:outline-emerald-500"
                    : "text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600",
                  "mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                )}
              >
                {tier.cta}
              </button>
              <button
                onClick={() => {
                  console.log("put logic here");
                }}
                className={cn(
                  "text-xs text-neutral-500 mt-2 text-left",
                  tier.featured && "text-neutral-200"
                )}
              >
                Questions?
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
