'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [showAllPapers, setShowAllPapers] = useState(false);

  const publications = [
    {
      id: 1,
      title: "Benchmarking Small and Reasoning Language Models on System Log Severity Classification",
      authors: "Yahya Masri, Emily Ma, Joseph Rogers, Zifu Wang, Chaowei Yang",
      venue: "Currently Drafting",
      year: "2025",
      selected: true,
      links: {
        pdf: null,
        bibtex: null,
        slides: null,
        poster: null,
        code: null
      },
      bibtex: `@article{masri2025benchmarking,
  title={Benchmarking Small and Reasoning Language Models on System Log Severity Classification},
  author={Masri, Yahya and Ma, Emily and Rogers, Joseph and Wang, Zifu and Yang, Chaowei},
  year={2025}
}`
    },
    {
      id: 2,
      title: "Automating Map-Making through Enhanced Geographic Information Extraction Using Retrieval-Augmented Generation with Open-source Large Language Models",
      authors: "Yahya Masri, Zifu Wang, Chaowei Yang",
      venue: "Currently Drafting",
      year: "2025",
      selected: true,
      links: {
        pdf: null,
        bibtex: null,
        slides: null,
        poster: null,
        code: null
      },
      bibtex: `@article{masri2025automating,
  title={Automating Map-Making through Enhanced Geographic Information Extraction Using Retrieval-Augmented Generation with Open-source Large Language Models},
  author={Masri, Yahya and Wang, Zifu and Yang, Chaowei},
  year={2025}
}`
    },
    {
      id: 2,
      title: "Optimizing context-based location extraction by tuning open-source LLMs with RAG",
      authors: "Zifu Wang, Yahya Masri, Anusha Srirenganathan Malarvizhi, Tayven Stover, Samir Ahmed, David Wong, Yongyao Jiang, Yun Li, Mathieu Bere, Daniel Rothbart, Dieter Pfoser, David Marshall, Chaowei Yang",
      venue: "IJDE International Journal of Digital Earth",
      year: "2025",
      selected: true,
      links: {
        pdf: "https://www.tandfonline.com/doi/pdf/10.1080/17538947.2025.2521786",
        bibtex: null,
        slides: null,
        poster: null,
        code: null
      },
      bibtex: `@article{wang2025optimizing,
  title={Optimizing context-based location extraction by tuning open-source LLMs with RAG},
  author={Wang, Zifu and Masri, Yahya and Malarvizhi, Anusha Srirenganathan and Stover, Tayven and Ahmed, Samir and Wong, David and Jiang, Yongyao and Li, Yun and Bere, Mathieu and Rothbart, Daniel and Pfoser, Dieter and Marshall, David and Yang, Chaowei},
  journal={International Journal of Digital Earth},
  year={2025},
  doi={10.1080/17538947.2025.2521786}
}`
    },
    {
      id: 3,
      title: "Comparative Analysis of BERT and GPT for Classifying Crisis News with Sudan Conflict as an Example",
      authors: "Yahya Masri, Zifu Wang, Anusha Srirenganathan Malarvizhi, Samir Ahmed, Tayven Stover, David W. S. Wong, Yongyao Jiang, Yun Li, Qian Liu, Mathieu Bere, Daniel Rothbart, Dieter Pfoser, Chaowei Yang",
      venue: "Algorithms",
      year: "2025",
      selected: true,
      links: {
        pdf: "https://www.mdpi.com/1999-4893/18/7/420",
        bibtex: null,
        slides: null,
        poster: null,
        code: null
      },
      bibtex: `@article{masri2025comparative,
  title={Comparative Analysis of BERT and GPT for Classifying Crisis News with Sudan Conflict as an Example},
  author={Masri, Yahya and Wang, Zifu and Malarvizhi, Anusha Srirenganathan and Ahmed, Samir and Stover, Tayven and Wong, David W. S. and Jiang, Yongyao and Li, Yun and Liu, Qian and Bere, Mathieu and Rothbart, Daniel and Pfoser, Dieter and Yang, Chaowei},
  journal={Algorithms},
  year={2025}
}`
    },
    {
      id: 5,
      title: "Digital Twin Framework for Real-Time Computing Infrastructure Monitoring",
      authors: "Yahya Masri, Zifu Wang, Chaowei Yang",
      venue: "Journal of Student Scholarly Research",
      year: "2025",
      selected: false,
      links: {
        pdf: "https://journals.gmu.edu/jssr/article/view/5353",
        bibtex: null,
        slides: null,
        poster: null,
        code: null
      },
      bibtex: `@article{masri2025digital,
  title={Digital Twin Framework for Real-Time Computing Infrastructure Monitoring},
  author={Masri, Yahya and Wang, Zifu and Yang, Chaowei},
  journal={Journal of Student Scholarly Research},
  year={2025}
}`
    },
    {
      id: 6,
      title: "Automated Conflict Mapping Digital Twin",
      authors: "Zifu Wang, Yahya Masri, et al.",
      venue: "AGU Fall Meeting 2024",
      year: "2024",
      selected: false,
      links: {
        pdf: "https://ui.adsabs.harvard.edu/abs/2024AGUFMIN23A2189W/abstract",
        bibtex: null,
        slides: null,
        poster: null,
        code: null
      },
      bibtex: `@inproceedings{wang2024automated,
  title={Automated Conflict Mapping Digital Twin},
  author={Wang, Zifu and Masri, Yahya and others},
  booktitle={AGU Fall Meeting 2024},
  year={2024}
}`
    }
  ];

  const displayedPublications = showAllPapers
    ? publications
    : publications.filter(p => p.selected);

  return (
    <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '2em 0' }}>
      {/* Fixed Left Sidebar */}
      <aside style={{
        width: '220px',
        flexShrink: 0,
        position: 'sticky',
        top: '2em',
        height: 'fit-content',
        paddingRight: '2em',
        paddingLeft: 0,
        fontSize: '0.935em'
      }}>
        {/* Portrait - Centered */}
        <div style={{
          marginBottom: '1.5em',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <div style={{ width: '200px', height: '200px', position: 'relative' }}>
            <Image
              src="/updatedpfp.png"
              alt="Yahya Masri"
              fill
              style={{ borderRadius: '50%', objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* Name and Title */}
        <div style={{ marginBottom: '1.5em' }}>
          <h3 style={{ margin: 0, marginBottom: '0.25em', fontSize: '1.1em' }}>Yahya Masri</h3>
          <p style={{ margin: 0, fontSize: '0.95em' }}>
            CS Junior @ <a href="https://www.gmu.edu/">George Mason University</a>
          </p>
        </div>

        {/* Contact Information */}
        <div style={{ fontSize: '0.9em', lineHeight: '1.8' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5em', marginBottom: '0.4em' }}>
            <span style={{ minWidth: '1.2em', color: '#000' }}>🔗</span>
            <a href="https://yahyamasri.com">yahyamasri.com</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5em', marginBottom: '1em' }}>
            <span style={{ minWidth: '1.2em', color: '#000' }}>✉️</span>
            <a href="mailto:yahya.masri@yahoo.com">yahya.masri@yahoo.com</a>
          </div>

          {/* Social Links - Vertical Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4em' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#000' }}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <a href="https://github.com/yahya3867">GitHub</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
              <svg width="16" height="16" fill="#0077B5" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <a href="https://www.linkedin.com/in/yahya-masri">LinkedIn</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#000' }}>
                <path d="M12 0L1 6v8c0 7.5 5 11.5 11 16 6-4.5 11-8.5 11-16V6L12 0zm-1 17l-4-4 1.4-1.4 2.6 2.6 6.6-6.6L19 9l-8 8z"/>
              </svg>
              <a href="https://scholar.google.com/citations?user=9H1ryOAAAAAJ&hl=en">Google Scholar</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#000' }}>
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 5.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947-.516 0-.947-.422-.947-.947 0-.516.431-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V8.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V8.416zm1.444 1.303v7.444h2.297c2.359 0 4.153-1.444 4.153-3.722 0-2.137-1.738-3.722-4.125-3.722h-2.325z"/>
              </svg>
              <a href="https://orcid.org/0009-0005-7053-7844">ORCID</a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Column */}
      <main style={{ flex: 1, minWidth: 0, fontSize: '0.95em', paddingRight: '1em' }}>
        {/* About Section */}
        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ fontSize: '1.2em' }}>About</h2>
          <div style={{ borderBottom: '1px solid #ddd', marginBottom: '1em' }}></div>
          <p>
            I'm a computer science junior at <a href="https://www.gmu.edu/">George Mason University</a>. I'm grateful to have been mentored by <a href="https://gis.harvard.edu/people/zifu-wang">Dr. Zifu Wang</a> and mentored by <a href="https://science.gmu.edu/directory/chaowei-yang">Dr. Chaowei Yang</a>. I'm part of the <a href="https://www.stcenter.net/">NSF Spatiotemporal Innovation Center</a> and earned an A.S. in Computer Science from <a href="https://www.nvcc.edu/">Northern Virginia Community College</a>.
          </p>
          <p>
            I research language models on domain-specific tasks, digital twins, and the intersection. Past related projects include location extraction by LLMs, LLM conflict text classification, automated mapping digital twin, benchmarking small and reasoning language models for system log severity classification, and data center digital twins for infrastructure monitoring and "what-if" scenarios.
          </p>
          <p style={{ marginTop: '1.5em' }}>
            <a href="https://github.com/yahya3867">GitHub</a> / <a href="https://scholar.google.com/citations?user=9H1ryOAAAAAJ&hl=en">Google Scholar</a> / <a href="https://www.linkedin.com/in/yahya-masri">LinkedIn</a> / <a href="https://orcid.org/0009-0005-7053-7844">ORCID</a>
          </p>
        </section>

        {/* News and Updates */}
        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ fontSize: '1.2em' }}>News and Updates</h2>
          <div style={{ borderBottom: '1px solid #ddd', marginBottom: '1em' }}></div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1em' }}>
              <strong>September 2025:</strong> Worked with an ASSIP fellow this summer, mentored and guided to publish <a href="https://journals.gmu.edu/jssr/article/view/5353">this abstract</a>.
            </li>
            <li style={{ marginBottom: '1em' }}>
              <strong>July 2025:</strong> Published my first author paper in <a href="https://www.mdpi.com/1999-4893/18/7/420">MDPI Algorithms</a> on comparative analysis of BERT and GPT for classifying crisis news with Sudan conflict as an example.
            </li>
            <li style={{ marginBottom: '1em' }}>
              <strong>July 2025:</strong> Published paper in <a href="https://www.tandfonline.com/doi/pdf/10.1080/17538947.2025.2521786">IJDE</a> on optimizing context-based location extraction using LLMs with RAG.
            </li>
            <li style={{ marginBottom: '1em' }}>
              <strong>May 2025:</strong> <a href="/graduation">Graduated</a> from NOVA with my A.S. in Computer Science.
            </li>
            <li style={{ marginBottom: '1em' }}>
              <strong>December 2024:</strong> Co-authored <a href="https://ui.adsabs.harvard.edu/abs/2024AGUFMIN23A2189W/abstract">poster</a> presented at AGU Fall Meeting 2024.
            </li>
            <li style={{ marginBottom: '1em' }}>
              <strong>November 2024:</strong> Presented updated findings on context-aware location extraction at the <a href="https://www.stcenter.net/">STC</a> IAB at GMU.
            </li>
            <li style={{ marginBottom: '1em' }}>
              <strong>July 2024:</strong> Presented findings on conflict incident classification using a BERT model at the <a href="https://stds2024.stcenter.net/">2024 International Symposium of Spatiotemporal Data Science</a>.
            </li>
            <li style={{ marginBottom: '1em' }}>
              <strong>May 2024:</strong> Presented findings on context-aware location extraction at the <a href="https://www.stcenter.net/">STC</a> IAB at Harvard.
            </li>
          </ul>
        </section>

        {/* Research */}
        <section style={{ marginBottom: '3em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h2 style={{ fontSize: '1.2em', margin: 0 }}>Research</h2>
            <button
              onClick={() => setShowAllPapers(!showAllPapers)}
              style={{
                background: 'none',
                border: 'none',
                color: '#005CAF',
                cursor: 'pointer',
                fontSize: '0.85em',
                textDecoration: 'underline',
                padding: 0
              }}
            >
              {showAllPapers ? 'Show Selected' : 'Show All'}
            </button>
          </div>
          <div style={{ borderBottom: '1px solid #ddd', marginBottom: '1em', marginTop: '0.5em' }}></div>

          <div>
            {displayedPublications.map((pub) => (
              <div key={pub.id} style={{ marginBottom: '2.5em' }}>
                <h3 style={{ marginTop: 0, marginBottom: '0.5em', fontWeight: 'normal', fontSize: '1em' }}>
                  {pub.title}
                </h3>
                <p style={{ margin: '0.25em 0', fontSize: '0.9em', color: '#555' }}>
                  {pub.authors.split('Yahya Masri').map((part, index, array) => (
                    <span key={index}>
                      {part}
                      {index < array.length - 1 && <span style={{ textDecoration: 'underline' }}>Yahya Masri</span>}
                    </span>
                  ))}
                </p>
                <p style={{ margin: '0.25em 0', fontSize: '0.9em', fontStyle: 'italic', color: '#555' }}>{pub.venue}, {pub.year}</p>

                {/* Links - BibTeX next to PDF */}
                <div style={{ marginTop: '0.5em', fontSize: '0.85em', display: 'flex', gap: '0.5em', alignItems: 'center' }}>
                  {pub.links.pdf && <a href={pub.links.pdf}>PDF</a>}
                  {pub.links.pdf && pub.links.bibtex && <span>/</span>}
                  {pub.links.bibtex && <a href={pub.links.bibtex}>BibTeX</a>}
                  {(pub.links.pdf || pub.links.bibtex) && pub.links.slides && <span>/</span>}
                  {pub.links.slides && <a href={pub.links.slides}>Slides</a>}
                  {(pub.links.pdf || pub.links.bibtex || pub.links.slides) && pub.links.poster && <span>/</span>}
                  {pub.links.poster && <a href={pub.links.poster}>Poster</a>}
                  {(pub.links.pdf || pub.links.bibtex || pub.links.slides || pub.links.poster) && pub.links.code && <span>/</span>}
                  {pub.links.code && <a href={pub.links.code}>Code</a>}
                  <span>/</span>
                  <details style={{ display: 'inline' }}>
                    <summary style={{ cursor: 'pointer', color: '#005CAF', display: 'inline', listStyle: 'none' }}>
                      BibTeX
                    </summary>
                    <pre style={{
                      marginTop: '0.5em',
                      padding: '1em',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '4px',
                      overflow: 'auto',
                      fontSize: '0.75em'
                    }}>
                      <code>{pub.bibtex}</code>
                    </pre>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching & Mentoring */}
        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ fontSize: '1.2em' }}>Teaching & Mentoring</h2>
          <div style={{ borderBottom: '1px solid #ddd', marginBottom: '1em' }}></div>
          <p>
            I am passionate about teaching and mentoring:
          </p>
          <ul>
            <li>ASSIP Fellow mentoring (Summer 2025)</li>
          </ul>
        </section>

        {/* Experience */}
        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ fontSize: '1.2em' }}>Experience</h2>
          <div style={{ borderBottom: '1px solid #ddd', marginBottom: '1em' }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
            <div>
              <div style={{ marginBottom: '0.25em' }}>
                <a href="https://www.gmu.edu/" style={{ fontWeight: 'bold' }}>George Mason University</a>
              </div>
              <p style={{ margin: '0.25em 0', fontSize: '0.9em', color: '#555' }}>Fairfax, VA</p>
              <p style={{ margin: '0.25em 0' }}>Undergraduate Research Assistant, <a href="https://www.stcenter.net/">NSF Spatiotemporal Innovation Center</a></p>
              <p style={{ margin: '0.25em 0', fontSize: '0.85em', color: '#666' }}>2024 – Present</p>
            </div>
          </div>
        </section>

        {/* Professional Service */}
        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ fontSize: '1.2em' }}>Professional Service</h2>
          <div style={{ borderBottom: '1px solid #ddd', marginBottom: '1em' }}></div>
          <ul>
            <li>Presented at <a href="https://ui.adsabs.harvard.edu/abs/2024AGUFMIN23A2189W/abstract">AGU Fall Meeting 2024</a></li>
            <li>Presented at the <a href="https://stds2024.stcenter.net/">2024 International Symposium of Spatiotemporal Data Science</a></li>
            <li>Presented at the <a href="https://www.stcenter.net/">NSF STC</a> IAB meetings (Harvard 2024, GMU 2024)</li>
          </ul>
        </section>

        {/* Miscellaneous */}
        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ fontSize: '1.2em' }}>☕ Miscellaneous</h2>
          <div style={{ borderBottom: '1px solid #ddd', marginBottom: '1em' }}></div>
          <p>
            <strong>Projects:</strong> <a href="https://github.com/tugawangjie/soccer-bot">SoccerBot</a> (LLM-powered soccer prediction and analysis app with RAG), <a href="https://github.com/yahya3867/BlueTemp">BlueTemp</a> (AI platform for predicting sea water temperatures), <a href="https://github.com/yahya3867/Crushor">Crushor</a> (retro platform game)
          </p>
        </section>
      </main>
    </div>
  );
}
