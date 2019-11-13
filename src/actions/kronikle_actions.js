export function fetchAllKronikles() {
  return (dispatch) => { dispatch({ type: 'LOAD_KRONICKLES' });

    return fetch('https://kronikles-server.herokuapp.com/kronikles')
      .then(response => response.json())
      .then(kronikles => dispatch({ type: 'FETCH_KRONICKLES_SUCCESS', payload: kronikles }));
  }
};

export function fetchSingleKronikle(id) {
  return (dispatch) => { dispatch({ type: 'LOAD_KRONICKLES' });

    return fetch(`https://kronikles-server.herokuapp.com/kronikles/${id}`)
      .then(response => response.json())
      .then(kronikles => dispatch({ type: 'FETCH_SINGLE_KRONICLE', payload: kronikles }));
  }
};

export function addNewKronikle(newKronikle) {
  const kronikleCreated = {
    title: newKronikle.title,
    body: newKronikle.body
  }
  return (dispatch) => {
    dispatch({ type: 'ADD_NEW_KRONIKLE_BEGIN' });

    fetch('https://kronikles-server.herokuapp.com/kronikles', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(kronikleCreated)
    })
    .then(response => response.json())
    .then(allKronikles => {
      dispatch({ type: 'ADD_NEW_KRONIKLE_SUCCESS', payload: allKronikles })
    })
      .catch(error => dispatch({ type: 'ADD_NEW_KRONIKLE_ERROR', error: error.message }));
  }
};

export function deleteKronikle(id) {
  return (dispatch) => {
    dispatch({ type: 'DELETE_KRONIKLE', payload: id });

    return fetch(`https://kronikles-server.herokuapp.com/kronikles/${id}`, {
      method: 'DELETE'}
    )
    .then(response => response.json())
    .then(remainingKronikles => {
      dispatch({ type: 'DELETE_KRONIKLE_SUCCESS', payload: remainingKronikles })
    })
      .catch(error => dispatch({ type: 'DELETE_KRONIKLE_ERROR', error: error.message }));
  }
  };


export function editKronikle(kronikle) {
  return (dispatch) => {
    dispatch({ type: 'EDIT_KRONIKLE_ATTEMPT' });

    return fetch(`https://kronikles-server.herokuapp.com/kronikles/${kronikle._id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(kronikle)
        })
        .then(resp => resp.json())
        .then(allKronikles =>dispatch({ type: 'EDIT_KRONIKLE_SUCCESS', payload: allKronikles }))
        .catch(error => dispatch({ type: 'EDIT_KRONIKLE_ERROR', error: error.message }));
    }
};
