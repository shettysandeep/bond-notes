import fs from "fs";
import path from "path";
import matter from "gray-matter";

//const fs = require('fs');
//const path = require('path');

// Target your local posts folder

const postsDirectory = path.join(process.cwd(), "posts");
console.log(postsDirectory)

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const content = matterResult.content;
    // Combine the data with the id
    return {
      slug,
      ...matterResult.data, // Contains title, date, tags, etc.
      content,
    };
  });

  // Sort posts by date & filter by news and learn. returning array!
  return [
    allPostsData
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .filter((a) => a.draft === "false" ), //&& a.topic === "learn"),
  ];
}

/*
function collectBlogPosts() {
    const files = fs.readdirSync(postsDirectory);
    
    return files.map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        
        // Return structured data for your blog
        return {
            slug: filename.replace('.md', ''),
            content: fileContents,
            date: new Date().toISOString() // Or extract from frontmatter/stats
        };
    });
}

const blogPosts = collectBlogPosts();
console.log(blogPosts);
*/
