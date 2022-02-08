const addContact = async(req,res)=>{
    try {
        const newContact= req.body
        if(!newContact.name || !newContact.email){
            return res.status(400).send({msg:"name and email are required !!!"})
        }

        const contactToFind = await Contact.findOne({email:newContact.email})
         if(contactToFind){
             return res.status(400).send({msg:"contact already exist !!!"})
            }
        const contactToAdd = new Contact(newContact)
        await contactToAdd.save()

        res.status(200).send({msg:"contact added succ ...",contactToAdd})
    } catch (error) {
        res.status(400).send({msg:"can not add new contact !!!",error})
    }}


const listContact= async (req,res)=>{
    try {
        const listContacts= await Contact.find()
        res.status(200).send({msg:"this is the list of contacts ...",listContacts})

    } catch (error) {
        res.status(400).send({msg:"can not get all contacts !!!",error})
    }
}

const deleteContact=async (req,res)=>{
    try {
        const contactId= req.params.id
        await Contact.deleteOne({_id:contactId})
        res.status(200).send({msg:"contact deleted succ..." })
    } catch (error) {
        res.status(400).send({msg:"can not delete contact with this id !!!",error})
    }
    }

const getOneContact= async (req,res) => {
    try {
        const {_id} = req.params
        const contactToFind = await Contact.findOne({_id})
        res.status(200).send({msg:"I Find the contact..." ,contactToFind})
    } catch (error) {
        res.status(400).send({msg:"can not get contact with this id !!!",error})
    }
}

const updateContact= async(req,res) => {
    try {
        const {_id} = req.params
        const newContact = req.body
        let result = await Contact.updateOne({_id},{$set:{...newContact}})
        if (result.nModified===0)
        {return res.status(400).send({msg:"Contact already Udated !!!"}) }
        res.status(200).send({msg:"contact updated succ..." })
    } catch (error) {
        res.status(400).send({msg:"can not get contact with this id !!!",error})
    }
}
    module.exports = controllers ={addContact,listContact,deleteContact,getOneContact,updateContact}