import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "c0d23f1d-fa0d-45e5-9de0-8d64b7d22b01"
    }
})

export const userAPI = {
    getUsers (currentPage,pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId) {
       return instance.get(`profile/` + userId)
    }
}

export const myAuthAPI = {
    getMe ()  {
        return instance.get(`auth/me`).then(response => response.data)
    }
}
