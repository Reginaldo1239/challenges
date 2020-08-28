require('dotenv').config()
var mysql = require('mysql');
const CONFIG = require('../config'); 

const pool  = mysql.createPool({
    connectionLimit : 1000,
    host            : CONFIG.HOST_DB,
    user            : CONFIG.DB_USER_NAME,
    password        : CONFIG.DB_USER_PASSWORD,
    database        : CONFIG.DB_NAME
  });   
  exports.insert=async (table,post)=>{
   // console.log('CONFIG')
    //console.log(CONFIG) 
    //console.log(process.env.NODE_ENV)
   return new Promise((resolver,reject)=>{   pool.getConnection((err,connection)=>{
   console.log(err)
        if (err) throw err; // not connected!
        connection.query(`INSERT INTO  ${table} SET ?`,post,(error,results,fields)=>{
            console.log(error)
            resolver(results);
            reject(error);
        })
        connection.release();
      })
    })
  }
  exports.select = async(query,arrayValues)=>{
   
   // var query = connection.query('SELECT * FROM table WHERE id = ?', [12], function (error, results, fields) {
     try{
    return new Promise((resolver,reject)=>{
        pool.getConnection((err,connection)=>{
            if (err) throw err; // not connected!
            if(err){
              console.log(err)
            }
       
            connection.query(query,arrayValues,(error,results,fields)=>{
                if (error) throw error;
                resolver(results);
                reject(error);
            })
        
            connection.release();
        }) 
    })
  }catch(e){
    console.log(e)
  }
  } 
  exports.update=(query,arrayValues)=>{
  // query='UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c'
  return new Promise((resolver,reject)=>{
  pool.getConnection((err,connection)=>{
  connection.query(query, arrayValues, function (error, results, fields) {
      if (error) throw error;
      resolver(results)
      reject(error)
      // ...
    });
    connection.release();
  })
}) 
}
  exports.delete = (query)=>{
    //DELETE FROM posts WHERE title = "wrong"',
      return new Promise((resolver,reject)=>{
          pool.getConnection((err,connection)=>{
            connection.query(query, function (error, results, fields) {
              // query ="delete from table where "
              if (error){
                throw error;
                console.log(error)
                reject(error)
              }
            
          
              resolver(results); 
             
            })
            connection.release();
          })
          
      })
  }

  exports.desconectPool = ()=>{
    pool.end((err)=>{
        console.log(err);
    })
  }