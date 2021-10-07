function getlongurl(surl) {
    //const json_data = require('./data.json');
    const json_data = fetch('./data.json');

    for (i = 0; i < json_data.data.length; i++) {
        s = json_data.data[i].shorturl;
        if (s === surl) {
            l = json_data.data[i].longurl;
            return l;
        }
    }
}

console.log(getlongurl('TEST1'));

//location.replace(getlongurl(window.location.pathname));