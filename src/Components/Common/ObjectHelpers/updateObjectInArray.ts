import {UserType, UserTypeKeys} from "../../../generalTypes";

type NewObjectPropType = {
    followed:boolean
}
export const updateObjectInArray = (items: Array<UserType>,itemsId: number,ObjectPropName: UserTypeKeys,newObjectProp: NewObjectPropType): Array<UserType> => {
    return items.map(u => {
            if (u[ObjectPropName] === itemsId) {
                return {...u, ...newObjectProp}
            }
            return u
        })
}