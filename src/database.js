import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-34-231-221-151.compute-1.amazonaws.com',
    user:'ejobimxuaebohc',
    password:'30075514acd5768bf534c7e4d6ed16e215c80632392538de46aaad0dd11e6c2c',
    database: 'dektu92ci59kf7',
    port:5432,
    ssl: {rejectUnauthorized:false}
});