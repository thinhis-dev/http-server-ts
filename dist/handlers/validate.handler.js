import { respondWithError, respondWithJSON } from '../utils/response.js';
import { clearProfaneString } from '../utils/cleanString.js';
export async function handlerChirpsValidate(req, res) {
    const params = req.body;
    const maxChirpLength = 140;
    if (params.body.length > maxChirpLength) {
        respondWithError(res, 400, 'Chirp is too long');
        return;
    }
    respondWithJSON(res, 200, {
        cleanedBody: clearProfaneString(params.body),
    });
}
