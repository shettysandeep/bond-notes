import Image from 'next/image';
import Link from 'next/link';

export default function AboutPanel() {
  return (
    <aside className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
      {/* Profile Image */}
      <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-indigo-500">
        <Image
          src="/profile.jpg" // Place your photo in the public/ folder
          alt="Author avatar"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Author Bio */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Jane Doe</h3>
        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-3">Tech Writer & Dev</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          I write about modern JavaScript, web development frameworks, and building scalable full-stack applications.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 text-zinc-500 dark:text-zinc-400">
        <Link href="https://github.com" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          GitHub
        </Link>
        <Link href="https://twitter.com" className="hover:text-indigo-500 transition-colors">
          Twitter
        </Link>
        <Link href="https://linkedin.com" className="hover:text-indigo-600 transition-colors">
          LinkedIn
        </Link>
      </div>
    </aside>
  );
}
