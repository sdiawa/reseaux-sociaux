
const isEmail =(email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
};

const  isEmpty = (string) => {
    if(string.trim() === '') return true;
    else return false;
};

exports.validateSignupData = (data) => {
    let errors = {};

    if(isEmpty(data.email)){
        errors.email =' email ne doit pas etre vide';
    } else if(!isEmail(data.email)){
        errors.email =' email incorrect';
    }
    if (isEmpty(data.password)) errors.password =' password ne doit pas etre vide';
    if (data.password !== data.confirmPassword)
        errors.confirmPassword = 'Password incorrect';
    if (isEmpty(data.handle)) errors.handle =' handle ne doit pas etre vide';


    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}
exports.validateLoginData = (data) =>{
      let errors = {};

    if(isEmpty(user.email)) errors.email = 'email ne doit pas etre vide';
    if(isEmpty(user.password)) errors.password = 'password ne doit pas etre vide';

    if(Object.keys(errors).length>0) return res.status(400).json(errors);
    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
};