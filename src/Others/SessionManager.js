const SESSION = "SESSION";

export class SessionManager {
    static saveAccessToken(jsonData) {
        localStorage.setItem(SESSION, JSON.stringify(jsonData))
    }

    static getAccessToken() {
        return JSON.parse(localStorage.getItem(SESSION))?.access_token;
    }

    static getUserName() {
        return JSON.parse(localStorage.getItem(SESSION))?.user.name;
    }
    static getUserId() {
        return JSON.parse(localStorage.getItem(SESSION))?.user._id;
    }
    static getUserPicture() {
        return JSON.parse(localStorage.getItem(SESSION))?.user.picture;
    }
}