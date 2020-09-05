const defaultAccout = {
    acountList: [
        {
            phoneNumber: '1',
            password: '1',
            name: 'csthh',
            avatarUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.iv-3Q8v9lR4Fo5Qq8q4TvAHaLH&w=120&h=160&c=8&rs=1&qlt=90&pid=3.1&rm=2',
            address: [
                {
                    'user': 'cst',
                    'phone': '1',
                    'where': '江西省高安市',
                    'detailAddress': '希岭',
                    'getTime': '2018/6/16'
                }
            ]
        }
    ]
}

const reducer = (state = defaultAccout, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    console.log(state, newState, action);
    if (action.type === 'addAcount') {
        newState.acountList.push({
            phoneNumber: action.phoneNumber,
            password: action.password
        })
        return newState;
    }
    if (action.type === 'NEWADDRESS') {
        console.log('添加新地址', action);
        let address = action.where.join(' ');
        newState.acountList[0].address.push({
            user: action.user,
            phone: action.phone,
            where: action.where,
            detailAddress: action.detailAddress,
            getTime: action.getTime
        })
        return newState
    }
    if(action.type === 'DELADDRESS') {
        // console.log(action.id)
        console.log(newState.acountList[0].address)
        newState.acountList[0].address.splice(action.id, action.id)
        console.log(newState.acountList[0].address)

        return newState
    }
    return state

}

export default reducer