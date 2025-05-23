import { 
  FileText, 
  Clock, 
  AlertTriangle,
  ChevronDown 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { StatCard } from "@/components/dashboard/stat-card";
import { ProfileCompletionCard } from "@/components/dashboard/profile-completion-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function DashboardPage() {
  return (
    <div className="flex flex-col p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground text-base md:text-lg">Here is an overview of your progress</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button className="bg-emerald-600 hover:bg-emerald-700">View Grants</Button>
          <Button variant="outline">Check Progress</Button>
        </div>
      </div>


      <ProfileCompletionCard />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Total Application" 
          value="36" 
          status="+3 this week" 
          trend="up"
          icon={<FileText className="h-5 w-5 text-emerald-600" />}
          iconBg="bg-emerald-50"
        />
        <StatCard 
          title="Active Applications" 
          value="04" 
          status="4 submitted this month" 
          trend="up"
          icon={<Clock className="h-5 w-5 text-emerald-600" />}
          iconBg="bg-emerald-50"
        />
        <StatCard 
          title="Missed" 
          value="02" 
          status="2 missed deadlines" 
          trend="down"
          icon={<AlertTriangle className="h-5 w-5 text-red-500" />}
          iconBg="bg-red-50"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Manage your grants</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Button variant="outline" size="sm" className="h-8">
              Most recent
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="rounded-md border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground w-[40px]">
                    <Checkbox />
                  </th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Grant Name</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Organization</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Amount</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">AI score</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Deadline</th>
                </tr>
              </thead>
              <tbody>
                {grants.map((grant, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4 align-middle">
                      <Checkbox />
                    </td>
                    <td className="p-4 align-middle font-medium">{grant.name}</td>
                    <td className="p-4 align-middle">{grant.organization}</td>
                    <td className="p-4 align-middle">{grant.amount}</td>
                    <td className="p-4 align-middle">
                      <StatusBadge status={grant.status} />
                    </td>
                    <td className="p-4 align-middle">{grant.aiScore}%</td>
                    <td className="p-4 align-middle">{grant.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: 'Won' | 'Missed' | 'Submitted' | 'Draft' }) {
  const getStatusStyles = () => {
    switch (status) {
      case 'Won':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Missed':
        return 'text-red-700 bg-red-50 border-red-200';
      case 'Submitted':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Draft':
        return 'text-gray-700 bg-gray-50 border-gray-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  return (
    <span className={cn(
      'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
      getStatusStyles()
    )}>
      <span className={cn(
        'mr-1 h-1.5 w-1.5 rounded-full',
        status === 'Won' ? 'bg-emerald-600' : 
        status === 'Missed' ? 'bg-red-600' : 
        status === 'Submitted' ? 'bg-amber-600' : 
        'bg-gray-600'
      )} />
      {status}
    </span>
  );
}

const grants = [
  {
    name: 'TOE Foundation Grant',
    organization: 'TOE Foundation',
    amount: '$5k',
    status: 'Won' as const,
    aiScore: 82,
    deadline: '12/10/2025',
  },
  {
    name: 'MTN Yellopreneur Grant',
    organization: 'MTN Foundation',
    amount: '₦3m',
    status: 'Missed' as const,
    aiScore: 55,
    deadline: '12/10/2025',
  },
  {
    name: 'PCGS Grant Program',
    organization: 'Federal Government',
    amount: '₦50k',
    status: 'Submitted' as const,
    aiScore: 78,
    deadline: '12/10/2025',
  },
  {
    name: 'YES Program',
    organization: 'Bank of Industry',
    amount: '₦5m',
    status: 'Draft' as const,
    aiScore: 45,
    deadline: '12/10/2025',
  },
  {
    name: 'Conditional Grant Scheme',
    organization: 'SMEDAN',
    amount: '₦50k',
    status: 'Won' as const,
    aiScore: 95,
    deadline: '12/10/2025',
  },
];