export const getAllUsers = () => {
  return fetch('/api/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const getUser = (userId) => {
  return fetch(`/api/user/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createDeck = (deckData) => {
  return fetch(`/api/user/${deckData}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(deckData),
  });
};

export const getAllDecks = () => {
  return fetch('/api/deck', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
