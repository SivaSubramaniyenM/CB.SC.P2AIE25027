
import React, { useEffect, useState } from 'react';

function App() {
  const [notifications, setNotifications] = useState([]);

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/notifications');
    const data = await res.json();
    setNotifications(data.notifications);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.map(n => (
        <div key={n.id}>
          <p>{n.message}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
