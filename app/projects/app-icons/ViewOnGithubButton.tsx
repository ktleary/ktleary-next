import {GitHubButton} from '../buttons';
import Link from 'next/link';

const ViewOnGithubButton = ({url, fill}: {url: string; fill: string}) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="rounded-xl border border-gray-500 p-2 m-4 w-fit flex flex-row justify-center items-center"
      rel="noopener noreferrer"
      aria-label="View on Web">
      <GitHubButton className="w-6" />
      <div className="ml-2">GitHub</div>
    </Link>
  );
};

export default ViewOnGithubButton;
