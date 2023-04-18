import useNotFound from '@/hooks/useNotFound';
import Link from 'next/link';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function NotFoundPage() {
  const { seconds } = useNotFound();

  return (
    <>
      <h1 style={{ color: 'red' }}>Page Not Found</h1>
      <Link href="/" style={{ marginBottom: 50 }}>
        Back to Home
      </Link>
      <div>{`${seconds}초 후 자동으로 홈페이지로 이동합니다`}</div>
      <ProgressBar
        variant="danger"
        now={20 * seconds}
        label={`${seconds}초`}
        style={{ width: '50%' }}
      />
    </>
  );
}
