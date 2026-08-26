// app/page.tsx
import Link from 'next/link';
//import posts from '../data/posts.json';
import { getSortedPostsData } from '@/data/extract';
//import AboutPanel from './components/aboutpanel';


const posts = getSortedPostsData();
//console.log(posts)

export default function Home() {
  return (
    
    <main className="max-w-2xl mx-auto p-2">
      <header className="mb-12 text-center">
        <h1 className="font-title2 text-6xl font-extrabold text-red-400 tracking-tight"> the [bond space]</h1>
        <p className="text-gray-500 mt-2">notes on the indian bond market.</p>
      </header>

      <div className="font-title space-y-2">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-6">
            <span className="text-sm text-gray-900">{post.date}</span>
            <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors mt-1">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-blue-500 font-medium hover:underline">
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </main>


  
  );
}

