import Link from 'next/link';
import React from 'react';

import useAbout from '@/hooks/useAbout';

import { techStacks, todos } from '@/recoil';

function About() {
  const { checks, handleChange } = useAbout();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ color: 'Purple', fontSize: '50px' }}>
        Welcome to AWESOME FOOD STORE
      </h1>
      <div
        style={{
          margin: '10px 0px 0px 100px',
        }}
      >
        <h2>Tech Stack</h2>
        <div style={{ marginBottom: 20 }}>
          {techStacks.map((tech, i) => {
            return <li key={i}>{tech}</li>;
          })}
        </div>
        <h2>{`TODO LIST (${checks.length} / ${todos.length} 완료)`}</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {todos.map((todo, i) => {
            return (
              <label key={i} htmlFor="">
                <input
                  type="checkbox"
                  onChange={(e) => handleChange(e.target.checked, todo)}
                  defaultChecked
                />
                &ensp;{`${todo}`}
              </label>
            );
          })}
          <Link href="http://localhost:3000/404">ex: 정의하지 않은 URL</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
