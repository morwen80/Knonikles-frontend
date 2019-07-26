export function fetchAllKronikles() {
  return (dispatch) => { dispatch({ type: 'LOAD_KRONICKLES' });

    return fetch('http://localhost:3000/notes/')
      .then(response => response.json())
      .then(kronikles => dispatch({ type: 'FETCH_KRONICKLES_SUCCESS', payload: kronikles }));
  }
};


export function fetchSingleKronikle(id) {
  return (dispatch) => { dispatch({ type: 'LOAD_KRONICKLES' });

    return fetch('http://localhost:3000/notes/')
      .then(response => response.json())
      .then(kronikles => dispatch({ type: 'FETCH_SINGLE_KRONICLE', payload: kronikles }));
  }
};
//
// export function fetchSingleKronikle(id){
//   debugger
//     return (dispatch) => {
//     dispatch({ type: 'FETCH_SINGLE_KRONICLE', payload: id });
//
//     return fetch(`http://localhost:3000/notes/${id}`)
//       .then(response => response.json())
//       .then(kronikle => dispatch({ type: 'FETCH_KRONICKLES_SUCCESS', payload: kronikle }));
//     }
//   };


export function addNewKronikle(newKronikle) {
  const kronikleCreated = {
    title: newKronikle.title,
    body: newKronikle.body
  }
  return (dispatch) => {
    dispatch({ type: 'LOAD_KRONICKLES' });

    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(kronikleCreated)
    })
    .then(response => response.json())
    .then(k => {
      dispatch({ type: 'ADD_NEW_KRONIKLE_SUCCESS', payload: k })
    })
      .catch(error => dispatch({ type: 'ADD_NEW_KRONIKLE_ERROR', error: error.message }));
  }
};

export function deleteKronikle(id) {
  return (dispatch) => {
    dispatch({ type: 'DELETE_KRONIKLE', payload: id });

    return fetch(`http://localhost:3000/notes/${id}`, {
      method: 'DELETE'}
    )
    .then(response => response.json())
  }
};

export function editKronikle(kronikle) {
  return (dispatch) => { dispatch({ type: 'EDIT_KRONIKLE_ATTEMPT' });

    return fetch(`http://localhost:3000/notes/${kronikle._id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(kronikle)
        })
        .then(resp => resp.json())
        .then(k => dispatch({ type: 'EDIT_KRONIKLE_SUCCESS', payload: k}))
        .catch(error => dispatch({ type: 'EDIT_KRONIKLE_ERROR', error: error.message }));
    }
};
