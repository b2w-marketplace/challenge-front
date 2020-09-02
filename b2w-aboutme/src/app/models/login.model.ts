export interface LoginModel {
    md5?: string;
    password?: string;
    salt?: string;
    sha1?: string;
    sha256?: string;
    username: string;
    uuid?: string;
}