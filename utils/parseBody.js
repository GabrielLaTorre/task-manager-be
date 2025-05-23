export const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body)
                resolve(parsedBody)
            } catch (error) {
                reject(new Error('Failed to parse request body'))
            }
        })
    })
}