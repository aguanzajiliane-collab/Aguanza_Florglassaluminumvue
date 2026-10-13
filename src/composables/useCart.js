import {computed,ref,watch} from 'vue'
import {KEYS,readStorage,writeStorage} from '../utils/storage'
const cartItems=ref(readStorage(KEYS.cart,[]))
watch(cartItems,items=>writeStorage(KEYS.cart,items),{deep:true})
export function useCart(){
const count=computed(()=>cartItems.value.reduce((sum,item)=>sum+item.quantity,0)),total=computed(()=>cartItems.value.reduce((sum,item)=>sum+item.price*item.quantity,0))
function add(product){const found=cartItems.value.find(item=>item.id===product.id);if(found)found.quantity++;else cartItems.value.push({id:product.id,name:product.name,price:product.price,image:product.image,quantity:1})}
function changeQuantity(id,amount){const item=cartItems.value.find(entry=>entry.id===id);if(!item)return;item.quantity+=amount;if(item.quantity<=0)cartItems.value=cartItems.value.filter(entry=>entry.id!==id)}
function remove(id){cartItems.value=cartItems.value.filter(item=>item.id!==id)}
function clear(){cartItems.value=[]}
return {items:cartItems,count,total,add,changeQuantity,remove,clear}
}
