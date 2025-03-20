const db = require('../config/database')
const jwt = require('jsonwebtoken')
const admincontroller={
    login:(req,res)=>{
        const {email,password}= req.body;
        db.query('SELECT * FROM admin WHERE email=? and password=?',
            [email,password],
            (err,result)=>{
                if(err) return res.json({
                    loginStatus:false,
                    Error:"Database Error"
                })
                if(result.length>0){
                    const email=result[0].email;
                    const accessToken = jwt.sign({ email }, process.env.JWT_ACCESS, { expiresIn: '1h' }
                    )
                        res.cookie("Token",accessToken)
                        return res.json({
                            loginStatus:true,
                        });
                    // const refreshToken = jwt.sign({ email }, process.env.JWT_REFRESH, { expiresIn: '30d' })
                }
                else{
                    return res.json({
                        loginStatus:false,
                        Error:"Wrong Email or Password"
                    })
                }
            }
        )
    },
    addclass:(req,res)=>{
        const {clss,semester}= req.body;
        db.query('INSERT INTO classes (`class`,`semester`)VALUES(?,?)',
            [clss,semester],(err,result)=>{
                if(err) return res.json({
                    loginStatus:false,
                    Error:"Database Error"
                })
            return res.json({Status:true})
            })
    },
    viewclasses:(req,res)=>{
        db.query('SELECT * FROM classes',(err,result)=>{
            console.log(result)
            if(err) return res.json({
                loginStatus:false,
                Error:"Database Error"
            })
        return res.json({Status:true,result
        })
        })
        },
        addstudent:(req,res)=>{
            const {studentname,rollno,clss}= req.body;
        db.query('INSERT INTO students (`studentname`,`rollno`,`class_id`)VALUES(?,?,?)',
            [studentname,rollno,clss],(err,result)=>{
                console.log(err)
                if(err) return res.json({
                    loginStatus:false,
                    Error:err
                })
            return res.json({Status:true})
            })
        },
        viewstudents:(req,res)=>{
            db.query('SELECT * FROM students',(err,result)=>{
                console.log(result)
                if(err) return res.json({
                    loginStatus:false,
                    Error:"Database Error"
                })
            return res.json({Status:true,result
            })
            })
            },
            delete:(req,res)=>{
                const id = req.params.id;
                db.query('DELETE FROM students WHERE id=?',[id],
                    (err,result)=>{
                        console.log(err);
                        if(err) return res.json({
                            loginStatus:false,
                            Error:"err"
                        })
                    return res.json({Status:true,result
                    })
                    }
                )
            },
            count:(req,res)=>{
                db.query('SELECT COUNT(id) AS student FROM students',(err,result)=>{
                    console.log(result)
                    if(err) return res.json({
                        loginStatus:false,
                        Error:"Database Error"
                    })
                return res.json({Status:true,result
                })
                })            },
                logout:(req,res)=>{
                    res.clearCookie('Token')
                    return res.json({Status:true})
                }
}
module.exports=admincontroller;