import Observer from './Observer'

export default interface Subject {
  register(observer: Observer): void
  unregister(observer: Observer): void
  notifyObserver(): void
}
