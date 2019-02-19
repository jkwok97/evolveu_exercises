import axios from 'axios';
import { Location } from 'expo';
import qs from  'qs';

import {
    FETCH_JOBS
} from './types';

const { Indeed } = require('../setup/setup');

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';

const JOB_QUERY_PARAMS = {
    publisher: Indeed,
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 5
};

const buildJobsURL = (address, jobTitle) => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, q: jobTitle, l: address[0].postalCode });
    return `${JOB_ROOT_URL}${query}`;
}

export const fetchJobs = (region, jobTitle) => async dispatch => {
    const { latitude, longitude } = region;
    try {
        const address = await Location.reverseGeocodeAsync({ latitude, longitude })
        console.log(address);
        console.log(jobTitle);
        const url = buildJobsURL(address, jobTitle);
        let { data } = await axios.get(url);
        dispatch ({ type: FETCH_JOBS, payload: data });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};