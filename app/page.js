"use client";
import { useState } from 'react';

export default function Home() {
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'הזמנת טיסות', done: false, description: 'הזמן את הטיסות שלך מוקדם כדי להבטיח מחירים טובים.' },
    { id: 2, text: 'הזמנת מקומות לינה', done: false, description: 'וודא שיש לך מקומות לינה בכל היעדים.' },
    { id: 3, text: 'הוצאת ויזה', done: false, description: 'בדוק אם יש צורך בויזה.' },
  ]);

  const handleCheck = (id) => {  // הסרת הגדרת הטיפוס
    const updatedList = checklist.map(item => 
      item.id === id ? { ...item, done: !item.done } : item
    );
    setChecklist(updatedList);
  };

  const completionRate = (checklist.filter(item => item.done).length / checklist.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl text-center mb-6">צ'ק ליסט טיול</h1>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">התקדמות: {completionRate}%</h2>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: `${completionRate}%` }}></div>
        </div>

        <ul>
          {checklist.map(item => (
            <li key={item.id} className="mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className={`text-xl ${item.done ? 'line-through' : ''}`}>{item.text}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={item.done} 
                  onChange={() => handleCheck(item.id)} 
                  className="w-6 h-6"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
