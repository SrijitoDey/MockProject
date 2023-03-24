import axios from 'axios';

let dataServiceObj = {};

let url = "http://localhost:4000/profiles/";

dataServiceObj.getProfiles = function()
{	
    return axios.get(url);
};


export default dataServiceObj;
