'use client';

import Link from 'next/link';
import PinnedRepos from '../components/PinnedRepos';

export default function Repositories() {
  return (
    <main className="min-h-screen py-8">
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="text-[#8651d6] hover:underline">← Back to Home</Link>
          </div>
          <h1 className="text-4xl mb-6">Repositories</h1>
          <div className="border-b border-gray-200 w-full mb-8"></div>

          <div className="flex flex-col gap-8">
            {/* GitHub Stats Section */}
            <section className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="w-full md:w-1/2">
                <picture>
                  <source
                    srcSet="https://github-readme-stats.vercel.app/api?username=yahya3867&show_icons=true&theme=jolly"
                    media="(prefers-color-scheme: dark)"
                  />
                  <source
                    srcSet="https://github-readme-stats.vercel.app/api?username=yahya3867&show_icons=true&theme=jolly"
                    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                  />
                  <img 
                    src="https://github-readme-stats.vercel.app/api?username=yahya3867&show_icons=true&theme=jolly" 
                    alt="GitHub Stats"
                    className="w-full"
                  />
                </picture>
              </div>
              <div className="w-full md:w-1/2">
                <picture>
                  <source
                    srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=yahya3867&layout=compact&theme=jolly"
                    media="(prefers-color-scheme: dark)"
                  />
                  <source
                    srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=yahya3867&layout=compact&theme=jolly"
                    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                  />
                  <img 
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=yahya3867&layout=compact&theme=jolly" 
                    alt="Top Languages"
                    className="w-full"
                  />
                </picture>
              </div>
            </section>

            {/* Contribution Graph */}
            <section className="w-full overflow-hidden rounded-lg shadow-sm">
              <picture>
                <source
                  srcSet="https://github-readme-streak-stats.herokuapp.com/?user=yahya3867&theme=jolly"
                  media="(prefers-color-scheme: dark)"
                />
                <source
                  srcSet="https://github-readme-streak-stats.herokuapp.com/?user=yahya3867&theme=jolly"
                  media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                />
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=yahya3867&theme=jolly" 
                  alt="GitHub Streak"
                  className="w-full"
                />
              </picture>
            </section>

            {/* Featured Repositories */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
              <PinnedRepos />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 
