const logRequest = (req,res,next) => {
    console.log('login on', req.path)
    next()
}

export default logRequest