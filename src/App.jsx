import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
      {/* الرقم بتاعك فوق على الشمال */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'black', color: 'green', padding: '5px', borderRadius: '5px' }}>
        للإستلام تواصل: 01006527185
      </div>

      <h1 style={{ color: 'red', marginTop: '50px' }}>VIP SPIN</h1>
      <p>أدخل بياناتك ثم اضغط على العجلة</p>

      <div style={{ border: '2px solid red', padding: '20px', borderRadius: '15px', display: 'inline-block' }}>
        <input
          type="text"
          placeholder="أدخل اسمك"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: 'block', margin: '10px auto', padding: '10px', width: '200px' }}
        />
        <input
          type="tel"
          placeholder="رقم الموبايل"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ display: 'block', margin: '10px auto', padding: '10px', width: '200px' }}
        />

        {/* هنا العجلة (لو عندك كود العجلة الأصلي حطه هنا) */}
        <div style={{ margin: '20px', fontSize: '50px' }}>🎰</div>

        <button
          onClick={() => alert('تم تسجيل بياناتك! صور الشاشة الآن وابعتها واتساب')}
          style={{ background: 'red', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '10px', cursor: 'pointer' }}
        >
          جرب حظك الآن!
        </button>
      </div>
    </div>
  );
}

export default App;