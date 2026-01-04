import React, { useState, useEffect } from 'react';

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [resultNum, setResultNum] = useState(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const savedNumber = localStorage.getItem("userLuckyNumber");
    if (savedNumber) {
      setResultNum(savedNumber);
      setHasPlayed(true);
    }
  }, []);

  const handleStart = () => {
    if (!name || !phone) {
      alert("من فضلك أدخل الاسم والرقم أولاً");
      return;
    }
    const uniqueNumber = Math.floor(Date.now() % 10000) + Math.floor(Math.random() * 100);
    setResultNum(uniqueNumber);
    setHasPlayed(true);
    localStorage.setItem("userLuckyNumber", uniqueNumber);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <div style={{ background: 'black', color: '#00ff00', padding: '10px', fontWeight: 'bold' }}>
        للاستلام تواصل: 01006527185
      </div>
      <h1 style={{ color: 'red', marginTop: '30px' }}>VIP SPIN</h1>
      <div style={{ border: '2px solid red', padding: '20px', borderRadius: '15px', display: 'inline-block', backgroundColor: 'white', marginTop: '20px' }}>

        {/* الخانات بتظهر بس لو لسه ملعبيش */}
        {!hasPlayed ? (
          <>
            <input type="text" placeholder="أدخل اسمك" onChange={(e) => setName(e.target.value)} style={{ display: 'block', margin: '10px auto', padding: '10px', width: '220px' }} />
            <input type="tel" placeholder="رقم الموبايل" onChange={(e) => setPhone(e.target.value)} style={{ display: 'block', margin: '10px auto', padding: '10px', width: '220px' }} />
            <button onClick={handleStart} style={{ background: 'red', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>جرب حظك الآن!</button>
          </>
        ) : (
          <div style={{ color: 'blue', fontSize: '60px', fontWeight: 'bold', margin: '20px' }}>{resultNum}</div>
        )}

        <div style={{ marginTop: '25px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
          <h3 style={{ margin: '5px 0', color: '#333' }}>Welcome to T-shirt Brand</h3>
          <p style={{ color: 'green', fontWeight: 'bold', fontSize: '18px' }}>
            {hasPlayed ? "تم استخدام فرصتك بنجاح ✅ صور الشاشة" : "ابعت الصورة على الواتس للاستلام"}
          </p>
        </div>
      </div>
    </div>
  );
}