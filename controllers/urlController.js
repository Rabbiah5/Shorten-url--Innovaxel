const { nanoid } = require('nanoid');
const URL = require('../models/url');

// CREATE
exports.createShortURL = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  let shortCode = nanoid(6); 
  let exists = await URL.findOne({ where: { shortCode } });
  while (exists) {
    shortCode = nanoid(6);
    exists = await URL.findOne({ where: { shortCode } });
  }

  try {
    const newUrl = await URL.create({ url, shortCode });
    res.status(201).json(newUrl);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// RETRIEVE
exports.getOriginalURL = async (req, res) => {
  const { code } = req.params;

  try {
    const found = await URL.findOne({ where: { shortCode: code } });
    if (!found) return res.status(404).json({ error: "Short URL not found" });

    found.accessCount += 1;
    await found.save();

    res.status(200).json(found);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateURL = async (req, res) => {
  const { code } = req.params;
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: "New URL is required" });

  try {
    const found = await URL.findOne({ where: { shortCode: code } });
    if (!found) return res.status(404).json({ error: "Short URL not found" });

    found.url = url;
    await found.save();

    res.status(200).json({ shortCode: code, updated: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteURL = async (req, res) => {
  const { code } = req.params;

  try {
    const deleted = await URL.destroy({ where: { shortCode: code } });
    if (deleted === 0) return res.status(404).json({ error: "Short URL not found" });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// STATS
exports.getStats = async (req, res) => {
  const { code } = req.params;

  try {
    const found = await URL.findOne({ where: { shortCode: code } });
    if (!found) return res.status(404).json({ error: "Short URL not found" });

    res.status(200).json(found);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
