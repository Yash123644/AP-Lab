import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - AP Lab",
  description: "Privacy Policy for users of the AP Lab platform.",
};

export default function PrivacyPage() {
  return (
    <main className="relative z-0 min-h-screen selection:bg-medical-teal selection:text-white flex flex-col overflow-hidden bg-[#020202]">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202] to-[#020202]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,2,0.8)_100%)]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.8]" />
      </div>

      <Navbar />

      <div className="flex-1 max-w-4xl mx-auto pt-32 pb-24 px-6 relative z-10 w-full">
        <h1 className="font-instrument text-5xl md:text-7xl text-white mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-white/70 font-inter">
          <p className="text-sm font-mono text-white/40">Last Updated: June 19, 2026</p>
          
          <p>
            At AP Lab, accessible from theaplab.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by AP Lab and how we use it.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white mt-6">1. Log Files</h2>
            <p>
              AP Lab follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white mt-6">2. Cookies and Web Beacons</h2>
            <p>
              Like any other website, AP Lab uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white mt-6">3. Firebase & Authentication</h2>
            <p>
              We utilize Firebase Authentication to secure your accounts. During sign-in (via Google, GitHub, or X), we collect basic user profile information such as your name, profile image, and email address (if provided) to personalize your experience. We do not store or share your social media credentials.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white mt-6">4. How We Use Your Information</h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website;</li>
              <li>Improve, personalize, and expand our website;</li>
              <li>Understand and analyze how you use our website;</li>
              <li>Develop new products, services, features, and functionality;</li>
              <li>Communicate with you for customer service or updates.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white mt-6">5. Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
