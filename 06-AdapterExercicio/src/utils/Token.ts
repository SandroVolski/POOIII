export default class Token {
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InRva2VuX2VudHJlZ2EifQ.9sYqL1Gn_PSpo6tKAC93ouKMHpbnRvcoHtoNuCzctzY";

    public get token() {
        return this._token;
    }
    public set token(value) {
        this._token = value;
    }
}