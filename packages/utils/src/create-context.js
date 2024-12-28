"use client";
import {
  createContext as createReactContext,
  useContext as useReactContext,
} from "react";

function getErrorMessage(hook, provider) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}

export function createContext(options = {}) {
  const {
    name,
    strict = true,
    hookName = "useContext",
    providerName = "Provider",
    errorMessage,
    defaultValue,
  } = options;

  const Context = createReactContext(defaultValue);

  Context.displayName = name;

  function useContext() {
    const context = useReactContext(Context);

    if (!context && strict) {
      const error = new Error(
        errorMessage ?? getErrorMessage(hookName, providerName),
      );
      error.name = "ContextError";
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context];
}
