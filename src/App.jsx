import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      {/* الرقم بتاعك فوق */}
      <div style={{ position: 'fixed', top: '10px', right: '10px', background: 'black', color: '#00ff00', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
        للاستلام تواصل: 01006527185
      </div>

      <h1 style={{ color: 'red', marginTop: '60px', fontSize: '40px' }}>VIP SPIN</h1>
      <p style={{ fontSize: '18px' }}>سجل بياناتك واضغط على العجلة</p>

      <div style={{ border: '2px solid red', padding: '30px', borderRadius: '20px', display: 'inline-block', background: '#f9f9f9' }}>
        <input
          type="text"
          placeholder="أدخل اسمك"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: 'block', margin: '15px auto', padding: '12px', width: '250px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input
          type="tel"
          placeholder="رقم الموبايل"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ display: 'block', margin: '15px auto', padding: '12px', width: '250px', borderRadius: '8px', border: '1px solid #ccc' }}
        />

        <div style={{ margin: '20px', fontSize: '60px' }}>🎰</div>

        <button
          onClick={() => alert('تم تسجيل بياناتك! صور الشاشة الآن وابعتها واتساب')}
          style={{ background: 'red', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '10px', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}
        >
          جرب حظك الآن!
        </button>
      </div>
    </div>
  );
}

export default App;