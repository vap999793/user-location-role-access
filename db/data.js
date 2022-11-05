role = {
    admin:"admin",
    user:"user",
    global_admin:"global_admin"
};

let db_data = [
    {userid:1, location_access:1, role:role.admin, status:"active"},
    {userid:2, location_access:1, role:role.user, status:"inactive"},
    {userid:3, location_access:2, role:role.user, status:"active"},
    {userid:4, location_access:2, role:role.admin, status:"inactive"},
    {userid:5, location_access:1, role:role.global_admin, status:"active"},
]

module.exports = {role, db_data};