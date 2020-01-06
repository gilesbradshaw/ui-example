export default (operation: number): string => {
  switch(operation) {
    case 1:
      return 'deleted'
    case 2:
      return 'inserted'
    case 3:
      return 'replaced'      
    case 4:
      return 'updated'
    default:
      return `unknown (${operation})`
  }
}
