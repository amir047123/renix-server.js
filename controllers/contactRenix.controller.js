const ContactRenix = require("../models/contactRenix.model");
const {
  createContactRenixService,
  deleteContactRenixService,
  updateContactRenixService,
  getContactRenixByIdService,
} = require("../services/contactRenix.service");

// Create Contact Renix
exports.createContactRenix = async (req, res) => {
  try {
    const newContactRenix = await createContactRenixService(req.body);

    res.status(201).json({
      status: "Success",
      message: "New contact created successfully!",
      data: newContactRenix,
    });
  } catch (error) {
    console.error(error); // Log the detailed error during development
    res.status(400).json({
      status: "Fail",
      error: "Internal server error",
    });
  }
};

// Get Contact Renix
exports.getContactRenixes = async (req, res) => {
  try {
    const { page = 0, size = 10, ...filters } = req.query;
    const contactRenixes = await ContactRenix.find(filters)
      .skip(page * size)
      .limit(size);

    const total = await ContactRenix.countDocuments(filters);

    res.status(200).json({
      status: "success",
      data: contactRenixes,
      total: total,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      error: "Internal server error",
    });
  }
};

// Delete Contact Renix
exports.deleteContactRenix = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedContactRenix = await deleteContactRenixService(id);

    res.status(200).json({
      status: "success",
      data: deletedContactRenix,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      error: "Internal server error",
    });
  }
};

// Update Contact Renix
exports.updateContactRenix = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedContactRenix = await updateContactRenixService(id, req.body);

    if (!updatedContactRenix) {
      return res.status(404).json({
        status: "fail",
        message: "Contact Renix not found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Contact Renix updated successfully",
      data: updatedContactRenix,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      error: "Internal server error",
    });
  }
};

// Get Contact Renix by ID
exports.getContactRenixById = async (req, res) => {
  const { id } = req.params;
  try {
    const contactRenixById = await getContactRenixByIdService(id);

    res.status(200).json({
      status: "success",
      data: contactRenixById,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      error: "Internal server error",
    });
  }
};
