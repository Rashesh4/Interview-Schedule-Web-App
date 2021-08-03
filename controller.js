
exports.getLoginPage = (req, res, next) => {
  const name = req.body.name
  console.log(req)
  return res.render('Login.ejs');
}