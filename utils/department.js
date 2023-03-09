const { connect } = require("../config/connect")

// view department function
async function getDepartment(){
    const query = "SELECT * FROM departments";

    const connection = await connect();

    const [rows, cols] = await connection.query(query);
    
    return rows;

}
// create department function
async function createDepartment(name){

    const query = `INSERT INTO \`departments\` (\`name\`) VALUES (?)`;
    const connection = await connect();
    
    return connection.query(query, [name])
}

module.exports = {
    createDepartment,
    getDepartment,
}