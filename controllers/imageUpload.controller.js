exports.fileUpload = async (req, res) => {
  try {
    res.json({
      status: "success",
      url: `${process.env.multer_url}/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: "An error occurred during file upload." });
  }
};

exports.multiFileUploads = async (req, res) => {
  try {
    const imageUrls = req.files.map((img) => `${process.env.multer_url}/${img.filename}`);
    res.status(200).json({
      status: "success",
      imageURLs: imageUrls,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: "An error occurred during file upload." });
  }
};
