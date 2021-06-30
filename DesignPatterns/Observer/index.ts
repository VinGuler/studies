import StockGrabber from './StockGrabber'
import StockObserver from './StockObserver'

function main() {
  const stockGrabber = new StockGrabber()

  const observer1 = new StockObserver('observer1', stockGrabber)

  stockGrabber.setIBMPrice(190)

  stockGrabber.unregister(observer1)

  stockGrabber.setAAPLPrice(195)
  stockGrabber.setGOOGPrice(196)
}

main()
