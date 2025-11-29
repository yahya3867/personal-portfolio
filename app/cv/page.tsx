import Link from 'next/link';

export default function CV() {
  const sections = [
    { id: 'basics', label: 'Basics' },
    { id: 'education', label: 'Education' },
    { id: 'publications', label: 'Publications' },
    { id: 'work', label: 'Work Experience' },
    { id: 'research', label: 'Research' },
    { id: 'interests', label: 'Research Interests' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-[#8651d6] hover:underline">← Back to Home</Link>
        </div>
        <div className="flex gap-8">
          {/* Side Navigation */}
          <nav className="w-48 flex-shrink-0 hidden md:block">
            <div className="sticky top-8">
              <ul className="space-y-2 text-sm">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block py-2 px-4 text-gray-600 hover:text-[#8651d6] hover:bg-gray-50 rounded"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl">CV</h1>
              <Link href="/YahyaMasri_CV.pdf" className="text-[#8651d6] hover:opacity-80">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M16,18H8v-2h8V18z M16,14H8v-2h8V14z M13,9V3.5 L18.5,9H13z"/>
                </svg>
              </Link>
            </div>

            {/* Basics */}
            <section id="basics" className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Basics</h2>
              <div className="space-y-3">
                <div className="flex">
                  <span className="w-24 font-medium text-gray-600">Name</span>
                  <span className="flex-1">Yahya Masri</span>
                </div>
                <div className="flex">
                  <span className="w-24 font-medium text-gray-600">Email</span>
                  <span className="flex-1">
                    <a href="mailto:yahya.masri@yahoo.com" className="text-[#8651d6] hover:underline">yahya.masri@yahoo.com</a>
                  </span>
                </div>
                <div className="flex">
                  <span className="w-24 font-medium text-gray-600">Location</span>
                  <span className="flex-1">Northern Virginia</span>
                </div>
                <div className="flex">
                  <span className="w-24 font-medium text-gray-600">Links</span>
                  <span className="flex-1">
                    <a href="https://github.com/yahya3867" className="text-[#8651d6] hover:underline">GitHub</a>{' · '}
                    <a href="https://www.linkedin.com/in/yahya-masri" className="text-[#8651d6] hover:underline">LinkedIn</a>{' · '}
                    <a href="https://scholar.google.com/citations?user=9H1ryOAAAAAJ&hl=en" className="text-[#8651d6] hover:underline">Google Scholar</a>{' · '}
                    <a href="https://orcid.org/0009-0005-7053-7844" className="text-[#8651d6] hover:underline">ORCID</a>
                  </span>
                </div>
              </div>
            </section>

            {/* Education */}
            <section id="education" className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Education</h2>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-medium">Bachelor of Science in Computer Science</h3>
                      <p className="text-gray-600">George Mason University, Fairfax, VA</p>
                    </div>
                    <span className="text-gray-500 whitespace-nowrap">2025 - Present</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-medium">Associate of Science in Computer Science</h3>
                      <p className="text-gray-600">Northern Virginia Community College, Annandale, VA</p>
                    </div>
                    <span className="text-gray-500 whitespace-nowrap">2023 - 2025</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Publications */}
            <section id="publications" className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Publications</h2>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium mb-2">Automating Map-Making through Enhanced Geographic Information Extraction Using Retrieval-Augmented Generation with Open-source Large Language Models</h3>
                  <p className="text-gray-600 italic">Currently Drafting, 2025</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium mb-2">Comparative Analysis of BERT and GPT for Classifying Conflict News with Sudan Conflict as an Example</h3>
                  <p className="text-gray-600 italic">Preparing to Submit, 2025</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium mb-2">Optimizing context-based location extraction by tuning open-source LLMs with RAG</h3>
                  <p className="text-gray-600 italic">IJDE International Journal of Digital Earth, Under Review, 2025</p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section id="work" className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Work Experience</h2>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-medium">Undergraduate Research Assistant</h3>
                      <p className="text-gray-600">NSF Spatiotemporal Innovation Center, George Mason University</p>
                    </div>
                    <span className="text-gray-500 whitespace-nowrap">2024 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                    <li>Developed and evaluated ML pipelines using BERT fine-tuning and GPT with RAG, ICL, and hyperparameter tuning to classify conflict incidents, achieving 91% accuracy in single-label classification.</li>
                    <li>Extracted conflict locations from news articles using RAG, CoT, and few-shot LLM prompting, achieving {'>'} 90% F1 in context-aware information retrieval.</li>
                    <li>Develop end-to-end pipelines integrating large language models, QGIS, Neo4j, and Streamlit for automated conflict mapping and analysis.</li>
                    <li>Installed and maintained Linux-based operating systems (Red Hat 8, Rocky Linux, Ubuntu) across 7 rack-mounted server units to support high-availability computational workflows.</li>
                    <li>Designed and implemented a 3D data center digital twin using NVIDIA Omniverse, visualizing real-time server metrics for intuitive infrastructure monitoring.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Research */}
            <section id="research" className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Research</h2>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">Data Center Digital Twin Development</h3>
                    <span className="text-gray-500 whitespace-nowrap">Summer 2025</span>
                  </div>
                  <p className="text-gray-700">Developing real-time monitoring and visualization systems using Prometheus and Grafana for comprehensive data center performance analysis.</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">Multi-Agent Conflict Mapping System</h3>
                    <span className="text-gray-500 whitespace-nowrap">Summer 2025</span>
                  </div>
                  <p className="text-gray-700">Automating conflict mapping via multi-agent system using LLMs, Neo4j, and PyQGIS.</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">ML Pipeline Development</h3>
                    <span className="text-gray-500 whitespace-nowrap">Spring 2025</span>
                  </div>
                  <p className="text-gray-700">Contributed to machine learning pipelines for classification using BERT, GPT, FAISS, and OpenAI APIs.</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">Location Extraction Research</h3>
                    <span className="text-gray-500 whitespace-nowrap">Fall 2024</span>
                  </div>
                  <p className="text-gray-700">Researched context-specific location extraction for conflict articles using LLMs and Retrieval-Augmented Generation.</p>
                </div>
              </div>
            </section>

            {/* Interests */}
            <section id="interests" className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Research Interests</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Large Language Models</li>
                <li>Inference Optimization</li>
                <li>Prompt Engineering</li>
                <li>Geographic Information Systems</li>
              </ul>
            </section>

            {/* Projects */}
            <section id="projects" className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Projects</h2>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium mb-2">
                    <a href="https://github.com/yahya3867/BlueTemp" className="text-[#8651d6] hover:underline">BlueTemp</a>
                  </h3>
                  <p className="text-gray-700">AI platform supporting marine environments by predicting sea water temperatures. From forecasting hurricanes to saving coral reefs.</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium mb-2">
                    <a href="https://github.com/yahya3867/Crushor" className="text-[#8651d6] hover:underline">Crushor</a>
                  </h3>
                  <p className="text-gray-700">A retro-style platform-based game with wall-jumping, dashing, and stomping mechanics.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 