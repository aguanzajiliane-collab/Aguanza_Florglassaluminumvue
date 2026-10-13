import {formatPrice} from '../data/products'
export const formatMixin={methods:{formatPrice,capitalize(value){return value?value.charAt(0).toUpperCase()+value.slice(1):''}}}
