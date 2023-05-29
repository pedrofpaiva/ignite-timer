import { Outlet } from 'react-router'

export const DefaultLayout = () => {
  return (
    <>
      <h1>CABEÇALHO</h1>
      <Outlet></Outlet>
    </>
  )
}
