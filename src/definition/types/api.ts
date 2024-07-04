import { Member } from './members'

export interface APIMembers {
  members: Member[]
  length: number
  currentPage: number
  totalPage: number
}
