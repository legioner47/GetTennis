
import BookingForm from '../components/BookingForm';

export default function BookingPage() {
  const query = new URLSearchParams(window.location.search);
  const name = query.get('name') || 'Без названия';
  const type = query.get('type') || 'court';

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Бронирование</h2>
      <BookingForm name={name} type={type} />
    </div>
  );
}
