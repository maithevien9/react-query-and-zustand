import apiRequest from 'configs/apiRequest'
import type { Repository } from 'shared/types/app'

export const getUsers = (username: string) => apiRequest.get<Repository[]>(`/users/${username}/repos`)
