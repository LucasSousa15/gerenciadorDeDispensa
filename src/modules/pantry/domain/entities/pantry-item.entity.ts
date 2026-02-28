export interface PantryItemProps {
  id: string
  householdId: string
  categoryId: string
  name: string
  quantity: number
  createdAt: Date
  updatedAt: Date
}

export class PantryItem {
  private _id: string
  private props: PantryItemProps

  private constructor(props: PantryItemProps, id?: string) {
    this._id = id ?? props.id
    this.props = props
  }

  public static create(
    props: Omit<PantryItemProps, 'createdAt' | 'updatedAt'> & {
      createdAt?: Date
      updatedAt?: Date
    },
    id?: string,
  ): PantryItem {
    return new PantryItem(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id,
    )
  }

  public updateQuantity(quantity: number) {
    this.props.quantity = quantity
    this.props.updatedAt = new Date()
  }

  get id(): string {
    return this._id
  }

  get householdId(): string {
    return this.props.householdId
  }

  get categoryId(): string {
    return this.props.categoryId
  }

  get name(): string {
    return this.props.name
  }

  get quantity(): number {
    return this.props.quantity
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date {
    return this.props.updatedAt
  }
}