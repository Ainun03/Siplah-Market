
import axios from 'axios'
const API_URL = 'http://localhost:8081'

const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData,
   
      {
        headers: {
          accept: "*/*",
          'Content-Type': 'application/json',
        },
      }
    )
    // const resJson=await response.json()
    // console.log(response)
  
    if (response) {
      localStorage.setItem('user', JSON.stringify(response))
    }
  
    return response
  }
  // `${API_URL}/api/json/v1/1/search.php?f=b`

const login = async (userData) => {
    const response = await axios.post(`${API_URL}/api/login`, userData)
    
    if (response) {

      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }



  const authService = {
    register,
    login,
  }
  
  export default authService