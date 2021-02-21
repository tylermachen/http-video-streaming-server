/**
 * Extracts byte range from range header.
 * Example: Range: bytes=200-1000 => {start: 200, end: 1000}
 *
 * @param {number} chunkSize Size of video chunks to be streamed to the client.
 * @param {string} header Range header.
 * @param {number} videoSize Size of the video file in bytes.
 * @returns {Object}
 */
export function extractRangeFromHeader(header, chunkSize, videoSize) {
    const start = Number(header.replace(/\D/g, ''));
    const end = Math.min(start + chunkSize, videoSize - 1);

    return {start, end};
}
