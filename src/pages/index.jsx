import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 style={{ fontSize: '100px', color: 'green', marginBottom: 30 }}>
        Homepage
      </h1>
      <h2>
        <Link href="/about">ABOUT</Link>과 <Link href="/store">STORE</Link>
        메뉴를 눌러서 이용해보세요
      </h2>
    </>
  );
}
