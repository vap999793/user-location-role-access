const { role, db_data } = require('../db/data');
const { checkPermission } = require('../helpers/permission');

async function permissionValid(req, res, next) {
    let user = req.session.user_data;
    console.log("!!!!!!!!!", req.session.user_data);
    let userGot = db_data.filter(obj=>obj.userid === user.userid);
    console.log(req.body);
    const {userid, role, location_access} = req.body;
    const body = {userid, role, location_access}; 

    if(userGot.length > 0){
        if(checkPermission({loggedIn_user:user, db_user:body, resource:'user', permissionFor:'create'})){
            next();
        }
        else{
            console.log("else")
            return res.json({"Error" : "Not Authorized to create user"});
        }
    }
}

async function userAuthen(req, res, next){
    let user = req.session.user_data;
    if(user) next();
    else return res.json({"Msg" : "Please login first"});

}


module.exports = {
    permissionValid,
    userAuthen
};
