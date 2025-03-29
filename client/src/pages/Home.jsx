import { useState } from 'react';

function Home({ setPoems, poems }) {
  const [poem, setPoem] = useState('');
  const words = [
    'banana', 'galaxy', 'whisper', 'chaos', 'flamingo', 'quantum',
    'laughter', 'void', 'pickle', 'symphony', 'moonlight', 'mystery',
    'electric', 'bubble', 'shadow', 'jellybean', 'dream', 'nebula',
    'tornado', 'marshmallow'
  ];

  const generatePoem = () => {
    let newPoem = '';
    for (let i = 0; i < 20; i++) {
      newPoem += words[Math.floor(Math.random() * words.length)] + ' ';
      if ((i + 1) % 5 === 0) newPoem += '\n';
    }
    const finalizedPoem = newPoem.trim() + '.';
    setPoem(finalizedPoem);
    setPoems([...poems, finalizedPoem]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>The Accidental Poetry Generator</h1>
      <p style={styles.description}>
        Click the button below to generate a completely random poem.
      </p>
      <button style={styles.button} onClick={generatePoem}>Generate Poem</button>
      {poem && <pre style={styles.poem}>{poem}</pre>}
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' },
  title: { fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' },
  description: { fontSize: '1rem', color: '#555', marginBottom: '20px' },
  button: {
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  poem: { fontSize: '1.2rem', marginTop: '20px', whiteSpace: 'pre-wrap' }
};

export default Home;
