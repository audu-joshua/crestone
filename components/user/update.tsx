const Updates = () => {
    const updates = [
      { id: 1, message: 'Your profile has been updated.' },
      { id: 2, message: 'New properties available in your area.' },
    ];
  
    return (
      <div>
        <h1>Updates</h1>
        <ul>
          {updates.map((update) => (
            <li key={update.id}>{update.message}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Updates;