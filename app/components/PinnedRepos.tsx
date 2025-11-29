import { useEffect, useState } from 'react';

interface PinnedRepo {
  name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
  };
}

export default function PinnedRepos() {
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/yahya3867/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const repos = await response.json();
        // Filter for pinned repositories (those with topics containing 'pinned')
        const pinned = repos.filter((repo: any) => 
          repo.topics?.includes('pinned')
        );
        setPinnedRepos(pinned);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#8651d6]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center min-h-[200px] flex items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {pinnedRepos.map((repo) => (
        <a
          key={repo.name}
          href={repo.html_url}
          className="block hover:opacity-90 transition-opacity"
        >
          <picture>
            <source
              srcSet={`https://github-readme-stats.vercel.app/api/pin/?username=${repo.owner.login}&repo=${repo.name}&theme=jolly`}
              media="(prefers-color-scheme: dark)"
            />
            <source
              srcSet={`https://github-readme-stats.vercel.app/api/pin/?username=${repo.owner.login}&repo=${repo.name}&theme=jolly`}
              media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/pin/?username=${repo.owner.login}&repo=${repo.name}&theme=jolly`}
              alt={`${repo.name} Repository`}
              className="w-full"
            />
          </picture>
        </a>
      ))}
    </div>
  );
} 