const { connect } = require("../config/connect")

// view department function
async function getRoles(){
    const query = "SELECT * FROM roles";

    const connection = await connect();

    const [rows, cols] = await connection.query(query);
    
    return rows;

}
// create department function
async function createRoles(title, salary){

    const query = `INSERT INTO \`roles\` (\`title\`, \`salary\`) VALUES (?, ?)`;
    const connection = await connect();
    
    return connection.query(query, [title, salary])
}

module.exports = {
    createRoles,
    getRoles,
}