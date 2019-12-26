const initialState = {
    name: '',
    price: 0,
    tag: ''
}
export const actionTypes = {
    UPDATING_NAME: 'UPDATING_NAME',
    UPDATING_PRICE: 'UPDATING_PRICE',
    UPDATING_TAG: 'UPDATING_TAG',
    SAVE_PRICEDATA: 'SAVE_PRICEDATA',
}
export const actions = {
    update_name: function(name) {
        return {
            type: actionTypes.UPDATING_NAME, name
        }
    },
    update_price: function(price) {
        return {
            type: actionTypes.UPDATING_PRICE, price
        }
    },
    update_tag: function(tag) {
        return {
            type: actionTypes.UPDATING_TAG, tag
        }
    },
    save_priceData: function(data) {
        return {
            type: actionTypes.SAVE_PRICEDATA, data
        }
    }
}
export function shopData(state=initialState, action) {
    switch(action.type) {
        case actionTypes.UPDATING_NAME:
            return {
                ...state, name:action.name
            };
        case actionTypes.UPDATING_PRICE:
            return {
                ...state, price:action.price
            };
        case actionTypes.UPDATING_TAG:
            return {
                ...state, tag:action.tag
            }    
        default: 
           return state;        
    }
}