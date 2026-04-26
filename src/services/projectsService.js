import api from './api'
import projectsData from '../data/projects.json'

const USE_API = !!import.meta.env.VITE_API_URL

export const getProjects = async () => {
  if (!USE_API) return projectsData          // 👈 datos locales por ahora
  const { data } = await api.get('/projects')
  return data
}