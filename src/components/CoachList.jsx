import coaches from '../data/coaches.json';

export default function CoachList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Тренеры</h2>
      {coaches.map(coach => (
        <div key={coach.id} className="mb-6 bg-white rounded-xl shadow overflow-hidden">
          <img src={coach.image} alt={coach.name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{coach.name}</h3>
            <p className="text-sm text-gray-500">{coach.bio}</p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {coach.slots.map(slot => (
                <button key={slot} className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded-xl">
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
