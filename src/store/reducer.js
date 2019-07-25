const defaultState = {
    show: true,
    itemList: [
        {
            imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1816948731,4203604980&fm=26&gp=0.jpg',
            name: '帆布鞋',
            color: '白色',
            newPrice: '145.00',
            num: '1',
            oldPrice: '199.00'
        },
        {
            imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1816948731,4203604980&fm=26&gp=0.jpg',
            name: '帆布鞋',
            color: '白色',
            newPrice: '145.00',
            num: '1',
            oldPrice: '199.00'
        }
    ]
}

const reducer = (state = defaultState, action) => {
    if (action.type === 'CHANGE_CHOOSE_SHOW') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.show = false
        return newState
    }
    if( action.type === 'CHANGE_CHOOSE_HIDDEN') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.show = true
        return newState
    }
    return state
}

export default reducer