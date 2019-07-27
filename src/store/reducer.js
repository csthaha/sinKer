const defaultState = {
    show: true,
    itemList: [
        // {
        //     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1816948731,4203604980&fm=26&gp=0.jpg',
        //     name: '帆布鞋',
        //     color: '白色',
        //     newPrice: '145.00',
        //     num: '1',
        //     oldPrice: '199.00',
        //     select: false
        // },
        
    ]
}

const reducer = (state = defaultState, action) => {
    if (action.type === 'CHANGE_CHOOSE_SHOW') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.show = false
        return newState
    }
    if (action.type === 'CHANGE_CHOOSE_HIDDEN') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.show = true
        return newState
    }
    if (action.type === 'ADD') {
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.show === true) {
            newState.show = false
            return newState
        } else {
            newState.show = true
            newState.itemList.push({
                imgUrl: action.imgUrl,
                name: action.name,
                color: action.color,
                newPrice: action.newPrice,
                num: action.num,
                oldPrice: action.oldPrice,
                select: action.select
            })
            return newState 
        }

    }
    if(action.type === 'SELECT') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.itemList[action.id].select = !newState.itemList[action.id].select
        return newState
    }
    if(action.type === 'SELECT_ALL') {
        let newState = JSON.parse(JSON.stringify(state))
        for(let i = 0; i < newState.itemList.length; i++) {
            newState.itemList[i].select = !newState.itemList[i].select
        }    
        return newState    
    }
    return state
}

export default reducer