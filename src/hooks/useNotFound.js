import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function useNotFound() {
  const [seconds, setSeconds] = useState(5);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds === 0) {
      router.push('/');
    }
  }, [seconds]);

  return {
    seconds,
  };
}

export default useNotFound;
