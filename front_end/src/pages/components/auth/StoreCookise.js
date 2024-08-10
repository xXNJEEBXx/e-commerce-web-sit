export default function StoreCookise(data) {
    localStorage.setItem('username', data.username)
    localStorage.setItem('email', data.email)
    localStorage.setItem('auth_token', data.token)
}
