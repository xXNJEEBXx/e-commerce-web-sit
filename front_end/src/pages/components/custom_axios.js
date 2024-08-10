import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default async function custom_axios(req) {
    if (!req.type) {
        req.type = "get"
    }
    if (req.ContentType) {
        axios.defaults.headers[req.type]['Content-Type'] = req.ContentType
    }
    // const history = useNavigate()
    const token = localStorage.getItem('auth_token');
    axios.defaults.headers[req.type]['Authorization'] = "Bearer " + token
    const res = await axios[req.type](req.url, req.data).catch(err => {
        console.log(err)
        return err
    })
    return res
}
