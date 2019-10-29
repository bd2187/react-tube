import jwtDecode from "jwt-decode";

/**
 * Decrypts JWT token
 * @param String token
 * @return Object
 */
export function decryptToken(token) {
    return jwtDecode(token);
}

/**
 * Saves JWT token to local storage
 * @param String token
 * @return
 */
export function saveTokenInLocalStorage(token) {
    // Save token in local storage
    localStorage.setItem("token", token);
}
