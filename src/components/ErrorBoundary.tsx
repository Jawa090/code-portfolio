import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Portfolio Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-full vscode-bg">
          <div className="text-center p-6">
            <div className="text-2xl mb-4">⚠️</div>
            <h2 className="text-vscode-text font-semibold mb-2">Something went wrong</h2>
            <p className="text-vscode-text-muted mb-4">Don't worry, it's not you - it's me!</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-vscode-accent text-white rounded hover:bg-vscode-accent/80 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 