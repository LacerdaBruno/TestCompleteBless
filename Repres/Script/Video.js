function gravar()
{
  VideoRecorder.Start("High");
}

function parar()
{
  VideoRecorder.Stop();
}
module.exports.gravar = gravar;
module.exports.parar = parar;