import axios from './defaultClient';

const nameSpace = 'ep/v1/order';

export const OrderMakeOrder = async (args) => {
    return await axios.post( nameSpace + '/', {  // post - 
        product_ID: args.product_ID,
        shipping_name: args.shipping_name,
        shipping_phone: args.shipping_phone,
        funeral_ID: args.funeral_ID,
        funeral_home: args.funeral_home,
        obituary_ID: args.obituary_ID, // 선택옵션
        billing_name: args.billing_name,
        billing_phone: args.billing_phone,
        ribbon_color: args.ribbon_color,
        ribbon_name: args.ribbon_name,
        ribbon_memo: args.ribbon_memo,
        payment_method: args.payment_method,
        product_option_1: args.product_option_1,
        product_option_1_price: args.product_option_1_price,
        product_option_2: args.product_option_2,
        product_option_2_price: args.product_option_2_price,
    })
}

export const OrderGetOrder = async (args) => {
    return await axios.get( nameSpace + '/' + args.order_ID, {})
}

export const OrderGetOrders = async (args) => {
    return await axios.get( nameSpace + '/my/', { // get - 주문 리스트
        params:{
            type: args.type
        }
    })
}

export const OrderCancelOrder = async (args) => {

}

export const OrderPaymentCallback = async (args) => {
    return await axios.post ( nameSpace + '/payment_callback', { // 결재 콜백 
        imp_uid: args.imp_uid,
        merchant_uid: args.merchant_uid
    })
}

export const OrderPaymentComplete = async (args) => {
    
}

export const OrderUpdate = async (args) => {
    return await axios.patch ( nameSpace + '/' + args.order_ID, {
        shipping_name: args.shipping_name,
        shipping_phone: args.shipping_phone,
        funeral_home: args.funeral_home,
        ribbon_name: args.ribbon_name,
        ribbon_memo: args.ribbon_memo,
        ribbon_color: args.ribbon_color
    })
}