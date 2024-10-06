import cx from 'classnames';
import GitHubCalendar from 'react-github-calendar';

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

export default function Home() {
  return (
    <div
      className={cx(
        'flex',
        'justify-center',
        'relative',
        'overflow-x-auto',
        'px-4',
        'py-2',
      )}
    >
      <GitHubCalendar username={username} />
    </div>
  );
}
