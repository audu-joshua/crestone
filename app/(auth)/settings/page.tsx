"use client"
import { useState } from 'react';
import Settings from '@/components/user/settings';
import Updates from '@/components/user/update';
import Chatbot from '@/components/user/chatbot';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('settings');

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '20px' }}>
        <h2>Dashboard</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <button onClick={() => setActiveTab('settings')}>Settings</button>
          </li>
          <li>
            <button onClick={() => setActiveTab('updates')}>Updates</button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        {activeTab === 'settings' && <Settings />}
        {activeTab === 'updates' && <Updates />}
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Dashboard;