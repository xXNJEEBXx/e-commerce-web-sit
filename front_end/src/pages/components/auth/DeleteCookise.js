export default function DeleteCookise(props) {
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    localStorage.removeItem('auth_token')
}
