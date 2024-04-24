import { useEffect } from "react"
import { NavBar } from "../../components/navbars/NavBar"
import { useUserDetails, useChannels } from "../../shared/hooks"
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { Content } from "../../components/dashboard/Content"
import { Sidebar } from "../../components/navbars/SideBar"
import './dashboardPage.css'

export const DashboardPage = () => {
  const { getChannels, allChannels, isFectching, followedChannels} = useChannels()
  const { isLogged } = useUserDetails()

  useEffect(() => {
    getChannels(isLogged)
  }, [])

  if(isFectching){
    <LoadingSpinner/>
  }


  return (
    <div className="dashboard-container">
      <NavBar/>
      <Sidebar channels={followedChannels}/>
      <Content channels={allChannels || []} getChannels={getChannels}/>
    </div>
  )
}
