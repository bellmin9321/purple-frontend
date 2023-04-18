import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import { useRecoilValue } from 'recoil';

import useStore from '@/hooks/useStore';

import { selectedStore } from '@/recoil';
import { insertDoubleEnter } from '@/util';

function StoreModal() {
  const { show, setShow } = useStore();
  const store = useRecoilValue(selectedStore);

  return (
    <Modal
      size="xl"
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="custom-modal"
      centered
    >
      <Modal.Body
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <img
          src={store.image}
          alt="store"
          style={{
            width: '25rem',
            height: '30rem',
            marginRight: 20,
          }}
        />
        <section>
          <Modal.Header closeButton style={{ border: 'none', fontSize: 25 }} />
          <Modal.Title id="custom-modal" style={{ marginBottom: 10 }}>
            {store.name}
          </Modal.Title>
          <p
            dangerouslySetInnerHTML={{
              __html: insertDoubleEnter(store.description),
            }}
          />
          {store.url && <Link href={store.url}>{store.url}</Link>}
        </section>
      </Modal.Body>
    </Modal>
  );
}

export default StoreModal;
