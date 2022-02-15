import mysql from 'serverless-mysql';
import "dotenv/config";

// mysql://b386b4e3d121ff:d7456ada@us-cdbr-east-05.cleardb.net/heroku_4b05c50a0838a17?reconnect=true
/*
const connection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net', //process.env.DB_HOST,
    port: 3306, //Number.parseInt(process.env.DB_PORT!),
    user: 'b386b4e3d121ff', //process.env.DB_USER,
    password: 'd7456ada', //process.env.DB_PASS,
    database: 'heroku_4b05c50a0838a17', //process.env.DB_NAME,
});
*/

const connection = mysql({
    config: {
        host: 'us-cdbr-east-05.cleardb.net', //process.env.DB_HOST,
        port: 3306, //Number.parseInt(process.env.DB_PORT!),
        user: 'b386b4e3d121ff', //process.env.DB_USER,
        password: 'd7456ada', //process.env.DB_PASS,
        database: 'heroku_4b05c50a0838a17', //process.env.DB_NAME,
        timeout: 5,
    }, 
});

// Error codes returned by 
export enum ErrorCodes {
    DUPLICATE_ENTRY = 'ER_DUP_ENTRY',
}

export default connection;

export async function execute(query: string, values: Array<any>)
{
    try {
        const result = await connection.query(query, values);
        await connection.end();
        return result;
    }
    catch(e)
    {
        throw Error(e.message);
    }
}