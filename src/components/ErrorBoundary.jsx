import { Component } from 'react'

/**
 * Without this a render error just unmounts the tree and leaves a black page,
 * which is indistinguishable from a styling bug. Show the message instead.
 */
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children

    return (
      <div className="flex min-h-screen items-center justify-center p-8">
        <div className="w-full max-w-2xl border border-red-500/40 bg-ink-soft p-8">
          <h1 className="text-2xl font-medium text-red-400">Something broke while rendering</h1>
          <pre className="mt-5 overflow-x-auto border-l-2 border-red-500/50 pl-4 text-sm whitespace-pre-wrap text-white/70">
            {error.message}
          </pre>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-7 bg-gold px-6 py-3 text-xs font-medium tracking-[0.2em] text-on-gold uppercase"
          >
            Reload
          </button>
        </div>
      </div>
    )
  }
}
