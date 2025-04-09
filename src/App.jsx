import { useEffect, useState } from "react";

const courts = [
  {
    id: 1,
    name: "ЦСКА Теннис Центр",
    location: "Москва, Ленинградский пр-т, 39",
    surface: "Хард",
    price: 1500,
    image: "https://cdn.findsport.ru/images/fd/e3/fde337bdf0cb1d2155b50a6481fe7c48.jpg",
    available: ["10:00", "12:00", "14:00"]
  },
  {
    id: 2,
    name: "Теннис парк на Красной Пресне",
    location: "Москва, ул. Мантулинская, 20",
    surface: "Грунт",
    price: 1800,
    image: "https://cdn.findsport.ru/images/d9/c3/d9c37929edc7ff9eea3aa84a087b7b5e.jpg",
    available: ["11:00", "13:00", "15:00"]
  },
  {
    id: 3,
    name: "Теннис Холл Сокольники",
    location: "Москва, ул. Сокольнический Вал, 1",
    surface: "Хард",
    price: 1300,
    image: "https://cdn.findsport.ru/images/57/60/5760e3ab418eb8a0d450b3cfcb5b02b1.jpg",
    available: ["09:00", "11:00", "13:00"]
  }
];

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (window?.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  const handleBooking = (court, time) => {
    alert(`Бронирование успешно!\n${court.name} на ${time}`);
    window.Telegram?.WebApp?.close();
  };

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Добро пожаловать в GetTennis</h1>
        <button
          onClick={() => setLoggedIn(true)}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl text-lg"
        >
          Войти через Telegram
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Выберите корт</h1>
      {courts.map((court) => (
        <div key={court.id} className="rounded-xl shadow p-4 border space-y-2">
          <img src={court.image} alt={court.name} className="rounded-xl w-full h-40 object-cover" />
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
