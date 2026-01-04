import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti'; // تأكد من تثبيتها أو سأخبرك كيف

const App = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('CURRENT_USER_RESULT');
    if (currentUser) {
      const data = JSON.parse(currentUser);
      setResult(data.result);
      setName(data.name);
      setHasSpun(true);
    }
  }, []);

  const handleSpin = () => {
    if (!name || !phone) {
      alert("يرجى إدخال الاسم ورقم الهاتف أولاً!");
      return;
    }

    const savedUsers = JSON.parse(localStorage.getItem('VIP_SPIN_USERS') || '[]');
    const isDuplicate = savedUsers.find(user => user.phone === phone);

    if (isDuplicate) {
      alert(`عفواً يا ${isDuplicate.name}! لقد شاركت مسبقاً.`);
      setResult(isDuplicate.result);
      setHasSpun(true);
      return;
    }

    let finalResult;
    const vipChance = Math.random();

    if (vipChance < 0.05) { // نسبة 5% للفوز بـ VIP
      finalResult = "VIP";
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      const usedNumbers = savedUsers.filter(u => typeof u.result === 'number').map(u => u.result);
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 1000) + 1;
      } while (usedNumbers.includes(randomNumber));
      finalResult = randomNumber;
    }

    const newUser = { name, phone, result: finalResult, date: new Date().toLocaleString() };
    savedUsers.push(newUser);
    localStorage.setItem('VIP_SPIN_USERS', JSON.stringify(savedUsers));
    localStorage.setItem('CURRENT_USER_RESULT', JSON.stringify(newUser));

    setResult(finalResult);
    setHasSpun(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">

      {/* جملة الهودي في الجنب العلوي */}
      <div className="absolute top-5 left-5 bg-yellow-400 text-black font-black p-3 rounded-lg shadow-md transform -rotate-12 border-2 border-black animate-pulse">
        اكسب وتعالى خذ الهودي 👕
      </div>

      {/* رقم التواصل في الجنب الآخر */}
      <div className="absolute top-5 right-5 bg-black text-white p-3 rounded-lg shadow-lg text-sm">
        للإستلام تواصل: <br />
        <span className="text-green-400 font-bold">01006527185</span>
      </div>

      <div className="mb-8">
        <h1 className="text-5xl font-black text-red-600 drop-shadow-md">VIP SPIN 🎰</h1>
        <p className="text-gray-500 mt-2 font-bold">فرصة واحدة فقط لكل بطل</p>
      </div>

      {!hasSpun ? (
        <div className="w-full max-w-md space-y-4 bg-white p-8 rounded-3xl shadow-2xl border-4 border-red-500">
          <input
            type="text"
            placeholder="أدخل اسمك"
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-red-500 outline-none text-right"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="رقم الموبايل"
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-red-500 outline-none text-right"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            onClick={handleSpin}
            className="w-full bg-red-600 text-white font-black py-5 rounded-2xl hover:bg-red-700 transition-all text-xl shadow-lg"
          >
            جرب حظك الآن!
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.5, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          className={`p-12 rounded-full w-80 h-80 flex flex-col items-center justify-center border-8 shadow-2xl ${result === "VIP" ? "bg-yellow-400 border-white" : "bg-white border-gray-300"}`}
        >
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <div className={`text-7xl font-black ${result === "VIP" ? "text-red-600 animate-bounce" : "text-black"}`}>
            {result}
          </div>

          {/* النص اللي هيظهر تحت النتيجة */}
          <div className="mt-4 text-2xl font-black uppercase">
            {result === "VIP" ? (
              <span className="text-red-700">🎉 مبروووك 🎉</span>
            ) : (
              <span className="text-gray-400">خااااسر ❌</span>
            )}
          </div>
        </motion.div>
      )}

      {result === "VIP" && (
        <div className="mt-6 text-xl font-bold text-red-600 bg-white p-4 rounded-xl shadow-lg border-2 border-red-600 animate-bounce">
          كلمني دلوقتي وخذ الهودي بتاعك! 📞
        </div>
      )}
    </div>
  );
};

export default App;