import Link from 'next/link';

export default function Publications() {
  const publications = [
    {
      id: 1,
      title: "Automating Map-Making through Enhanced Geographic Information Extraction Using Retrieval-Augmented Generation with Open-source Large Language Models",
      status: "Currently Drafting",
      year: "2025"
    },
    {
      id: 2,
      title: "Comparative Analysis of BERT and GPT for Classifying Conflict News with Sudan Conflict as an Example",
      status: "Preparing to Submit",
      year: "2025"
    },
    {
      id: 3,
      title: "Optimizing context-based location extraction by tuning open-source LLMs with RAG",
      journal: "IJDE International Journal of Digital Earth",
      status: "Under Review",
      year: "2025"
    },
    {
      id: 4,
      title: "Automating Data Collection to Support Conflict Analysis: Scraping the Internet for Monitoring Hourly Conflict in Sudan",
      journal: "Cloud Computing and Data Science",
      status: "Published",
      year: "2026"
    }
  ];

  return (
    <main className="min-h-screen py-8">
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="text-[#8651d6] hover:underline">← Back to Home</Link>
          </div>
          <section>
            <h1 className="text-4xl mb-6">Publications</h1>
            <div className="border-b border-gray-200 w-full mb-8"></div>
            <div className="space-y-8">
              {publications.map(pub => (
                <div key={pub.id} className="border-b pb-6">
                  <h3 className="text-xl font-medium mb-2">
                    {pub.title}
                  </h3>
                  <div className="flex flex-col space-y-1">
                    {pub.journal && (
                      <p className="text-gray-600 italic">{pub.journal}, {pub.year}</p>
                    )}
                    <p className="text-[#8651d6]">{pub.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 