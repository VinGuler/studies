export default interface Observer {
  id: string
  update(ibmPrice: number, aaplPrice: number, googPrice: number): void
}
