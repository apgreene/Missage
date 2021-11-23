const BASE_URL: string = 'http://localhost:3001';

async function fetchRequest(path: string, options?: object) {
  try {
    const res = await fetch(BASE_URL + path, options);
    return res.json();
  } catch (err) {
    console.error('Error: ', err);
  }
}

function getAll() {
  return fetchRequest('/note');
}

function deleteNote(id: string) {
  return fetchRequest(`/note/${id}`, {
    method: 'DELETE',
  });
}

function postNote(form) {
  console.log("hello world: ", form);
  for (var key of form.entries()) {
    console.log(key[0] + ', ' + key[1]);
  }
  return fetchRequest('/note', {
    method: 'POST',
    redirect: 'follow',
    body: form,
  });
}

function putNote(body: object, id: string) {
  return fetchRequest(`/note/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

const ApiService = { postNote, getAll, putNote, deleteNote };

export default ApiService;
