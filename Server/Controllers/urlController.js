import URL from "../Models/urlSchema.js";

export const shortenUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const baseUrl = "http://localhost:5173/";
    const randomChars = Math.random().toString(36).substring(2, 32);
    const shortenedUrl = baseUrl + randomChars;
    const urls = new URL({
      originalUrl: url,
      shortenedUrl,
    });
    await urls.save();
    res.status(201).json({
      message: "Successfully shortened.",
      shortenedUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUrl = async (req, res) => {
  try {
    const originalUrls = await URL.findOne({ shortenedUrl: req.query.id });
    if (originalUrls) {
      let redirectUrl = originalUrls.originalUrl;
      return res.status(200).json({ redirectUrl });
    }   
    return res.status(200).json({redirectUrl:null})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
