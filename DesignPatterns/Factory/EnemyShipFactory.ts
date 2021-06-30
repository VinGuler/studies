import EnemyShip from './EnemyShip'
import RocketEnemyShip from './RocketEnemyShip'
import UFOEnemyShip from './UFOEnemyShip'

export default class EnemyShipFactory {
  makeEnemyShip(enemyType: string): EnemyShip | null {
    let newShip: EnemyShip | null
    if (enemyType === 'UFO') {
      newShip = new UFOEnemyShip()
    } else if (enemyType === 'Rocket') {
      newShip = new RocketEnemyShip()
    }
    return newShip
  }
}
