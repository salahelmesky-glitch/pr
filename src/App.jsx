import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleStart = () => {
    if (!name || !phone) {
      alert("من فضلك أدخل الاسم والرقم أولاً");
      return;
    }
    alert("تم تسجيل بياناتك بنجاح! صور الشاشة الآن وابعتها واتساب للاستلام.");
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <div style={{ background: 'black', color: '#00ff00', padding: '10px', fontWeight: 'bold' }}>
        للاستلام تواصل: 01006527185
      </div>

      <h1 style={{ color: 'red', marginTop: '30px' }}>VIP SPIN</h1>

      <div style={{ border: '2px solid red', padding: '20px', borderRadius: '15px', display: 'inline-block', backgroundColor: 'white', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="أدخل اسمك"
          onChange={(e) => setName(e.target.value)}
          style={{ display: 'block', margin: '10px auto', padding: '10px', width: '220px' }}
        />
        <input
          type="tel"
          placeholder="رقم الموبايل"
          onChange={(e) => setPhone(e.target.value)}
          style={{ display: 'block', margin: '10px auto', padding: '10px', width: '220px' }}
        />

        <div style={{ fontSize: '60px', margin: '20px' }}>🎰</div>

        <button
          onClick={handleStart}
          style={{ background: 'red', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          جرب حظك الآن!
        </button>
      </div>
    </div>
  );
}