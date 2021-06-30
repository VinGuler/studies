import Observer from './Observer'
import Subject from './Subject'

export default class StockObserver implements Observer {
  id: string

  private ibmPrice: number
  private aaplPrice: number
  private googPrice: number

  private stockGrabber: Subject

  constructor(id: string, stockGrabber: Subject) {
    this.id = id
    this.stockGrabber = stockGrabber

    console.log('New Observer', this.id)

    this.stockGrabber.register(this)
  }

  update(ibmPrice: number, aaplPrice: number, googPrice: number): void {
    this.ibmPrice = ibmPrice
    this.aaplPrice = aaplPrice
    this.googPrice = googPrice

    console.log('Observer', this.id)
    console.log('ibmPrice', this.ibmPrice)
    console.log('aaplPrice', this.aaplPrice)
    console.log('googPrice', this.googPrice)
  }
}
