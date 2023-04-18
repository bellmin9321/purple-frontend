import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { modalState, storesState } from '@/recoil';

function useStore() {
  const [stores, setStores] = useRecoilState(storesState);
  const [show, setShow] = useRecoilState(modalState);

  useEffect(() => {
    const getStores = async () => {
      try {
        const { data } = await axios.get('http://localhost:9000/stores');

        setStores(data);
      } catch (err) {
        alert('스토어 정보를 얻지 못했습니다.');
      }
    };

    getStores();
  }, []);

  return {
    stores,
    show,
    setShow,
  };
}

export default useStore;
