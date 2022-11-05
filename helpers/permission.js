const { role, db_data } = require('../db/data');

function checkPermission(checkAuthorization){
    console.log(checkAuthorization)
    let {loggedIn_user, db_user, resource, permissionFor} = checkAuthorization;
    switch (permissionFor) {
        case "create":
            if((loggedIn_user.role===role.admin && loggedIn_user.location_access===db_user.location_access && loggedIn_user.status==='active') || (loggedIn_user.role===role.global_admin && loggedIn_user.status==='active')){
                console.log("reached checkpermission")
                return true;
            }
            break;
    
        default:
            break;
    }
    return false;
}

module.exports = {
    checkPermission,
};
