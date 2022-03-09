import classes from './App.module.css'
import Body from './components/body/Body'
import Head from './components/head/Head'
import Summary from './components/summary/Summary'
import { DataProvider } from './contexts/DataProvider'
function App() {
  return (
    <div className={classes.app}>
      <DataProvider>
        <Head />
        <Body />
        <Summary />
      </DataProvider>
    </div>
  )
}

export default App
