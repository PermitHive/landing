"use client";

import Link from "next/link";
import { CheckCircle, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpringCards } from "@/components/features";
import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text";
import { DrawCircleText } from "@/components/circle_cta";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="PermitHive Logo"
              width={32}
              height={32}
            />
            <span className="font-bold text-xl">PermitHive</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="mailto:pranithmolakalapalli@gmail.com"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <button
            onClick={() => {
              window.open("https://app.permithive.com", "_blank");
            }}
            className="bg-[#f9dc5c] font-medium text-black hover:bg-[#f9dc5c]/90 px-4 py-2 rounded-md"
          >
            Get Started
          </button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Instant Compliance Checks with{" "}
                  <SparklesText text="PermitHive" />
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Leverage our national database of municipalities to gain
                  instant and accurate insight into legal, permit, and zoning
                  requirements for your signage or construction project.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-[#f9dc5c] text-lg text-black hover:bg-[#f9dc5c]/90 px-4 py-2 rounded-md"
                onClick={() => {
                  window.open("https://app.permithive.com", "_blank");
                }}
              >
                Start Now
              </Button>
              {/* <div className="w-full mt-8 flex justify-center">
                <div className="relative w-full max-w-[1200px] aspect-[16/9]">
                  <Image
                    src="/dashboard-preview.png"
                    alt="PermitHive Dashboard Preview"
                    fill
                    className="object-cover rounded-lg border shadow-2xl"
                    priority
                  />
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
              Key Features
            </h2>
            <SpringCards />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <DrawCircleText />
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join PermitHive today and experience the future of code
                  compliance.
                </p>
              </div>
              <Button
                size={"lg"}
                className="bg-[#f9dc5c] text-lg text-black hover:bg-[#f9dc5c]/90 px-4 py-2 rounded-md"
                onClick={() => {
                  window.open("https://app.permithive.com", "_blank");
                }}
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="PermitHive Logo"
                width={32}
                height={32}
              />
              <span className="font-bold">PermitHive</span>
            </div>
            <nav className="flex gap-4">
              <Link
                href="#"
                className="text-sm hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline underline-offset-4"
              >
                Terms of Service
              </Link>
              <Link
                href="mailto:pranithmolakalapalli@gmail.com"
                className="text-sm hover:underline underline-offset-4"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
