"use client";

import React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HirePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Success
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        position: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      });
    }, 5000);
  };

  const talentCategories = [
    {
      title: "Blockchain Developers",
      skills: [
        "Smart Contract Development",
        "dApp Development",
        "Web3 Integration",
        "Solidity",
        "Rust",
      ],
      icon: "/hire/developer.png",
    },
    {
      title: "UI/UX Designers",
      skills: [
        "Web Design",
        "Mobile App Design",
        "User Research",
        "Prototyping",
        "Design Systems",
      ],
      icon: "/hire/designer.png",
    },
    {
      title: "Project Managers",
      skills: [
        "Agile Methodology",
        "Blockchain Project Management",
        "Team Coordination",
        "Risk Management",
      ],
      icon: "/hire/project manager.png",
    },
    {
      title: "Marketing Specialists",
      skills: [
        "Web3 Marketing",
        "Community Management",
        "Content Creation",
        "Social Media Strategy",
      ],
      icon: "/hire/marketing specialist.png",
    },
  ];

  const faqs = [
    {
      question: "What types of talent can I hire through Base Philippines?",
      answer:
        "Base Philippines offers access to a diverse pool of Web3 talent including blockchain developers, UI/UX designers, project managers, marketing specialists, and community managers. Our contributors are experienced in various blockchain technologies with a focus on Base ecosystem.",
    },
    {
      question: "How does the hiring process work?",
      answer:
        "After submitting your request through our form, our team will review your requirements and match you with suitable talent from our community. We'll arrange interviews with selected candidates, and once you've made your choice, we'll help facilitate the engagement process.",
    },
    {
      question: "What are the typical engagement models?",
      answer:
        "We offer flexible engagement models including full-time employment, part-time contracts, project-based work, and consulting arrangements. We can adapt to your specific needs and project requirements.",
    },
    {
      question: "How are rates determined?",
      answer:
        "Rates vary based on the skill level, experience, and engagement model. We work with you to find talent that fits your budget while ensuring fair compensation for our contributors. We can provide rate ranges once we understand your specific requirements.",
    },
    {
      question: "How long does the hiring process typically take?",
      answer:
        "The timeline varies depending on your requirements and availability of suitable talent. Generally, we can provide initial candidate recommendations within 1-2 weeks of receiving your request. The entire process from submission to onboarding typically takes 3-4 weeks.",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hire Web3 Talent from Base Philippines
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Access a curated network of skilled blockchain developers,
              designers, and project managers ready to bring your Web3 vision to
              life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]
                px-8 py-6 rounded-full text-lg"
                onClick={() =>
                  document
                    .getElementById("hire-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Submit a Request <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Talent Categories */}
      <section className="py-16 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Talent Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {talentCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <Image
                    src={category.icon || "/placeholder.svg?height=64&width=64"}
                    alt={category.title}
                    width={64}
                    height={64}
                    className="mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the hire page content... */}
      {/* Hiring Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Hiring Process
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Steps */}
              {[
                {
                  number: "01",
                  title: "Submit Request",
                  description:
                    "Fill out our form with your project details and talent requirements.",
                },
                {
                  number: "02",
                  title: "Talent Matching",
                  description:
                    "We'll match you with the best candidates from our community based on your needs.",
                },
                {
                  number: "03",
                  title: "Interview Process",
                  description:
                    "Meet with selected candidates to find the perfect fit for your team.",
                },
                {
                  number: "04",
                  title: "Engagement",
                  description:
                    "Finalize terms and begin working with your new team member(s).",
                },
              ].map((step, index) => (
                <div key={step.number} className="flex mb-16 last:mb-0">
                  <div className="mr-6">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    {index < 3 && (
                      <div className="h-16 w-0.5 bg-blue-600/50 mx-auto my-2"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hire Form */}
      <section id="hire-form" className="py-16 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Submit Your Request
            </h2>
            <p className="text-gray-300 text-center mb-12">
              Tell us about your project and talent needs, and we&#39;ll connect
              you with the right people.
            </p>

            {isSubmitted ? (
              <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
                <p className="text-gray-300">
                  Thank you for your interest. Our team will review your request
                  and get back to you within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/30 border-gray-700 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/30 border-gray-700 text-white"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Company Name *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/30 border-gray-700 text-white"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="position"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Position *
                    </label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/30 border-gray-700 text-white"
                      placeholder="Your role"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Type *
                    </label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) =>
                        handleSelectChange("projectType", value)
                      }
                    >
                      <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dapp">dApp Development</SelectItem>
                        <SelectItem value="smart-contract">
                          Smart Contract
                        </SelectItem>
                        <SelectItem value="web3-integration">
                          Web3 Integration
                        </SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium mb-2"
                    >
                      Budget Range
                    </label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        handleSelectChange("budget", value)
                      }
                    >
                      <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">
                          $10,000 - $25,000
                        </SelectItem>
                        <SelectItem value="25k-50k">
                          $25,000 - $50,000
                        </SelectItem>
                        <SelectItem value="50k-plus">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium mb-2"
                    >
                      Timeline
                    </label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) =>
                        handleSelectChange("timeline", value)
                      }
                    >
                      <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-than-1-month">
                          Less than 1 month
                        </SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-plus-months">6+ months</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium mb-2"
                  >
                    Project Description *
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white min-h-[150px]"
                    placeholder="Please describe your project, requirements, and the type of talent you're looking for..."
                  />
                </div>

                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/5"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50 text-left">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build with Base Philippines?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing number of companies leveraging our talent network
            to build innovative Web3 solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="/learn">
              <button
                className="w-fit px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
    hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              >
                <span className="text-sm sm:text-base lg:text-lg">
                  LEARN MORE ABOUT BASE
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
