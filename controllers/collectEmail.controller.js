const CollectEmail = require("../models/collectEmail.model");
const {
  createCollectEmailService,
  deleteCollectEmailService,
  updateCollectEmailService,
  getCollectEmailByIdService,
} = require("../services/collectEmail.service");

// Create Collect Email
exports.createCollectEmail = async (req, res) => {
  try {
    const newCollectEmail = await createCollectEmailService(req.body);

    res.status(201).json({
      status: "Success",
      message: "New email collected successfully!",
      data: newCollectEmail,
    });
  } catch (error) {
    console.error(error); // Log the detailed error during development
    res.status(400).json({
      status: "Fail",
      error: "Internal server error",
    });
  }
};

// Get Collect Emails
exports.getCollectEmails = async (req, res) => {
  try {
    const { page = 0, size = 10, ...filters } = req.query;
    const collectEmails = await CollectEmail.find(filters)
      .skip(page * size)
      .limit(size);

    const total = await CollectEmail.countDocuments(filters);

    res.status(200).json({
      status: "success",
      data: collectEmails,
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

// Delete Collect Email
exports.deleteCollectEmail = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedCollectEmail = await deleteCollectEmailService(id);

    res.status(200).json({
      status: "success",
      data: deletedCollectEmail,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      error: "Internal server error",
    });
  }
};

// Update Collect Email
exports.updateCollectEmail = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCollectEmail = await updateCollectEmailService(id, req.body);

    if (!updatedCollectEmail) {
      return res.status(404).json({
        status: "fail",
        message: "Collect Email not found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Collect Email updated successfully",
      data: updatedCollectEmail,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      error: "Internal server error",
    });
  }
};

// Get Collect Email by ID
exports.getCollectEmailById = async (req, res) => {
  const { id } = req.params;
  try {
    const collectEmailById = await getCollectEmailByIdService(id);

    res.status(200).json({
      status: "success",
      data: collectEmailById,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      error: "Internal server error",
    });
  }
};
