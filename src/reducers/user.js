const initialState = {
    username: 'Davin'
}
const user = (state= initialState, action) => {
    //console.log(action)
    switch (action.type) {
        case 'CHANGE_USER_NAME':
        return {
            ...state,
            //返回了一个initialState的copy然后覆盖之，利用了closure，pure function不污染原来的state
            username: action.username
        }
        default: 
            return state;
    }
}
export default user;