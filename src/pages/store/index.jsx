import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useSetRecoilState } from 'recoil';

import useStore from '@/hooks/useStore';

import StoreModal from '@/components/Modal';

import { selectedStore } from '@/recoil';

function Store() {
  const { stores, show, setShow } = useStore();
  const setStore = useSetRecoilState(selectedStore);

  return (
    <>
      <Container style={{ padding: 40 }}>
        <Row
          style={{
            display: 'flex',
            margin: 'auto',
          }}
        >
          {stores.map((store) => {
            return (
              <Col
                key={store.id}
                style={{ padding: 10 }}
                md={3}
                onClick={() => {
                  setShow(true);
                  setStore(store);
                }}
              >
                <Card
                  style={{
                    width: '15rem',
                    border: 'none',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={store.image}
                    style={{
                      borderRadius: 10,
                      cursor: 'pointer',
                    }}
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      {show && <StoreModal />}
    </>
  );
}

export default Store;
