import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Container } from './Container'
import { Button } from '../ui/Button'
import { AlertOctagon, RefreshCw } from 'lucide-react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught application error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0c] flex items-center justify-center p-6">
          <Container size="sm" className="space-y-6 text-center bg-white dark:bg-[#121216] p-8 sm:p-12 rounded-3xl shadow-xl border border-neutral-200 dark:border-[#22222a]">
            <div className="w-16 h-16 rounded-3xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto shadow-lg shadow-red-500/20">
              <AlertOctagon className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                System Malfunction
              </h2>
              <p className="text-sm text-neutral-500">
                A critical rendering fault occurred. Please reload the dashboard to reset the engine state.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-center">
              <Button 
                variant="primary" 
                onClick={() => window.location.replace('/')} 
                icon={<RefreshCw className="w-4 h-4" />}
              >
                Reboot Application
              </Button>
            </div>
          </Container>
        </div>
      )
    }

    return this.props.children
  }
}
