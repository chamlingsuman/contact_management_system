//desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contacts"});
};

//desc create contacts
//@route post /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("The request body is:",req.body);
    res.status(201).json({message: "Create contact"});
};

//desc get contact
//@route get /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
};

//desc update contacts
//@route put /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
};

//desc delete contacts
//@route delete /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete Contact for ${req.params.id}`});
};

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};