const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

// action creator
// so far an action creator returns an action
// But what the thunk middleware brings us the table is the ability for a action creator to return a function
// instead of an action object

// what is special about this function is that it doesn't have to be pure, so it is allowed to have side effects such as Async API calls
// and this function can also dispatch actions like the one's as we've seen before
// that is might possible becz it receives the dispatch method as its argument

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the array of users
                const users = response.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                // error.message is the error description
                dispatch(fetchUsersFailure(error.message));
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
// thunkMiddleware allows to return function fromaction creator i.e., in this case fetchUsers()
store.subscribe(() => { console.log(store.getState()) });
store.dispatch(fetchUsers())