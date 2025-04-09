
import { useState } from 'react';

export default function BookingForm({ name, type }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time) return;
    const booking = { name, type, date, time };
    const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
    localStorage.setItem('bookings', JSON.stringify([...existing, booking]));
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="text-center space-y-4">
        <p className="text-green-600 font-semibold">Бронирование подтверждено!</p>
        <p>{type === 'court' ? 'Корт' : 'Тренер'}: {name}</p>
        <p>Дата: {date}</p>
        <p>Время: {time}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Дата:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border rounded p-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Время:</label>
        <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full border rounded p-2" required>
          <option value="">Выберите время</option>
          {["08:00", "09:00", "10:00", "11:00", "12:00", "14:00", "16:00", "18:00"].map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Подтвердить</button>
    </form>
  );
}
