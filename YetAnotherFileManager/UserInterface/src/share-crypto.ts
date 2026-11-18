/**
 * The small amount of cryptography the share page needs on a plain HTTP LAN, where the browser's
 * WebCrypto API is not available (it only runs in a secure context). The password never leaves the
 * page: the browser derives PBKDF2-SHA256(salt, password) and proves it with an HMAC over a one-time
 * nonce.
 */

const K = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
]);

const Initial = new Uint32Array([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
]);

const rotate = (value: number, bits: number) => (value >>> bits) | (value << (32 - bits));

/** One 64-byte block through the compression function; the state is updated in place. */
function compress(state: Uint32Array, view: DataView, offset: number, words: Uint32Array) {
    for (let index = 0; index < 16; index++)
        words[index] = view.getUint32(offset + index * 4);

    for (let index = 16; index < 64; index++) {
        const s0 = rotate(words[index - 15], 7) ^ rotate(words[index - 15], 18) ^ (words[index - 15] >>> 3);
        const s1 = rotate(words[index - 2], 17) ^ rotate(words[index - 2], 19) ^ (words[index - 2] >>> 10);
        words[index] = (words[index - 16] + s0 + words[index - 7] + s1) >>> 0;
    }

    let [a, b, c, d, e, f, g, h] = state;

    for (let index = 0; index < 64; index++) {
        const s1 = rotate(e, 6) ^ rotate(e, 11) ^ rotate(e, 25);
        const choose = (e & f) ^ (~e & g);
        const temp1 = (h + s1 + choose + K[index] + words[index]) >>> 0;
        const s0 = rotate(a, 2) ^ rotate(a, 13) ^ rotate(a, 22);
        const majority = (a & b) ^ (a & c) ^ (b & c);
        const temp2 = (s0 + majority) >>> 0;

        h = g;
        g = f;
        f = e;
        e = (d + temp1) >>> 0;
        d = c;
        c = b;
        b = a;
        a = (temp1 + temp2) >>> 0;
    }

    state[0] = (state[0] + a) >>> 0;
    state[1] = (state[1] + b) >>> 0;
    state[2] = (state[2] + c) >>> 0;
    state[3] = (state[3] + d) >>> 0;
    state[4] = (state[4] + e) >>> 0;
    state[5] = (state[5] + f) >>> 0;
    state[6] = (state[6] + g) >>> 0;
    state[7] = (state[7] + h) >>> 0;
}

export function sha256(data: Uint8Array): Uint8Array {
    const bits = data.length * 8;
    const paddedLength = (((data.length + 9 + 63) >> 6) << 6);
    const padded = new Uint8Array(paddedLength);
    padded.set(data);
    padded[data.length] = 0x80;

    const view = new DataView(padded.buffer);
    view.setUint32(paddedLength - 8, Math.floor(bits / 0x100000000));
    view.setUint32(paddedLength - 4, bits >>> 0);

    const state = new Uint32Array(Initial);
    const words = new Uint32Array(64);

    for (let offset = 0; offset < paddedLength; offset += 64)
        compress(state, view, offset, words);

    const result = new Uint8Array(32);
    const resultView = new DataView(result.buffer);
    for (let index = 0; index < 8; index++)
        resultView.setUint32(index * 4, state[index]);

    return result;
}

function hmacSha256(key: Uint8Array, message: Uint8Array): Uint8Array {
    const block = new Uint8Array(64);
    block.set(key.length > 64 ? sha256(key) : key);

    const inner = new Uint8Array(64 + message.length);
    for (let index = 0; index < 64; index++)
        inner[index] = block[index] ^ 0x36;
    inner.set(message, 64);

    const outer = new Uint8Array(64 + 32);
    for (let index = 0; index < 64; index++)
        outer[index] = block[index] ^ 0x5c;
    outer.set(sha256(inner), 64);

    return sha256(outer);
}

/** HMAC-SHA256 with the key pads built once, for the thousands of calls PBKDF2 makes. */
function hmacFactory(key: Uint8Array) {
    const block = new Uint8Array(64);
    block.set(key.length > 64 ? sha256(key) : key);

    const inner = new Uint8Array(64);
    const outer = new Uint8Array(64);
    for (let index = 0; index < 64; index++) {
        inner[index] = block[index] ^ 0x36;
        outer[index] = block[index] ^ 0x5c;
    }

    return (data: Uint8Array): Uint8Array => {
        const content = new Uint8Array(64 + data.length);
        content.set(inner);
        content.set(data, 64);

        const digest = sha256(content);
        const closing = new Uint8Array(64 + 32);
        closing.set(outer);
        closing.set(digest, 64);

        return sha256(closing);
    };
}

/** PBKDF2-HMAC-SHA256, one block of output, which is what a 32-byte HMAC key needs. */
function pbkdf2(password: string, salt: Uint8Array, iterations: number): Uint8Array {
    const hmac = hmacFactory(new TextEncoder().encode(password));

    const first = new Uint8Array(salt.length + 4);
    first.set(salt);
    first[salt.length + 3] = 1;

    let block = hmac(first);
    const result = new Uint8Array(block);

    for (let index = 1; index < iterations; index++) {
        block = hmac(block);
        for (let byte = 0; byte < result.length; byte++)
            result[byte] ^= block[byte];
    }

    return result;
}

function fromBase64(text: string): Uint8Array {
    const binary = atob(text);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index++)
        bytes[index] = binary.charCodeAt(index);
    return bytes;
}

function toBase64(bytes: Uint8Array): string {
    let binary = "";
    for (const byte of bytes)
        binary += String.fromCharCode(byte);
    return btoa(binary);
}

/**
 * The proof a browser sends for a password:
 * HMAC-SHA256(PBKDF2-SHA256(salt, password, iterations), nonce). A password stored before the
 * stretching carries an iteration count of 0 and is proved with the single SHA-256 it was stored as.
 */
export function shareProof(password: string, saltBase64: string, nonceBase64: string,
                           iterations: number): string {
    const salt = fromBase64(saltBase64);
    let key: Uint8Array;

    if (iterations > 0)
        key = pbkdf2(password, salt, iterations);
    else {
        const passwordBytes = new TextEncoder().encode(password);
        const combined = new Uint8Array(salt.length + passwordBytes.length);
        combined.set(salt);
        combined.set(passwordBytes, salt.length);
        key = sha256(combined);
    }

    return toBase64(hmacSha256(key, fromBase64(nonceBase64)));
}
