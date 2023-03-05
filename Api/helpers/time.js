module.exports = {
  dateNow: () => {
    var date = new Date();

    var years = date.getFullYear();
    var month = date.getMonth();
    var date = date.getDate();
    var hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    var minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    var second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

    var value = `${years}` + '-' + `${month}` + '-' + `${date}` + ' ' + `${hours}` + ':' + `${minute}` + ':' + `${second}`;

    return value;
  },
};
