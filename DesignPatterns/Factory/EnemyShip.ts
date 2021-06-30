export default abstract class EnemyShip {
  private name: string
  private damage: number

  getName (): string {
    return this.name
  }
  setName(name: string): void {
    this.name = name
  }
  getDamage (): number {
    return this.damage
  }
  setDamage(damage: number): void {
    this.damage = damage
  }

  followHeroShip(): void {
    console.log(this.name, 'is following the hero ship')
  }
  displayShip(): void {
    console.log(this.name, 'is being display')
  }
  shootHeroShip(): void {
    console.log(this.name, 'attacks and does', this.damage)
  }
} 