export const badRequest = (body) => ({
    statusCode: 400,
    body,
})

export const created = (body) => ({
    statusCode: 201,
    body,
})

export const forbidden = (body) => ({
    statusCode: 403,
    body,
})

export const conflict = (body) => ({
    statusCode: 409,
    body,
})

export const serverError = () => ({
    statusCode: 500,
    body: {
        message: 'Internal server error',
    },
})

export const ok = (body) => ({
    statusCode: 200,
    body,
})

export const notFound = (body) => ({
    statusCode: 404,
    body,
})
