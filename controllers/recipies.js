import pool from '../utilities.js'


export default function getAll( req, res){


pool.getConnection((err, connection)=>{
    if(err) throw err
    console.log(`connection as id........ ${connection.threadId}`)
        connection.query('SELECT *, nationality.id AS nationalityid FROM recipes RIGHT JOIN nationality ON nationality.id = recipes.nationality_id', (err, rows)=>{

        connection.release()//return the connection to pool
if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })

})

}

export function getOneById( req, res){


    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id ${connection.threadId}`)

        connection.query('SELECT * from recipes WHERE id=?',[req.params.id], (err, rows)=>{

            connection.release()//return the connection to pool

            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
        })

    })
    
    }
