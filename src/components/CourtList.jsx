import courts from '../data/courts.json';

export default function CourtList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Доступные корты</h2>
      {courts.map(court => (
        <div key={court.id} className="mb-6 bg-white rounded-xl shadow overflow-hidden">
          <img src={court.image} alt={court.name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{court.name}</h3>
            <p className="text-sm text-gray-500">{court.address}</p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {court.slots.map(slot => (
                <button key={slot} className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-xl">
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
