let desc = "";

module.exports = {
  landing: async (req, res, next) => {
    res.render("index", { description: desc });
  },
  getDesc: async (req, res, next) => {
    res.status(200).json({ desc });
  },
  sendDesc: async (req, res, next) => {
    if (!req.body) {
      return res.status(404).json({ message: "No Body Found" });
    }
    const { description } = req.body;
    console.log(req);
    desc = description;
    res.redirect("/");
  },
};
