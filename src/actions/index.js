import { normalize } from 'normalizr';
import * as api from '../api';
import * as schema from './schema';
import { to } from '../utils';

const fetchTracksRequest = () => ({
    type: 'FETCH_TRACKS_REQUEST',
});

const fetchTracksSuccess = (response) => ({
    type: 'FETCH_TRACKS_SUCCESS',
    payload: response, // For faster access
});

const fetchTracksFailure = (error) => ({
    type: 'FETCH_TRACKS_FAILURE',
    payload: error,
});

// 
export const fetchTracks = () => async dispatch => {
    dispatch(fetchTracksRequest());

    // Call the api
    const [error, response] = await to(api.getAllTracks());

    if (error) {
        dispatch(fetchTracksFailure(error));
        return;
    }

    dispatch(fetchTracksSuccess(response));
}

export const setCurrentIndex = (index) => ({
    type: 'SET_CURRENT_INDEX',
    payload: index,
});

export const setHowl = (body) => ({
    type: 'SET_HOWL',
    payload: body,
});

export const togglePlay = () => ({
    type: 'TOGGLE_PLAY',
});

export const setPlay = status => ({
    type: 'SET_PLAY',
    payload: status,
})

