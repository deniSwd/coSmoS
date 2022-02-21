export const updateObjectInArray = (items,itemsId,ObjectPropName,newObjectProp) => {
    return items.map(u => {
            if (u[ObjectPropName] === itemsId) {
                return {...u, ...newObjectProp}
            }
            return u
        })
}