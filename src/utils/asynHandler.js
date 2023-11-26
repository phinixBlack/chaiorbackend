const asynHandler = (requestHandle) => {
    (req, res, next) => {
        Promise.resolve.catch((error) => next(error))
    }

}

export { asynHandler }