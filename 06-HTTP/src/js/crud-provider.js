const urlCrud = 'https://reqres.in/api/users'


const createUser = async (usuario) => {
    const resp = await fetch(urlCrud, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}

const getUser = async (id) => {
    const resp = await fetch(`${urlCrud}/${id}`);
    const { data } = await resp.json();
    return data;
}

const removeUser = async (id) => {
    const resp = await fetch(`${urlCrud}/${id}`, {
        method: 'DELETE'
    });
    return (resp.ok) ? 'Borrado' : 'No se pudo borrar';

}

const updateUser = async (id , usuario) => {
    const resp = await fetch(`${urlCrud}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.json();
}




export {
    createUser,
    removeUser,
    getUser,
    updateUser

}