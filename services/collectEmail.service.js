const CollectEmail = require("../models/collectEmail.model");

exports.createCollectEmailService = async (data) => {
    const createCollectEmail = await CollectEmail.create(data);
    return createCollectEmail;
};

exports.deleteCollectEmailService = async (id) => {
    const deleteCollectEmailService = await CollectEmail.deleteOne({ _id: id });
    return deleteCollectEmailService;
};

exports.updateCollectEmailService = async (id, data) => {
    const updateCollectEmailService = await CollectEmail.updateOne({ _id: id }, data);
    return updateCollectEmailService;
};

exports.getCollectEmailByIdService = async (id) => {
    const getCollectEmailByIdService = await CollectEmail.findOne({ _id: id });
    return getCollectEmailByIdService;
};
