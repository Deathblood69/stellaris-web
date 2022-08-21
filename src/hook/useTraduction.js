import {useTranslation} from 'react-i18next'

/**
 * Hook contenant une liste d'outils pour la traduction de l'application
 * @returns {{t: TFunction<"translation", undefined>, isFrench: boolean, toggleLanguage: toggleLanguage}}
 */
export const useTraduction = () => {
  // ====== PARAMETRAGE ====== //

  const {t, i18n} = useTranslation()

  // ====== VARIABLES ====== //

  const isFrench = i18n.language === 'fr'

  // ====== METHODE ====== //

  const toggleLanguage = () => {
    i18n.changeLanguage(isFrench ? 'en' : 'fr')
  }

  // ====== AFFICHAGE ====== //

  return {t, isFrench, toggleLanguage}
}
