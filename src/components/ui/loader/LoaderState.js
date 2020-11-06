import { BehaviorSubject } from 'rxjs'

class LoaderState {
  state$ = new BehaviorSubject(false)

  show() {
    this.state$.next(true)
  }

  hide() {
    this.state$.next(false)
  }
}

export const Loader = new LoaderState()
