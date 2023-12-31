import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 pt-24">
      <h1 className="text-2xl font-bold mb-2">About</h1>
      <p className="mb-2">
        With over 10 years of software development expertise, I help companies
        in finance, healthcare, and e-commerce build web applications that solve
        real problems. I&apos;m passionate about web standards and open-source,
        actively contributing to the
        <Link href="https://www.w3.org/community/schemaorg/">
          W3C schema.org Community Group
        </Link>
        .
      </p>
      <p className="mb-2">
        On the front-end, I am currently writing in React and have lead projects
        in Angular, as well as enterprise upgrades from legacy codebases. On the
        back-end, I typically use Node.js and Python.
      </p>
      <p className="mb-2">
        My roots are in writing Javascript and database applications, building a
        successful e-learning company, DigitalMed. I am a graduate of Skidmore
        College and a native of Greater Boston, though I am now based out of New
        York City and my work has brought me far and wide recently.
      </p>
      <p className="mb-2">
        When I am not working, I enjoy{' '}
        <Link href="https://www.allrecipes.com/recipe/142488/amazing-spicy-grilled-shrimp/">
          cooking
        </Link>
        , playing acoustic guitar, showing my Scrabble foo, and adding to a
        burgeoning <Link href="https://zettelkasten.de/">zettelkasten</Link>.
      </p>
      <p className="mb-2">Thanks for visiting.</p>

      <p>Kevin</p>
    </div>
  );
};

export default AboutPage;
