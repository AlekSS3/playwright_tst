import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'qatest.sedc.mk',
    user: 'User',
    password: 'Password',
    database: 'north_wind',
    port: 3307,
    connectionLimit: 20,  
    acquireTimeout: 30000,
    timeout: 30000
});

export async function queryDatabase(query: string) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(query);
        return rows;
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
}

export function getPropertyListFromResult(result: any[], propertyName: string): any[] {
    const propertyList: any[] = [];
    result.forEach(row => {
        if (row.hasOwnProperty(propertyName)) {
            propertyList.push(row[propertyName]);
        } else {
            console.warn(`Property "${propertyName}" not found in row`, row);
        }
    });
    return propertyList;
}
