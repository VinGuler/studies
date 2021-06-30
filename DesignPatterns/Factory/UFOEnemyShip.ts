import EnemyShip from './EnemyShip'

export default class UFOEnemyShip extends EnemyShip {
  constructor() {
    super()
    this.setName('UFO - Ship')
    this.setDamage(20)
  }
}
