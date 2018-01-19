var isMomHappy = false;

//promise
var willGetNewPhone = new Promise(
    function (resolve, reject) {
        if(isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); //fulfilled
        }
        else {
            var reason = new Error('mom is not happy');
            reject(reason); //reject
        }
    }
);


//call our promise

var askMom = function () {
    willGetNewPhone
        .then(function(fulfilled) {
            //yay, you got a new phone
            console.log(fulfilled);
        //output: {brand: 'Samsung', color: 'black'}
    })
    .catch(function (error) {
        //oops, mom doesn't buy it
       o console.log(error.message);
    });
};
askMom();