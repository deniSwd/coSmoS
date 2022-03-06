export type PostsType = {
    id: number
    message: string
    likeAmount: number
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos:  PhotosType,
    aboutMe: string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    name: string
    id: number
    photos: PhotosType
    status: string
    followed: boolean
}

export type UserTypeKeys = keyof UserType