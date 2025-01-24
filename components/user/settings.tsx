"use client";
import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { User } from '@supabase/supabase-js';

const Settings = () => {
   const [user, setUser] = useState<User | null>(null);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const supabase = createClientComponentClient();

   useEffect(() => {
     const fetchUser = async () => {
       const { data: { user } } = await supabase.auth.getUser();
       if (user) {
         setUser(user);
         setName(user.user_metadata.full_name || '');
         setEmail(user.email || '');
       }
     };
     fetchUser();
   }, []);


   const handleUpdateProfile = async () => {
     const { error } = await supabase.auth.updateUser({
       email: email,
       data: { full_name: name },
     });

     if (error) {
       console.error('Error updating profile:', error);
     } else {
       alert('Profile updated successfully!');
     }
   };

   return (
     <div>
       <h1>Settings</h1>
       <div>
         <label>Name:</label>
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
       </div>
       <div>
         <label>Email:</label>
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
       </div>
       <button onClick={handleUpdateProfile}>Update Profile</button>
     </div>
   );
};

export default Settings;