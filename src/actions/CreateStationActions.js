import { createStation as t } from './Types'

export function titleChanged(title) {
  return {
    type: t.TITLE_CHANGED,
    payload: title,
  }
}

export function stationCreated() {
  return {
    type: t.STATION_CREATED,
  }
}
