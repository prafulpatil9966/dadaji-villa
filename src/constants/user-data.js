"use client"

import { useEffect, useState } from 'react';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = 'https://dummyjson.com/users';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error('Error fetching users:', error))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading };
}
