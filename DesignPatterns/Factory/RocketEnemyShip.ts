import EnemyShip from './EnemyShip'

export default class RocketEnemyShip extends EnemyShip {
  constructor() {
    super()
    this.setName('Rocket - Ship')
    this.setDamage(10)
  }
}
