import {GitHubButton} from '../buttons';
import Link from 'next/link';

// const GitHubIcon = styled(GitHubButton)`
//   color: rgba(255, 255, 255, 0.66);
//   height: 24px;
//   width: 24px;
// `;

// remove the blue outline from the link button

// const WebButton = styled.a`
//   background-color: #212121;
//   color: rgba(255, 255, 255, 0.87);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px 15px;
//   width: fit-content;
//   border-radius: 5px;
//   border: 1px solid rgba(255, 255, 255, 0.22);
//   text-decoration: none;
//   outline: none;
//   margin-left: 12px;

//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #1565c0;
//   }

//   svg {
//     margin-right: 8px;
//   }
// `;

const ViewOnGithubButton = ({url, fill}: {url: string; fill: string}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View on Web">
      <GitHubButton className={fill} />
      GitHub
    </Link>
  );
};

export default ViewOnGithubButton;
