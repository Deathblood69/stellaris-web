import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {STRUCTURE} from '../constantes/constantes-structures'

// ====== METHODES UTILITAIRES ====== //

/**
 * Type des requêtes HTTP disponibles
 * @type {{DELETE: string, POST: string, GET: string, PUT: string}}
 */
export const TYPE_REQUEST = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

/**
 * Méthode générique permettant d'effectuer une requête
 * @param method
 * @param entity
 * @param data
 * @param pathParam
 * @returns {Promise<Response>}
 */
const generateRequest = ({
  method = TYPE_REQUEST.GET,
  entity = '',
  data,
  pathParam = '',
}) =>
  fetch(`/${entity}${pathParam}`, {
    method: method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

/**
 * Méthode générant les paramètres de la recherche
 * @param entity
 * @param keyword
 * @returns {string}
 */
const generateSearch = (entity, keyword) => {
  const structure = STRUCTURE[entity]
  let res = ''
  if (structure && keyword) {
    const params = Object.keys(structure).map(
      k => `{"${k}":{"$cont": "${keyword}"}}`,
    )
    res = `?s={"$or":[${params.join(',')}]}`
  }
  return res
}

// ====== CREATE ====== //

/**
 * Méthode générique permettant de créer une entité
 * @param entity
 * @param invalidates
 * @returns {UseMutationResult<Response, unknown, void, unknown>}
 */
export const useCreate = (entity, invalidates) => {
  const queryClient = useQueryClient()
  const createFunction = data =>
    generateRequest({method: TYPE_REQUEST.POST, entity: entity, data: data})
  return useMutation(createFunction, {
    onSuccess: () => queryClient.invalidateQueries([...invalidates]),
  })
}

// ====== READ ====== //

/**
 * Méthode générique permettant de rechercher une entité selon des critères
 * @param entity
 * @param recherche
 * @param invalidates
 * @returns {UseQueryResult<any, unknown>}
 */
export const useSearch = (entity, recherche, invalidates = [entity]) => {
  return useQuery([...invalidates], () =>
    generateRequest({
      method: TYPE_REQUEST.GET,
      entity: entity,
      pathParam: generateSearch(entity, recherche),
    }).then(res => res.json()),
  )
}

// ====== UPDATE ====== //

/**
 * Méthode générique permettant de mettre à jour une entité
 * @param entity
 * @param invalidates
 * @returns {UseMutationResult<Response, unknown, void, unknown>}
 */
export const useUpdate = (entity, invalidates = [entity]) => {
  const queryClient = useQueryClient()
  const createFunction = data =>
    generateRequest({
      method: TYPE_REQUEST.PUT,
      entity: entity,
      data: data,
      pathParam: `/${data.id}`,
    })
  return useMutation(createFunction, {
    onSuccess: () => queryClient.invalidateQueries(invalidates),
  })
}

// ====== DELETE ====== //

/**
 * Méthode générique permettant de supprimer une entité
 * @param entity
 * @param invalidate
 * @returns {UseMutationResult<Response, unknown, void, unknown>}
 */
export const useDelete = (entity, invalidate) => {
  const queryClient = useQueryClient()
  const deleteFunction = data =>
    generateRequest({
      method: TYPE_REQUEST.DELETE,
      entity: entity,
      data: data,
      pathParam: `/${data.id}`,
    })
  return useMutation(deleteFunction, {
    onSuccess: () => queryClient.invalidateQueries(invalidate),
  })
}
