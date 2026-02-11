import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        {/*Header */}
        <Outlet />
      </main>

      {/* Footer */ }
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with ❤️ by <a href="https://github.com/Binamra-Sapkota" target="_blank" rel="noopener noreferrer">Binamra Sapkota</a>
      </div>
    </div>
  )
}

export default AppLayout