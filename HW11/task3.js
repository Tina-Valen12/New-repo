async function fetchTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Todo fetched successfully:', data);
    return data;
} catch (error) {
    console.error('There was a problem with the fetch operation:', error.message);
  }
}

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('User fetched successfully:', data);
    return data;    
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error.message);
  }
}   

async function fetchAllData() {
  try {
    const [todo, user] = await Promise.all([fetchTodos(), fetchUsers()]);
    console.log('Promise.all result:', [todo, user]);
  } catch (error) {
    console.error('Error in Promise.all:', error.message);
  }
}
async function fetchFastestData() {
  try {
    const result = await Promise.race([fetchTodos(), fetchUsers()]);
    console.log('Promise.race result:', result);
  }
  catch (error) {
    console.error('Error in Promise.race:', error.message);
  }
}

fetchAllData();
fetchFastestData();