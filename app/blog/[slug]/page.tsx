import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
//import posts from '../../../data/posts.json';
import { getSortedPostsData } from '@/data/extract';
//import markdownToHtml from '@/lib/markdownToHtml';  

const posts = getSortedPostsData();

interface Props {
  params: Promise<{ slug: string }>;
}


export default async function PostPage({ params }: Props) {
  const resolvedParams = await params;
  const [ [slug, value] ]  = Object.entries(resolvedParams);
  //console.log(await params);
  //console.log(resolvedParams)
  //console.log({ slug })
  const post = posts.find((p) => p.slug === value);
  if (!post) {
    notFound();
  }

  //const mycontent = await markdownToHtml(post.content);
  //console.log(mycontent)
  
  return (
    <main className="font-title max-w-2xl mx-auto p-6">
      <Link href="/" className="text-blue-500 hover:underline inline-block mb-8">&larr; Back to Home</Link>
      <article>
        <header className="mb-6">
          <span className="text-sm text-gray-400">{post.date}</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-1">{post.title}</h1>
        </header>
        <div className="text-lg font-sans prose text-gray-700 leading-relaxed">
         <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}

