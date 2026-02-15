import { useLoader } from "../context/LoaderContext"

const GlobalLoader = () => {
  const { loading } = useLoader()

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default GlobalLoader
