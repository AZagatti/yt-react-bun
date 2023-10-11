/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { createRoot } from "react-dom/client"

const Component = ({ message }: { message: string }) => {
  return <h1>Hello {message}</h1>
}

const root = createRoot(document.getElementById('root')!)
root.render(<Component message="World!" />)