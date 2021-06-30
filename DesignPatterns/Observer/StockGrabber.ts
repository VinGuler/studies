import Observer from './Observer'
import Subject from './Subject'

export default class StockGrabber implements Subject {
  private observers: Map<string, Observer>
  private ibmPrice: number
  private aaplPrice: number
  private googPrice: number

  constructor() {
    this.observers = new Map()
    this.ibmPrice = 0
    this.aaplPrice = 0
    this.googPrice = 0
  }

  setIBMPrice(price: number) {
    this.ibmPrice = price
    this.notifyObserver()
  }
  setAAPLPrice(price: number) {
    this.aaplPrice = price
    this.notifyObserver()
  }
  setGOOGPrice(price: number) {
    this.googPrice = price
    this.notifyObserver()
  }

  register(observer: Observer): void {
    this.observers.set(observer.id, observer)
  }
  unregister(observer: Observer): void {
    console.log('deleting', this.observers.get(observer.id))
    this.observers.delete(observer.id)
  }
  notifyObserver(): void {
    this.observers.forEach((observer: Observer) => {
      observer.update(this.ibmPrice, this.aaplPrice, this.googPrice)
    })
  }
}
