import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - AP Lab",
  description: "Terms and conditions for utilizing the AP Lab platform.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-white/70 font-inter">
          <p className="text-sm font-mono text-white/40">Last Updated: June 19, 2026</p>
          
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white mt-6">1. Agreement to Terms</h2>
            <p>
              By accessing or using the AP Lab website (theaplab.org) and platform, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are prohibited from using the platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white mt-6">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials (information or software) on AP Lab for personal, non-commercial transitory viewing only. Under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on the AP Lab platform;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white mt-6">3. Disclaimer</h2>
            <p>
              The materials on the AP Lab platform are provided on an 'as is' basis. AP Lab makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white mt-6">4. Limitations</h2>
            <p>
              In no event shall AP Lab or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the AP Lab platform, even if AP Lab or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white mt-6">5. Revisions and Errata</h2>
            <p>
              The materials appearing on the AP Lab platform could include technical, typographical, or photographic errors. AP Lab does not warrant that any of the materials on its website are accurate, complete, or current. AP Lab may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white mt-6">6. Governing Law</h2>
            <p>
              Any claim relating to the AP Lab platform shall be governed by the laws of the operating jurisdiction without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
