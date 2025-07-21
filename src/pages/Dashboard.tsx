import { useAuth } from '@/hooks/useAuth'
import CustomerDashboard from '@/components/dashboards/CustomerDashboard'
import AdminDashboard from '@/components/dashboards/AdminDashboard'
import { Loader2 } from 'lucide-react'

const Dashboard = () => {
  const { profile, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p className="text-muted-foreground">You need to be logged in to access this page.</p>
        </div>
      </div>
    )
  }

  return profile.role === 'admin' ? <AdminDashboard /> : <CustomerDashboard />
}

export default Dashboard