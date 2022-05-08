// action creator - retornar com type/payload
export function sum(a, b) {
  return {
    type: 'SUM',
    payload: [ a, b ],
  }
}
