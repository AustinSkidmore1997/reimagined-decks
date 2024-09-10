export const getAllUsers = () => {
  return fetch('/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const getUser = (userId) => {
  return fetch(`/api/users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createDeck = (deckData) => {
  return fetch(`/api/users/me/${deckData}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(deckData),
  });
};

export const getAllDecks = () => {
  return fetch('/api/decks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
export const addCard = (cardData, deckId, token) => {
  return fetch(`/api/users/me/${deckId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cardData),
  });
};
export const removeCard = (cardId, deckId, token) => {
  return fetch(`/api/users/me/${deckId}/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
