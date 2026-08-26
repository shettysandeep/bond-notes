import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';


export default async function about() {
  
  return (
    <main className="font-title max-w-2xl mx-auto p-6">
      <Link href="/" className="text-blue-500 hover:underline inline-block mb-8">&larr; Back to Home</Link>
      <article>
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900 mt-1">About me</h1>
        </header>
        <div className="font-sans prose text-gray-700 leading-relaxed">
         <ReactMarkdown>This should come from a page that is saved some where so we can edit that file to reflect here.</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}

