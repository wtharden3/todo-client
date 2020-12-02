let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:4000';
        break;

    case 'kws-taskmaster-client.herokuapp.com':

        APIURL = 'https://kws-taskmaster.herokuapp.com'
}

export default APIURL;