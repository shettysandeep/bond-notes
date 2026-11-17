import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default async function About() {
  return (
    <main className="font-title max-w-2xl mx-auto p-6">
      <Link
        href="/"
        className="text-blue-501 hover:underline inline-block mb-8"
      >
        &larr; Back to Home
      </Link>
      <article>
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900 mt-1">
            Comment or Connect!
          </h1>
        </header>
        <div className="font-sans prose text-gray-700 leading-relaxed">
          <p>
            Thank you for your attention. If you liked any of the posts or have
            a comment/feedback please message via
            <Link href="https://linkedin.com/in/sandeepshetty"> LinkedIn</Link>.
          </p>
          <p>
            Here I share thoughts and notes on the Indian debt market in a
            simple, accessible way as I read and learn about it.
          </p>
          <p>I'm an applied economist and a data analytics consultant.</p>
        </div>
      </article>
    </main>
  );
}
