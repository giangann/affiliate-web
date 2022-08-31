export const getUserLocalStorage = () => JSON.parse(localStorage.getItem('userInfo'))
export const saveUserLocalStorage = (userObj) =>
  localStorage.setItem('userInfo', JSON.stringify(userObj))

export const clearUserLocalStorage = () => {
  localStorage.removeItem('userInfo')
}
