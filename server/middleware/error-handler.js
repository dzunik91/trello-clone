module.exports = {
  showErrorMessage: showErrorMessage
}

function showErrorMessage (err, req, res, next) {
  res.status(422).send({ error: err.message })
}
