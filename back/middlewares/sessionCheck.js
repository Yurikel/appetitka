function sessionCheck(req,res,next) {
  if(!req.session.user){
    return res.status(403).json({message: "Незарегистрированный пользователь!"})
  }
  next()
}

module.exports = sessionCheck
