const asyncHandler = require("express-async-handler");

//desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});

//desc create contacts
//@route post /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is:",req.body); 
    const {name, gender} = req.body;
    if(!name||!gender){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({ message: "Create contact" });
});

//desc get contact
//@route get /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
});

//desc update contacts
//@route put /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
});

//desc delete contacts
//@route delete /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Contact for ${req.params.id}`});
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};