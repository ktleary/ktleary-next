import Link from 'next/link';
import GitHubButton from './GithubButton';

const CodeButton = () => (
  <div className="flex justify-center">
    <Link
      href="https://github.com/ktleary"
      passHref
      target="_blank"
      rel="noopener noreferrer">
      <button
        className="bg-neutral-700 hover:bg-neutral-600 w-32 text-white font-bold  border-0 outline-none focus:outline-none rounded-full text-lg ml-4 flex justify-center items-center py-2"
        data-testid="enter-button">
        <GitHubButton className="inline-block w-6 h-6 mr-2" />
        Code
      </button>
    </Link>
  </div>
);

export default CodeButton;
