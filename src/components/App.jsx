import { useState } from 'react';
import CourtList from '../components/CourtList';
import CoachList from '../components/CoachList';
import MyBookings from '../components/MyBookings';
import Profile from '../components/Profile';

export default function App() {
  const [activeTab, setActiveTab] = useState('courts');

  const renderTab = () => {
    switch (activeTab) {
      case 'courts': return <CourtList />;
      case 'coaches': return <CoachList />;
      case 'bookings': return <MyBookings />;
      case 'profile': return <Profile />;
      default: return <CourtList />;
    }
  };

  const navStyle = (tab) =>
    `flex-1 py-3 text-center ${activeTab === tab ? 'text-blue-600 font-semibold' : 'text-gray-500'}`;

  return (
    <div className="min-h-screen pb-16 bg-gray-50">
      <div className="p-4">{renderTab()}</div>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex text-sm shadow-md">
        <button onClick={() => setActiveTab('courts')} className={navStyle('courts')}>Корты</button>
        <button onClick={() => setActiveTab('coaches')} className={navStyle('coaches')}>Тренеры</button>
        <button onClick={() => setActiveTab('bookings')} className={navStyle('bookings')}>Записи</button>
        <button onClick={() => setActiveTab('profile')} className={navStyle('profile')}>Профиль</button>
      </nav>
    </div>
  );
}
