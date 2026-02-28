import { PantryItem } from '../entities/pantry-item.entity'

export abstract class PantryRepository {
  abstract create(item: PantryItem): Promise<PantryItem>

  abstract save(item: PantryItem): Promise<PantryItem>

  abstract findMany(items: PantryItem[]): Promise<PantryItem[]> 

  abstract findById(id: string): Promise<PantryItem | null>

  abstract findManyByHouseholdId(
    householdId: string,
  ): Promise<PantryItem[]>

  abstract delete(id: string): Promise<void>
}