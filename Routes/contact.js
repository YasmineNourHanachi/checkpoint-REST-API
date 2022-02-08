//require express
const express=require("express")

//require Router
const router=express.Router()

//require Model
const Contact=require('../model/Contact')

//require Controllers
const controllers=require('../controllers/contact.controllers')

router.get('/test',(req,res)=>{
   res.send('hello test')
})


/**
 * @desc : add  new contact
 * @method: POST
 * @path: 'http://localhost:6000/api/contacts/' 
 * @data: req.body
 */
router.post('/',controllers.addContact)


   /**
 * @desc : get all contacts
 * @method: GET
 * @path: 'http://localhost:6000/api/contacts/' 
 * @data: no data
 */
    router.get('/',controllers.listContact)


/**
 * @desc : delete one contact
 * @method: DELETE
 * @path: 'http://localhost:6000/api/contacts/:id' 
 * @data: req.params
 */
router.delete('/:id',controllers.deleteContact)


/**
 * @desc : Get one contact by ID
 * @method: GET
 * @path: 'http://localhost:6000/api/contacts/:_id' 
 * @data: req.params
 */
router.get('/:_id',controllers.getOneContact)


/**
 * @desc : Update one Contact
 * @method: PUT
 * @path: 'http://localhost:6000/api/contacts/:_id' 
 * @data: req.params && req.body
 */
router.put('/:_id', controllers.updateContact)


module.exports=router