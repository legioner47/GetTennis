import { useEffect } from "react";

const courts = [
  {
    id: 1,
    name: "ЦСКА Теннис Центр",
    location: "Москва, Ленинградский пр-т, 39",
    surface: "Хард",
    price: 1200,
    image: "https://via.placeholder.com/300x200.png?text=Tennis+Court+1",
    available: ["10:00", "12:00", "14:00"]
  },
  {
    id: 2,
    name: "Теннис Парк",
    location: "Москва, ул. Академика Королёва",
    surface: "Грунт",
    price: 1000,
    image: "https://via.placeholder.com/300x200.png?text=Tennis+Court+2",
    available: ["11:00", "13:00", "15:00"]
  }
];

export default function App() {
  useEffect(() => {
    if (window?.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  const handleBooking = (court, time) => {
    alert(`Вы забронировали ${court.name} на ${time}`);
    window.Telegram.WebApp.close();
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Выберите корт</h1>
      {courts.map((court) => (
        <div key={court.id} className="rounded-xl shadow p-4 border">
          <img src={court.image} alt={court.name} className="rounded-xl mb-2" />
          <h2 className="text-lg font-semibold">{court.name}</h2>
          <p className="text-sm text-gray-600">{court.location}</p>
          <p className="text-sm">Покрытие: {court.surface}</p>
          <p className="text-sm mb-2">Цена: {court.price}₽ / час</p>
          <div className="flex flex-wrap gap-2">
            {court.available.map((time) => (
              <button
                key={time}
                onClick={() => handleBooking(court, time)}
                className="bg-blue-500 text-white px-3 py-1 rounded-xl text-sm"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
