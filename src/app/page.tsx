import cx from 'classnames';
import GitHubCalendar from 'react-github-calendar';

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

export default function Home() {
  return (
    <div className={cx('grid', 'justify-center')}>
      <GitHubCalendar username={username} />
    </div>
  );
}
