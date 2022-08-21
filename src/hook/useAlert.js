import {useContext} from 'react'
import {AlertContext} from "../provider/AlertProvider";

/**
 * Hook permettant d'utiliser AlertProvider
 * @returns {*}
 */
export const useAlert = () => {
  return useContext(AlertContext)
}
