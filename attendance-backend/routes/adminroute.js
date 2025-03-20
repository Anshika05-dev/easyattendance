const express =require("express");
const admincontroller=require('../controllers/admincontrollers')
const router=express.Router();
router.post('/adminlogin',admincontroller.login)
router.post('/add_class',admincontroller.addclass)
router.get('/classes',admincontroller.viewclasses)
router.post('/add_student',admincontroller.addstudent)
router.get('/students',admincontroller.viewstudents)
router.delete('/del_student/:id',admincontroller.delete)
router.get('/student_count',admincontroller.count)
router.get('/logout',admincontroller.logout)
module.exports=router;