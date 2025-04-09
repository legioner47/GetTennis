export default function MyBookings() {
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Мои записи</h2>
      {bookings.length === 0 ? (
        <p className="text-gray-600">У вас пока нет записей.</p>
      ) : (
        <ul className="space-y-2">
          {bookings.map((b, i) => (
            <li key={i} className="bg-white p-3 rounded-xl shadow">
              {b.type === 'court' ? 'Корт: ' : 'Тренер: '}
              <span className="font-medium">{b.name}</span> — {b.date} {b.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
