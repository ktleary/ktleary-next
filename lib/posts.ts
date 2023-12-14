import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

/*
file.data {Object}: the object created by parsing front-matter
file.content {String}: the input string, with matter stripped
file.excerpt {String}: an excerpt, if defined on the options
file.empty {String}: when the front-matter is "empty" (either all whitespace, nothing at all, or just comments and no data), the original string is set on this property. See #65 for details regarding use case.
file.isEmpty {Boolean}: true if front-matter is empty.
*/

/*
 content: '\n' +
    'A typical javascript developer might wake up and see a notification on their phone from LinkedIn (owned by Microsoft), get to work and open VSCode (developed by MS), use the command line to update their repo from Github (owned by Microsoft), they start coding, assisted by Github Copilot (developed in part by Microsoft). Then they need to add a new package so they npm install it from npm (owned by microsoft). As they code, they may use Typescript (developed and maintained by Microsoft). Finally, they may push code to Azure where their code is hosted ... then they may like to chat with the developer of the package on their discord channel (owned by MS). ',
  data: {
    title: 'Microsoft.js',
    description: 'How one tech giant came to dominate the Javascript ecosystem',
    date: 'Dec 14, 2019',
    slug: 'microsoft-js'
  },
  isEmpty: false,
  excerpt: '',
  orig: <Buffer 2d 2d 2d 0a 74 69 74 6c 65 3a 20 4d 69 63 72 6f 73 6f 66 74 2e 6a 73 0a 64 65 73 63 72 69 70 74 69 6f 6e 3a 20 48 6f 77 20 6f 6e 65 20 74 65 63 68 20 ... 751 more bytes>
}
*/

function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    console.log('matterResult', matterResult);

    return {
      id,
      slug: matterResult.data.slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      content: matterResult.content,
    };
  });

  return allPostsData.sort((a: any, b: any) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    if (dateA < dateB) {
      return 1;
    } else {
      return -1;
    }
  });
}

export default getSortedPostsData;
