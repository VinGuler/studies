import EnemyShipFactory from './EnemyShipFactory'
import EnemyShip from './EnemyShip'
/**
 * Implementing the Factory pattern
 * a pattern where the creation of the object happens in a Factory function
 *
 * This allows the creation of different class (sub-classes of the same super-class)
 * during runtime
 */
function main() {
  const enemyRequested = 'UFO' // Or 'Rocket'
  const enemyFactory = new EnemyShipFactory()
  const enemyShip = enemyFactory.makeEnemyShip(enemyRequested)
  if (enemyShip) {
    doEnemyStuff(enemyShip)
  } else {
    console.log('No enemy ship found that fits the requested')
  }
}

function doEnemyStuff(enemy: EnemyShip) {
  enemy.displayShip()
  enemy.followHeroShip()
  enemy.shootHeroShip()
}

main()
