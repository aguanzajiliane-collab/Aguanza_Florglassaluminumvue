export const KEYS={user:'florglass-user',cart:'florglass-cart',inquiries:'florglass-inquiries',managedProducts:'florglass-managed-products'}
export function readStorage(key,fallback){try{const value=localStorage.getItem(key);return value?JSON.parse(value):fallback}catch{return fallback}}
export function writeStorage(key,value){localStorage.setItem(key,JSON.stringify(value))}
export function removeStorage(key){localStorage.removeItem(key)}
export function isLoggedIn(){return Boolean(readStorage(KEYS.user,null))}
