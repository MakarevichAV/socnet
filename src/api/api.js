import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "900f2572-ce22-41f0-8959-6ed6faf61976"
    }
});

export const userAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(res => res.data);
    },
    setFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data);
    },
    setUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(res => res.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

// export const loginAPI = {
//     login() {
//         return instance.post(`login`)
//     }
// }

