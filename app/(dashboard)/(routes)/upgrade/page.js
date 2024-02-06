import React from 'react';

function Upgrade() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '40px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2em',
    marginBottom: '10px',
    color: '#333',
  };

  const paragraphStyle = {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#666',
  };

  const socialLinkStyle = {
    margin: '10px',
    textDecoration: 'none',
    color: '#62f202',
    fontSize: '1.2em',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to my awesome App!</h1>
      <p style={paragraphStyle}>Created by Steven Savarin</p>
      <p style={paragraphStyle}>Upload, Save and easily Share your files in one place.</p>
      <div>
        {/* Enlaces a redes sociales */}
        <a href="https://www.linkedin.com/in/steven-savarin/" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Stevensavarin" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://stevensawarin.com/" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">Website</a>
      </div>
    </div>
  );
}

export default Upgrade;
