import Link from 'next/link';
import Image from 'next/image';

export default function Graduation() {
  return (
    <main className="min-h-screen py-8">
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="text-[#8651d6] hover:underline">← Back to Home</Link>
          </div>
          <h1 className="text-4xl mb-6">NOVA Graduation 2025</h1>
          <div className="border-b border-gray-200 w-full mb-8"></div>
          
          <div className="space-y-8">
            <p className="text-gray-700 text-lg mb-8">
              Graduated from Northern Virginia Community College with an Associate of Science in Computer Science.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Grad.png"
                  alt="Graduation Photo 1"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Grad2.png"
                  alt="Graduation Photo 2"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 