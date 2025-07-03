function fetchTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Todo fetched successfully:', data);
      return data;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error.message);
    });
}  

function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('User fetched successfully:', data);
    return data;    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error.message);
  });
}

const allData = Promise.all([fetchTodos(), fetchUsers()]);
const fastestData = Promise.race([fetchTodos(), fetchUsers()]);

allData
  .then(results => {
    console.log('Promise.all result:', results);
    });
fastestData
  .then(result => {
    console.log('Promise.race result:', result);
    });

