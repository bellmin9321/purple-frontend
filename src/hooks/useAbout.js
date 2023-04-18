import { useState } from 'react';

import { todos } from '@/recoil';

function useAbout() {
  const [checks, setChecks] = useState(todos);

  const handleChange = (checked, todo) => {
    if (checked) {
      setChecks([...checks, todo]);
    } else {
      setChecks(checks.filter((check) => check !== todo));
    }
  };

  return {
    checks,
    handleChange,
  };
}

export default useAbout;
