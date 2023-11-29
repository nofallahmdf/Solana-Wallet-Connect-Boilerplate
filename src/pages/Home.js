export default function Home() {
  return (
    <div className="main-content">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '50px',
          fontSize: '20px'
        }}
      >
        <h1
          style={{
            fontSize: '20px'
          }}
        >
          Welcome All
        </h1>
      </div>
      {/* Copyright footer */}
      <div
        style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          width: '100%',
          textAlign: 'center',
          fontSize: '12px',
          color: '#000',
          padding: '10px'
        }}
      >
        &copy; 2023. All rights reserved.
      </div>
    </div>
  );
}
