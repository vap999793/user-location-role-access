const { role, db_data } = require('../db/data');
const { permissionValid } = require('../helpers/permission');

async function login(req, res) {
    const { userid } = req.body;
    let user_data = db_data.filter(obj=>{
        return obj.userid === userid;
    });

    if(user_data && user_data.length > 0){
        req.session.user_data = user_data[0];
        console.log(req.session.user_data);
        return res.status(200).json(user_data[0]);
    }

    return res.status(400).json({
        error: 'User not found'});
}

async function createUser(req, res){
    const {userid, role, location_access} = req.body;

    db_data.push({userid, role, location_access, status:'active'});
    console.log(db_data);
    return res.status(200).json({userid, role, location_access, status:'active'});
}

module.exports = {login, createUser};