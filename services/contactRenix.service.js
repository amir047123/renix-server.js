const ContactRenix = require("../models/contactRenix.model");

exports.createContactRenixService = async (data) => {
    const createContactRenix = await ContactRenix.create(data);
    return createContactRenix;
};

exports.deleteContactRenixService = async (id) => {
    const deleteContactRenixService = await ContactRenix.deleteOne({ _id: id });
    return deleteContactRenixService;
};

exports.updateContactRenixService = async (id, data) => {
    const updateContactRenixService = await ContactRenix.updateOne({ _id: id }, data);
    return updateContactRenixService;
};

exports.getContactRenixByIdService = async (id) => {
    const getContactRenixByIdService = await ContactRenix.findOne({ _id: id });
    return getContactRenixByIdService;
};
