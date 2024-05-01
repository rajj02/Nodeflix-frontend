import React from 'react'
import axios from 'axios'
import { loginUserUrl, registerUserUrl } from '../constants/constant.js'

export class AuthService{

  constructor(){

  }

  async registerUser(userData)
  {
    try{
      const formData = new FormData();
      formData.append('username', userData.username);
      formData.append('email', userData.email);
      formData.append('password', userData.password);
      formData.append('fullName', userData.fullName);
      formData.append('avatar', userData.avatar); 
      formData.append('coverImage', userData.coverImage); 

      const response = await fetch(registerUserUrl, {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const userRegistered = await response.json();
        return response;
    }
    else if(response.status === 409){
      console.log("user registered already");
      return response;
    }
    }catch(err){
       throw err;
    }
  }

  async loginUser(userData)
  {
    try{
      const response = await fetch(loginUserUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (response.ok) {
        const userLoggedIn = await response.json();
        return userLoggedIn;
    }
    }catch(err){
       throw err;
    }
  }
}


const authService = new AuthService();


export default authService;
