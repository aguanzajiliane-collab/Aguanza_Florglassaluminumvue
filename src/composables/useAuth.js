import {computed,ref} from 'vue'
import {KEYS,readStorage,writeStorage,removeStorage} from '../utils/storage'
const currentUser=ref(readStorage(KEYS.user,null))
export function useAuth(){
const user=computed(()=>currentUser.value),isAuthenticated=computed(()=>Boolean(currentUser.value))
function login(email,password){if(!email.trim()||!password.trim())return {ok:false,message:'Please enter both email and password.'};if(!email.includes('@')||password.length<4)return {ok:false,message:'Use a valid email and a password with at least 4 characters.'};const profile={name:email.split('@')[0].replace(/[._-]/g,' '),email};currentUser.value=profile;writeStorage(KEYS.user,profile);return {ok:true}}
function logout(){currentUser.value=null;removeStorage(KEYS.user)}
return {user,isAuthenticated,login,logout}
}
