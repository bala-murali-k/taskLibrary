// Required imports
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './components/page.notfound.component'
import MainLayout from './layouts/main.layout.component.tsx'
import ThemeContextComponent from './context/theme/theme.context.component.tsx'

// Components imports
import ItemsIndex from './pages/items/items.index' 

function App() {

	return (
		<Routes>
			<Route
				element={
					<ThemeContextComponent>
						<MainLayout />
					</ThemeContextComponent>
				}
			>
				<Route path="" element={ <ItemsIndex /> } />
				<Route path="about" element={ <>This is the about page of the application</> } />
				<Route path="list" element={ <>This is the list page of the application</> } />
				<Route path="*" element={ <PageNotFound /> } />
			</Route>
		</Routes>
	)
}

export default App
